module.exports = {
  
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(svg)$': '<rootDir>/__mocks__/svgMock.js'
  },
  "moduleDirectories": ["node_modules", "src"],

  setupFilesAfterEnv: [
    './src/setupTests.ts',
  ]
};