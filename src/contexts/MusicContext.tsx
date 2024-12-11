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
  const [isPlaying, setIsPlaying] = useState(true); // Default to playing on load
  const { play, stop } = useAutoPlayMusic();

  useEffect(() => {
    if (isPlaying) {
      play(); // Start playing music when isPlaying is true
    } else {
      stop(); // Stop music when isPlaying is false
    }
  }, [isPlaying, play, stop]); // Re-run effect when isPlaying changes

  const toggleMusic = useCallback(() => {
    setIsPlaying((prev) => !prev); // Toggle the play state
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
