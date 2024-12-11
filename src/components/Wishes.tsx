import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { WISHES } from '../utils/constants';
import { springConfigs, animationDelays } from '../utils/animations';

export const Wishes: React.FC = () => {
  return (
    <div className="mt-12 space-y-4">
      {WISHES.map((wish, i) => (
        <animated.div
          key={i}
          style={useSpring({
            from: { opacity: 0, x: -50 },
            to: { opacity: 1, x: 0 },
            delay: i * animationDelays.stagger + animationDelays.initial,
            config: springConfigs.gentle,
          })}
          className="text-lg text-center font-handwriting text-gray-700"
        >
          {wish}
        </animated.div>
      ))}
    </div>
  );
};