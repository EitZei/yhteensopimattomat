import fs from "fs";
import RSS from "rss";
import { Episode } from "./types";
import { podcastDescription } from "./static";
import { episodeCode } from "./utils";

export default async function generateRssFeed(episodes: Episode[]) {
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
      { "dc:language": "fi" },
      { "itunes:author": "Maija Wirlander, Antti Järvinen" },
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
      title: episode.title,
      description: episode.description,
      url: `${siteUrl}/#${episodeCode(episode)}`,
      date: episode.date,
      enclosure: {
        url: episode.url!,
        type: "audio/mpeg",
        size: episode.sizeBytes!,
      }, // optional enclosure
      custom_elements: [{ "itunes:explicit": "no" }],
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync(`./public/${feedName}`, feed.xml({ indent: true }));
}
