import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface PhotoFrameProps {
  visible: boolean;
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({ visible }) => {
  const spring = useSpring({
    scale: visible ? 1 : 0,
    opacity: visible ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={spring}
      className="relative w-48 h-48 mx-auto"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 p-1 animate-spin-slow">
        <div className="rounded-full overflow-hidden h-full w-full">
          <img
            src="https://raw.githubusercontent.com/humayanalrosid/fhbd/175b4276f01331ac77697616d89937dc1563a215/public/farhana.jpg"
            alt="Birthday Girl"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </animated.div>
  );
};

