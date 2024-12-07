// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("node:fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const casual = require("casual");

const numberOfEpisodes = 10;

const episodes = [...Array(numberOfEpisodes).keys()].reverse().map((key) => ({
  title: casual.title,
  description: casual.description,
  date: casual.date(),
  season: 1,
  episode: key + 1,
  released: key > numberOfEpisodes / 2 ? false : true,
}));

fs.writeFileSync(
  "./src/data/episodes.json",
  JSON.stringify(episodes, null, 4),
  { encoding: "utf8" }
);

console.log("Wrote new test data");
