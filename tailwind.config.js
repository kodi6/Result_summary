/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Lightslatebluebackground: 'hsl(252, 100%, 67%)',        
        Lightroyalbluebackground: 'hsl(241, 81%, 54%)',
        Violetbluecircle: 'hsla(256, 72%, 46%, 1)',
        Persianbluecircle: 'hsla(241, 72%, 46%, 0)',
        White: 'hsl(0, 0%, 100%)',
        Paleblue: 'hsl(221, 100%, 96%)',
        Lightlavender: 'hsl(241, 100%, 89%)',
        Darkgrayblue: 'hsl(224, 30%, 27%)'      
      }
    },
  },
  plugins: [],
}

