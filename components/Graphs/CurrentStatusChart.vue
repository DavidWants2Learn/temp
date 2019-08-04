<!-- Current Status Chart -->

<template>
  <div>
    <globJSON />
    <button v-on:click="decrement()">-</button>
    {{counter}}
    <button v-on:click="increment()">+</button>
    <div id="histogram" viewBox="0 0 1000 500">
      <svg>

      </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

import { eventBus } from '~/plugins/eventBus.js'
import globJSON from '~/components/Globals/globJSON.vue'

export default {
  components: {
    globJSON
  },
  methods: {
    increment() {
      this.counter++;
      console.log("increment pressed");
    },
    decrement() {
      this.counter--;
      console.log("decrement pressed");
    },
  },
  data() {
    return {
      MONTHS: this.months,
      // months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
      SVG: this.svg,
      HEIGHT: this.height,
      WIDTH: this.width,
      MARGIN: this.margin,
      DUMMY: this.dummy,
      WEEKDATA: this.weekData,
      counter: 0,
    }
  },
  mounted() {
    var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var y = d3.scaleBand()			// x = d3.scaleBand()	
      .rangeRound([0, height])	// .rangeRound([0, width])
      .paddingInner(0.05)
      .align(0.1);

    var x = d3.scaleLinear()		// y = d3.scaleLinear()
      .rangeRound([0, width]);	// .rangeRound([height, 0]);

    var z = d3.scaleOrdinal()
      //       Green,     Blue,      Orange,    Red
      .range(["#32CD32", "#1E90FF", "#FF8C00", "#B22222"]);

// d3.csv("data.csv", function(d, i, columns) {
    // "2019-07-03T
    // 06 Hour 
    // :17 Minute
    // :00 Seconds
    // +00
    // :00"

    eventBus.$on('jsonData', (json) => {
      var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S+%H:%M");
      var data = json;
      console.log(data);

      data = json.statusJSON.incidents.map((json) => {
        return {
          environment: json.environmentName,
          incidentType: json.incidentType,
          startDateTime: parseTime(json.startDateTime),
          endDateTime: parseTime(json.endDateTime),
          description: json.description
        };
      })

      var dataIntermediate = data.map(function(key,i) {
        return data.map(function(d,j) {
          return {x: d[incidentType], y: d[endDateTime] };
        })
      })
      
    });
  },
  beforeUpdate() {
    d3.selectAll("g > *").remove();
  },
  updated() {
    // this.drawGraph(this.WEEKDATA, this.WIDTH, this.MARGIN, this.HEIGHT, this.SVG, this.MONTHS);
  },
  beforeDestroy() {
    console.log("Before Destroy");
    // delete this.drawGraph(this.WEEKDATA, this.WIDTH, this.MARGIN, this.HEIGHT, this.SVG, this.MONTHS);
  },
}
</script>

<style>
</style>