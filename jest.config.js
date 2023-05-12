module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**', '!**/index.js', '!**/mocks/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\', 'src/assets'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 40,
      lines: 40,
      functions: 40,
      statements: 40,
    },
  },
  moduleNameMapper: {
    '\\.(jpeg|png|webp|svg)': '../mocks/dummyImage.js',
  },
  testEnvironment: 'jsdom',
};
