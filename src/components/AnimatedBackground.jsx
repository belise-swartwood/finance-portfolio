import { motion, useScroll, useTransform } from 'framer-motion';

// Ambient editorial background: warm paper, faint ledger grid, paper grain,
// slow drifting tints, and a subtle financial chart watermark.
const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-paper" />
      <div className="absolute inset-0 bg-ledger [background-size:72px_72px] opacity-70" />
      <div className="absolute inset-0 paper-grain opacity-60" />

      {/* Soft, low-contrast tints (no neon glow) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-forest/[0.06] blur-[130px]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-12%] top-1/2 h-[30rem] w-[30rem] rounded-full bg-brass/[0.07] blur-[130px]"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Faint chart watermark along the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.05]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <polyline
          points="0,172 120,150 240,160 360,118 480,134 600,86 720,98 840,58 960,74 1080,28 1200,44"
          stroke="#1C5C3E"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-paper to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
