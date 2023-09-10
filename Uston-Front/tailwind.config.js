/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hover" : '#3D3D3D',
        "select" : '#272727',
        "darkgray" : {
          300 : '#AAAAAA',
          400 : '#717171',
          500 : '#3F3F3F', // bordures
          600 : '#272727',
          700 : '#222222',
          800 : '#181818', // background principal
          900 : '#0F0F0F'  // background autres
        },
        "input-txt" : '#121212',
        "txt" : '#FFFFFF',
      },
      minWidth: {
        '12': '48px',
        '16': '64px',
        '32': '128px',
        '48': '192px',
        '52': '208px',
        '64': '256px',
        '96': '384px',
        '128': '512px',
      },
      minHeight: {
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '32': '128px',
        '48': '192px',
        '64': '256px',
        '96': '384px',
      },
      maxWidth: {
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '32': '128px',
        '48': '192px',
        '64': '256px',
        '96': '384px',
        '1/2': '50%',
      },
      keyframes: {
        rotate: {
          '0%' : { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      },
    },
  },
  plugins: [],
}
