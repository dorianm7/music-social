/**
 * Module containing functions to conduct User app functionality
 * @module user
 */

import { deleteUserAccount, userSignUp } from '../../firebase/auth-firebase';
import { removeAccessToken } from '../spotify/spotify-auth';
import {
  deleteUser as deleteUserFromDb,
  createUser as createUserInDb,
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

/**
 * Create user in backend and firebase
 * @param {string} email Email of user
 * @param {string} password Password of user
 * @returns {Promise<void>} Promise of successful operations
 */
const createUser = async (email, password) => {
  const user = await userSignUp(email, password);
  await createUserInDb(user.uid, email);
};

export {
  deleteUser,
  createUser,
};
