/**
 * Module containing functions to perform Spotify functions
 * @module spotify
 */

import axios from 'axios';

/**
 * Get limit amount of Spotify albums starting from offset
 * @param {int} limit Amount of albums to return
 * @param {int} offset Index of first item to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise} Promise of axios response object containing user spotify albums
 */
const getAlbums = (limit = 50, offset = 0, accessToken) => axios.get(
  `https://api.spotify.com/v1/me/albums?limit=${limit}&offset=${offset}`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
);

/**
 * Get limit amount of Spotify artists from after
 * @param {int} limit Amount of albums to return
 * @param {int} after Id of last artist Id returned from previous request
 * @param {string} accessToken Spotify access token
 * @returns {Promise} Promise of axios response object containing user spotify artists
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
  );
};

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
  getProfile,
};
