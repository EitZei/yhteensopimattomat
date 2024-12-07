import { Episode } from "../types";
import { leftPad } from "../utils";

type Props = {
  episode: Episode;
};

export default function EpisodeListItem({ episode }: Props) {
  return (
    <div className="mb-4">
      <h2 className="mb-2">
        S{leftPad(episode.season.toString(), 2, "0")}E
        {leftPad(episode.episode.toString(), 2, "0")} {episode.title}
      </h2>
      <p>{episode.description}</p>
      <p>{episode.date}</p>
    </div>
  );
}
