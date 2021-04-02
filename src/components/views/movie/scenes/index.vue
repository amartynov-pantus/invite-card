<template>

<!--  <keep-alive>-->
  <component v-on="$listeners" :is="bookmark" />
<!--    </keep-alive>-->


</template>

<script>
import Front from "@/components/views/movie/scenes/episodes/front";
import Back from "@/components/views/movie/scenes/episodes/back";
import Loading from "@/components/views/movie/scenes/transitions/loading";
import Mail from "@/components/views/movie/scenes/episodes/mail";
import Flipe from "@/components/views/movie/scenes/transitions/flipe";
import BackToTimming from "@/components/views/movie/scenes/transitions/backToTimming";
import TimmingToFinish from "@/components/views/movie/scenes/transitions/timmingToFinish";

export default {
  name: "scenes",
  components: {
    TimmingToFinish,
    BackToTimming,
    Flipe,
    Mail,
    Loading,
    Back,
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