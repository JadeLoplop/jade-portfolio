// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Portfolio',
      title: 'Bryan Jade Loplop',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Welcome to Jade Loplop’s portfolio. Explore my web development projects and skills.' },
        { hid: 'keywords', name: 'keywords', content: 'Jade Loplop, portfolio, web development, Nuxt.js, Tailwind CSS, Vercel' },
        { hid: 'author', name: 'author', content: 'Jade Loplop' },
  
        // Open Graph / Facebook
        { hid: 'og:title', property: 'og:title', content: 'Jade Loplop Portfolio' },
        { hid: 'og:description', property: 'og:description', content: 'Welcome to Jade Loplop’s portfolio. Explore my web development projects and skills.' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://jadeloplop.vercel.app/' },
        { hid: 'og:image', property: 'og:image', content: 'https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/416540652_24565064239774589_330214173211628923_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH4z6AS4NgiUAk1XafYKnKMmM5wMgIbOoeYznAyAhs6hxpI7vQo7RsordAYkEDrqAMTt9bNyO2CHKiRZz0on3SH&_nc_ohc=GzW-JLW-lmYQ7kNvgE5iYYF&_nc_ht=scontent.fmnl13-4.fna&oh=00_AYBtpX8cnfp8YiJEY4JnhJewqjCKHH4SAT9sJL7MEPmGhw&oe=66D47365' }, // Replace with your image path
      ],  
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap7' }
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
