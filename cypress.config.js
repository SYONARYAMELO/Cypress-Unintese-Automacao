const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports ={
  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
  },
};

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
