/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',             // Le indica a Jest que use ts-jest para TypeScript
  testEnvironment: 'node',       // Entorno Node.js para los tests
  testMatch: ['**/unitTests/**/*.test.ts'],  // Solo busca tests dentro de unitTests
  moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Extensiones válidas
};