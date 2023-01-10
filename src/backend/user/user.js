/**
 * Module containing functions to interface with backend server
 * @module user
 */

import axios from 'axios';
import { userEndpoint } from '../users/users-helpers';

const deleteUser = (userId) => axios.delete(userEndpoint(userId));

export default deleteUser;
