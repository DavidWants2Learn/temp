<template>
  <div>
  </div>
</template>

<script>

export var transactiondata = require("~/data/transaction.json");

export default {
  asyncData ({ params }) {
      return {transactiondata};
  },
  components: {
    transactiondata
  },
  data() {
    return {
      loadData: transactiondata
    };
  },
  mounted() {
    console.log("transactiondata loaded");
    this.fetchData();
  },
  loadData() {
      const transactiondata = require("~/data/transaction.json");
      return transactiondata;
  },
  methods: {
    async fetchData() {
      const transactiondata = require("~/data/transaction.json");
      return transactiondata;
      // console.log(responsetime.metrics)
    }
  }
}
</script> 

<style>
</style>