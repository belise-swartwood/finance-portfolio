import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { interests } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';
import swimming from '../assets/swimming.jpg';

const Interests = () => (
  <div className="container-page section-pad">
    <SectionHeading
      index="07"
      eyebrow="Beyond Finance"
      title="Discipline, craft, and community."
      lead="The habits that shape how I work — built in the pool, on the road, on the strings, and across campus."
    />

    <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Featured image */}
      <motion.div
        variants={fadeIn('right', 0.1)}
        className="group relative overflow-hidden rounded-lg border border-rule shadow-card"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <img
          src={swimming}
          alt="MIT Varsity Swimming & Diving"
          className="h-full min-h-[20rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 p-6">
          <span className="inline-flex items-center rounded-full border border-paper/30 bg-ink/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-paper-light backdrop-blur">
            MIT Varsity Swimming &amp; Diving
          </span>
          <p className="mt-3 font-display text-lg font-semibold text-paper-light">
            NCAA DIII Finalist · 2025 Scholar All-American
          </p>
        </div>
      </motion.div>

      {/* Interest cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {interests.map((interest, i) => {
          const Icon = interest.icon;
          return (
            <motion.div
              key={interest.title}
              variants={fadeIn('up', i * 0.08)}
              whileHover={{ y: -4 }}
              className="card group flex flex-col p-6 transition-colors hover:border-forest/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-brass/40 bg-brass-tint text-brass-deep transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{interest.blurb}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default SectionWrapper(Interests, 'beyond');
