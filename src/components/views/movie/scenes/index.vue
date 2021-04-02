<template>

  <component v-on="$listeners" :is="bookmark" />



</template>

<script>
import Front from "@/components/views/movie/scenes/episodes/front";
import Back from "@/components/views/movie/scenes/episodes/back";
import Loading from "@/components/views/movie/scenes/transitions/loading";
import Mail from "@/components/views/movie/scenes/episodes/mail";

export default {
name: "scenes",
  components: {Mail, Loading, Back, Front},
  props: {
    bookmark:{
      type: String,
    },
  },
}
</script>

<style scoped>

</style>