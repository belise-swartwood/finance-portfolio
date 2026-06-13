import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiArrowDown, FiArrowUpRight, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../constants';
import headshot from '../assets/headshot.jpg';

// Animated upward sparkline — a quiet finance motif that draws itself in.
const Sparkline = () => (
  <svg viewBox="0 0 200 80" className="h-16 w-full" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="spk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1C5C3E" stopOpacity="0.22" />
        <stop offset="1" stopColor="#1C5C3E" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path
      d="M2 64 L38 56 L68 60 L100 40 L130 46 L162 22 L198 12"
      stroke="#1C5C3E"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.4 }}
    />
    <motion.path
      d="M2 64 L38 56 L68 60 L100 40 L130 46 L162 22 L198 12 L198 78 L2 78 Z"
      fill="url(#spk)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.6 }}
    />
    <motion.circle
      cx="198"
      cy="12"
      r="4"
      fill="#9F7A24"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring' }}
    />
  </svg>
);

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: editorial copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-ink-muted"
          >
            <span className="num-index">MIT</span>
            <span className="h-px w-6 bg-rule" />
            Mathematics &amp; Finance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-forest">{profile.lastName}</span>
            <span className="text-brass">.</span>
          </motion.h1>

          {/* Rotating role */}
          <div className="mt-6 flex h-7 items-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-mono text-sm font-medium uppercase tracking-wider text-ink-soft"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Selected Work
              <FiArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              Get in Touch
            </button>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-rule bg-paper-light text-ink-soft transition-colors hover:border-forest hover:text-forest"
              >
                <FiMail className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-rule bg-paper-light text-ink-soft transition-colors hover:border-forest hover:text-forest"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Offset editorial frame */}
          <div className="absolute inset-0 -m-3 rounded-lg border border-brass/40" />

          <div className="relative overflow-hidden rounded-lg border border-rule bg-paper-light shadow-card">
            <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-muted">
                Cambridge, MA
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-forest">
                Est. 2028
              </span>
            </div>
            <img
              src={headshot}
              alt="Belise Swartwood"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Floating sparkline card */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 top-16 hidden w-40 rounded-lg border border-rule bg-paper-light p-3 shadow-card sm:block"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-muted">
                Trajectory
              </span>
              <FiArrowUpRight className="h-3.5 w-3.5 text-forest" />
            </div>
            <Sparkline />
          </motion.div>

          {/* Floating credential card */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -right-4 hidden rounded-lg border border-rule bg-forest px-4 py-3 text-paper-light shadow-card sm:block"
          >
            <p className="font-display text-base font-semibold">B.S. Math &amp; Finance</p>
            <p className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/70">
              Massachusetts Institute of Technology
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint hover:text-forest sm:flex"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
