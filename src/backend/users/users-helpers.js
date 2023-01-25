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
const userBaseEndpoint = (userId) => `${USERS_BACKEND_ENDPOINT}/${userId}`;

/**
 * Returns the param string for fields given list of fields
 * @param {string[]} fields List of fields
 * @returns {string} Search param string for fields
 */
const fieldsSearchParam = (fields) => `fields=${fields.toString()}`;

/**
 * Return backend endpoint that will return fields of user with given userId
 * @param {string} userId User id
 * @param {string[]} fields List fields
 * @returns {string} Endpoint of user with given userId containing properties in fields
 */
const userEndpoint = (userId, fields) => {
  const userBase = userBaseEndpoint(userId);
  return (fields.length > 0)
    ? `${userBase}/?${fieldsSearchParam(fields)}`
    : userBase;
};

export {
  USERS_BACKEND_ENDPOINT,
  userBaseEndpoint,
  userEndpoint,
};
