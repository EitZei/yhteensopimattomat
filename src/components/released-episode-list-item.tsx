import { ReleasedEpisode } from "../types";
import { formatDate, episodeCode } from "../utils";
import { useRef, useState } from "react";

type Props = {
  episode: ReleasedEpisode;
  isLatest: boolean;
};

export default function ReleasedEpisodeListItem({ episode, isLatest }: Props) {
  const player = useRef<HTMLAudioElement>(null);
  const [isShowExtra, setShowExtra] = useState(false);

  function jumpTo(time: string) {
    const parts = time.split(":");
    const timeSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);

    if (player.current) {
      player.current.currentTime = timeSeconds;
    }
  }

  return (
    <div className="mb-4">
      <div className="mb-2">
        <h2
          className="font-bold"
          id={isLatest ? "latest" : episodeCode(episode)}
        >
          #{episode.episode} {episode.title}
        </h2>
        <p className="text-xs text-slate-600 dark:text-gray-400">
          Julkaistu {formatDate(episode.date)}
        </p>
      </div>
      <p className="mb-2">{episode.description}</p>
      <p className="mb-2">
        {isShowExtra ? (
          <a className="cursor-pointer" onClick={() => setShowExtra(false)}>
            ▲ Piilota aikaleimat ja linkit
          </a>
        ) : (
          <a className="cursor-pointer" onClick={() => setShowExtra(true)}>
            ▼ Näytä aikaleimat ja linkit
          </a>
        )}
      </p>
      <div className={isShowExtra ? "block" : "hidden"}>
        <ul className="mb-2">
          {episode.timestamps.map((timeStamp) => (
            <li key={`timestamp-${timeStamp.time.split(":").join("")}`}>
              <a
                className="cursor-pointer"
                onClick={() => jumpTo(timeStamp.time)}
              >
                {timeStamp.time}
              </a>
              : {timeStamp.description}
            </li>
          ))}
        </ul>
        {episode.links.length > 0 ? (
          <div>
            <p className="mb-2">Jaksossa mainittua:</p>
            <ul className="mb-2">
              {episode.links.map((link, i) => (
                <li key={`link-${i}`}>
                  <a href={link.url}>{link.description}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="mt-4 flex justify-between items-center flex-col gap-2 md:flex-row md:gap-0">
        <audio controls src={episode.url} ref={player}></audio>
        <p>
          <a href={episode.url} download={true}>
            Lataa jakso (mp3)
          </a>
        </p>
      </div>
    </div>
  );
}
