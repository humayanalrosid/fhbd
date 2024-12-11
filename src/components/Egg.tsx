import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface EggProps {
  onCrack: () => void;
}

export const Egg: React.FC<EggProps> = ({ onCrack }) => {
  const [{ y }, api] = useSpring(() => ({
    from: { y: -500 },
    to: { y: 0 },
    config: { mass: 1, tension: 180, friction: 12 },
    onRest: () => {
      setTimeout(onCrack, 500);
    },
  }));

  return (
    <animated.div
      style={{
        y,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      className="w-48 h-64 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 rounded-[50%] shadow-lg" />
    </animated.div>
  );
};