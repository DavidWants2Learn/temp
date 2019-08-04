<template>
    <div id="container1">
        <header class="page_header">
            <div id="learnTitle">
                    {{metadata.learn}}
            </div>
        </header>
        <div id="wrapper">
            <div id="container">
                <div id="dropdown">
                    <header>
                        <h1 class="title">
                            <div>
                                <button class="title" v-on:click="bpHidden = !bpHidden">{{metadata.bestPractices}}</button>
                            </div>
                        </h1>
                    </header>
                    <h1 v-if="!bpHidden"> 
                        <div class="panel-content" v-html="metadata.bestPracticesText"></div>
                    </h1>
                </div>
            </div>
    
            <div id="container">
                <div id="dropdown">
                    <header>
                        <h1 class="title">
                            <div>
                                <button class="title" @click="psHidden = !psHidden">{{metadata.physicalSecurity}}</button>
                            </div>
                        </h1>
                    </header>
                    <h1 v-if="!psHidden"> 
                        <div class="panel-content" v-html="metadata.physicalSecurityText"></div>
                    </h1>
                </div>
            </div>
        
            <div id="container">
                <header>
                    <h1 class="title">
                        <button class="title" @click="proHidden = !proHidden">{{metadata.protection}}</button>
                    </h1>
                </header>
                <h1 v-if="!proHidden">
                    <div class="panel-content" v-html="metadata.protectionText"></div>
                </h1>
            </div>

            <div id="container">
                <header>
                    <h1 class="title">
                        <button class="title" @click="comHidden = !comHidden">{{metadata.compliance}}</button>
                    </h1>
                </header>
                <h1 v-if="!comHidden">
                    <div class="panel-content" v-html="metadata.complianceText"></div> 
                </h1>
            </div>
        
            <div id="container">
                <header>
                    <h1 class="title">
                        <button class="title" @click="priHidden = !priHidden">{{metadata.privacyPolicy}}</button>
                    </h1>
                </header>
                <h1 v-if="!priHidden">
                    <div class="panel-content" v-html="metadata.privacyPolicyText"></div>
                </h1>
            </div> 

            <div id="container">
                <header>
                    <h1 class="title">
                        <button class="title" @click="apiHidden = !apiHidden">{{metadata.apiTermsofService}}</button>
                    </h1>
                </header>
                <h1 v-if="!apiHidden">
                    <div class="panel-content" v-html="metadata.apiTermsofServiceText"></div>
                </h1>
            </div>

            <div id="container">
                <header>
                    <h1 class="title">
                        <button class="title" @click="gdprHidden = !gdprHidden">{{metadata.gdpr}}</button>
                    </h1>
                </header>
                <h1 v-if="!gdprHidden">
                    <div class="panel-content" v-html="metadata.gdprText"></div>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import metadata from '~/app/metadata/resource/en-US/resource.json'

export default {
  
  asyncData ({ params }) {
      return {
        metadata
        }
  },
  components: {
  },
  /*el: '#dropdown',
        data: function() {
            return{bpHidden: true}
        },*/
    name: "dropdown",
    data: function() {
            return{
                bpHidden: false, 
                psHidden: true, 
                proHidden: true, 
                comHidden: true, 
                priHidden: true, 
                apiHidden: true, 
                gdprHidden: false
            }
        },
}

</script>

<style scoped src="@/assets/css/learn.css">
 
</style>
