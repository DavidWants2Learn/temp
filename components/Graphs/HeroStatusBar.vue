<template>
  <div>
    <globJSON />
    <div class="stats-section">
          <section class="stats-bg">
            <div class="stat"><h3>Current Status</h3>
              <div v-if="this.currentStatus">
                <!-- {{this.currentStatus}} -->
                <div v-if="this.currentStatus == 'MaintenanceRelease'">
                  <!-- maintenance -->
                  <div class="icon-header">
                    <i class="fas fa-tools" aria-hidden="true"></i>
                  </div>
                  <div class="stat-detail">
                    {{maintenanceRelease}}
                  </div>
                </div>
                <div v-else-if="this.currentStatus == 'ServiceDegradation'">
                  <!-- degrade -->
                  <div class="icon-header">
                    
                    <i class="fas fa-sad-tear" aria-hidden="true"></i>
                  </div>
                  <div class="stat-detail">
                    {{serviceDegradation}}
                  </div>
                </div>
                <div v-else-if="this.currentStatus == 'ServiceDisruption'">
                  <!-- disruption -->
                  <div class="icon-header">
                    <i class="far fa-angry" aria-hidden="true"></i>
                  </div>
                  <div class="stat-detail">
                    {{serviceDisruption}}
                  </div>
                </div>
                <div v-else>
                  <!-- No Issues -->
                  <div class="icon-header">
                    <i class="far fa-check-circle" aria-hidden="true"></i>
                  </div>
                  <div class="stat-detail">
                    {{noIssues}}
                  </div>
                </div>
              </div>
            </div>
            <div class="stat-transaction"><h3>Web Requests</h3>
              <div class="icon-header">{{getTransaction}}</div>
              <div class="stat-detail">{{getResponseTime}} MS {{responseTime}} </div>
            </div>
            <div class="stat-security"><h3>Security Status</h3>
              <div v-if="this.securityStatus == 'ServiceDisruption'">
                <div class="icon-header"><i class="fas fa-code"></i></div>
              </div>
              <div v-else>
                <div class="icon-header"><i class="fas fa-shield-alt"></i></div>
                <div class="stat-detail">No security alerts</div>
              </div>
            </div>
          </section>
        </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

import { eventBus } from '~/plugins/eventBus.js'
import globJSON from '~/components/Globals/globJSON.vue'

export default {
  name: 'Hero-Status-Bar',
  components: {
    globJSON,
  },
  data() {
    return {
      noIssues: "",
      maintenanceRelease: "",
      serviceDegradation: "",
      serviceDisruption: "",
      responseTime: "",
      getResponseTime: "",
      getTransaction: "",
      noSecurityAlerts: "",
      hasSecurityAlerts: "",
      currentStatus: "",
      securityStatus: ""
    }
  },
  created() {
    eventBus.$on('jsonData', (json) => {
      
      // Status changes from resources JSON
      this.noIssues = json["resourceJSON"]["noIssues"];
      this.maintenanceRelease = json["resourceJSON"]["maintenanceRelease"];
      this.serviceDegradation = json["resourceJSON"]["serviceDegradation"];
      this.serviceDisruption = json["resourceJSON"]["serviceDisruption"];

      // Web Request response time text from resources JSON
      this.responseTime = json["resourceJSON"]["responseTime"];

      //Values from ResponseTime JSON
      this.getResponseTime = json["responseTimeJSON"][0]["averageResponseTime"];

      //Values from Transaction JSON
      this.getTransaction = json["transactionJSON"][0]["numberOfTransactions"];

      // Security Alert Status text from resources JSON
      this.noSecurityAlerts = json["resourceJSON"]["noSecurityAlerts"];
      this.hasSecurityAlerts = json["resourceJSON"]["hasSecurityAlerts"];

      this.currentStatus = json["statusJSON"]["incidents"][2]["incidentType"];
    })
  },
  methods: {
    statusIconIterator() {
      return this.currentStatus;
    },
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

.stats-bg{
    /* background-color: rgba(0,0,0,0.5); */
    display: flex;
    justify-content: center;
    color:#fff;
    height: 13rem;
    
}
.stat{
  border-right: 1px solid #5a5a5a;
  margin: 28px 0 29px 0;
  padding: 0 40px;
}

.icon-header{
    font-size: 35px;
    color: #42ce42;
    display: block;
    margin: 20px auto;
    text-align: center;

}

.stat-transaction{
    border-right: 1px solid #5a5a5a;
    margin: 28px 0 29px 0;
    padding: 0 40px;
    text-align: center;
}

  .stat-security{
    margin: 28px 0 29px 0;
    padding: 0 40px;
}

  .stat-detail{
    font-family: "Trust", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
  }

</style>

