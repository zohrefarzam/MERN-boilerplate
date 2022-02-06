const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^_client(.*)$': '<rootDir>/client/$1',
    '^_assets(.*)$': '<rootDir>/client/assets/$1',
    '^_styles(.*)$': '<rootDir>/client/styles/$1',
    '^_utils(.*)$': '<rootDir>/client/utils/$1',
    '^_api(.*)$': '<rootDir>/client/api/$1',
    '^_hooks(.*)$': '<rootDir>/client/hooks/$1',
    '^_components(.*)$': '<rootDir>/client/layout/components/$1',
    '^_molecules(.*)$': '<rootDir>/client/layout/molecules/$1',
    '^_organisms(.*)$': '<rootDir>/client/layout/organisms/$1',
    '^_views(.*)$': '<rootDir>/client/layout/views/$1',
    '^_pages(.*)$': '<rootDir>/client/layout/pages/$1',
    '^_environment(.*)$': '<rootDir>/client/layout/environment/$1',
    '^_store(.*)$': '<rootDir>/client/store/$1',
    '^_actions(.*)$': '<rootDir>/client/store/actions/$1',
    '^_reducers(.*)$': '<rootDir>/client/store/reducers/$1',
    '^_thunks(.*)$': '<rootDir>/client/store/thunks/$1',
  },
  rootDir: path.join(__dirname, '../..'),
  setupFiles: [
    '<rootDir>/client/config/jest.setup.js',
  ],
  testEnvironment: 'jsdom',
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).[tj]s?(x)')],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    // eslint-disable-next-line
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/config/assetsTransformer.js',
  },
};
