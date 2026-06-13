import { FiArrowUpRight } from 'react-icons/fi';
import { tickerItems } from '../constants';

// Scrolling capability tape styled like a market ticker. Duplicated track for
// a seamless loop; figures are domain tags, not market prices.
const Ticker = () => {
  const track = [...tickerItems, ...tickerItems];

  return (
    <div className="relative flex items-stretch overflow-hidden border-y border-ink/15 bg-ink text-paper">
      <span className="z-10 flex shrink-0 items-center gap-2 bg-forest px-5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-paper-light">
        Capabilities
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-ticker items-center gap-9 py-3.5 pl-9">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper/75"
            >
              <FiArrowUpRight className="h-3.5 w-3.5 text-forest-soft" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
