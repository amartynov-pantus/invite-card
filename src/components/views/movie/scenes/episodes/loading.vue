<template>

      <div class="wrapper">

        <img :src = "require('@/assets/images/loadimg.gif')" class="loading-img"/>
        <div class="tooltip-text">Загрузка.. {{isMobileSafari()}}</div>
      </div>

</template>

<script>
export default {
name: "loading",
  methods: {
    isMobileSafari() {
      // return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
      var ua = window.navigator.userAgent;
      var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      var webkit = !!ua.match(/WebKit/i);
      var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
      return iOSSafari
    }

  },
  mounted() {
    setTimeout(() => this.$emit('update:sceneEndingName', 'loading'), 4000);
  }
}
</script>

<style scoped lang="scss">

.loading-img{
  height: 200px;
}


@media screen and (max-width: 900px) {
  .loading-img{
    height: 100px;
  }
  .tooltip-text{
    font-size: 16px;
  }
}

</style>