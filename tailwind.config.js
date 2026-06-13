/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F1E7',
          light: '#FCFAF3',
          dark: '#EDE5D4',
          deep: '#E3D9C3',
        },
        ink: {
          DEFAULT: '#1B1A15',
          soft: '#3B3930',
          muted: '#6E6A59',
          faint: '#9C9684',
        },
        forest: {
          DEFAULT: '#1C5C3E',
          deep: '#103D29',
          soft: '#2F7E58',
          tint: '#E2ECE4',
        },
        brass: {
          DEFAULT: '#9F7A24',
          deep: '#7C5F18',
          soft: '#C2A04C',
          tint: '#F1E7CC',
        },
        oxblood: {
          DEFAULT: '#7C2D2D',
          soft: '#9C4444',
        },
        rule: '#D8CDB4',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 28px 60px -34px rgba(27, 26, 21, 0.45)',
        soft: '0 14px 38px -26px rgba(27, 26, 21, 0.4)',
        ring: '0 0 0 1px rgba(27, 26, 21, 0.06)',
      },
      backgroundImage: {
        ledger:
          'linear-gradient(to right, rgba(27,26,21,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,26,21,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        ticker: 'ticker 38s linear infinite',
        rise: 'rise 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
