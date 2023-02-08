/**
 * Module containing functions to conduct User app functionality
 * @module user
 */

import {
  deleteUserAccount,
  googleSignIn,
  userSignOut,
  userSignUp,
} from '../../firebase/auth-firebase';
import { removeAccessToken } from '../spotify/spotify-auth';
import {
  deleteUser as deleteUserFromDb,
  createUser as createUserInDb,
  getUser as getUserFromDb,
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

/**
 * Sign out user and remove any local data
 */
const signOutUser = () => {
  removeAccessToken();
  userSignOut();
};

/**
 * Sign in user using Google, create user in backend if needed
 */
const signInGoogleUser = async () => {
  const user = await googleSignIn();
  const userFromDb = await getUserFromDb(user.uid, ['_id'])
    .catch((err) => {
      if (err.message !== 'Error. User not found.') {
        return Promise.reject(err);
      }
      return null; // Quiet linter
    });

  if (!userFromDb) {
    await createUserInDb(user.uid, user.providerData[0].email);
  }
};

export {
  deleteUser,
  createUser,
  signOutUser,
  signInGoogleUser,
};
