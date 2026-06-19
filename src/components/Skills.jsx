import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { skillGroups } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <div className="container-page section-pad">
    <SectionHeading
      index="03"
      eyebrow="Capabilities"
      title="A toolkit for modeling and decisions."
      lead="Programming, financial modeling, and quantitative methods — the building blocks behind every memo, model, and backtest."
    />

    <div className="mt-14 grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group, i) => {
        const Icon = group.icon;
        return (
          <motion.div
            key={group.title}
            variants={fadeIn('up', i * 0.08)}
            className="card p-7 transition-colors hover:border-forest/30"
          >
            <div className="flex items-center gap-3 border-b border-rule pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-forest/30 bg-forest-tint text-forest">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-forest to-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default SectionWrapper(Skills, 'capabilities');
