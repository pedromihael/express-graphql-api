const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  projects: ['ts-jest'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  testMatch: ['**/*.spec.ts'],
};
