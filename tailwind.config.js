/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bulleto: ['var(--bulleto)'],
        poppins: ['var(--font-poppins)']
      }
    },screens: {
      'mobM': '375px',

      'mobL': '425px',

      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'lapL': '1440px',
      
      '4k': '2560px',
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('prettier-plugin-tailwindcss'),
  ],
}
