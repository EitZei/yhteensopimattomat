import { Episode } from "../types";

type Props = {
  episode: Episode;
};

export default function EpisodeListItem({ episode }: Props) {
  return <div>{episode.name}</div>;
}
