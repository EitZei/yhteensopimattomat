export type EpisodeLink = {
  description: string;
  url: string;
};

export type EpisodeTimestamp = {
  time: string;
  description: string;
};

export type Episode = {
  released: boolean;

  title: string;
  description: string;
  season: number;
  episode: number;

  date?: string;
};

export type ReleasedEpisode = Episode & {
  released: true;

  date: string;

  url: string;
  sizeBytes: number;
  links: EpisodeLink[];
  timestamps: EpisodeTimestamp[];
};

export function isReleased(
  episode: Episode | ReleasedEpisode
): episode is ReleasedEpisode {
  return (episode as ReleasedEpisode).released === true;
}
