/* eslint-disable no-await-in-loop */
/**
 * Module containing functions to perform Spotify functions
 * @module spotify
 */

import axios from 'axios';
import {
  CURRENT_USER_PROFILE_ENDPOINT,
  getUsersAlbumsHref,
  getUsersArtistsHref,
  getUsersPlaylistsHref,
} from './spotify-endpoints';

/**
 * Object representing a Spotify response of limited offset items
 * @typedef {Object} SpotifyLimitOffsetResponse
 * @property {string} href Link to the Web API endpoint returning the full result of the request
 * @property {Object[]} items Requested content
 * @property {int} limit Maximum number of items in the response
 * @property {string | null} next Url to the next page of items
 * @property {int} offset Offset of the items returned
 * @property {string | null} previous Url to the previous page of items
 * @property {int} total Total number of items available to return
 */

/**
 * Object representing a Spotify response of limited cursored items
 * @typedef {Object} SpotifyLimitCursorResponse
 * @property {string} href Link to the Web API endpoint returning the full result of the request
 * @property {Object[]} items Requested content
 * @property {int} limit Maximum number of items in the response
 * @property {string | null} next Url to the next page of items
 * @property {Object} cursors Cursors used to find the next set of items
 * @property {int} total Total number of items available to return
 */

/**
 * Object representing the currrent user's Spotify profile
 * @typedef {Object} SpotifyCurrentUserProfile
 * @property {string} country Country of the user as an ISO 3166-1 alpha 2 country code
 * @property {string} display_name Name displayed on user profile
 * @property {string} email Email of the user
 * @property {Object} explicit_content User's expicit content settings
 * @property {Object} external_urls Known external urls for the user
 * @property {Object} followers Information about the followers of the user
 * @property {string} href Link to the web api endpoint for the user
 * @property {string} id User Spotify id
 * @property {Object[]} images User's profile image
 * @property {string} product User's Spotify subscription level
 * @property {string} type Object type
 * @property {string} uri User's Spotify uri
 */

/**
 * Handles a requests failure response
 * @param {Object} error Axios error object
 * @returns {Promise<Error>} Promise of an error object
 */
const axiosResponseErrorHandler = (error) => {
  if (error.response) {
    if (error.response.status > 499) {
      return Promise.reject(new Error('Unexpected error. Try again.'));
    }
    if (error.response.status === 429) {
      return Promise.reject(new Error('Error. Too many requests.'));
    }
    if (error.response.status === 401) {
      return Promise.reject(new Error('Token error. Reauthorize Spotify and try again.'));
    }
  }
  return Promise.reject(new Error('Error. Try again.'));
};

/**
 * Get limit amount of user's Spotify albums starting from offset
 * @param {int} limit Amount of albums to return
 * @param {int} offset Index of first item to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyLimitOffsetResponse>} Promise of response object containing Albums
 * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums}
 */
const getAlbums = (limit = 50, offset = 0, accessToken) => axios.get(
  getUsersAlbumsHref(limit, offset),
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
)
  .then((res) => res.data)
  .catch((err) => axiosResponseErrorHandler(err));

/**
 * Get limit amount of user's Spotify artists from after
 * @param {int} limit Amount of albums to return
 * @param {string} after Id of last artist Id returned from previous request
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyLimitCursorResponse>} Promise of response object containing Artists
 * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-followed}
 */
const getArtists = (limit = 50, after = '', accessToken) => axios.get(
  getUsersArtistsHref(limit, after),
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
)
  .then((res) => res.data.artists)
  .catch((err) => axiosResponseErrorHandler(err));

/**
 * Get limit amount of user's Spotify playlists starting from offset
 * @param {int} limit Amount of playlists to return
 * @param {int} offset Index of first item to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyLimitOffsetResponse>} Promise of response object containing Playlists
 * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists}
 */
const getPlaylists = (limit = 50, offset = 0, accessToken) => axios.get(
  getUsersPlaylistsHref(limit, offset),
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
)
  .then((res) => res.data)
  .catch((err) => axiosResponseErrorHandler(err));

/**
 * Return user's Spotify profile
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyCurrentUserProfile>} Promise of the current user's Spotify profile
 */
const getProfile = (accessToken) => axios.get(
  CURRENT_USER_PROFILE_ENDPOINT,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
)
  .then((res) => res.data)
  .catch((err) => axiosResponseErrorHandler(err));

/**
 * Returns all the items of the type specified (albums, playlists)
 * @param {string} type Type of items to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise<Object[]>} Promise of objects of the specified type
 */
const getLimitOffsetItems = async (type, accessToken) => {
  let initialRes;
  const limit = 50;
  let offset = 0;
  const items = [];
  if (type === 'albums') {
    initialRes = await getAlbums(limit, offset, accessToken);
  } else if (type === 'playlists') {
    initialRes = await getPlaylists(limit, offset, accessToken);
  } else {
    Promise.reject(new Error('Invalid type entered.'));
  }

  items.push(...initialRes.items);

  const promises = [];
  for (let i = 1; i < Math.ceil(initialRes.total / limit); i += 1) {
    let newPromise;
    offset += limit;
    if (type === 'albums') {
      newPromise = getAlbums(limit, offset, accessToken);
    } else {
      newPromise = getPlaylists(limit, offset, accessToken);
    }
    promises.push(newPromise);
  }

  const responses = await Promise.all(promises);

  responses.forEach((response) => items.push(...response.items));

  return Promise.resolve(items);
};

export {
  getAlbums,
  getArtists,
  getPlaylists,
  getProfile,
  getLimitOffsetItems,
};
