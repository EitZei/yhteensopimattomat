import { Episode } from "../types";
import { formatDate, episodeCode } from "../utils";

type Props = {
  episode: Episode;
  isLatest: boolean;
};

export default function EpisodeListItem({ episode, isLatest }: Props) {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <h2
          className="font-bold"
          id={isLatest ? "latest" : episodeCode(episode)}
        >
          #{episode.episode} {episode.title}
        </h2>
        <p className="text-xs text-slate-600 dark:text-gray-400">
          Julkaistu {formatDate(episode.date!)}
        </p>
      </div>
      <p className="mb-2">{episode.description}</p>
      <div className="flex justify-between items-center flex-col gap-2 md:flex-row md:gap-0">
        <audio controls src={episode.url}></audio>
        <p>
          <a href={episode.url} download={true}>
            Lataa jakso (mp3)
          </a>
        </p>
      </div>
    </div>
  );
}
