import { Episode } from "../types";
import EpisodeListItem from "../components/episode-list-item";
import PlannedEpisodeListItem from "../components/planned-episode-list-item";
import fs from "node:fs/promises";
import path from "node:path";

type Props = {
  latestEpisode?: Episode;
  releasedEpisodes: Episode[];
  plannedEpisodes: Episode[];
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const episodeJson = await fs.readFile(
    path.join(process.cwd(), "src", "data", "episodes.json"),
    {
      encoding: "utf8",
    }
  );

  const episodes: Episode[] = JSON.parse(episodeJson);
  const releasedEpisodes = episodes.filter((episode) => episode.released);

  return {
    props: {
      latestEpisode:
        releasedEpisodes.length > 0 ? releasedEpisodes[0] : undefined,
      releasedEpisodes,
      plannedEpisodes: episodes.filter((episode) => !episode.released),
    },
  };
}

export default function Index({
  latestEpisode,
  releasedEpisodes,
  plannedEpisodes,
}: Props) {
  return (
    <div className="">
      <main className="">
        {latestEpisode ? (
          <section id="latestEpisode" className="mb-8">
            <h1 className="text-2xl">Viimeisin jakso</h1>
            <EpisodeListItem episode={latestEpisode} />
          </section>
        ) : null}
        {plannedEpisodes.length > 0 ? (
          <section id="plannedEpiosodes" className="mb-8">
            <h1 className="text-2xl">Tulevat jaksot</h1>
            <div className="flex flex-wrap justify-between">
              {plannedEpisodes.map((episode, i) => (
                <div key={`episode-${i}`} className="w-full md:w-5/12">
                  <PlannedEpisodeListItem episode={episode} />
                </div>
              ))}
            </div>
          </section>
        ) : null}
        {releasedEpisodes.length > 0 ? (
          <section id="releasedEpisodes" className="mb-8">
            <h1 className="text-2xl">Julkaistut jaksot</h1>
            {releasedEpisodes.map((episode, i) => (
              <div key={`episode-${i}`}>
                <EpisodeListItem episode={episode} />
              </div>
            ))}
          </section>
        ) : null}
      </main>
    </div>
  );
}
