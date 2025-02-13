import fs from "fs";
import RSS from "rss";
import { ReleasedEpisode } from "./types";
import { podcastDescription } from "./static";
import { episodeCode } from "./utils";

export default async function generateRssFeed(episodes: ReleasedEpisode[]) {
  const feedName = "yhteensopimattomat.xml";

  const siteUrl =
    process.env.NODE_ENV === "production"
      ? "https://yhteensopimattomat.fi"
      : "http://localhost:3000";

  const feedOptions = {
    title: "Yhteensopimattomat",
    description: podcastDescription,
    site_url: siteUrl,
    feed_url: `${siteUrl}/${feedName}`,
    // image_url: `${siteUrl}/logo.jpeg`, // TODO!
    //pubDate: new Date(),
    language: "fi",
    custom_namespaces: {
      itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
    },
    custom_elements: [
      { "itunes:explicit": "no" },
      { "dc:language": "fi" },
      { "itunes:author": "Antti & Maija" },
      {
        "itunes:image": {
          _attr: {
            href: `${siteUrl}/yhteensopimattomat.png`,
          },
        },
      },
      {
        "itunes:category": [
          {
            _attr: {
              text: "Education",
            },
          },
          {
            "itunes:category": {
              _attr: {
                text: "Self-Improvement",
              },
            },
          },
        ],
      },
    ],
  };

  const feed = new RSS(feedOptions);

  // Add episodes to the feed.
  episodes.forEach((episode) => {
    feed.item({
      title: `#${episode.episode} ${episode.title}`,
      description: renderDescription(episode),
      url: `${siteUrl}/#${episodeCode(episode)}`,
      date: episode.date,
      enclosure: {
        url: episode.url,
        type: "audio/mpeg",
        size: episode.sizeBytes,
      }, // optional enclosure
      custom_elements: [
        { "itunes:explicit": "no" },
        { "itunes:season": episode.season },
        { "itunes:episode": episode.episode },
      ],
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync(`./public/${feedName}`, feed.xml({ indent: true }));
}

function renderDescription(episode: ReleasedEpisode) {
  return `
    <p>
      ${episode.description}
    </p>
    <ul>
      ${episode.timestamps
        .map(
          (timeStamp) => `<li>${timeStamp.time}: ${timeStamp.description}</li>`
        )
        .join("\n")}
    </ul>
    <p>
      Jaksossa mainittua:
    </p>
    <ul>
      ${episode.links
        .map(
          (link) =>
            `<li>
                  <a href=${link.url}>${link.description}</a>
                </li>`
        )
        .join("\n")}
    </ul>
  `;
}
