/**
 * Module containing constants,functions to help working with Users
 * @module users-helpers
 */

const USERS_BACKEND_ENDPOINT = `${process.env.REACT_APP_BACKEND_HTTP_SERVER}/users`;

/**
 * Returns the backend endpoint of user with given userId
 * @param {string} userId Id of user
 * @returns {string} Endpoint of user with given userId
 */
const userEndpoint = (userId) => `${USERS_BACKEND_ENDPOINT}/${userId}`;

export {
  USERS_BACKEND_ENDPOINT,
  userEndpoint,
};
