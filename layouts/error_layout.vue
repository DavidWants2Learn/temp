<template>
  <div>

    <div class="header">
        <nuxt-link class="nav__item" to="/">
            Trust
        </nuxt-link>
    </div>

    <div class="main">
      <nuxt/>
    </div>

  </div>
</template>

<style scoped>
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