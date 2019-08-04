<template>
  <div>
    <div class="renderclass">
      <p>Web Requests</p>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'render',
  components: {
  },
  props: {
    // values: values
  },
  data() {
    return {
      // tData: transactionData,
      initialX: -160,
      deltaX: 25,
      initialY: 15,
      deltaY: 25
    }
  },
  methods: {
    drawCirc(radius) {
      var svg = d3.select(".renderclass")
      .append("svg")

      svg
        .append("circle")
        .attr("fill", "red")
        .attr("r", 20)
        .attr("cx", 50)
        .attr("cy", 50);
    },
    drawRect(gRect, height, currentX, currenty) {
      gRect
        .append("rect")
        .attr("fill", "blue")
        .attr("width", 50) //bar width
        .attr("height", height) //bar height
        .attr("x", currentX) //bargraph width 
        .attr("y", currenty); //height from top right
    }
  },
  created() {
    
  },
  mounted() {
    var currentX = this.initialX
    var currentY = this.initialY

    var svg = d3.select(".renderclass")
      .append("svg")
      .attr("transform", "scale(0.8)")

    var drawRect = this.drawRect;
    d3.json('transaction.json')
    .then(function(data) {
      var gRect = svg.append("g")
      //values.forEach(x => drawRect(gRect, x, currentX += 55, currentY));
      //data["metrics"].forEach(x => this.drawRect(gRect, x.numberOfTransactions, currentX += 55, currentY));
      //data["metrics"].forEach(x => console.log(x.numberOfTransactions));
      data["metrics"].forEach(x => drawRect(gRect, (x.numberOfTransactions)/50000, currentX += 55, currentY));

    }, function(error) {
      console.log("JSON Data failed to upload.");
    });
  }
}
</script>

<style>
  svg {
    width: 1000px;
    height: 1000px;
  }
</style>