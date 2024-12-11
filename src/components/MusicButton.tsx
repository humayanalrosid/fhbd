import React, { useContext } from 'react';
import { Music } from 'lucide-react';
import { MusicContext } from '../contexts/MusicContext';

export const MusicButton: React.FC = () => {
  const { isPlaying, toggleMusic } = useContext(MusicContext);

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition-colors"
    >
      <Music 
        className={`w-6 h-6 transition-transform ${isPlaying ? 'scale-x-[-1]' : ''}`} 
      />
    </button>
  );
};