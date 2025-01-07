import { Episode } from "../types";
import { formatDate } from "../utils";

type Props = {
  episode: Episode;
};

export default function PlannedEpisodeListItem({ episode }: Props) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 font-bold">{episode.title}</h2>
      <p>{episode.description}</p>
      <p>Suunniteltu julkaisupäivä {formatDate(episode.date)}</p>
    </div>
  );
}
