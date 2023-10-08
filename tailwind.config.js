/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F35A35',
          light: '#F65A34'
        },
        brand: {
          gray: '#707070'
        }
      },
      maxWidth: {
        base: '1140px'
      },
      fontSize: {
        'lg': ['18px', '33px'],
        'brand2xl': ['28px', '35px'],
        '3xl': ['33px', '40px'],
        '4xl': ['45px', '52px'],
        '4xl-mobile': ['34px', '38px'],
        '5xl': ['50px', '65px'],
        '5xl-mobile': ['35px', '46px'],
      },
      spacing: {
        15: '60px',
        25: '100px'
      },
      fontFamily: {
        futuraRound: ['FuturaRound', 'sans-serif'],
        plexMono: ['IBMPlexMono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}