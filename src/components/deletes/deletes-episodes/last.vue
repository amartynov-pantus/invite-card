<template>
<div>contents episode last</div>
</template>

<script>
export default {
name: "last",
  methods: {
    clickNext(){
      this.$emit('update:sceneEndingName', 'last')
    }
  },
}
</script>

<style scoped>

</style>