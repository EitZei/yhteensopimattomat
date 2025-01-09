import { Episode } from "../types";
import { leftPad, formatDate } from "../utils";

type Props = {
  episode: Episode;
};

export default function EpisodeListItem({ episode }: Props) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 font-bold">
        S{leftPad(episode.season.toString(), 2, "0")}E
        {leftPad(episode.episode.toString(), 2, "0")} {episode.title}
      </h2>
      <p>{episode.description}</p>
      <p>
        <a href={episode.url}>Kuuntele</a>
      </p>
      <p>{formatDate(episode.date)}</p>
    </div>
  );
}
