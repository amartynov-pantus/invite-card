<template>

<!--  <keep-alive>-->
  <component v-on="$listeners" :is="bookmark" />
<!--    </keep-alive>-->


</template>

<script>
import Front from "@/components/views/movie/scenes/episodes/card";
import Loading from "@/components/views/movie/scenes/episodes/loading";
import Mail from "@/components/views/movie/scenes/episodes/mail";



export default {
  name: "scenes",
  components: {
    Mail,
    Loading,
    Front
  },
  props: {
    bookmark: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>