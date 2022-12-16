/**
 * Module containing functions to interface with backend server
 * @module user
 */

import axios from 'axios';

const deleteUser = (userId) => axios.delete(`${process.env.REACT_APP_BACKEND_HTTP_SERVER}/users/${userId}`);

export default deleteUser;
