/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  collectCoverageFrom: ['src/**/{!(app.module|index|main),}.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/dto/'],
  coverageReporters: ['lcovonly', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  rootDir: '.',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  testResultsProcessor: 'jest-sonar-reporter',
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
}
