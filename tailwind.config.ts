import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#2D8A2F',
          light: '#4caf50',
          dark: '#6b8e5a',
        },
        secondary: {
          DEFAULT: '#ff8c42',
          light: '#ff9800',
          dark: '#ff7043',
        },
        accent: {
          DEFAULT: '#c2185b',
          light: '#e91e63',
          dark: '#ad1457',
        },
      },
    },
  },
  plugins: [],
};
export default config;
