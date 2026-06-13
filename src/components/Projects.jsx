import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { fadeIn } from '../utils/motion';
import { getAccent } from '../utils/accents';
import { projects } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

// Project rendered as a financial "tear sheet".
const TearSheet = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const Icon = project.icon;
  const accent = getAccent(project.accent);

  return (
    <motion.article
      variants={fadeIn('up', index * 0.1)}
      className="card group relative flex flex-col overflow-hidden transition-colors hover:border-forest/30"
    >
      {/* Accent top bar */}
      <span
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${accent.topbar}`}
      />

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4 border-b border-rule pb-5">
          <span className={`flex h-12 w-12 items-center justify-center rounded-md ${accent.iconWrap}`}>
            <Icon className="h-6 w-6" />
          </span>
          <div className="text-right">
            <span className={`font-mono text-[0.7rem] font-medium uppercase tracking-wider ${accent.text}`}>
              {project.category}
            </span>
            <p className="mt-0.5 font-mono text-[0.7rem] text-ink-muted">
              {project.ref} · {project.period}
            </p>
          </div>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-md border border-rule">
          {project.metrics.map((metric, mi) => (
            <div
              key={metric.label}
              className={`bg-paper p-4 text-center ${mi === 0 ? 'border-r border-rule' : ''}`}
            >
              <p className={`font-display text-2xl font-semibold ${accent.text}`}>
                {metric.value}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase leading-tight tracking-wide text-ink-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-2.5 border-t border-rule pt-5">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ink-soft transition-colors hover:text-forest"
        >
          {open ? 'Show less' : 'View details'}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <FiChevronDown className="h-4 w-4" />
          </motion.span>
        </button>
      </div>
    </motion.article>
  );
};

const Projects = () => (
  <div className="container-page section-pad">
    <SectionHeading
      index="04"
      eyebrow="Selected Work"
      title="Models, memos, and market strategies."
      lead="A sample of independent and academic projects — from global-macro theses to leveraged buyouts and statistical arbitrage."
    />

    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <TearSheet key={project.title} project={project} index={index} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Projects, 'work');
