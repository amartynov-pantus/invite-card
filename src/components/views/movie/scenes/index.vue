<template>

  <component v-on="$listeners" :is="bookmark" />

</template>

<script>
import Front from "@/components/views/movie/scenes/episodes/front";
import Back from "@/components/views/movie/scenes/episodes/back";

export default {
name: "scenes",
  components: {Back, Front},
  props: {
    bookmark:{
      type: String,
    },
  },
}
</script>

<style scoped>

</style>