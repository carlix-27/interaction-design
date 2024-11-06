/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      primary:{
        50: '#F6E7FD',
        100: '#EECEFA',
        200: '#DC9EF6',
        300: '#CB6DF1',
        400: '#B93DED',
        500: '#A80CE8',
        600: '#860ABA',
      },
      secondary:{
        500: '#00D4FF',
        600: '#00AACC'
      },
      grey:{
        50: '#F9FAFB',
        200: '#E5E7EA',

      }
    },
    fontSize:{


    }
  },
  plugins: [],
}

