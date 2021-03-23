<template>
  <component v-on="$listeners" :is="bookmark" ></component>
</template>

<script>
import Front from "@/components/views/book/cover/cover-pages/front";
import Back from "@/components/views/book/cover/cover-pages/back";
export default {
name: "cover",
  components: {Back, Front},
  props: {
    bookmark:{
      type: String,
      default: 'Front'
    },
  },
}
</script>

<style scoped>

</style>