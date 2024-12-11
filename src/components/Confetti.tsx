import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { CONFETTI_CONFIG } from '../utils/constants';

interface ConfettiPieceProps {
  delay: number;
  x: number;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ delay, x }) => {
  const spring = useSpring({
    from: { y: -20, opacity: 1, rotation: 0 },
    to: { y: window.innerHeight, opacity: 0, rotation: 360 },
    config: { duration: CONFETTI_CONFIG.duration },
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
      className="w-2 h-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"
    />
  );
};

export const Confetti: React.FC = () => {
  const [pieces] = useState(() =>
    Array.from({ length: CONFETTI_CONFIG.count }, (_, i) => ({
      id: i,
      delay: Math.random() * CONFETTI_CONFIG.duration,
      x: Math.random() * 100,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none">
      {pieces.map((piece) => (
        <ConfettiPiece key={piece.id} delay={piece.delay} x={piece.x} />
      ))}
    </div>
  );
};