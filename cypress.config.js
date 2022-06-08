const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: 'test/e2e/fixtures',
  projectId: 'vmgn1h',
  screenshotsFolder: 'test/e2e/screenshots',
  video: false,
  viewportHeight: 600,
  viewportWidth: 1000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./test/e2e/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:9000/',
    specPattern: 'test/e2e/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'test/e2e/support/index.js',
  },
})
