// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("node:fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const casual = require("casual");

const numberOfEpisodes = 10;

const episodes = [...Array(numberOfEpisodes).keys()].map((_) => ({
  name: casual.title,
}));

fs.writeFileSync(
  "./src/data/episodes.json",
  JSON.stringify(episodes, null, 4),
  { encoding: "utf8" }
);

console.log("Wrote new test data");
