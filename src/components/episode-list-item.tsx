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
          {episodeCode(episode)} {episode.title}
        </h2>
        <p className="text-xs text-slate-600">
          Julkaistu {formatDate(episode.date)}
        </p>
      </div>
      <p className="mb-2">{episode.description}</p>
      <div className="flex justify-between items-center">
        <audio controls src={episode.url}></audio>
        <p>
          <a
            className="text-cyan-600 hover:underline"
            href={episode.url}
            download={true}
          >
            Lataa jakso (mp3)
          </a>
        </p>
      </div>
    </div>
  );
}
