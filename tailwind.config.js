/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F6E7FD",
          100: "#EECEFA",
          200: "#DC9EF6",
          300: "#CB6DF1",
          400: "#B93DED",
          500: "#A80CE8",
          600: "#860ABA",
          700: "#65078B",
          800: "#43055D",
          900: "#22022E",
        },
        secondary: {
          500: "#00D4FF",
          600: "#00AACC",
        },
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EA",
          400: "#9EA2AE",
          900: "#131927",
        },
      },

      fontSize: {
        h1: "48px",
        h2: "40px",
        h3: "32px",
        h4: "28px",
        h5: "24px",
        subtitle1: "18px",
        subtitle2: "16px",
        body1: "16px",
        bodybold1: "16px",
        body2: "14px",
        bodybold2: "14px",
        caption1: "12px",
        caption2: "12px",
        caption3: "10px",
        buttonText: "14px",
      },
      fontFamily: {
        subtitleFont: ["Open Sans", "sans-serif"],
        bodyFont: ["Roboto", "sans-serif"],
        captionFont: ["Roboto", "sans-serif"],
        buttonFont: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'custom-figma': '0px 4px 4px rgba(0, 0, 0, 0.25)', // Sombra personalizada para la imagen
      },

    },
    animation: {
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }}
      })
    }
  ],
};


