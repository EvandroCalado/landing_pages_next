module.exports = {
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/styles/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/templates/Base/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/templates/Home/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/templates/Loading/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/templates/PageNotFound/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/*.{js,jsx,ts,tsx}",
    "!<rootDir>/**/stories.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
  ],

  testEnvironment: "jsdom",
  testMath: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/.public/"],

  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
};
