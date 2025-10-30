module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: '#8be9fd',
        violet: '#7c4dff',
        bg: '#0b1020'
      },
      backgroundImage: {
        'neural-pattern': "radial-gradient(circle at 10% 10%, rgba(124,77,255,0.08), transparent 10%), radial-gradient(circle at 90% 90%, rgba(139,233,253,0.06), transparent 10%)"
      }
    }
  },
  plugins: []
}
