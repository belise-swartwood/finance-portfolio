import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { approachQuote, principles } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

// Editorial "Approach" section: a pull-quote and a numbered set of principles.
const Philosophy = () => (
  <div className="container-page section-pad">
    <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      {/* Left: heading + pull quote */}
      <div className="lg:sticky lg:top-28">
        <SectionHeading
          index="05"
          eyebrow="Approach"
          title="How I think about markets."
          lead="A short set of principles that shapes every model, memo, and trade idea."
        />

        <motion.blockquote
          variants={fadeIn('up', 0.15)}
          className="mt-10 border-l-2 border-forest pl-6"
        >
          <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
            &ldquo;{approachQuote}&rdquo;
          </p>
          <footer className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            — Belise Swartwood
          </footer>
        </motion.blockquote>
      </div>

      {/* Right: principles */}
      <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2">
        {principles.map((principle, i) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.no}
              variants={fadeIn('up', i * 0.08)}
              className="group flex flex-col bg-paper-light p-7 transition-colors hover:bg-forest-tint"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-semibold text-brass">
                  {principle.no}
                </span>
                <Icon className="h-5 w-5 text-forest" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {principle.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default SectionWrapper(Philosophy, 'approach');
