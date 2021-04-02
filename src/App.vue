<template>
  <div id="app">
<!--    <div v-if="isLoading" class="wrapper">-->
<!--      <img  src = "./assets/loadimg.gif" height="200"/>-->
<!--      <div class="tooltip-text">Загрузка..</div>-->
<!--    </div>-->



   <mail ></mail>

  </div>
</template>

<script>



import Mail from "@/components/views/mail/index";
export default {
  name: 'App',
  components: {Mail},
  data() {
    return{
      isLoading: true,
    }
  },

  methods:{

  },
  mounted() {
    setTimeout(() => this.isLoading = false, 4000);
  }
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
