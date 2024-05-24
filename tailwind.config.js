/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '725px',
      lg: '1024px',
      xl: '1440px',
    },
     container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '55px',
      },
    },
    extend: {
      fontSize: {
      '6.2xl': '62px',
      'h-faq': '1.62rem',
    },
    letterSpacing: {
      '2.5': '0.035em',
    },
    spacing:{
       '4.5': '18px',
       '5.5': '1.4rem'
    },
    colors: {
      black: '#212121',
      white: '#FFFFFF',
      borderColor: '#717171',
      violet: '#C265FF',
    },
     textColor: {
      white: '#fff',
      black: '#000',
     },
      fontFamily: {
        inter: 'inter',
        dela: 'DelaGothicOne',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(277.59deg, rgba(43, 41, 41, 0.95) 72.57%, rgba(117, 107, 107, 0.95) 144.11%)',
        'select': 'linear-gradient(97.59deg, rgba(61, 61, 61, 0.2) -44.11%, rgba(167, 167, 167, 0.2) 79.6%)'
      },
      maxWidth: {
        '60': '60%',
      }
    }
  },
  plugins: [],
};
