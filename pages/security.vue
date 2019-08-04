<template>
  <div>
    <header class="module-header">
      <div class="container">
          <h1 class="title" id="security">
            {{metadata.security}}
          </h1>
      </div>
    </header>

    
    <div class="section1">
        <div class="row">
          <div class="col">
        <header>
          <h1 class="title-blue">
              {{metadata.viewSAMLTitle}}
          </h1>
        </header>
        
          <div class="panel-content" v-html="metadata.viewSAMLContent">
          </div>
      </div>
    </div>
    </div>


    <div class="section2">
        <div class="row">
          <div class="col">
        <header>
            <h1 class="title-blue">
                {{metadata.viewSecurityBlackLineTitle}}
            </h1>
        </header>
        <div class="panel-content" v-html="metadata.viewSecurityContent">
        </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import metadata from '~/app/metadata/resource/en-US/resource.json'

export default {
  head() {
    return {
      title: 'Trust - Security' || '',
      meta: [
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ]
    }
  },
  asyncData ({ params }) {
      return {
        metadata
        }
  },
  components: {
  }
}

</script>

<style scoped src="@/assets/css/security.css">
 
</style>
