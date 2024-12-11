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
  const [isPlaying, setIsPlaying] = useState(false); // Set default to false to ensure music doesn't start on reload
  const { play, stop } = useAutoPlayMusic();

  useEffect(() => {
    if (isPlaying) {
      play(); // Automatically play when isPlaying is true
    } else {
      stop(); // Stop music when isPlaying is false
    }
  }, [isPlaying, play, stop]); // Add play/stop in the dependency array

  const toggleMusic = useCallback(() => {
    setIsPlaying((prev) => !prev); // Toggle the state
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
