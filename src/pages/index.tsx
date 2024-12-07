import { Episode } from "../types";
import EpisodeListItem from "../components/episode-list-item";
import fs from "node:fs/promises";
import path from "node:path";

type Props = {
  episodes: Episode[];
};

export async function getStaticProps() {
  const episodeJson = await fs.readFile(
    path.join(process.cwd(), "src", "data", "episodes.json"),
    {
      encoding: "utf8",
    }
  );

  return {
    props: {
      episodes: JSON.parse(episodeJson),
    },
  };
}

export default function Index({ episodes }: Props) {
  return (
    <div className="">
      <main className="">
        <div>
          {episodes.map((episode, i) => (
            <EpisodeListItem key={`episode-${i}`} episode={episode} />
          ))}
        </div>
      </main>
    </div>
  );
}
