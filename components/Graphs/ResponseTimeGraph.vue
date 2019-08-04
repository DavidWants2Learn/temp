<template>
  <div>
  </div>
</template>

<script>

export var responsetimedata = require("~/data/responsetime.json");

export default {
  asyncData ({ params }) {
      return {responsetimedata};
  },
  components: {
    responsetimedata
  },
  data() {
    return {
      loadData: responsetimedata
    };
  },
  mounted() {
    console.log("responsetimedata loaded");
    this.fetchData();
  },
  loadData() {
      const responsetimedata = require("~/data/responsetime.json");
      return responsetimedata;
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