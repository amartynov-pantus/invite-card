<template>
<!--  <component :is="chapter" :bookmark="bookmark"></component>-->

  <div class="book-container">

    {{  episodeOrderOfPlay.filter( (elem, index, arr) => { if (elem === currentEpisode) { return arr[index] } }) }}



<!--    <cover  :bookmark="episodeOrderOfPlay.filter( (elem, index, arr) => { if (elem === currentEpisode) {return arr[index+1]}}).toString()"  :episodePlay.sync="currentEpisode" />-->

    <cover  :bookmark="episodeOrderOfPlay.filter( (elem, index, arr) => {return  elem === currentEpisode ? arr[index+1] : null }).toString()"  :episodePlay.sync="currentEpisode" />

<!--    <cover bookmark="Back"  />-->

<!--    <contents v-if="currentEpisode === episodeOrderOfPlay[1]" bookmark="FirstPage" :episodePlay.sync="currentEpisode" />-->

  </div>
</template>

<script>
// import Contents from "@/components/views/book/contents/index";
import Cover from "@/components/views/book/cover/index";
export default {
name: "book",
  components: {Cover, },

  data(){
    return{
      episodeOrderOfPlay: ['front', 'first-pages', 'last-pages', 'back'],
      currentEpisode: 'front',
    }
  },

  mounted() {
    console.log('book')
  },


}
</script>

<style scoped lang="scss">

 .book-container{
  color: #dedede;
 }

</style>