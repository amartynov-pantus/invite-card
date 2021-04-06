<template>
<div >
  <div class="tooltip-text">
    Жми, чтобы перевернуть
  </div>


  <label :class="['wrapper', { 'animation-roll': showRoll }]" @click.prevent="goNextTransition">
    <input type="checkbox"   v-if="showRoll" :checked="inputIsChecked"/>
    <transition name="animation-rotate" mode="out-in">


    <div class="card" v-if="showRotate" @animationend="unlocked" @click="goBack">

      <div class="front"  >

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




      <div class="back" >


        <div class="bg-frame-back " v-if="showBackFrame">

          <div class="box">
            <div class="content">


              <component :is="orderTransitionName[orderCurrentElement]" />

            </div>
          </div>
        </div>






      </div>



    </div>


      </transition>
  </label>


  <div class="arrow-navigate" v-if="orderCurrentElement > 0">
    <div class="arrow-navigate__left" @click="orderCurrentElement > 0   ? orderCurrentElement=orderCurrentElement-1 : null">
      <img
          :src="require('@/assets/images/arrowhead-thin-outline-to-the-left.svg')"
          alt="left arrow"
      />
    </div>
    <div class="arrow-navigate__right" @click="orderCurrentElement < orderTransitionName.length-1  ? orderCurrentElement=orderCurrentElement+1 : null">
      <img
          :src="require('@/assets/images/arrow-point-to-right.svg')"
          alt="right arrow"
      />
    </div>
  </div>



</div>
</template>

<script>
import Story from "@/components/views/movie/scenes/transitions/card/story";
import Timming from "@/components/views/movie/scenes/transitions/card/timming";
import Result from "@/components/views/movie/scenes/transitions/card/result/result";
export default {
name: "front",
  components: {Result, Timming, Story},
  data() {
    return {
      showRotate: false,
      showRoll: false,

      showBackFrame: false,

      inputIsChecked: false,

      orderCurrentElement: -1,
      orderTransitionName: ['Story',  'Timming', 'Result']


    }

  },

  methods: {
    unlocked(){
      console.log('end')
      this.showRoll = true
    },

    goNextTransition(){

      console.log('next tranc')
      this.inputIsChecked = true


      if (this.orderCurrentElement < this.orderTransitionName.length-1){
        this.orderCurrentElement = this.orderCurrentElement + 1;
      }

      // this.$emit('update:sceneEndingName', 'front')
      console.log(this.orderCurrentElement)

    },

   async goBack(){
     await setTimeout( () => { this.showBackFrame = true}, 2000)

    },
    test(){
      console.log('test')
      this.inputIsChecked = true

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

//.fliped{
//    transform: rotateX(160deg);
//    -webkit-transform: rotateX(160deg);
//    box-shadow: 0 20px 20px rgba(255,255,255,.2);
//}


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
  color: #BF953F;

  & .back {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }

  & .back {
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 2px;
    display: flex;
    justify-content: center;
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
    bottom: -22px;
    right: -12px;
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
  line-height: 118px;

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

.bg-frame-back {
  height: 99%;
  width: 99%;
  display: flex;
  align-items: center;
}


.box
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90% !important;
  height: 90% !important;
  margin: 0 auto;
  //padding: 2px;
  background-color: #eaab00; /* gold */
  /* Single pixel data uri image http://jsfiddle.net/LPxrT/
  /* background-image: gold, gold, white */
  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAOqrAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='),  url('data:image/gif;base64,R0lGODlhAQABAPAAAOqrAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='),
  url('data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
  background-repeat: no-repeat;
  background-size: 0 2px, 0 100%, 0% 2px;
  background-position: top center, top center, bottom center;
  -webkit-animation: drawBorderFromCenter 4s;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes drawBorderFromCenter {
  0% {
    background-size: 0 2px, 0 0, 100% 100%;
  }
  20% {
    background-size: 100% 2px, 100% 0, 100% 100%;
  }
  66%
  {
    background-size: 100% 2px, 100% 98%, 100% 100%;
  }
  99%
  {
    background-size: 100% 2px, 100% 98%, 0 2px;
  }
}



.content
{
  background-image: url('~@/assets/images/marble.jpg');
  background-size: cover;
  padding: 2em;
  text-align: center;

  height: 90% !important;
  width: 85% !important;
}

.arrow-navigate {
  display: flex;
  height: 20px;
  justify-content: center;
  position: absolute;
  top: 95%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  & .arrow-navigate__left, & .arrow-navigate__right {
    width: 35px;
    text-align: center;
    cursor: pointer;

    & img {
      height: 100%;
      opacity: .5;

      &:hover {
        opacity: 1;
      }
    }

  }

}


//////////////////////////////////////
// медиа
//////////////////////////////////////

@media screen and (max-width: 900px) {

  .tooltip-text {
    font-size: 16px;
  }

  label {
    width: 300px;
    height: 450px;

    &:hover :checked + .card {

      animation: 300ms ease-in-out 500ms 1 lowflip;
      animation-fill-mode: forwards;

      @keyframes lowflip {
        0% {
          transform: rotateX(160deg);
          -webkit-transform: rotateX(160deg);
        }

        50% {
          transform: rotateX(190deg);
          -webkit-transform: rotateX(190deg);
        }

        100% {
          transform: rotateX(180deg);
          -webkit-transform: rotateX(180deg);
        }
      }

    }

  }
  .box-gold-frame{
    height: 435px !important;
  }
  .name1, .name2, .ampersand {
    font-size: 3em !important;
  }
  .name1 {
    top: 15px !important;
    left: 42px !important;
  }
  .ampersand{
    top: 58px !important;
    left: 116px !important;
  }
  .name2{
    top: 118px !important;
    left: 96px !important;
  }

  .bg-frame {
    &:before{
      width: 296px !important;
      bottom: -6px !important;
      right: -3px !important;
    }
  }

  .content {
    padding: 19px !important;
  }

  //.animation-roll:hover .card {
  //  -webkit-transform: rotateX(10deg) !important;
  //  transform: rotateX(10deg) !important;
  //}

}




</style>