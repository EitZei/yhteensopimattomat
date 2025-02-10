export type Episode = {
  title: string;
  description: string;
  date?: string;
  season: number;
  episode: number;
  released: boolean;

  url?: string;
  sizeBytes?: number;
};
