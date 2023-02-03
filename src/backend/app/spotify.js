/**
 * Module containing functions to conduct Spotify app functionality
 * @module spotify
 */

import ObjectID from 'bson-objectid';
import { getLimitOffsetItems } from '../spotify/spotify';
import { getUser } from '../user/user';
import {
  createUsersSpotifyAlbums,
  patchUsersSpotifyAlbums,
} from '../users_spotify_albums/users_spotify_albums';
import {
  formatAlbum,
} from './spotify-helpers';

const syncAlbums = async (uid, accessToken) => {
  const [items, user] = await Promise.all([
    getLimitOffsetItems('albums', accessToken),
    getUser(uid, ['spotify_albums']),
  ]);

  const itemsForDb = items.map((item) => formatAlbum(item));
  const userSpotifyAlbums = user.spotify_albums;
  let spotifyAlbumsId;
  const promises = [];
  if (userSpotifyAlbums.last_updated === (new Date(0).toISOString())) {
    spotifyAlbumsId = ObjectID();
    await createUsersSpotifyAlbums(spotifyAlbumsId);
    // promises.push PATCH users/uid/
    //   spotify_albums.items_id
    //   spotify_albums.last_updated
  } else {
    spotifyAlbumsId = userSpotifyAlbums.items_id;
    // promises.push PATCH users/uid/
    //   spotify_albums.last_updated
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
