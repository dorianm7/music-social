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
 * Object representing a Spotify album
 * @typedef {Object} SpotifyAlbum
 * @property {string} album_type Type of album
 * @property {Object[]} artists Artists of the album
 * @property {string[]} available_markets Markets album is available in
 * @property {Object[]} copyrights Copyright statements of album
 * @property {Object} external_ids External ids for album
 * @property {Object} external_urls External URLs for album
 * @property {string[]} genres List of genres album associated with
 * @property {string} href Link to Spotify Web API endpoint
 * @property {string} id Spotify id for album
 * @property {Object[]} images Cover art for album in various sizes
 * @property {string} label Label associated with album
 * @property {string} name Name of album
 * @property {int} popularity Popularity of album
 * @property {string} release_date Date album first released
 * @property {string} release_date_precision Precision for release_data
 * @property {Object} restrictions Content restrictions applied to album
 * @property {int} total_tracks Number tracks on album
 * @property {Object} tracks Tracks object containing tracks data
 * @property {string} type Object type. "album"
 * @property {string} uri Spotify URI for album
 */

/**
 * Object representing a Spotify artist
 * @typedef {Object} SpotifyArtist
 * @property {Object} external_urls External URLs for artist
 * @property {Object} followers Info of artists followers
 * @property {string[]} genres Genres associated with artist
 * @property {string} href Linke to Spotify Web API endpoint
 * @property {string} id Spotify id for artist
 * @property {Object[]} images Images of artist
 * @property {string} name Name of artist
 * @property {int} popularity Popularity of artist
 * @property {string} type Object type. "artist"
 * @property {string} uri Spotify URI for artist
 */

/**
 * Object representing a Spotify playlist owned or followed by current user
 * @typedef {Object} CurrentUserSpotifyPlaylistListItem
 * @property {boolean} collaborative Whether other users can modify playlist
 * @property {string | null} description Description of playlist
 * @property {Object} external_urls External URLs for playlist
 * @property {string} href Link to Spotify Web API endpoint
 * @property {string} id Spotify id for playlist
 * @property {Object[]} images Cover art for playlist in various sizes
 * @property {string} name Name of playlist
 * @property {Object} owner User who owns the playlist
 * @property {boolean} public Whether public or private
 * @property {string} snapshot_id Version id for current playlist (Used to target specific version)
 * @property {Object} tracks Object containing link and total tracks contained
 * @property {string} type Object type. "playlist"
 * @property {string} uri Spotify URI for playlist
 */

/**
 * Object representing a Spotify response of album in list
 * @typedef {Object} SpotifyAlbumListItem
 * @property {string} added_at ISO date-time object was saved
 * @property {SpotifyAlbum} album Album object
 */

/**
 * Object representing a Spotify response of limited offset items
 * @typedef {Object} SpotifyLimitOffsetResponse
 * @property {string} href Link to the Web API endpoint returning the full result of the request
 * @property {SpotifyAlbumListItem[] | CurrentUserSpotifyPlaylistListItem[]} items Requested content
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
 * @returns {Promise<SpotifyAlbumListItem[] | CurrentUserSpotifyPlaylistListItem[]>} Promise
 * of objects of the specified type
 */
const getLimitOffsetItems = async (type, accessToken) => {
  const limit = 50;
  let offset = 0;
  let getData;
  const items = [];
  if (type === 'albums') {
    getData = getAlbums;
  } else if (type === 'playlists') {
    getData = getPlaylists;
  } else {
    Promise.reject(new Error('Invalid type entered.'));
  }

  const initialRes = await getData(limit, offset, accessToken);
  items.push(...initialRes.items);

  const promises = [];
  for (let i = 1; i < Math.ceil(initialRes.total / limit); i += 1) {
    offset += limit;
    const newPromise = getData(limit, offset, accessToken);
    promises.push(newPromise);
  }

  const responses = await Promise.all(promises);

  responses.forEach((response) => items.push(...response.items));

  return Promise.resolve(items);
};

/**
 * Returns all the items of the type specified (artists)
 * @param {string} type Type of items to return
 * @param {string} accessToken Spotify access token
 * @returns {Promise<SpotifyArtist[] | Object[]} Promise of objects of specified type
 */
const getLimitCursorItems = async (type, accessToken) => {
  let after = '';
  const items = [];
  do {
    let itemsRes;
    if (type === 'artists') {
      itemsRes = await getArtists(50, after, accessToken);
    } else {
      return Promise.reject(new Error('Invalid type entered'));
    }
    items.push(...itemsRes.items);
    after = itemsRes.cursors.after;
  } while (after);

  return items;
};

export {
  getAlbums,
  getArtists,
  getPlaylists,
  getProfile,
  getLimitOffsetItems,
  getLimitCursorItems,
};
