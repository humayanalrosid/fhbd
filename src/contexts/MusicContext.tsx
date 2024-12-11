import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';

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
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to audio element

  // Play music
  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('path/to/your/music.mp3'); // Provide your audio file path here
      audioRef.current.loop = true; // Loop the music if needed
    }
    audioRef.current.play().catch((err) => console.log('Error playing audio:', err));
  };

  // Stop music
  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  // Auto-play music on load based on `isPlaying` state
  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }

    // Cleanup audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null; // Clear the reference when the component is unmounted
      }
    };
  }, [isPlaying]);

  // Toggle play/pause state
  const toggleMusic = useCallback(() => {
    setIsPlaying((prev) => !prev); // Toggle the play state
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
