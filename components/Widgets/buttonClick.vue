<!-- simple widget increments or decrements value on click -->

<template>
  <div class="message"><br>
    <!-- <p># {{ count }}</p> -->
    <button v-on:click.prevent="increment">+</button>
    <button v-on:click.prevent="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'buttonclicker',
  // data() {
  //   return {
  //     someNumber: Number,
  //     default: 0
  //   }
  // },
  props: {
    someNumber: 1,
    // Number,
    default: 0
  },
  methods: {
    increment () {
      this.$emit('input', this.someNumber)
      // this.count++;
    },
    // decrement () {
    //   this.count--;
    // }
  },
  mounted() {
    this.increment();
  }
}
</script>

<style>
  .message{
    padding-bottom: 20px;
    font-weight: bold;
  }
</style>