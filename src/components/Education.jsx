import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import { fadeIn, staggerContainer } from '../utils/motion';
import { education } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

const Education = () => (
  <div className="container-page section-pad">
    <SectionHeading
      index="06"
      eyebrow="Education"
      title="Grounded at MIT."
      lead="A mathematics and finance curriculum anchored in hands-on laboratory coursework and applied investment analysis."
    />

    <motion.div variants={fadeIn('up', 0.1)} className="card mt-14 overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: institution */}
        <div className="relative border-b border-rule bg-forest p-8 text-paper-light lg:border-b-0 lg:border-r">
          <div className="absolute right-6 top-4 font-display text-7xl font-semibold text-paper/10">
            2028
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-paper-light font-display text-lg font-semibold text-forest">
            MIT
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold text-paper-light">
            {education.school}
          </h3>
          <p className="mt-2 text-base font-medium text-brass-soft">{education.degree}</p>

          <div className="mt-6 space-y-2.5 font-mono text-xs text-paper/80">
            <p className="flex items-center gap-2">
              <FiCalendar className="h-4 w-4 text-paper/60" />
              {education.period}
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="h-4 w-4 text-paper/60" />
              {education.location}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {education.honors.map((honor) => (
              <span
                key={honor}
                className="inline-flex items-center gap-1.5 rounded-full border border-paper/25 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-paper-light"
              >
                <FiAward className="h-3.5 w-3.5" />
                {honor}
              </span>
            ))}
          </div>
        </div>

        {/* Right: coursework */}
        <div className="p-8">
          <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft">
            <FiBookOpen className="h-4 w-4 text-forest" />
            Relevant Coursework
          </p>
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5 grid gap-3 sm:grid-cols-2"
          >
            {education.coursework.map((course) => (
              <motion.div
                key={course}
                variants={fadeIn('up', 0)}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-md border border-rule bg-paper px-4 py-3 text-sm text-ink-soft transition-colors hover:border-forest/30 hover:text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-forest to-brass" />
                {course}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default SectionWrapper(Education, 'education');
