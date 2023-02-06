/**
 * Module containing functions to conduct Spotify app functionality
 * @module spotify
 */

import ObjectID from 'bson-objectid';
import {
  getLimitCursorItems,
  getLimitOffsetItems,
} from '../spotify/spotify';
import {
  getUser,
  patchUser,
} from '../user/user';
import {
  createUsersSpotifyAlbums,
  patchUsersSpotifyAlbums,
} from '../users_spotify_albums/users_spotify_albums';
import {
  createUsersSpotifyArtists,
  patchUsersSpotifyArtists,
} from '../users_spotify_artists/users_spotify_artists';
import {
  createUsersSpotifyPlaylists,
  patchUsersSpotifyPlaylists,
} from '../users_spotify_playlists/users_spotify_playlists';
import {
  formatAlbums,
  formatArtists,
  formatPlaylist,
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
  const itemsForDb = formatAlbums(albumsListItems);
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

/**
 * Sync users spotify playlists to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 */
const syncPlaylists = async (uid, accessToken) => {
  const [playlistsListItems, userRes] = await Promise.all([
    getLimitOffsetItems('playlists', accessToken),
    getUser(uid, ['spotify_playlists']),
  ]);

  const user = userRes.data;
  const itemsForDb = playlistsListItems.map((playlistListItem) => formatPlaylist(playlistListItem));
  const userSpotifyPlaylists = user.spotify_playlists;
  let spotifyPlaylistsId;
  const promises = [];
  if (userSpotifyPlaylists.last_updated === (new Date(0).toISOString())) {
    spotifyPlaylistsId = ObjectID();
    await createUsersSpotifyPlaylists(spotifyPlaylistsId);
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: '/spotify_playlists/items_id',
          value: spotifyPlaylistsId.toHexString(),
        },
        {
          op: 'replace',
          path: '/spotify_playlists/last_updated',
          value: (new Date()).toISOString(),
        },
      ],
    ));
  } else {
    spotifyPlaylistsId = userSpotifyPlaylists.items_id;
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: '/spotify_playlists/last_updated',
          value: (new Date()).toISOString(),
        },
      ],
    ));
  }
  promises.push(patchUsersSpotifyPlaylists(
    spotifyPlaylistsId,
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

/**
 * Sync users Spotify artists to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>} Promise of a successful operation
 */
const syncArtists = async (uid, accessToken) => {
  const [artistsItems, userRes] = await Promise.all([
    getLimitCursorItems('artists', accessToken),
    getUser(uid, ['spotify_artists']),
  ]);

  const user = userRes.data;
  const itemsForDb = formatArtists(artistsItems);
  const userSpotifyArtists = user.spotify_artists;
  let spotifyArtistsId;
  const promises = [];
  if (userSpotifyArtists.last_updated === (new Date(0).toISOString())) {
    spotifyArtistsId = ObjectID();
    await createUsersSpotifyArtists(spotifyArtistsId);
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: '/spotify_artists/items_id',
          value: spotifyArtistsId.toHexString(),
        },
        {
          op: 'replace',
          path: '/spotify_artists/last_updated',
          value: (new Date()).toISOString(),
        },
      ],
    ));
  } else {
    spotifyArtistsId = userSpotifyArtists.items_id;
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: '/spotify_artists/last_updated',
          value: (new Date()).toISOString(),
        },
      ],
    ));
  }

  promises.push(patchUsersSpotifyArtists(
    spotifyArtistsId,
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

/**
 * Sync the users Spotify library (albums,artists,playlists) to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>[]} Array of successful operations
 */
const syncLibrary = async (uid, accessToken) => Promise.all([
  syncAlbums(uid, accessToken),
  syncArtists(uid, accessToken),
  syncPlaylists(uid, accessToken),
]);

export {
  syncAlbums,
  syncPlaylists,
  syncArtists,
  syncLibrary,
};
