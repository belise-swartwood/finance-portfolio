import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { fadeIn } from '../utils/motion';
import { getAccent } from '../utils/accents';
import { experiences } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

const TimelineItem = ({ item, index }) => {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;
  const accent = getAccent(item.accent);

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-x-12">
      {/* Node on the spine */}
      <span className="absolute left-4 top-3 z-10 md:left-1/2 md:-translate-x-1/2">
        <span className="relative flex h-3.5 w-3.5">
          <span className={`absolute inline-flex h-full w-full rounded-full ${accent.dot} opacity-40`} />
          <span className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-paper ${accent.dot}`} />
        </span>
      </span>

      <motion.div
        variants={fadeIn(isLeft ? 'right' : 'left', 0.05)}
        className={`ml-12 md:ml-0 ${
          isLeft ? 'md:col-start-1 md:pr-4 md:text-right' : 'md:col-start-2 md:pl-4'
        }`}
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="card p-6 text-left transition-colors hover:border-forest/30"
        >
          <div className="flex items-center gap-3">
            <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.iconWrap}`}>
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className={`font-mono text-[0.7rem] font-medium uppercase tracking-wider ${accent.text}`}>
                {item.period}
              </p>
              <h3 className="font-display text-lg font-semibold leading-tight text-ink">
                {item.role}
              </h3>
            </div>
          </div>

          <p className="mt-3 font-display text-sm font-medium text-ink-soft">{item.company}</p>
          <p className="mt-1 flex items-center gap-1.5 font-mono text-[0.7rem] text-ink-muted">
            <FiMapPin className="h-3.5 w-3.5" />
            {item.location}
          </p>

          <ul className="mt-4 space-y-2.5">
            {item.points.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 70%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <div className="container-page section-pad">
      <SectionHeading
        index="02"
        eyebrow="Track Record"
        title="Research, policy, and the path to markets."
        lead="A trajectory spanning machine-learning research, engineering, and public-sector strategy — each role sharpening a data-first approach to hard problems."
      />

      <div ref={ref} className="relative mt-16">
        <div className="absolute left-6 top-0 h-full w-px -translate-x-1/2 bg-rule md:left-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-6 top-0 h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-forest via-brass to-oxblood md:left-1/2"
        />

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <TimelineItem key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
