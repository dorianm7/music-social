/**
 * Module containing functions to conduct User app functionality
 * @module user
 */

import { deleteUserAccount } from '../../firebase/auth-firebase';
import {
  deleteUser as deleteUserFromDb,
} from '../users/users';

/**
 * Delete user from backend and firebase
 * @param {string} uid Id of user
 * @returns {Promise<void>[]} Promise of successful operations
 */
const deleteUser = async (uid) => Promise.all([
  deleteUserFromDb(uid),
  deleteUserAccount(),
]);

export default deleteUser;
