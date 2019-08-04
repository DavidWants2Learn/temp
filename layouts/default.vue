<template>
  <div>

    <div class="header">
      <TopHeader/>
    </div>
    
   <div class="main">
      <nuxt/>
    </div>

    <div class="footer">
      <BottomFooter/>
    </div>

  </div>
</template>

<script>
import { store } from '~/store/index.js'

import TopHeader from '~/components/Globals/TopHeader.vue'
import BottomFooter from '~/components/Globals/BottomFooter.vue'

import * as d3 from "d3";

export default {
  store,
  components: {
    TopHeader,
    BottomFooter,
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background:#fff;
  line-height: 50px;
  z-index: 999;
  text-align: left;
  color: white;
  font-size: 20px;
 
}

.main {
  padding-top: 50px;
  padding-bottom: 45px;
  
 
}

.main a{
  text-decoration: none;
  color: #037bc0;
}

.main a:hover{
  color: #000;
}
.footer {
 /* position: fixed;*/
  bottom: 0;
  left: 0;
  height: 218px;
  width: 100%;
  background: #f8f8f8;
  font-size: 20px;
  line-height: 45px;
  text-align:center;
  text-decoration: none;
 

}

*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}


</style>
