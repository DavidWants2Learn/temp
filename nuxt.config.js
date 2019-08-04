
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  
  head: {
    title: "",
     meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "" }
     ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'},
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'},
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'},
        { src: 'https://kit.fontawesome.com/6679052caa.js'}
      ],
      link: [
          { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Heebo:300,400,700,800&display=swap' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap'},
          // { rel: 'stylesheet', href: '../assets/css/main.css'}
          ]
          
    },
    
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [


  ],
  /*
  ** Plugins to load before mounting the App
  */
//nuxt.config.js
  plugins: [
    '~/plugins/eventBus.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
