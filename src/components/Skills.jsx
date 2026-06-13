import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { skillGroups } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

// Animated proficiency bar that fills on scroll into view.
const CompetencyBar = ({ name, level }) => (
  <div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-ink">{name}</span>
    </div>
    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-forest to-brass"
      />
    </div>
  </div>
);

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

            <div className="mt-6 space-y-5">
              {group.items.map((item) => (
                <CompetencyBar key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default SectionWrapper(Skills, 'capabilities');
