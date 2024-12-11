import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { BALLOON_COLORS } from '../utils/constants';

interface BalloonProps {
  color: string;
  delay: number;
  x: number;
}

const Balloon: React.FC<BalloonProps> = ({ color, delay, x }) => {
  const spring = useSpring({
    from: { y: window.innerHeight, opacity: 0 },
    to: { y: -100, opacity: 1 },
    config: { duration: 4000 },
    delay,
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...spring,
        position: 'absolute',
        left: `${x}%`,
      }}
      className={`w-12 h-16 ${color} rounded-full before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0.5 before:h-8 before:bg-gray-400`}
    />
  );
};

export const Balloons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {BALLOON_COLORS.map((color, i) => (
        <Balloon
          key={i}
          color={color}
          delay={i * 1000}
          x={15 + i * 15}
        />
      ))}
    </div>
  );
};