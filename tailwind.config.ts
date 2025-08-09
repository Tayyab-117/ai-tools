import type { Config } from 'tailwindcss'
export default <Config>{
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './tools-impl/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222 47% 11%)',
        muted: { DEFAULT: 'hsl(210 16% 96%)', foreground: 'hsl(215 16% 45%)' },
        primary: { DEFAULT: '#3B82F6', foreground: '#fff' },
        card: { DEFAULT: '#fff', foreground: 'hsl(222 47% 11%)' }
      },
      boxShadow: { soft: '0 2px 12px rgba(0,0,0,0.06)' }
    }
  },
  plugins: [],
}
