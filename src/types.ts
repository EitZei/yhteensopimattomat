export type EpisodeLink = {
  description: string;
  url: string;
};

export type EpisodeTimestamp = {
  time: string;
  description: string;
};

export type Episode = {
  title: string;
  description: string;
  date?: string;
  season: number;
  episode: number;
  released: boolean;

  url?: string;
  sizeBytes?: number;
  links?: EpisodeLink[];
  timestamps?: EpisodeTimestamp[];
};
