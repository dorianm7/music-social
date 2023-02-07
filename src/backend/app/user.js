/**
 * Module containing functions to conduct User app functionality
 * @module user
 */

import { deleteUserAccount } from '../../firebase/auth-firebase';
import { removeAccessToken } from '../spotify/spotify-auth';
import {
  deleteUser as deleteUserFromDb,
} from '../users/users';

/**
 * Delete user from backend,firebase and any local data
 * @param {string} uid Id of user
 * @returns {Promise<void>} Promise of successful operations
 */
const deleteUser = async (uid) => {
  removeAccessToken();
  return Promise.all([
    deleteUserFromDb(uid),
    deleteUserAccount(),
  ]);
};

export default deleteUser;
