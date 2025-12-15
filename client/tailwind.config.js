/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'card-bg': '#0F0F0F',
        'panel-bg': '#1A1A1A',
        primary: { DEFAULT: '#00F0FF', glow: 'rgba(0, 240, 255, 0.5)' },
        secondary: { DEFAULT: '#BD00FF', glow: 'rgba(189, 0, 255, 0.5)' },
        success: { DEFAULT: '#00FF94', glow: 'rgba(0, 255, 148, 0.5)' },
        danger: '#FF003C',
        warning: '#FFD700',
        muted: '#333333',
        text: { primary: '#FFFFFF', secondary: '#A3A3A3', muted: '#525252' }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Orbitron', 'Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 10px rgba(0, 240, 255, 0.3), 0 0 20px rgba(0, 240, 255, 0.1)',
        'glow-violet': '0 0 10px rgba(189, 0, 255, 0.3), 0 0 20px rgba(189, 0, 255, 0.1)',
        'glow-green': '0 0 10px rgba(0, 255, 148, 0.3)',
      },
    },
  },
  plugins: [],
}
