module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/test/unit/preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/__mocks__/fileMock.js',
    '^gatsby-page-utils/(.*)$': 'gatsby-page-utils/dist/$1', // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-core-utils/(.*)$': 'gatsby-core-utils/dist/$1', // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-plugin-utils/(.*)$': [
      'gatsby-plugin-utils/dist/$1',
      'gatsby-plugin-utils/$1',
    ]
  },
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache/',
    '<rootDir>.*/public',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|gatsby-script)/)',
  ],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [
    '<rootDir>/test/unit/loadershim.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/unit/setup.js',
  ],
  roots: [
    '<rootDir>/src/',
    '<rootDir>/test/unit/',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverage: true,
};
