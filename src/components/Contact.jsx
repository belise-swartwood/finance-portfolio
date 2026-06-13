import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import { fadeIn } from '../utils/motion';
import { contactChannels, profile } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SectionHeading from './SectionHeading';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? `\n${form.email}` : ''}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'rounded-md border border-rule bg-paper px-4 py-3 text-sm text-ink placeholder-ink-faint outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest/30';

  return (
    <div className="container-page section-pad">
      <SectionHeading
        index="08"
        eyebrow="Contact"
        title="Let's build something rigorous."
        lead="Open to internships, research collaborations, and conversations about markets. The fastest way to reach me is below."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Channels */}
        <motion.div variants={fadeIn('right', 0.1)} className="flex flex-col gap-4">
          <div className="card border-l-2 border-l-forest p-6">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-forest">
              Currently
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              {profile.availability}.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
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
                  className="card group flex items-center gap-3 p-4 transition-colors hover:border-forest/30"
                >
                  {content}
                </a>
              ) : (
                <div key={channel.label} className="card flex items-center gap-3 p-4">
                  {content}
                </div>
              );
            })}
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card group flex items-center justify-between p-6 transition-colors hover:border-forest/30"
          >
            <div>
              <p className="font-display text-base font-semibold text-ink">
                Connect on LinkedIn
              </p>
              <p className="mt-1 text-sm text-ink-muted">Let's grow our professional networks.</p>
            </div>
            <FiArrowUpRight className="h-6 w-6 text-forest transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeIn('left', 0.2)}
          onSubmit={handleSubmit}
          className="card flex flex-col gap-5 p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-ink-soft">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-ink-soft">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className={inputClass}
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-ink-soft">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me about the opportunity or idea..."
              className={`${inputClass} resize-none`}
            />
          </label>
          <button type="submit" className="btn-primary self-start">
            Send Message
            <FiSend className="h-4 w-4" />
          </button>
          <p className="font-mono text-[0.7rem] text-ink-muted">
            This opens your email client addressed to {profile.email}.
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
