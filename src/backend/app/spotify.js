/**
 * Module containing functions to conduct Spotify app functionality
 * @module spotify
 */

import ObjectID from 'bson-objectid';
import { getLimitOffsetItems } from '../spotify/spotify';
import { getUser, patchUser } from '../user/user';
import {
  createUsersSpotifyAlbums,
  patchUsersSpotifyAlbums,
} from '../users_spotify_albums/users_spotify_albums';
import {
  formatAlbum,
} from './spotify-helpers';

/**
 * Sync users spotify albums to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>} Promise of a successful operation
 */
const syncAlbums = async (uid, accessToken) => {
  const [albumsListItems, userRes] = await Promise.all([
    getLimitOffsetItems('albums', accessToken),
    getUser(uid, ['spotify_albums']),
  ]);

  const user = userRes.data;
  const itemsForDb = albumsListItems.map((albumsListItem) => formatAlbum(albumsListItem.album));
  const userSpotifyAlbums = user.spotify_albums;
  let spotifyAlbumsId;
  const promises = [];
  if (userSpotifyAlbums.last_updated === (new Date(0).toISOString())) {
    spotifyAlbumsId = ObjectID();
    await createUsersSpotifyAlbums(spotifyAlbumsId);
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: '/spotify_albums/items_id',
          value: spotifyAlbumsId.toHexString(),
        },
        {
          op: 'replace',
          path: '/spotify_albums/last_updated',
          value: (new Date()).toISOString(),
        },
      ],
    ));
  } else {
    spotifyAlbumsId = userSpotifyAlbums.items_id;
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: '/spotify_albums/last_updated',
          value: (new Date()).toISOString(),
        },
      ],
    ));
  }
  promises.push(patchUsersSpotifyAlbums(
    spotifyAlbumsId,
    [
      {
        op: 'replace',
        path: '/items',
        value: itemsForDb,
      },
    ],
  ));

  await Promise.all(promises);
};

export default syncAlbums;
