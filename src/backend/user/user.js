/**
 * Module containing functions to interface with backend server
 * @module user
 */

import axios from 'axios';
import {
  USERS_BACKEND_ENDPOINT,
  userEndpoint,
} from '../users/users-helpers';

/**
 * Create user in database
 * @param {string} uid Id of user
 * @param {string} userEmail Email of user
 * @returns {Promise<Object>} Promise of an object containing uid,email properties
 */
const createUser = (uid, userEmail) => axios.post(
  USERS_BACKEND_ENDPOINT,
  {
    uid,
    email: userEmail,
  },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
).catch((err) => {
  if (err.response) {
    if (err.response.status > 499) {
      return Promise.reject(new Error('Internal error. Try again.'));
    }
    if (err.response.status > 399) {
      return Promise.reject(new Error('Error in request body. Try again.'));
    }
  }
  if (err.request) {
    return Promise.reject(new Error('Error from server. Try again.'));
  }
  return Promise.reject(new Error('Error. Try again.'));
});

/**
 * Deletes user from the database
 * @param {string} userId Id of user
 * @returns {Promise} promise of a successful delete
 */
const deleteUser = (userId) => axios.delete(userEndpoint(userId))
  .catch((err) => {
    if (err.response) {
      if (err.response.status > 499) {
        return Promise.reject(new Error('Internal error. Try again.'));
      }
      if (err.response.status === 404) {
        return Promise.reject(new Error('Error. User not found'));
      }
    }
    if (err.request) {
      return Promise.reject(new Error('Error from server. Try again'));
    }
    return Promise.reject(new Error('Error. Try again'));
  });

/**
 * Patch user in the database
 * @param {string} userId Id of user
 * @param {object[]} patchBody Array of patch object operations to be executed
 * @returns {Promise} Promise of a successful patch
 */
const patchUser = (userId, patchBody) => axios.patch(
  userEndpoint(userId),
  patchBody,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export {
  createUser,
  deleteUser,
  patchUser,
};
