<template>
  <header class="top-header util__flex util__container">
    <nav class="top-header__col">
      
    
       <a href="/" class="top-header__col top-header__logo"><img id="logo" src="~/static/images/trust-blackline-logo.png" alt="Trust Blackline Logo"></a>
    
      
      
      <nuxt-link class="nav__item" id="nav-right" to="/certificates">Certificates</nuxt-link>
      <nuxt-link class="nav__item" id="nav-right" to="/calendar">Calendar</nuxt-link>
      <nuxt-link class="nav__item" id="nav-right" to="/learn">Learn</nuxt-link>
      <nuxt-link class="nav__item" id="nav-right" to="/security">Security</nuxt-link>
      <nuxt-link class="nav__item" id="nav-right" to="/">Trust</nuxt-link>
    </nav>
     
    
  </header>
</template>

<script>
import metadata from '~/app/metadata/resource/en-US/resource.json'

export default {
  asyncData ({ params }) {
      return {metadata}
  },
}

</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #526488;
  letter-spacing: 1px;
  width: 100%;
  text-align: left;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#nav-right:hover{
  color: #037bc0;
}

#nav-right{
  text-decoration: none;
  color: #444444;
  float: right;
  padding: 0.5rem 1rem;
  font-family:"Trust", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
}

#logo{
  margin-top: 0.7rem;
  padding-left: 0.5rem;
  margin-left: 5rem;
}

.top-header__col{
  margin-right: 5rem;
}
</style>
