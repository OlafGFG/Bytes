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
        'small-4':'4px',
        'small-5':'5px',
        'small-6':'6px',
        'small-7':'7px',
        'small-8':'8px',
        'small-9':'9px',
        'small-10':'10px',
        'small-11':'11px',
        'small-12':'12px',
        'small-13':'13px',
        'small-14':'14px',
        'small-15':'15px',
        'small-16':'16px',
        'small-17':'17px',
        'small-18':'18px',
        'small-19':'19px',
        'small-20':'20px',
        'small-21':'21px',
        'small-22':'22px',
        'small-23':'23px',
        'small-24':'24px',
        'small-25':'25px',
        'small-26':'26px',
        'small-27':'27px',
        'small-28':'28px',
        'small-29':'29px',
        'small-30':'30px',
        'small-31':'31px',


      },

      spacing:{
        'mheight':'677px',
        'mwidth':'387px',
        'flexwidth':'354px',
        'cardwidth':'364px',
        'onep':'1px',
        'twop':'2px',
        'footer-width':'383px',
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
        vendortimepricing : '#FF8A83',
        itemcustombg : '#F8F8F8',
      },
      fontFamily : {
        custom : ["SF",'sans-serif'],
        display : ["display",'sans-serif'],
      },
      borderWidth : {
        '1':'1.7px',
      },

    },
  },
  plugins: [],
})

