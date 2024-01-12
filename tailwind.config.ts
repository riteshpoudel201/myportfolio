/* @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        duskblue : {
          100: '#6E8BC2',
          200: '#5B7BB8',
          300: '#4A6CAD',
          400: '#395EA3',
          500 :'#2b5199',
          600: '#27498A',
          700: '#22417A',
          800: '#1E396B',
          900: '#1A315C',
      }
    }
    },
    
  },
  plugins: [],
}
