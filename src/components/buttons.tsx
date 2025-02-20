import { newsletterUrl } from "@/settings";

export default function Buttons() {
  return (
    <div>
      <a
        href="https://podcasts.apple.com/us/podcast/yhteensopimattomat/id1795319053"
        className="flex items-center justify-center rounded px-6 py-2.5 text-s font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mb-4 dark:filter dark:saturate-50"
        style={{ backgroundColor: "rgb(185, 86, 231)" }}
      >
        <svg
          className="mr-2 h-8 w-8"
          fill="currentColor"
          viewBox="0 4 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>apple</title>
          <path d="M5.92 27.2c-0.88 0-1.68-0.36-2.36-1.12-1.36-1.48-2.36-3.2-2.96-5.12-0.6-1.8-0.72-3.36-0.48-4.88 0.4-2.4 1.64-4.040 3.76-4.88 1.16-0.48 2.4-0.44 3.6 0.040 0.28 0.12 0.56 0.24 0.88 0.32l0.2 0.080c0.080 0.040 0.2 0.040 0.28 0.040 0.24 0 0.52-0.080 0.76-0.2l0.24-0.080c0.6-0.24 1.2-0.44 1.84-0.56 1.24-0.2 2.44 0.080 3.56 0.72 0.64 0.36 1.16 0.84 1.56 1.44 0.24 0.36 0.2 0.8-0.12 1.080-0.12 0.12-0.24 0.2-0.36 0.32-0.2 0.2-0.44 0.4-0.6 0.56-0.64 0.72-0.96 1.72-0.84 2.72s0.68 1.88 1.52 2.4c0.040 0.040 0.080 0.080 0.16 0.12l0.080 0.040c0.68 0.44 0.96 0.88 0.6 1.8-0.68 1.72-1.6 3.12-2.76 4.2-0.96 0.96-2.32 1.16-3.68 0.56-1-0.44-1.8-0.52-2.6-0.28-0.2 0.040-0.36 0.12-0.56 0.2s-0.4 0.16-0.6 0.24c-0.4 0.2-0.72 0.24-1.12 0.24zM5.64 12.56c-0.36 0-0.76 0.080-1.12 0.24-1.52 0.6-2.44 1.76-2.72 3.6-0.2 1.24-0.080 2.56 0.4 4.12 0.52 1.68 1.4 3.16 2.6 4.44 0.52 0.56 1.040 0.72 1.68 0.48 0.16-0.040 0.36-0.12 0.52-0.2 0.2-0.080 0.44-0.16 0.68-0.24 1.2-0.4 2.44-0.28 3.84 0.32 0.72 0.32 1.32 0.28 1.88-0.24 0.96-0.88 1.68-2.040 2.28-3.48 0 0 0 0-0.040 0s-0.040-0.040-0.080-0.040c-1.24-0.8-2.080-2.12-2.28-3.6-0.2-1.52 0.24-3 1.24-4.080 0.16-0.16 0.28-0.28 0.44-0.44-0.16-0.16-0.36-0.28-0.56-0.4-0.8-0.48-1.64-0.64-2.48-0.52-0.48 0.080-0.96 0.28-1.48 0.48l-0.24 0.080c-0.36 0.16-0.84 0.28-1.32 0.28-0.28 0-0.6-0.040-0.88-0.16l-0.2-0.080c-0.32-0.12-0.6-0.24-0.92-0.36-0.44-0.12-0.84-0.2-1.24-0.2zM9 10.88c-0.32 0-0.6-0.12-0.76-0.28-0.32-0.32-0.32-0.72-0.32-1.080 0-0.040 0-0.040 0-0.080 0.2-1.96 1.28-3.44 3.040-4.24 0.32-0.16 0.64-0.24 0.96-0.32l0.2-0.040c0.080-0.040 0.16-0.040 0.24-0.040 0.48 0 1 0.36 1.040 1.080 0.080 2.12-1.48 4.24-3.52 4.84l-0.080 0.040c-0.12 0.040-0.28 0.080-0.48 0.12-0.16 0-0.24 0-0.32 0zM11.68 6.68v0c-1.12 0.52-1.76 1.28-2.040 2.32 0.96-0.32 1.76-1.28 2.040-2.32z"></path>
        </svg>
        Apple Podcasts
      </a>

      <a
        href="https://open.spotify.com/show/4DcM3eqAMnNgJOJtyCAirE?si=rYz0hrrfQU6dzSjtgamshw"
        className="flex items-center justify-center rounded px-6 py-2.5 text-s font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mb-4 dark:filter dark:saturate-50"
        style={{ backgroundColor: "rgb(98, 205, 107)" }}
      >
        <svg
          className="mr-2 h-8 w-8"
          fill="currentColor"
          viewBox="0 4 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>spotify</title>
          <path d="M13.2 20.84c-0.2 0-0.4-0.080-0.56-0.2-1.84-1.6-5.8-1.12-7.2-0.84-0.44 0.12-0.92-0.2-1-0.64-0.12-0.44 0.2-0.88 0.64-1 0.24-0.040 5.8-1.24 8.64 1.2 0.36 0.32 0.4 0.84 0.080 1.2-0.12 0.16-0.36 0.28-0.6 0.28zM14.2 18.44c-0.16 0-0.32-0.040-0.48-0.16-3.36-2.4-8.48-1.080-8.52-1.080-0.44 0.12-0.92-0.16-1.040-0.6s0.16-0.92 0.6-1.040c0.24-0.080 5.92-1.56 9.96 1.32 0.36 0.28 0.48 0.8 0.2 1.16-0.2 0.28-0.44 0.4-0.72 0.4zM15.24 15.72c-0.16 0-0.32-0.040-0.48-0.16-4.44-2.96-10.040-1.040-10.12-1.040-0.44 0.16-0.88-0.080-1.040-0.52s0.080-0.92 0.52-1.080c0.28-0.080 6.48-2.2 11.6 1.24 0.4 0.24 0.48 0.76 0.24 1.16-0.2 0.24-0.48 0.4-0.72 0.4zM9.6 25.6c-5.28 0-9.6-4.32-9.6-9.6s4.32-9.6 9.6-9.6 9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zM9.6 8.080c-4.36 0-7.92 3.56-7.92 7.92s3.56 7.92 7.92 7.92 7.92-3.56 7.92-7.92-3.56-7.92-7.92-7.92z"></path>
        </svg>
        Spotify
      </a>

      <a
        href="https://www.instagram.com/yhteensopimattomat/"
        className="flex items-center justify-center rounded px-6 py-2.5 text-s font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mb-4 dark:filter dark:saturate-50"
        style={{ backgroundColor: "rgb(193, 53, 132)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
        </svg>
        Instagram
      </a>

      <a
        href={newsletterUrl}
        className="flex items-center justify-center rounded px-6 py-2.5 text-s font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mb-4  dark:filter dark:saturate-50"
        style={{ backgroundColor: "rgb(53, 92, 193)" }}
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
            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
          />
        </svg>
        Tilaa uutiskirje
      </a>

      <a
        href="/yhteensopimattomat.xml"
        className="flex items-center justify-center rounded px-6 py-2.5 text-s font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg dark:filter dark:saturate-50"
        style={{ backgroundColor: "rgb(255, 165, 0)" }}
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
            d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        Podcast RSS
      </a>
    </div>
  );
}
