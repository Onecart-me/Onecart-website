/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Router
    './src/**/*.{js,ts,jsx,tsx}', // optional, if you have a src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        plusjakartasans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        bgButton:
          'linear-gradient(91.9deg, #DD0CED -5.47%, #890D8B 24.94%, #701C8F 63.75%, #403B98 96.79%)',
        heroImage: "url('/images/background-image-hero.png')",
        heroImageTab: "url('/images/background-image-section.png')",
      },
    },
  },
  plugins: [],
};
