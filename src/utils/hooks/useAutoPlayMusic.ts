import { useEffect } from 'react';
import useSound from 'use-sound';

export const useAutoPlayMusic = () => {
  const [play, { stop }] = useSound('/birthday-music.mp3', {
    volume: 0.5,
  });

  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  return { play, stop };
};