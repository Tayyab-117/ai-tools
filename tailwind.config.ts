import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './tools/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: '#3B82F6', surface: '#fff', ink: '#0f172a', muted: '#f6f7fb' }, boxShadow: { soft: '0 2px 20px rgba(0,0,0,0.06)' }, borderRadius: { '2xl': '1.25rem' } } },
  plugins: []
}
export default config

