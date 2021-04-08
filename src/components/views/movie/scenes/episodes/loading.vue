<template>

      <div class="wrapper">

        <img :src = "require('@/assets/images/loadimg.gif')" class="loading-img"/>
        <div class="tooltip-text">Загрузка.. </div>
      </div>

</template>

<script>
export default {
name: "loading",
  methods: {


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