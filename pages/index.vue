<template>
  <div class="">
    <div class="head-section">
      <section class="title-section">
        <h1 class="title-text">Trust BlackLine</h1>
        <h2 class="title-text2">Providing transparency into the world's most trusted solution for Finance Controls &amp; Automation</h2>
      </section>
      <HeroStatusBar />
    </div>
    <div class="status-secton">
      
    </div>
    <!-- {{responsetimedata.components.responsetimedata.metrics[0].averageResponseTime}} -->
    <!-- <li v-for="i in 7">
      {{weektransactiondata.metrics[i-1].numberOfTransactions}}
    </li>
    <br><br>
    <li v-for="i in 7">
      {{responsetimedata.metrics[i-1].averageResponseTime}}
    </li>
    <br><br>
    {{currentstatus}}
    <br><br>
    {{statushistorydata}}
    <br><br>
    <div>
      
    </div> -->
    <div>
      <!-- <linechart /> -->
    </div>
    <div>
      <WebRequests />
      <ResponseTime />
    </div>
    <!-- momentjs to get time -->
  </div>
</template>

<script>
import { eventBus } from '~/plugins/eventBus.js'

import HeroStatus from '~/components/Graphs/HeroStatusBar.vue'
import ResponseTime from '~/components/Graphs/ResponseTime.vue'
import WebRequests from '~/components/Graphs/WebRequests.vue'
import HeroStatusBar from '~/components/Graphs/HeroStatusBar.vue'
import globJSON from '~/components/Globals/globJSON.vue'

import * as d3 from 'd3';
import render from '~/components/Graphs/render.vue'
import linechart from '~/components/Graphs/lineChart.vue'
import responsetimedata from '~/components/Graphs/ResponseTimeGraph.vue'
import transactiondata from '~/components/Graphs/TransactionNumber.vue'
import weektransactiondata from '~/components/Graphs/TransactionNumber.vue'
import currentstatusdata from '~/components/Graphs/CurrentStatus.vue'
import statushistorydata from '~/components/Graphs/CurrentStatus.vue'

export default {
  asyncData ({ params }) {
      return {
        transactiondata: transactiondata.components.transactiondata.metrics[0].numberOfTransactions,
        currentstatus: currentstatusdata.components.currentstatusdata.environments,
        statushistorydata: currentstatusdata.components.currentstatusdata,
        responsetimedata: responsetimedata.components.responsetimedata,
        weektransactiondata: weektransactiondata.components.transactiondata
      }
  },
  head() {
    return {
    title: 'Trust - BlackLine' || '',
    meta: [
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ]
    }
  },
  components: {
    linechart,
    render,
    HeroStatus,
    HeroStatusBar,
    WebRequests,
    ResponseTime,
    globJSON
  },
  mounted() {
  }
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  
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

.head-section{
    width: 100%;
    min-height: 550px;
    position: relative;
    overflow: hidden;
    background: url(/images/hero_graphic.jpg) top no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: block;
}

.title-section{
    width: 750px;
    margin: 65px auto;
    text-align: center;
    line-height: 45px;
    padding-top: 0.5rem;
}

.title-text{
    font-family: "Trust", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #FFF;
    font-size: 50px;
    font-weight: 300;
}

.title-text2{
    font-family: "Trust", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #FFF;
    font-size: 30px;
    font-weight: 300;
}

.stats-section{
  background-color: rgba(0,0,0,0.5);
}


</style>

