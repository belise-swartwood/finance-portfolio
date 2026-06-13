import { motion } from 'framer-motion';
import { fadeIn, lineGrow } from '../utils/motion';

// Editorial section header: index number, eyebrow, serif title, animated rule.
const SectionHeading = ({ index, eyebrow, title, lead, align = 'left' }) => {
  const isCenter = align === 'center';
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <motion.div
        variants={fadeIn('up', 0)}
        className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
      >
        {index && <span className="num-index">{index}</span>}
        <span className="eyebrow">
          <span className="h-px w-6 bg-forest/60" />
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeIn('up', 0.08)}
        className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.7rem]"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={lineGrow}
        className={`mt-5 h-px origin-left bg-rule ${isCenter ? 'mx-auto w-24' : 'w-20'}`}
      />

      {lead && (
        <motion.p
          variants={fadeIn('up', 0.16)}
          className="mt-5 text-base leading-relaxed text-ink-muted"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
