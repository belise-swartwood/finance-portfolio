// Framer Motion variant presets shared across sections.

export const fadeIn = (direction = 'up', delay = 0, distance = 26) => {
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }[direction] || { y: distance, x: 0 };

  return {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', duration: 0.85, delay, ease: 'easeOut' },
    },
  };
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', duration: 0.7, delay },
  },
});

export const lineGrow = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export const viewportOnce = { once: true, amount: 0.25 };
