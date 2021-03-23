<template>
  <component v-on="$listeners" :is="bookmark"></component>
</template>

<script>
import FirstPage from "@/components/views/book/contents/book-pages/first-page";
import LastPage from "@/components/views/book/contents/book-pages/last-page";

export default {
  name: "contents",
  components: {LastPage, FirstPage},

  props: {
    bookmark: {
      type: String,
      default: 'FirstPage'
    },
  },
}
</script>

<style scoped>

</style>