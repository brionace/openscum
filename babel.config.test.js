module.exports = function (api) {
  const isTest = api.env("test");
  if (isTest) {
    return {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
        "@babel/preset-react",
        "next/babel",
      ],
    };
  }
  // For Next.js (production/development)
  return {
    presets: ["next/babel"],
  };
};
