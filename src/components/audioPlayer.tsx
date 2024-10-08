import React, {useRef, useState} from 'react';

type AudioPlayerParams = {
  audioUrl: string
}

const AudioPlayer = ({audioUrl}: AudioPlayerParams) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current === null) {
      return;
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl}/>
      <button onClick={togglePlay}>{isPlaying ? 'Пауза' : 'Проиграть'}</button>
    </div>
  );
};

export default AudioPlayer;