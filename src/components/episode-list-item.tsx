import { Episode } from "../types";

type Props = {
  episode: Episode;
};

export default function EpisodeListItem({ episode }: Props) {
  return (
    <div className="mb-4">
      <h2 className="mb-2">
        {episode.episode}. {episode.title}
      </h2>
      <p>{episode.description}</p>
      <p>{episode.date}</p>
    </div>
  );
}
