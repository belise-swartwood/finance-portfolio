import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { fadeIn } from '../utils/motion';
import { contactChannels, profile } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

const Contact = () => (
  <div className="container-page section-pad">
    <SectionHeading
      index="08"
      eyebrow="Contact"
      title="Let's build something rigorous."
      lead="Open to internships, research collaborations, and conversations about markets. Reach me through any of the channels below."
    />

    <div className="mt-14 flex flex-col gap-6">
      {/* Availability */}
      <motion.div
        variants={fadeIn('up', 0.05)}
        className="card border-l-2 border-l-forest p-6 sm:p-7"
      >
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-forest">
          Currently
        </p>
        <p className="mt-2 text-base leading-relaxed text-ink-soft sm:text-lg">
          {profile.availability}.
        </p>
      </motion.div>

      {/* Channels */}
      <motion.div
        variants={fadeIn('up', 0.1)}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {contactChannels.map((channel) => {
          const Icon = channel.icon;
          const content = (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-rule bg-paper text-forest transition-colors group-hover:border-forest/40">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-muted">
                  {channel.label}
                </p>
                <p className="truncate text-sm font-medium text-ink">{channel.value}</p>
              </div>
            </>
          );

          return channel.href ? (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card group flex items-center gap-3 p-5 transition-colors hover:border-forest/30"
            >
              {content}
            </a>
          ) : (
            <div key={channel.label} className="card flex items-center gap-3 p-5">
              {content}
            </div>
          );
        })}
      </motion.div>

      {/* LinkedIn CTA */}
      <motion.a
        variants={fadeIn('up', 0.15)}
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="card group flex items-center justify-between p-6 transition-colors hover:border-forest/30 sm:p-7"
      >
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            Connect on LinkedIn
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Let's grow our professional networks.
          </p>
        </div>
        <FiArrowUpRight className="h-7 w-7 text-forest transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </motion.a>
    </div>
  </div>
);

export default SectionWrapper(Contact, 'contact');
