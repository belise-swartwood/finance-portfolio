import { FiArrowUpRight, FiLinkedin, FiMail } from 'react-icons/fi';
import { navLinks, profile } from '../constants';

const Footer = () => {
  const year = new Date().getFullYear();
  const handleNav = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-rule bg-paper-dark/60">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-forest font-display text-sm font-semibold text-paper-light">
                BS
              </span>
              <span className="font-display text-base font-semibold text-ink">
                Belise Swartwood
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              MIT Mathematics &amp; Finance. Building quantitative and fundamental tools
              across corporate finance, asset management, and global macro.
            </p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-deep"
            >
              Download Resume
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2.5">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-ink-faint">
                Navigate
              </p>
              {navLinks.slice(0, 5).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="flex items-center gap-2 text-left text-sm text-ink-soft transition-colors hover:text-forest"
                >
                  <span className="font-mono text-[0.65rem] text-brass">{link.index}</span>
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-ink-faint">
                Connect
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-forest"
              >
                <FiMail className="h-4 w-4" />
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-forest"
              >
                <FiLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-rule pt-6 font-mono text-[0.7rem] text-ink-muted sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-wider">
            React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
