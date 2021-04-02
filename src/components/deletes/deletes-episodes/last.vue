<template>
<div>contents episode last</div>
</template>

<script>
export default {
name: "last",
  methods: {
    clickNext(){
      this.$emit('update:episodePlayed', 'last')
    }
  },
}
</script>

<style scoped>

</style>