/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505', // Void Black
                'card-bg': 'rgba(15, 15, 15, 0.9)',
                'panel-bg': 'rgba(26, 26, 26, 0.8)',
                primary: {
                    DEFAULT: '#00F0FF', // System Blue
                    glow: 'rgba(0, 240, 255, 0.5)',
                    dim: 'rgba(0, 240, 255, 0.1)'
                },
                secondary: {
                    DEFAULT: '#BD00FF', // Shadow Purple
                    glow: 'rgba(189, 0, 255, 0.5)'
                },
                success: {
                    DEFAULT: '#00FF94', // Green
                    glow: 'rgba(0, 255, 148, 0.5)'
                },
                danger: '#FF003C', // Red
                warning: '#FFD700', // Gold
                muted: '#333333',
                text: {
                    primary: '#FFFFFF',
                    secondary: '#A3A3A3',
                    muted: '#525252'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
                heading: ['Orbitron', 'Rajdhani', 'sans-serif'], // System Fonts
                mono: ['Share Tech Mono', 'monospace'], // Data Fonts
            },
            boxShadow: {
                'glow-blue': '0 0 10px rgba(0, 240, 255, 0.3), 0 0 20px rgba(0, 240, 255, 0.1)',
                'glow-violet': '0 0 10px rgba(189, 0, 255, 0.3), 0 0 20px rgba(189, 0, 255, 0.1)',
                'glow-green': '0 0 10px rgba(0, 255, 148, 0.3)',
                'system-panel': 'inset 0 0 20px rgba(0, 240, 255, 0.05), 0 0 1px rgba(0, 240, 255, 0.2)',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                },
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                }
            },
            animation: {
                scanline: 'scanline 8s linear infinite',
                glitch: 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
