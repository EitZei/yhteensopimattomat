import Link from "next/link";
import Image from "next/image";
import logo from "../../public/yhteensopimattomat-logo.png";
import { podcastDescription } from "../static";
import Buttons from "./buttons";

export default function Sidenav() {
  return (
    <div className="flex flex-col justify-items-center">
      <Link href="/" className="text-black hover:no-underline mb-4">
        <h1 className="text-4xl text-center dark:text-gray-100">
          Yhteensopimattomat
        </h1>
        <h2 className="text-2xl text-center mb-2 dark:text-gray-100">
          podcast
        </h2>
        <Image src={logo} alt="Yhteensopimattomat" priority={true} />
      </Link>
      {podcastDescription.map((part, i) => (
        <p className="mb-4" key={`description-part-${i}`}>
          {part}
        </p>
      ))}

      {false ? (
        <p className="mb-8">
          <Link href="/tietoa">Mikä Yhteensopimattomat?</Link>
        </p>
      ) : null}

      <div className="hidden md:block">
        <Buttons />
      </div>
    </div>
  );
}
