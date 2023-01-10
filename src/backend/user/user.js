/**
 * Module containing functions to interface with backend server
 * @module user
 */

import axios from 'axios';
import { userEndpoint } from '../users/users-helpers';

/**
 * Deletes user from the database
 * @param {string} userId Id of user
 * @returns {Promise} promise of a successful delete
 */
const deleteUser = (userId) => axios.delete(userEndpoint(userId));

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
  deleteUser,
  patchUser,
};
