/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '90v': '90vh',
        '80v': '80vh',
        '70v': '70vh',
        '60v': '60vh',
        '50v': '50vh',
        '40v': '40vh',
        '30v': '30vh',
        '20v': '20vh',
        '10v': '10vh',
      },
      screens: {
        'lg': '1200px'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
