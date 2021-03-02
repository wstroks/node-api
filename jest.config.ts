/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default { 
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "node",
  transform: {
      '.+\\.ts$': 'ts-jest'
  },
 
};
