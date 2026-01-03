/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts', '**/unitTests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};