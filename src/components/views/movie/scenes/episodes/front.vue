<template>
<div >
  <div class="tooltip-text">
    Переверни :)
  </div>

  <label :class="['wrapper', { 'animation-roll': showRoll }]"  >


    <transition name="animation-rotate" mode="out-in">
      <div v-if="showRotate" class="card" @animationend="runNext" >

        <div class="front" @click="clickNext" >

          <div class="bg-frame wrapper" v-show="showRoll">




            <div class="box-gold-frame">
              <img

                  class="bg-gold-frame"
                  :src="require('@/assets/images/bg-gold-frame.svg')"
                  alt="Icon Applicabilities"
              />
            </div>


          </div>

          <div class="logo" v-if="showRoll" >

            <span class="name1" >Андрей</span>
            <span class="ampersand">и</span>
            <span class="name2">София</span>
<!--            <span class="date">05.06.2021</span>-->
          </div>






        </div>

<!--        <div class="front"  v-show="showBack">-->

<!--          <div class="bg-frame wrapper" >-->

<!--                  BACK-->


<!--&lt;!&ndash;            <div class="box-gold-frame">&ndash;&gt;-->
<!--&lt;!&ndash;              <img&ndash;&gt;-->

<!--&lt;!&ndash;                  class="bg-gold-frame"&ndash;&gt;-->
<!--&lt;!&ndash;                  :src="require('@/assets/images/bg-gold-frame.svg')"&ndash;&gt;-->
<!--&lt;!&ndash;                  alt="Icon Applicabilities"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->


<!--          </div>-->

<!--          <div class="logo" v-if="showRoll" >-->

<!--            <span class="name1" >Андрей</span>-->
<!--            <span class="ampersand">и</span>-->
<!--            <span class="name2">София</span>-->
<!--            &lt;!&ndash;            <span class="date">05.06.2021</span>&ndash;&gt;-->
<!--          </div>-->






<!--        </div>-->



      </div>
    </transition>

  </label>

</div>
</template>

<script>
export default {
name: "front",
  data() {
    return {
      showRotate: false,
      showRoll: false,
      // showOpenedBook: false,
      showBack: false
    }

  },

  methods: {
    runNext(){
      console.log('end')
      this.showRoll = true
    },

    clickNext(){
      // this.$emit('update:sceneEndingName', 'front')
      // this.showOpenedBook = true
      // this.$emit('update:sceneEndingName', 'front')
      this.showBack = true
    }

  },

  mounted() {
    this.showRotate = true
  }

}
</script>

<style scoped lang="scss">

@import "~@/assets/css/front.scss";

</style>