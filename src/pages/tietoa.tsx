import { newsletterUrl } from "@/settings";
import Link from "next/link";

export default function Tietoja() {
  return (
    <main>
      <h1 className="text-2xl mb-4">Mikä Yhteensopimattomat?</h1>
      <p className="mb-4">Yhteensopimattomat on Maijan ja Antin podcast...</p>
      <p className="mb-4">Maijan on...</p>
      <p className="mb-4">Antti on...</p>
      <p className="mb-4">
        Voit tukea podcastin tekoa kuuntelemalla sitä, kertomalla siitä
        kaverille,{" "}
        <a className="text-cyan-600 hover:underline" href={newsletterUrl}>
          tilaamalla uutiskirjeemme
        </a>{" "}
        tai liittymälle{" "}
        <a
          className="text-cyan-600 hover:underline"
          href="https://www.google.com"
        >
          Patreon-tukijaksi
        </a>
        .
      </p>
      <Link className="text-cyan-600 hover:underline" href="/">
        Takaisin jaksoihin&hellip;
      </Link>
    </main>
  );
}
