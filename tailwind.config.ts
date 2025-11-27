import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'porno-black': '#0a0a0a',
        'porno-white': '#ffffff',
        'porno-cyan': '#00ffff',
        'porno-magenta': '#ff00ff',
        'porno-pink': '#ff69b4',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'display': ['"Bebas Neue"', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'glitch-1': 'glitch-1 0.3s infinite',
        'glitch-2': 'glitch-2 0.3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
      },
    },
  },
  plugins: [],
}
export default config

