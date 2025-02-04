'use client'
import { useState, useRef } from 'react';

type Track = {
  title: string;
  artist: string;
  src: string;
};

type PlaylistProps = {
  title: string;
  trackList: Track[];
};


const Playlist: React.FC<PlaylistProps> = ({ title, trackList }: PlaylistProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);



  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className='dark:bg-gray-900 shadow-sm border border-slate-200 rounded-lg p-6'>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="w-full rounded-lg shadow-md">
        <ul className="divide-y divide-gray-200">
          {trackList.map((track, index) => (
            <li
              key={index}
              className={`p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${currentTrackIndex === index ? 'bg-gray-200 dark:bg-gray-800' : ''
                }`}
              onClick={() => playTrack(index)}
            >
              <div className="text-lg font-medium">{track.title}</div>
              <div className="text-sm text-gray-600">{track.artist}</div>
            </li>
          ))}
        </ul>
      </div>
      <audio ref={audioRef} controls className="mt-6 w-full">
        <source src={trackList[currentTrackIndex]?.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Playlist;
