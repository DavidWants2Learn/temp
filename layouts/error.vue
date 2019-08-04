<template>
  <div id="error_page">
    <li v-for="(value, key, index) in error" :key='index'>
      <b>{{key}}:</b> {{value}}
    </li>
  </div>
</template>

<script>

export default {
    layout: 'error_layout',
    props: [
      'error'
    ],
  components: {
  }
}
</script>

<style>
#error {
    margin: 20px;
    text-align: center;
    margin-top: 50%;
}

#errorStatus {
    font-family: monospace;
    font-size: 42px;
    background: red;
    color: white;
    line-height: 60px;
    margin: 10px 15%;
}

#errorMsg {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 24px;
    line-height: 36px;
}

</style>