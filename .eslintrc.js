module.exports = {
  plugins: ['gatsby', 'cypress'],
  extends: ['plugin:gatsby/recommended'],
  env: {
    'cypress/globals': true,
  },
};
