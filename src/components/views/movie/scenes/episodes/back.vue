<template>
<div>
baCK
  <label :class="['wrapper', { 'animation-roll': showRoll }]"  >


    <transition name="animation-begin-transition" mode="out-in">
      <div v-if="showRotate" class="card" @animationend="runNext" >

        <div class="front" @click="clickNext" >

          <div class="bg-frame-back wrapper" v-show="showRoll">

            <div class="box">
              <div class="content">
                <h1>This is the box you should be thinking outside of</h1>
              </div>
            </div>


<!--            <div class="box-gold-frame-back">-->
<!--&lt;!&ndash;              <img&ndash;&gt;-->

<!--&lt;!&ndash;                  class="bg-gold-frame"&ndash;&gt;-->
<!--&lt;!&ndash;                  :src="require('@/assets/images/test3.svg')"&ndash;&gt;-->
<!--&lt;!&ndash;                  alt="Icon Applicabilities"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->


<!--              dfgdfgdfg-->
<!--            </div>-->


          </div>

<!--          <div class="logo" v-if="showRoll" >-->

<!--            <span class="name1" >Андрей</span>-->
<!--            <span class="ampersand">и</span>-->
<!--            <span class="name2">София</span>-->
<!--            &lt;!&ndash;            <span class="date">05.06.2021</span>&ndash;&gt;-->
<!--          </div>-->






        </div>

      </div>
    </transition>

  </label>

</div>
</template>

<script>
export default {
name: "back",

  data() {
    return {
      showRotate: false,
      showRoll: false,

    }

  },


  methods: {
    clickNext(){
      this.$emit('update:episodePlayed', 'back')
    },
    runNext(){
      console.log('end')
      this.showRoll = true
    },
  },

  mounted() {
    this.showRotate = true
  }

}
</script>

<style scoped lang="scss">

@import "~@/assets/css/front.scss";


.animation-begin-transition-enter-active {
  -webkit-transition: width 2s, height 2s,  -webkit-transform 2s;
  transition: width 2s, height 2s,  transform 2s;
  animation: 2s ease-out 0s 1 animation-begin-transition-in;

@keyframes animation-begin-transition-in {
  0% {
    -webkit-transform: rotateX(20deg);
    transform: rotateX(20deg);
    box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
  }

  100% {}
}


}


//.bg-frame-back{
//  height: 99%;
//  .box-gold-frame-back{
//
//    height: 100%;
//
//
//    width: 300px;
//    margin: 0 auto;
//    padding: 2px;
//
//    background-color: #eaab00; /* gold */
//    /* Single pixel data uri image http://jsfiddle.net/LPxrT/
//    /* background-image: gold, gold, white */
//    background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAOqrAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='),
//    url('data:image/gif;base64,R0lGODlhAQABAPAAAOqrAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='),
//    url('data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
//    background-repeat: no-repeat;
//    background-size: 0 2px, 0 100%, 0% 2px;
//    background-position: top center, top center, bottom center;
//    -webkit-animation: drawBorderFromCenter 4s;
//
//
//    @-webkit-keyframes drawBorderFromCenter {
//      0% {
//        background-size: 0 2px, 0 0, 100% 100%;
//      }
//      20% {
//        background-size: 100% 2px, 100% 0, 100% 100%;
//      }
//      66%
//      {
//        background-size: 100% 2px, 100% 98%, 100% 100%;
//      }
//      99%
//      {
//        background-size: 100% 2px, 100% 98%, 0 2px;
//      }
//    }
//
//
//
//    .bg-gold-frame{
//      height: 100%;
//    }
//  }
//
//
//
//
//}

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
  width: 90%;
  height: 90%;
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
  text-transform: uppercase;
  height: 90%;
  width: 85%;
}


</style>