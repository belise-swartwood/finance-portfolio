import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { stats } from '../constants';

// Count-up figure that animates once when scrolled into view.
const CountUp = ({ to, suffix, isYear }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(isYear ? to - 12 : 0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const from = isYear ? to - 12 : 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + eased * (to - from)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, isYear]);

  return (
    <span ref={ref} className="mono-fig">
      {value}
      {suffix}
    </span>
  );
};

const StatCounters = () => (
  <div className="grid grid-cols-2 divide-rule overflow-hidden rounded-lg border border-rule bg-paper-light sm:grid-cols-4 sm:divide-x">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        variants={fadeIn('up', i * 0.08)}
        className="border-t border-rule p-6 first:border-t-0 sm:border-t-0"
      >
        <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          <CountUp to={stat.value} suffix={stat.suffix} isYear={stat.isYear} />
        </div>
        <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
);

export default StatCounters;
