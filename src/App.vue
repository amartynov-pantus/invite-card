<template>
  <div id="app">



    <movie />


  </div>
</template>

<script>
import Movie from "@/components/views/movie/index";
export default {
  name: 'App',
  components: {Movie},
}
</script>

<style lang="scss">
@import "assets/css/normalize.css";
#app {}
body {
  background: #393D3E;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.tooltip-text {
  margin: 10px 0;
  text-align: center;
  font-size: 20px;
  color: #798992;
  font-family: system-ui, serif;
}
</style>