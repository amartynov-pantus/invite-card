<template>
<div>back</div>
</template>

<script>
export default {
name: "back",
  clickNext(){
    this.$emit('update:episodePlayed', 'back')
  }
}
</script>

<style scoped>

</style>