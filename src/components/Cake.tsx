import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Cake as CakeIcon } from 'lucide-react';

interface CakeProps {
  visible: boolean;
}

export const Cake: React.FC<CakeProps> = ({ visible }) => {
  const spring = useSpring({
    scale: visible ? 1 : 0,
    opacity: visible ? 1 : 0,
    config: { tension: 200, friction: 20 },
    delay: 500,
  });

  return (
    <animated.div
      style={spring}
      className="mt-8"
    >
      <CakeIcon className="w-24 h-24 mx-auto text-pink-500" />
      <div className="candles flex justify-center gap-2 -mt-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-6 bg-yellow-400 animate-flicker"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full -mt-1 -ml-0.5" />
          </div>
        ))}
      </div>
    </animated.div>
  );
};