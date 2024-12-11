import React, { createContext, useState, useCallback, useEffect } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(false); // Start with music paused
  const { play, stop } = useAutoPlayMusic();

  useEffect(() => {
    // Automatically play music when the site loads
    play();
    setIsPlaying(true); // Update state to reflect the music is playing
  }, [play]);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      stop(); // Stop music
    } else {
      play(); // Start music
    }
    setIsPlaying((prev) => !prev); // Toggle the state
  }, [isPlaying, play, stop]);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
