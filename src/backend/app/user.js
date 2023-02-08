/**
 * Module containing functions to conduct User app functionality
 * @module user
 */

import {
  deleteUserAccount,
  emailPasswordSignIn,
  googleSignIn,
  userSignOut,
  userSignUp,
} from '../../firebase/auth-firebase';
import {
  refreshTokens,
  removeAccessToken,
} from '../spotify/spotify-auth';
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
 * Sign in user, create user in backend if needed, and refresh access tokens if possible
 */
const signInGoogleUser = async () => {
  const user = await googleSignIn();
  let userFromDbRes;
  try {
    userFromDbRes = await getUserFromDb(user.uid, ['_id', 'spotify_refresh_token']);
    if (userFromDbRes.data.spotify_refresh_token) {
      await refreshTokens(user.uid);
    }
  } catch (err) {
    if (err.message === 'Error. User not found.') {
      await createUserInDb(user.uid, user.providerData[0].email);
    } else {
      return Promise.reject(err);
    }
  }
  return Promise.resolve();
};

/**
 * Sign in user and refresh access tokens if possible
 * @param {string} email Email of user
 * @param {string} password Password of user
 */
const signInEmailPasswordUser = async (email, password) => {
  const user = await emailPasswordSignIn(email, password);
  const userFromDbRes = await getUserFromDb(user.uid, ['spotify_refresh_token']);
  if (userFromDbRes.data.spotify_refresh_token) {
    await refreshTokens(user.uid);
  }
};

export {
  deleteUser,
  createUser,
  signOutUser,
  signInGoogleUser,
  signInEmailPasswordUser,
};
