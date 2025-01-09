import { Episode } from "../types";
import { formatDate } from "../utils";

type Props = {
  episode: Episode;
};

export default function PlannedEpisodeListItem({ episode }: Props) {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <h2 className="font-bold">{episode.title}</h2>
        <p className="text-xs text-slate-600">
          Julkaistaan {formatDate(episode.date)}
        </p>
      </div>
      <p>{episode.description}</p>
    </div>
  );
}
