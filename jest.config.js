module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      { configFile: "./babel.config.test.js" },
    ],
  },
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  // Use custom Babel config for tests only
  //   babelConfig: "./babel.config.test.js",
};
