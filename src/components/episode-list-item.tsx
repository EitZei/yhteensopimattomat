import { Episode } from "../types";
import { leftPad, formatDate } from "../utils";

type Props = {
  episode: Episode;
};

export default function EpisodeListItem({ episode }: Props) {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <h2 className="font-bold">
          S{leftPad(episode.season.toString(), 2, "0")}E
          {leftPad(episode.episode.toString(), 2, "0")} {episode.title}
        </h2>
        <p className="text-xs text-slate-600">
          Julkaistu {formatDate(episode.date)}
        </p>
      </div>
      <p>{episode.description}</p>
      <p>
        <a className="text-cyan-600 hover:underline" href={episode.url}>
          Kuuntele
        </a>
      </p>
    </div>
  );
}
