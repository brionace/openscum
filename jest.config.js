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
  transformIgnorePatterns: ["node_modules/(?!(@supabase|isows|ws)/.*)"],
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  // Mock Supabase modules that cause issues
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@supabase/supabase-js$": "<rootDir>/__tests__/__mocks__/supabase.js",
  },
};
