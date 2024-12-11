import React, { createContext, useState, useCallback } from 'react';
import { useAutoPlayMusic } from '../utils/hooks';

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  toggleMusic: () => {},
});

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const { play, stop } = useAutoPlayMusic();

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, play, stop]);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};