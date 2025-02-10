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
        <p className="text-xs text-slate-600 dark:text-gray-400">
          {episode.date
            ? `Julkaistaan ${formatDate(episode.date)}`
            : "Jaksoidea"}
        </p>
      </div>
      <p>{episode.description}</p>
    </div>
  );
}
