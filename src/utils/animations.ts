import { SpringConfig } from '@react-spring/web';

export const springConfigs = {
  gentle: {
    tension: 200,
    friction: 20,
  } as SpringConfig,
  
  bouncy: {
    mass: 1,
    tension: 180,
    friction: 12,
  } as SpringConfig,
};

export const animationDelays = {
  stagger: 500,
  initial: 2000,
};