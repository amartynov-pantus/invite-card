<template>

  <div class="container">


      <h1 class="Blazing" contenteditable="true">BLAZING</h1>



    <div class="description-text">
      Переверни :)
    </div>

    <label v-bind:class="{ 'animation-roll': showRoll }" >

      <input type="checkbox"  />

      <transition name="animation-rotate" mode="out-in">
      <div v-if="showRotate" class="card" v-on:animationend="runNext">
        <div class="front">

                <div class="logo" v-if="showRoll">
                  <span v-bind:class="{ 'name1': showRoll }" >S</span>
                  <span class="ampersand">&</span>
                  <span class="name2">A</span>
                  <span class="date">05.06.2021</span>
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
  name: "Card",

  data() {
    return {
      showRotate: false,
      showRoll: false
    }

  },

  methods: {
    runNext(){
      // console.log('ANIM END')
      this.showRoll = true
    }
  },

  mounted() {
    this.showRotate = true
  }

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.container{
  /*min-height: 100vh;*/
}

.animation-rotate-enter-active{
  -webkit-transition: width 2s, height 2s,  -webkit-transform 2s;
  transition: width 2s, height 2s,  transform 2s;
  animation: 2s ease-out 0s 1 animation-rotate-in;
  /*animation-fill-mode: backwards;*/
}

@keyframes animation-rotate-in{
  0%{
    opacity: .5;
    width: 100px;
    height: 150px;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100%{

  }
}



label {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  display: block;
  width: 500px;
  height: 750px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
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
}

.front {
  background: url('~@/assets/logoCard.jpg') no-repeat center center;
  background-size: 99%;
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 2px;
  display: flex;
  align-items: center
}

.back {
  background: #222;
  color: #FFF;
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
  background-size: contain;
  position: absolute;
  height: 100%;
  width: 100%;
  /*background: #FFF;*/
  text-align: center;
  /*line-height: 200px;*/
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 2px;
}


.animation-roll:hover .card {
  -webkit-transform: rotateX(20deg);
  transform: rotateX(20deg);
  box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
}

input {
  display: none;
}

:checked + .card {
  transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
}

.animation-roll:hover :checked + .card {
  transform: rotateX(160deg);
  -webkit-transform: rotateX(160deg);
  box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
}


.description-text{
  /*margin-top: 30px;*/
}


.logo {
  width: 165px !important;
  height: 180px !important;
  font-family: Baskerville;
  color: #575557;
  position: relative !important;
  margin: 0 auto;
}

.name1, .name2, .ampersand {
  font-size: 5em;
  text-align: center;
}

.name1 {
  position: relative;
  top: 0;
  left: 14px;
  -webkit-transition: width 2s, height 2s,  -webkit-transform 2s;
  transition: width 2s, height 2s,  transform 2s;
  animation: 4s ease-out 0s 1 animation-name;
}

@keyframes animation-name{
  0%{
    opacity: .5;
    top: 100px;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100%{

  }
}


.name2 {
  position: relative;
  top: 61px;
  left: 13px;
}

.ampersand {
  font-style: italic;
  position: relative;
  top: 30px;
  left: 16px;
}

.date {
  border-top: 1px solid #575557;
  border-bottom: 1px solid #575557;
  position: relative;
  top: 90px;
  left: -108px;
}


@import url(https://fonts.googleapis.com/css?family=Akronim);

body {
  background: #ca8;
}

/*.fire {*/
/*  margin: 50px auto;*/
/*  width: 80%;*/
/*  max-width: 1000px;*/
/*  height: 200px;*/

/*  background-position: center center;*/
/*  background-size: 1000px 200px;*/
/*  border-radius: 10px;*/
/*  font-family: 'Akronim';*/
/*  overflow: hidden;*/
/*  text-align: center;*/
/*  vertical-align: middle;*/

/*}*/
/*.fire:before {*/
/*  content: '';*/
/*  display: inline-block;*/
/*  height: 100%;*/
/*  vertical-align: middle;*/
/*}*/

.Blazing {
  color: #35ff14;
  text-shadow:
      0 3px 20px red,
      0 0 20px red,
      0 0 10px orange,
      4px -5px 6px yellow,
      -4px -10px 10px yellow,
      0 -10px 30px yellow;
  animation: 2s Blazing infinite alternate linear;
}

@keyframes Blazing {
  0%   { text-shadow: 0 3px 20px red, 0 0 20px red,
  0 0 10px orange,
  0 0 0 yellow,
  0 0 5px yellow,
  -2px -5px 5px yellow,
  4px -10px 10px yellow; }
  25%   { text-shadow: 0 3px 20px red, 0 0 30px red,
  0 0 20px orange,
  0 0 5px yellow,
  -2px -5px 5px yellow,
  3px -10px 10px yellow,
  -4px -15px 20px yellow; }
  50%   { text-shadow: 0 3px 20px red, 0 0 20px red,
  0 -5px 10px orange,
  -2px -5px 5px yellow,
  3px -10px 10px yellow,
  -4px -15px 20px yellow,
  2px -20px 30px rgba(255,255,0,0.5); }
  75%   { text-shadow: 0 3px 20px red, 0 0 20px red,
  0 -5px 10px orange,
  3px -5px 5px yellow,
  -4px -10px 10px yellow,
  2px -20px 30px rgba(255,255,0,0.5),
  0px -25px 40px rgba(255,255,0,0)}
  100%   { text-shadow: 0 3px 20px red, 0 0 20px red,
  0 0 10px orange,
  0 0 0 yellow,
  0 0 5px yellow,
  -2px -5px 5px yellow,
  4px -10px 10px yellow; }
}




</style>