<template>

      <div class="wrapper">
        <img :src = "require('@/assets/images/loadimg.gif')" height="200"/>
        <div class="tooltip-text">Загрузка..</div>
      </div>

</template>

<script>
export default {
name: "loading",
  mounted() {
    setTimeout(() => this.$emit('update:sceneEndingName', 'loading'), 4000);
  }
}
</script>

<style scoped>

</style>