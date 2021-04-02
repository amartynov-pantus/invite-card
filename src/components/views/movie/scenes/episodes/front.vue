<template>
<div >
  <div class="tooltip-text">
    Переверни :)
  </div>

<!--  <label :class="['wrapper', { 'animation-roll': showRoll }]"  >-->


<!--    <transition name="animation-rotate" mode="out-in">-->
<!--      <div v-if="showRotate" class="card" @animationend="unlocked" >-->

<!--        <div class="front" @click="goNextScene" >-->

<!--          <div class="bg-frame wrapper" v-show="showRoll">-->




<!--            <div class="box-gold-frame">-->
<!--              <img-->

<!--                  class="bg-gold-frame"-->
<!--                  :src="require('@/assets/images/bg-gold-frame.svg')"-->
<!--                  alt="Icon Applicabilities"-->
<!--              />-->
<!--            </div>-->


<!--          </div>-->

<!--          <div class="logo" v-if="showRoll"  id="front-logo">-->

<!--            <span class="name1" >Андрей</span>-->
<!--            <span class="ampersand">и</span>-->
<!--            <span class="name2">София</span>-->
<!--&lt;!&ndash;            <span class="date">05.06.2021</span>&ndash;&gt;-->
<!--          </div>-->






<!--        </div>-->




<!--      </div>-->
<!--    </transition>-->

<!--  </label>-->





  <label :class="['wrapper', { 'animation-roll': showRoll }]">
    <input type="checkbox"   v-if="showRoll"/>
    <transition name="animation-rotate" mode="out-in">


    <div class="card" v-if="showRotate" @animationend="unlocked">

      <div class="front">

        <div class="bg-frame wrapper" v-show="showRoll">




          <div class="box-gold-frame">
            <img

                class="bg-gold-frame"
                :src="require('@/assets/images/bg-gold-frame.svg')"
                alt="Icon Applicabilities"
            />
          </div>


        </div>

        <div class="logo" v-if="showRoll"  >

          <span class="name1" >Андрей</span>
          <span class="ampersand">и</span>
          <span class="name2">София</span>
          <!--            <span class="date">05.06.2021</span>-->
        </div>


      </div>




      <div class="back">Back</div>



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


    }

  },

  methods: {
    unlocked(){
      console.log('end')
      this.showRoll = true
    },

    goNextScene(){

      this.$emit('update:sceneEndingName', 'front')

    }

  },

  mounted() {
    this.showRotate = true
  }

}
</script>

<style scoped lang="scss">


.animation-rotate-enter-active {
  -webkit-transition: width 2s, height 2s,  -webkit-transform 2s;
  transition: width 2s, height 2s,  transform 2s;
  animation: 2s ease-out 0s 1 animation-rotate-in;

  @keyframes animation-rotate-in {
    0% {
      opacity: .5;
      width: 100px;
      height: 150px;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {}
  }


}

.animation-roll:hover .card {
  -webkit-transform: rotateX(20deg);
  transform: rotateX(20deg);
  box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
}


label {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  display: block;
  width: 500px;
  height: 750px;
  cursor: pointer;

  //&:hover .card {
  //  -webkit-transform: rotateX(20deg);
  //  transform: rotateX(20deg);
  //  box-shadow: 0 20px 20px rgba(255,255,255,.2);
  //}
  &:hover :checked + .card {
    transform: rotateX(160deg);
    -webkit-transform: rotateX(160deg);
    box-shadow: 0 20px 20px rgba(255,255,255,.2);
  }
}

.card {
  position: relative;
  height: 100%;
  width: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 600ms;
  transition: all 600ms;
  z-index: 20;

  & .back {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }

  & div {
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 118px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 2px;
  }
}

input {
  display: none;
}

:checked + .card {
  transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
}

.front {
  background: url('~@/assets/images/marble.jpg') no-repeat center center;
  background-size: 99%;
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 2px;
  display: flex;
  align-items: center;




}

.bg-frame{

  .box-gold-frame{

    height: 700px;
    position: relative;
    //top: 0px;

    .bg-gold-frame{
      height: 100%;
    }
  }

  &:before{
    content: "";
    position: absolute;
    height: 1px;
    width: 493px;
    bottom: 3px;
    right: 4px;
    background: white;
    border-radius: 32px 4px 4px 32px;
    box-shadow: inset 4px 6px 0px 0px #e4e0ce;
    background-image: linear-gradient(to bottom, transparent 6px, #E4E0CE 8px, transparent 8px, transparent 12px, #E4E0CE 12px, transparent 14px, transparent 18px, #E4E0CE 18px, transparent 20px, transparent 24px, #E4E0CE 24px, transparent 26px, transparent 30px, #E4E0CE 30px, transparent 32px, transparent 36px, #E4E0CE 36px, transparent 38px, transparent 42px, #E4E0CE 42px, transparent 44px, transparent 48px, #E4E0CE 48px, transparent 50px);
  }


}


.logo {
  width: 253px !important;
  height: 230px !important;

  color: #BF953F;
  //color: #D4AF37;

  position: relative !important;
  margin: 0 auto;

  .name1, .name2, .ampersand {
    font-size: 4em;
    text-align: center;
    display: block;
    position: absolute;
    font-family: "BikhamCry",serif;

    animation: 1s ease-out 0s 1 animation-name;
    transition: transform 1s linear;
    transform-origin: top left;
    transform-style: preserve-3D;

    @keyframes animation-name {
      0% {
        opacity: .5;
        top: 100px;
        //color: #ff393c;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
      100% {

      }
    }

  }

  .name1 {
    top: 0;
    left: 0;
  }

  .name2 {
    top: 128px;
    left: 100px;
  }

  .ampersand {
    //font-style: italic;
    top: 50px;
    left: 116px;
  }

  .date {
    border-top: 1px solid #575557;
    border-bottom: 1px solid #575557;
    position: absolute;
    top: 159px;
    left: 60px;
  }

}


.back{
  background: url('~@/assets/images/marble.jpg') no-repeat center center;
  background-size: 99%;
}


</style>