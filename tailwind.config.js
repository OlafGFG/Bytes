/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'verysmall':'0.2rem',
      },

      spacing:{
        'mheight':'677px',
        'mwidth':'387px',
        'flexwidth':'354px',
        'cardwidth':'364px',
      },
      letterSpacing:{
        'widest-1':'.12rem',
        'widest-2':'.13em',
        'widest-3':'.15rem',
        'widest-4':'.17rem',
        'widest-5':'.2rem',
        'widest-6':'.25rem',
        'widest-7':'.35rem',
        
      },
      colors:{
        mainTheme : "#F46C6C",
        lightRed : "#F5D1D1",
      },
      fontFamily : {
        custom : ["SF",'sans-serif']
      },
      borderWidth : {
        '1':'1.7px',
      },

    },
  },
  plugins: [],
})

