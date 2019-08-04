<template>
  <div>
    <CurrentStatusChart />
    <!-- {{responsetimedata.metrics}} -->
  </div>
</template>

<script>
import { eventBus } from '~/plugins/eventBus.js'
import globJSON from '~/components/Globals/globJSON.vue'

const responsetimedata = require("~/data/responsetime.json")
import CurrentStatusChart from '~/components/Graphs/CurrentStatusChart.vue'

export default {
  asyncData ({ params }) {
      return {responsetimedata};
  },
  components: {
    CurrentStatusChart
  },
  data() {
    return {
      loadData: []
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const responsetimedata = require("~/data/responsetime.json");
      return responsetimedata;
      // console.log(responsetime.metrics)
    }
  }
}
</script> 

<style>
</style>