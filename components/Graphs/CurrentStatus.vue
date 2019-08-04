<template>
  <div>
  </div>
</template>

<script>

export var currentstatusdata = require("~/data/status.json");

export default {
  asyncData ({ params }) {
      return {currentstatusdata};
  },
  components: {
    currentstatusdata
  },
  data() {
    return {
      loadData: currentstatusdata
    };
  },
  mounted() {
    console.log("currentstatusdata loaded");
    this.fetchData();
  },
  loadData() {
      const currentstatusdata = require("~/data/status.json");
      return currentstatusdata;
  },
  methods: {
    async fetchData() {
      const currentstatusdata = require("~/data/status.json");
      return currentstatusdata;
      // console.log(responsetime.metrics)
    }
  }
}
</script> 

<style>

</style>