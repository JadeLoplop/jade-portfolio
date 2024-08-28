/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        light: {
          background: '#FFFCF2',
          sidebar: '#CCC5B9',
          text: '#252422',
          accent: '#EB5E28',
        },
        dark: {
          background: '#403D39',
          sidebar: '#252422',
          text: '#FFFCF2',
          accent: '#EB5E28',
        },
      },
    },
  },
  plugins: [],
}

