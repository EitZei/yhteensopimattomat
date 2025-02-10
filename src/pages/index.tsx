import { Episode } from "../types";
import EpisodeListItem from "../components/episode-list-item";
import PlannedEpisodeListItem from "../components/planned-episode-list-item";
import fs from "node:fs/promises";
import path from "node:path";
import generateRssFeed from "../rss";
import Buttons from "@/components/buttons";

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

  generateRssFeed(releasedEpisodes);

  return {
    props: {
      latestEpisode:
        releasedEpisodes.length > 0 ? releasedEpisodes[0] : undefined,
      releasedEpisodes,
      plannedEpisodes: episodes
        .filter((episode) => !episode.released)
        .reverse(),
    },
  };
}

export default function Index({
  latestEpisode,
  releasedEpisodes,
  plannedEpisodes,
}: Props) {
  return (
    <main>
      {latestEpisode ? (
        <section id="latestEpisode" className="mb-8 pb-4 border-b">
          <h1 className="text-2xl mb-4">Viimeisin jakso</h1>
          <EpisodeListItem episode={latestEpisode} isLatest={true} />
        </section>
      ) : null}
      {plannedEpisodes.length > 0 ? (
        <section id="plannedEpiosodes" className="mb-8 pb-4 border-b">
          <h1 className="text-2xl mb-4">Tulevat jaksot</h1>
          <div className="flex flex-wrap justify-between">
            {plannedEpisodes.map((episode, i) => (
              <div key={`episode-${i}`} className="w-full lg:w-5/12">
                <PlannedEpisodeListItem episode={episode} />
              </div>
            ))}
            <div className="w-full lg:w-5/12 mb-4">
              <div className="mb-2">
                <h2 className="font-bold">Puuttuko jokin aihe?</h2>
              </div>
              <p className="mb-2">
                Onko mielessäsi jokin aihe josta haluaisit meidän puhuvan?
              </p>
              <p>
                <a
                  href="https://forms.gle/isPU4suTqztamUje6"
                  className="flex items-center justify-center rounded px-6 py-2.5 text-s font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  dark:filter dark:saturate-50"
                  style={{ backgroundColor: "rgb(77, 166, 255)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  Anna palautetta
                </a>
              </p>
            </div>
          </div>
        </section>
      ) : null}
      {releasedEpisodes.length > 0 ? (
        <section id="releasedEpisodes" className="mb-4 pb-4">
          <h1 className="text-2xl mb-4">Julkaistut jaksot</h1>
          {releasedEpisodes.map((episode, i) => (
            <div key={`episode-${i}`}>
              <EpisodeListItem episode={episode} isLatest={false} />
            </div>
          ))}
        </section>
      ) : null}

      <div className="border-t pt-8 mb-8 block md:hidden">
        <Buttons />
      </div>
    </main>
  );
}
