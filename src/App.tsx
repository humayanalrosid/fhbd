import React, { useState, useEffect } from 'react';
import { Egg } from './components/Egg';
import { PhotoFrame } from './components/PhotoFrame';
import { Cake } from './components/Cake';
import { Confetti } from './components/Confetti';
import { Balloons } from './components/Balloons';
import { Wishes } from './components/Wishes';
import { MusicButton } from './components/MusicButton';
import { useSpring, animated } from '@react-spring/web';
import useSound from 'use-sound';

export const App: React.FC = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [play, { stop }] = useSound('/birthday-music.mp3', {
    volume: 0.5,
  });

  useEffect(() => {
    // Start playing music when component mounts
    play();
    // Cleanup function to stop music when component unmounts
    return () => stop();
  }, [play, stop]);

  const titleSpring = useSpring({
    opacity: showCake ? 1 : 0,
    y: showCake ? 0 : 20,
    config: { tension: 200, friction: 20 },
    delay: 1000,
  });

  const handleEggCrack = () => {
    setShowPhoto(true);
    setTimeout(() => setShowCake(true), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {!showPhoto && <Egg onCrack={handleEggCrack} />}
      <PhotoFrame visible={showPhoto} />
      
      <animated.h1
        style={titleSpring}
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mt-8"
      >
        Happy Birthday Farhana!
      </animated.h1>

      <Cake visible={showCake} />
      {showCake && (
        <>
          <Confetti />
          <Balloons />
          <Wishes />
        </>
      )}
      <MusicButton />
    </div>
  );
};

export default App;