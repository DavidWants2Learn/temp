<!-- linegraph d3 chart -->

<template> 
  <div>
    <globJSON />

    <h1>Response Time</h1>
    <div class="buttons">
      <button class="decrement" @click="decrement()">-</button>
        <!--{{counter}}-->
      <button class="increment" @click="increment()">+</button>
    </div>
    <div class="linechart" viewBox="0 0 1000 500">
    </div>
  </div>
</template>

<script> 
import * as d3 from 'd3';

import { eventBus } from '~/plugins/eventBus.js'
import globJSON from '~/components/Globals/globJSON.vue'

export default {
  name: 'Response-Time',
  components: {
    globJSON,
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
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    drawGraph(WEEKDATA, WIDTH, MARGIN, HEIGHT, SVG, MONTHS) {
      var width = WIDTH;
      var margin = MARGIN;
      var height = HEIGHT;
      var svg = SVG;
      var months = MONTHS;

      var dummy = WEEKDATA[this.counter]

      // Add X axis --> it is a date format
      var x = d3.scaleTime()
        .domain(d3.extent(dummy, function(d) { return d.date; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(dummy, function(d) { return +d.averageResponseTime; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisRight(y));

      // Add the line
      svg
        .append("path")
        .datum(dummy)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.averageResponseTime) }))

      // Make dots
      svg.selectAll(".dot")
        .data(dummy)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", function(d) {return x(d.date)})
        .attr("cy", function(d) {return y(d.averageResponseTime)})
        .attr("r", 3)
        .style("fill", "red")
        ;

      // add ms texts above dots
      svg.selectAll(".annotate")
        .data(dummy)
        .enter()
        .append('text')
        .attr("class", "annotate")
        .attr("x", function(d) {return x(d.date)})
        .attr("y", function(d) {return y(d.averageResponseTime)})
        .text( function (d) {return d.averageResponseTime + ' ms'})
        .style("text-anchor", "middle")
        ;
    }
  },
  mounted() {
    var currentDateTime = Date;
    const chart = d3.select(".linechart");
    const margin = {top: 20, right: 20, bottom: 30, left: 70};
    const width = 1000 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september',
                  'october', 'november', 'december'];
    const svg = chart
        .append('svg')
        .append('g');

    const numberOfDaysWeek = 7;
    const numberOfDaysMon = 30;
    var weekData = [];
    var index = this.weekNumber

    eventBus.$on('jsonData', (json) => {
      var data = json["responseTimeJSON"];

      // initialize d3 timeParse to match date string
      var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");

      // map over data and convert dates to date type
      data = data.map((data) => {
        return {
          date: parseTime(data.date),
          averageResponseTime: data.averageResponseTime,
        };
      })

      // This creates a list of lists of dates
      for (var i=0;i<data.length;i++) {
        var weekList = parseInt(i/7);
        var dayNumber = i%7;
        if(weekData[weekList] == undefined) {
          weekData[weekList] = [];
        }
        weekData[weekList][dayNumber] = data[i];
      }

      // var dummy = [];
      this.WEEKDATA = weekData,
      this.MONTHS = months;
      this.SVG = svg;
      this.HEIGHT = height;
      this.WIDTH = width;
      this.MARGIN = margin;

      this.drawGraph(this.WEEKDATA, this.WIDTH, this.MARGIN, this.HEIGHT, this.SVG, this.MONTHS);
    });
  },
  beforeUpdate() {
    d3.selectAll("g > *").remove();
  },
  updated() {
    this.drawGraph(this.WEEKDATA, this.WIDTH, this.MARGIN, this.HEIGHT, this.SVG, this.MONTHS);
  },
  beforeDestroy() {
    delete this.drawGraph(this.WEEKDATA, this.WIDTH, this.MARGIN, this.HEIGHT, this.SVG, this.MONTHS);
  },
}
</script>

<style> 
.linechart{
  margin-left: 18rem;
  /*color: lightgray*/
  /*position: relative;*/
}
h1 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 28px;
  color: #037bc0;
  margin-left: 16rem;
  font-weight: 400;
}
.decrement {
  background-color: #4251f5;
  margin-left: 18rem;
  width: 2em;  height: 2em;
}
.increment {
  background-color: #4251f5;
  margin-left: 65rem;
  width: 2em;  height: 2em;
}
.buttons {
  margin-bottom: 1rem;
}
.annotate {
  color: black;
  font-weight: 500;
  /*position: absolute;*/
}
</style>