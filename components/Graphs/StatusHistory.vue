<template>
  <div>
  </div>
</template>

<script>

export var statushistorydata = require("~/data/status.json");

export default {
  asyncData ({ params }) {
      return {statushistorydata};
  },
  components: {
    statushistorydata
  },
  data() {
    return {
      loadData: statushistorydata
    };
  },
  mounted() {
    console.log("statushistorydata loaded");
    this.fetchData();
  },
  loadData() {
      const statushistorydata = require("~/data/status.json");
      return statushistorydata;
  },
  methods: {
    async fetchData() {
      const statushistorydata = require("~/data/status.json");
      return statushistorydata;
      // console.log(responsetime.metrics)
    }
  }
}
</script> 

<style>
</style>