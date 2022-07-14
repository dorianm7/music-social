// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  setupFiles: ['<rootDir>/jest-setup.js'],
};

module.exports = {
  config,
};

// Or async function
module.exports = async () => config;
