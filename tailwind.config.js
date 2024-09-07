/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main1:'#484F3D',
        main2:'#EBE19A',
        main3:'#E6E299',
        main4:'#00492E',
      },
    },
  },
  plugins: [],
};
