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

  const [listItems, userRes] = await Promise.all([
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
    userSpotifyDataObject = userRes.data.spotify_albums;
    patchSpotifyDataDocument = patchUsersSpotifyAlbums;
    firstTimeSync = userSpotifyDataObject.last_updated === defaultDateIsoString;
    createBackendDataDocument = createUsersSpotifyAlbums;
    listItemsForDb = formatAlbums(listItems);
  } else if (type === 'artists') {
    userSpotifyDataObject = userRes.data.spotify_artists;
    patchSpotifyDataDocument = patchUsersSpotifyArtists;
    firstTimeSync = userSpotifyDataObject.last_updated === defaultDateIsoString;
    createBackendDataDocument = createUsersSpotifyArtists;
    listItemsForDb = formatArtists(listItems);
  } else {
    userSpotifyDataObject = userRes.data.spotify_playlists;
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
        },
      }],
    ));
  } else {
    backendDataId = userSpotifyDataObject.items_id;
    promises.push(patchUser(
      uid,
      [{
        op: 'replace',
        path: `/spotify_${type}/last_updated`,
        value: (new Date()).toISOString(),
      }],
    ));
  }
  promises.push(patchSpotifyDataDocument(
    backendDataId,
    [{
      op: 'replace',
      path: '/items',
      value: listItemsForDb,
    }],
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

export {
  syncAlbums,
  syncPlaylists,
  syncArtists,
  syncLibrary,
};
