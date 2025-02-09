import { Episode } from "./types";

export function leftPad(source: string, length: number, pad: string) {
  return (
    [...Array(length - source.length).keys()].map(() => pad).join("") + source
  );
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function episodeCode(episode: Episode) {
  const season = leftPad(episode.season.toString(), 2, "0");
  const episodeNo = leftPad(episode.episode.toString(), 2, "0");

  return `S${season}E${episodeNo}`;
}
