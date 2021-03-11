const tasks = (arr) => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks(["lint-staged", "npm run build", "git add features/*"]),
  },
};
