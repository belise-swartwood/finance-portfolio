import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { getAccent } from '../utils/accents';
import { aboutHighlights, pillars } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';
import StatCounters from './StatCounters';

const About = () => (
  <div className="container-page section-pad">
    <SectionHeading
      index="01"
      eyebrow="Profile"
      title="Quantitative rigor, fundamental intuition."
      lead="A student building tools across corporate finance, asset management, and global macro — letting data, not convention, drive the thesis."
    />

    <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Narrative + highlights */}
      <motion.div variants={fadeIn('right', 0.1)} className="card p-8">
        <p className="font-display text-xl font-medium leading-relaxed text-ink">
          From modeling a $44B leveraged buyout to backtesting a market-neutral
          merger-arbitrage strategy across 285 deals, I gravitate toward problems where
          mathematics meets markets.
        </p>
        <p className="mt-5 text-base leading-relaxed text-ink-muted">
          My research background — spanning machine learning in neuroscience and coastal
          engineering — taught me to test the consensus before trusting it. At MIT I pair
          the discipline of a varsity athlete with the curiosity of a researcher, building
          quantitative and fundamental tools that hold up under scrutiny.
        </p>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-rule">
          {aboutHighlights.map((item, i) => (
            <div
              key={item.label}
              className={`bg-paper p-5 ${i % 2 === 0 ? 'border-r border-rule' : ''} ${
                i < 2 ? 'border-b border-rule' : ''
              }`}
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-brass">
                {item.label}
              </p>
              <p className="mt-1.5 font-display text-sm font-medium text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pillars */}
      <motion.div variants={fadeIn('left', 0.2)} className="flex flex-col gap-4">
        {pillars.map((area, i) => {
          const Icon = area.icon;
          const accent = getAccent(area.accent);
          return (
            <motion.div
              key={area.title}
              variants={fadeIn('left', 0.1 * i)}
              whileHover={{ x: 6 }}
              className="card group flex items-start gap-4 p-5 transition-colors hover:border-forest/40"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${accent.iconWrap}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {area.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>

    {/* Ledger-style stats */}
    <div className="mt-10">
      <StatCounters />
    </div>
  </div>
);

export default SectionWrapper(About, 'about');
