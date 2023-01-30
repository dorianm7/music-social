/**
 * Module containing functions to perform Spotify functions
 * @module spotify
 */

import axios from 'axios';

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
 * Get limit amount of Spotify albums starting from offset
 * @param {int} limit Amount of albums to return
 * @param {int} offset Index of first item to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyLimitOffsetResponse>} Promise of response object containing Albums
 * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums}
 */
const getAlbums = (limit = 50, offset = 0, accessToken) => axios.get(
  `https://api.spotify.com/v1/me/albums?limit=${limit}&offset=${offset}`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
)
  .then((res) => res.data)
  .catch((err) => {
    if (err.response) {
      if (err.response.status > 499) {
        return Promise.reject(new Error('Unexpected error. Try again.'));
      }
      if (err.response.status === 429) {
        return Promise.reject(new Error('Error. Too many requests.'));
      }
      if (err.response.status === 401) {
        return Promise.reject(new Error('Token error. Reauthorize Spotify and try again.'));
      }
    }
    return Promise.reject(new Error('Error. Try again.'));
  });

/**
 * Get limit amount of Spotify artists from after
 * @param {int} limit Amount of albums to return
 * @param {string} after Id of last artist Id returned from previous request
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyLimitCursorResponse>} Promise of response object containing Artists
 * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-followed}
 */
const getArtists = (limit = 50, after = '', accessToken) => {
  const afterSearchParam = after ? `&after=${after}` : '';
  return axios.get(
    `https://api.spotify.com/v1/me/following?type=artist&limit=${limit}${afterSearchParam}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
    .then((res) => res.data.artists)
    .catch((err) => {
      if (err.response) {
        if (err.response.status > 499) {
          return Promise.reject(new Error('Unexpected error. Try again'));
        }
        if (err.response.status === 429) {
          return Promise.reject(new Error('Error. Too many requests.'));
        }
        if (err.response.status === 401) {
          return Promise.reject(new Error('Token error. Reauthorize Spotify and try again.'));
        }
      }
      return Promise.reject(new Error('Error. Try again.'));
    });
};

/**
 * Get limit amount of Spotify playlists starting from offset
 * @param {int} limit Amount of playlists to return
 * @param {int} offset Index of first item to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise} Promise of axios response object containing user spotify playlists
 */
const getPlaylists = (limit = 50, offset = 0, accessToken) => axios.get(
  `https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
);

/**
 * Return user Spotify profile
 * @param {string} accessToken Spotify access token
 * @returns {Promise} Promise of a user Spotify profile object
 */
const getProfile = (accessToken) => axios.get(
  'https://api.spotify.com/v1/me',
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
);

export {
  getAlbums,
  getArtists,
  getPlaylists,
  getProfile,
};
