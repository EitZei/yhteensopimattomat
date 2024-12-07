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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl">Yhteensopimattomat</h1>
        <p className="w-1/2">
          Kaikkea tai kaikkia ei ole tarkoitettu olemaan yhdessä, tuntumaan
          samalta tai toimimaan samoin. Samalla ristiriita on luonnonvoima, joka
          paljastaa ennalta-aavistamattomia ajattelun uria ja luo
          pysäyttämätöntä liikettä. Kenties lopulta tuo voima vaikuttaa myös sen
          vapauttaneisiin ja syntyy uutta. Yhteensopivampaa.
        </p>
        <div>
          {episodes.map((episode, i) => (
            <EpisodeListItem key={`episode-${i}`} episode={episode} />
          ))}
        </div>
      </main>
    </div>
  );
}
