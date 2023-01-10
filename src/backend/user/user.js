/**
 * Module containing functions to interface with backend server
 * @module user
 */

import axios from 'axios';
import { USERS_BACKEND_ENDPOINT } from '../users/users-helpers';

const deleteUser = (userId) => axios.delete(`${USERS_BACKEND_ENDPOINT}/${userId}`);

export default deleteUser;
