// Maps an accent name to a consistent set of Tailwind class fragments so that
// forest, brass, and oxblood treatments stay uniform across components.
export const accentMap = {
  forest: {
    text: 'text-forest',
    border: 'border-forest/30',
    dot: 'bg-forest',
    iconWrap: 'border border-forest/30 bg-forest-tint text-forest',
    bar: 'from-forest to-forest-soft',
    topbar: 'from-forest to-forest-soft',
  },
  brass: {
    text: 'text-brass',
    border: 'border-brass/40',
    dot: 'bg-brass',
    iconWrap: 'border border-brass/40 bg-brass-tint text-brass-deep',
    bar: 'from-brass to-brass-soft',
    topbar: 'from-brass to-brass-soft',
  },
  oxblood: {
    text: 'text-oxblood',
    border: 'border-oxblood/30',
    dot: 'bg-oxblood',
    iconWrap: 'border border-oxblood/30 bg-oxblood/10 text-oxblood',
    bar: 'from-oxblood to-oxblood-soft',
    topbar: 'from-oxblood to-oxblood-soft',
  },
};

export const getAccent = (name) => accentMap[name] || accentMap.forest;
