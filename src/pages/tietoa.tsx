import { newsletterUrl } from "@/settings";
import Link from "next/link";

export default function Tietoja() {
  return (
    <main>
      <h1 className="text-2xl mb-4">Mikä Yhteensopimattomat?</h1>
      <p className="mb-4">Yhteensopimattomat on Maijan ja Antin podcast...</p>
      <p className="mb-4">Maija on...</p>
      <p className="mb-4">Antti on...</p>
      <p className="mb-4">
        Voit tukea podcastin tekoa kuuntelemalla sitä, kertomalla siitä
        kaverille, <a href={newsletterUrl}>tilaamalla uutiskirjeemme</a> tai
        liittymälle <a href="https://www.google.com">Patreon-tukijaksi</a>.
      </p>
      <Link href="/">Takaisin jaksoihin&hellip;</Link>
    </main>
  );
}
