<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  overflow: hidden;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  background: linear-gradient(to left top, rgb(132, 133, 216), rgb(233, 235, 250)) no-repeat;
}
</style>
