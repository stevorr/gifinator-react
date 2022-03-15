/* custom tailwind plugins */
const plugin = require('tailwindcss/plugin')

const shapeRendering = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.shape-auto': {
      'shape-rendering': 'auto',
    },
    '.shape-speed': {
      'shape-rendering': 'optimizeSpeed',
    },
    '.shape-crisp': {
      'shape-rendering': 'crispEdges',
    },
    '.shape-precision': {
      'shape-rendering': 'geometricPrecision',
    },
  }

  addUtilities(newUtilities)
})
/* end custom tailwind plugins */

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontsize: {
      'btitle': '1.35rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    shapeRendering
  ],
}
