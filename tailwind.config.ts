import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  safelist: [
    'group-hover:text-skill-html5',
    'group-hover:text-skill-css3',
    'group-hover:text-skill-javascript',
    'group-hover:text-skill-react',
    'group-hover:text-skill-nextjs',
    'group-hover:text-skill-nodejs',
    'group-hover:text-skill-tailwindcss',
    'group-hover:text-skill-github',
    'group-hover:text-skill-figma',
    'group-hover:text-skill-aws',
    'group-hover:text-skill-database',
    'group-hover:text-skill-atlassian',
  ],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1920px',
      '2k': '2560px',
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
    fontFamily: {
      primary: 'var(--font-jetbrainsMono)',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        skill: {
          html5: 'var(--html5)',
          css3: 'var(--css3)',
          javascript: 'var(--javascript)',
          react: 'var(--react)',
          nextjs: 'var(--nextjs)',
          nodejs: 'var(--nodejs)',
          tailwindcss: 'var(--tailwindcss)',
          github: 'var(--github)',
          figma: 'var(--figma)',
          aws: 'var(--aws)',
          database: 'var(--database)',
          atlassian: 'var(--atlassian)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
