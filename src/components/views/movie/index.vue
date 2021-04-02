<template>
<!--  <component :is="chapter" :bookmark="bookmark"></component>-->

  <div class="book-container">

<!--  {{  currentEpisode !== null ? getNextEpisode(episodeOrderOfPlay, currentEpisode) :  episodeOrderOfPlay[0]}}-->


    <scenes
        :bookmark="currentEpisode !== null ? getNextEpisode(episodeOrderOfPlay, currentEpisode) :  episodeOrderOfPlay[0]"
        :sceneEndingName.sync="currentEpisode"
    />



  </div>
</template>

<script>

import Scenes from "@/components/views/movie/scenes/index";
export default {
name: "movie",
  components: {Scenes, },

  data(){
    return{
      // порядок сцен
      episodeOrderOfPlay: ['mail','front', 'back'],
      currentEpisode: null,
    }
  },


  methods: {

    getNextEpisode(array, currentElement) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === currentElement) {
          return array[i + 1]
        }
      }
    }

  },


}
</script>

<style scoped lang="scss">

 .book-container{
  color: #dedede;
 }

</style>