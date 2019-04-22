module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/tests/**/*.test.ts",
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "/src/pizzabot.ts",
    "/src/CLI.ts"
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: -10,
    },
  },
  coverageReporters: [
    "json",
    "html",
  ],
};