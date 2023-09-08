/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  verbose: true,

  transform: { "\\.[jt]sx?$": "babel-jest" },
  testRegex: "\\.test\\.(jsx?|tsx?|mjs)$",

  setupFilesAfterEnv: ["<rootDir>/jestSetupTests.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text"],
  watchPathIgnorePatterns: ["/node_modules/", "/dist/", "/.git/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  rootDir: __dirname,
  transformIgnorePatterns: [],
};

module.exports = config;
