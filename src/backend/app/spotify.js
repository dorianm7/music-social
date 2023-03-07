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
} from '../users/users';
import {
  createUsersSpotifyAlbums,
  deleteUsersSpotifyAlbums,
  patchUsersSpotifyAlbums,
} from '../users_spotify_albums/users_spotify_albums';
import {
  createUsersSpotifyArtists,
  deleteUsersSpotifyArtists,
  patchUsersSpotifyArtists,
} from '../users_spotify_artists/users_spotify_artists';
import {
  createUsersSpotifyPlaylists,
  deleteUsersSpotifyPlaylists,
  patchUsersSpotifyPlaylists,
} from '../users_spotify_playlists/users_spotify_playlists';
import {
  formatAlbums,
  formatArtists,
  formatPlaylists,
} from './spotify-helpers';

/**
 * Sync users Spotify data of given type to backend
 * @param {string} type Spotify data type to sync to backend (albums,artists,playlists)
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>[]} Array of successful operations
 */
const syncData = async (type, uid, accessToken) => {
  let getDataItems;
  if (type === 'albums' || type === 'playlists') {
    getDataItems = getLimitOffsetItems;
  } else if (type === 'artists') {
    getDataItems = getLimitCursorItems;
  } else {
    return Promise.reject(new Error('Invalid type entered.'));
  }

  const [listItems, user] = await Promise.all([
    getDataItems(type, accessToken),
    getUser(uid, [`spotify_${type}`]),
  ]);

  const defaultDateIsoString = (new Date(0)).toISOString();
  let userSpotifyDataObject;
  let patchSpotifyDataDocument;
  let firstTimeSync;
  let createBackendDataDocument;
  let listItemsForDb;
  if (type === 'albums') {
    userSpotifyDataObject = user.spotify_albums;
    patchSpotifyDataDocument = patchUsersSpotifyAlbums;
    firstTimeSync = userSpotifyDataObject.last_updated === defaultDateIsoString;
    createBackendDataDocument = createUsersSpotifyAlbums;
    listItemsForDb = formatAlbums(listItems);
  } else if (type === 'artists') {
    userSpotifyDataObject = user.spotify_artists;
    patchSpotifyDataDocument = patchUsersSpotifyArtists;
    firstTimeSync = userSpotifyDataObject.last_updated === defaultDateIsoString;
    createBackendDataDocument = createUsersSpotifyArtists;
    listItemsForDb = formatArtists(listItems);
  } else {
    userSpotifyDataObject = user.spotify_playlists;
    patchSpotifyDataDocument = patchUsersSpotifyPlaylists;
    firstTimeSync = userSpotifyDataObject.last_updated === defaultDateIsoString;
    createBackendDataDocument = createUsersSpotifyPlaylists;
    listItemsForDb = formatPlaylists(listItems);
  }

  let backendDataId;
  const promises = [];
  if (firstTimeSync) {
    backendDataId = ObjectID();
    await createBackendDataDocument(backendDataId);
    promises.push(patchUser(
      uid,
      [{
        op: 'replace',
        path: `/spotify_${type}`,
        value: {
          items_id: backendDataId.toHexString(),
          last_updated: (new Date()).toISOString(),
          total: listItemsForDb.length,
        },
      }],
    ));
  } else {
    backendDataId = userSpotifyDataObject.items_id;
    promises.push(patchUser(
      uid,
      [
        {
          op: 'replace',
          path: `/spotify_${type}/last_updated`,
          value: (new Date()).toISOString(),
        },
        {
          op: 'replace',
          path: `/spotify_${type}/total`,
          value: listItemsForDb.length,
        },
      ],
    ));
  }
  promises.push(patchSpotifyDataDocument(
    backendDataId,
    [
      {
        op: 'replace',
        path: '/items',
        value: listItemsForDb,
      },
      {
        op: 'replace',
        path: '/total',
        value: listItemsForDb.length,
      },
    ],
  ));

  return Promise.all(promises);
};

/**
 * Sync users spotify albums to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>[]} Promise of array of successful operations
 */
const syncAlbums = async (uid, accessToken) => syncData('albums', uid, accessToken);

/**
 * Sync users spotify playlists to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>[]} Promise of array of successful operations
 */
const syncPlaylists = async (uid, accessToken) => syncData('playlists', uid, accessToken);

/**
 * Sync users Spotify artists to backend
 * @param {string} uid Id of user
 * @param {string} accessToken Spotify access token
 * @returns {Promise<void>[]} Promise of a array of successful operations
 */
const syncArtists = async (uid, accessToken) => syncData('artists', uid, accessToken);

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

/**
 * Deletes the user's Spotify library data
 * @param {string} uid Id of user
 * @returns {Promise<void>[]} Array of successful operations
 */
const deleteLibrary = async (uid) => {
  const user = await getUser(uid, ['spotify_albums', 'spotify_artists', 'spotify_playlists']);
  const defaultObjectId = ObjectID('000000000000000000000000');
  const defaultDate = new Date(0);
  const deleteLibraryPromises = [];
  const patchUserOperations = [];
  const userSpotifyAlbumsLastUpdated = new Date(user.spotify_albums.last_updated);
  const userSpotifyArtistsLastUpdated = new Date(user.spotify_artists.last_updated);
  const userSpotifyPlaylistsLastUpdated = new Date(user.spotify_playlists.last_updated);
  const hasSyncedSpotifyAlbums = userSpotifyAlbumsLastUpdated.getTime() !== defaultDate.getTime();
  const hasSyncedSpotifyArtists = userSpotifyArtistsLastUpdated.getTime() !== defaultDate.getTime();
  const hasSyncedSpotifyPlaylists = (
    userSpotifyPlaylistsLastUpdated.getTime() !== defaultDate.getTime()
  );
  if (hasSyncedSpotifyAlbums) {
    deleteLibraryPromises.push(deleteUsersSpotifyAlbums(user.spotify_albums.items_id));
    patchUserOperations.push({
      op: 'replace',
      path: '/spotify_albums',
      value: {
        items_id: defaultObjectId.toHexString(),
        last_updated: defaultDate.toISOString(),
        total: 0,
      },
    });
  }
  if (hasSyncedSpotifyArtists) {
    deleteLibraryPromises.push(deleteUsersSpotifyArtists(user.spotify_artists.items_id));
    patchUserOperations.push({
      op: 'replace',
      path: '/spotify_artists',
      value: {
        items_id: defaultObjectId.toHexString(),
        last_updated: defaultDate.toISOString(),
        total: 0,
      },
    });
  }
  if (hasSyncedSpotifyPlaylists) {
    deleteLibraryPromises.push(deleteUsersSpotifyPlaylists(user.spotify_playlists.items_id));
    patchUserOperations.push({
      op: 'replace',
      path: '/spotify_playlists',
      value: {
        items_id: defaultObjectId.toHexString(),
        last_updated: defaultDate.toISOString(),
        total: 0,
      },
    });
  }
  const patchUserPromise = (patchUserOperations.length > 0)
    ? [patchUser(uid, patchUserOperations)]
    : [];
  return Promise.all([
    ...deleteLibraryPromises,
    ...patchUserPromise,
  ]);
};

export {
  syncAlbums,
  syncPlaylists,
  syncArtists,
  syncLibrary,
  deleteLibrary,
};
