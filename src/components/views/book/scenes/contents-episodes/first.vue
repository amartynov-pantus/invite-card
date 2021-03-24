<template>
<div @click="clickNext">contents Page 1</div>
</template>

<script>
export default {
name: "first",
  methods: {
    clickNext(){
      this.$emit('update:episodePlayed', 'first')
    }
  },
}
</script>

<style scoped>

</style>