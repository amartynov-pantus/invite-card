<template>
<div @click="clickNext">contents Page 1</div>
</template>

<script>
export default {
name: "first-page",
  methods: {
    clickNext(){
      this.$emit('update:episodePlay', 'last-pages')
    }
  },
}
</script>

<style scoped>

</style>