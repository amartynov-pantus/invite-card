<template>

  <component v-on="$listeners" :is="bookmark" />

</template>

<script>
import Front from "@/components/views/book/scenes/cover-episodes/front";
import Back from "@/components/views/book/scenes/cover-episodes/back";
import First from "@/components/views/book/scenes/contents-episodes/first";
import Last from "@/components/views/book/scenes/contents-episodes/last";
export default {
name: "scenes",
  components: {Last, First, Back, Front},
  props: {
    bookmark:{
      type: String,
    },
  },
}
</script>

<style scoped>

</style>