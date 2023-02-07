/**
 * Module containing constants,functions to help working with Users
 * @module users-helpers
 */

const USERS_BACKEND_ENDPOINT = `${process.env.REACT_APP_BACKEND_HTTP_SERVER}/users`;

/**
 * Get query string with fields given
 * @param {string[]} fields List of fields
 * @returns {string} Query string for fields or empty string
 */
const getFieldsQueryString = (fields) => (fields.length > 0 ? `fields=${fields.toString()}` : '');

export {
  USERS_BACKEND_ENDPOINT,
  getFieldsQueryString,
};
