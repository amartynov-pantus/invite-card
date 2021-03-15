<template>

  <div class="container">


      <h1 class="Blazing" contenteditable="true">BLAZING</h1>



    <div class="description-text">
      Переверни :)
    </div>

    <label v-bind:class="{ 'animation-roll': showRoll }" >

      <input type="checkbox"  />

      <transition name="animation-rotate" mode="out-in">
      <div v-if="showRotate" class="card" v-on:animationend="runNext" @click="showBack=true">
        <div class="front">

                <div class="logo" v-if="showRoll" >
                  <span class="name1" >С</span>
                  <span class="ampersand">и</span>
                  <span class="name2">А</span>
                  <span class="date">05.06.2021</span>
                </div>


        </div>
        <div class="back">
          <template   v-if="showBack">
          <div v-on:animationend="showBackEvent = true" class="back-logo">

            <div class="back-logo__text" >

              <span >София</span>
              <span >и</span>
              <span >Aндрей</span>

            </div>

          </div>
          <div v-if="showBackEvent" v-on:animationend="showBackPerson = true" class="back-event">

            <div class="back-event__date-box">
              <div class="back-event__day">17</div>
              <div class="back-event__month-year">
                <div>ИЮНЯ</div>
                <div>2020 ГОДА</div>
              </div>

            </div>
            <div class="back-event__separator">|</div>
            <div class="back-event__location-box">
              <div>РЕСТОРАН (МРАМОРНЫЙ ЗАЛ)</div>
              <div>САНАТОРИЙ "СИНЯЯ ПТИЦА" В 17.00</div>
            </div>

          </div>
          <div v-if="showBackPerson" class="back-person">
            <span>Андрей и Мария, мы будем счастливы </span> <br>
            <span>разделить с вами этот чудесный день!</span>
          </div>
          </template>
        </div>
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
      showRoll: false,
      showBack: false,
      showBackEvent: false,
      showBackPerson: false,
    }

  },

  methods: {
    runNext(){
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
/*@import url('~@/assets/rosa-morena.ttf');*/
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
  background: url('~@/assets/textCard.jpg') no-repeat center center;
  color: #FFF;
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
  background-size: 99%;
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
  color: #ff4f90;
  position: relative !important;
  margin: 0 auto;
}

.name1, .name2, .ampersand {
  font-size: 5em;
  text-align: center;
  display: block;
  position: absolute;
  animation: 1s ease-out 0s 1 animation-name;
  transition: transform 1s linear;
  transform-origin: top left;
  transform-style: preserve-3D;
  font-family: "RosaMarena",serif;

}






.name1 {
  /*position: relative;*/
  top: 26px;
  left: 28px;
  -webkit-transition: width 2s, height 2s,  -webkit-transform 5s;
  /*transition: width 2s, height 2s,  transform 5s;*/
  /*animation: 2s ease-out 0s 1 animation-name;*/
  /*transition: transform 1s linear;*/
  /*transform-origin: top left;*/
  /*transform-style: preserve-3D;*/
  /*src: url(~@/assets/rosa-morena.ttf);*/




}

@keyframes animation-name{
  0%{
    opacity: .5;
    top: 100px;
    color: #ff393c;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);

  }
  100%{

  }
}


.name2 {
  /*position: relative;*/
  top: 72px;
  left: 77px;

}

.ampersand {
  font-style: italic;
  /*position: relative;*/
  top: 36px;
  left: 75px;

}

.date {
  border-top: 1px solid #575557;
  border-bottom: 1px solid #575557;
  position: absolute;
  top: 159px;
  left: 60px
}



.back-logo{
  margin-top: 35%;
}

.back-logo__text{
  font-family: "RosaMarena",serif;
  color: #ff4f90;
  font-size: 53px;
  line-height: 40px;
  animation: 3s ease-out 0s 1 back-text;

}
.back-logo__text > span {
  display: block;
}
.back-logo__text span:nth-child(2) {
  height: 47px;
}


.back-event{
  margin-top: 15%;
  font-family: 'AlmaticRegular', serif;
  color: #ff84de;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  animation: 3s ease-out 0s 1 back-text;
  /*opacity: .1;*/
}

.back-event > div {
  padding: 5px;
}


.back-event__date-box{

  display: flex;
  justify-content: center;
  text-align: start;
}

.back-event__day{
  font-family: 'OpenSansCondensed', serif;
  font-size: 66px;
  line-height: 51px;
  margin-right: 10px;
}

.back-event__month-year{
  margin: auto;
}

.back-event__location-box{
  TEXT-ALIGN: start;

}

.back-event__month-year > div:nth-child(1) , .back-event__location-box > div:nth-child(1)  {
  font-family: 'AlmaticBold', serif;
}

.back-event__separator{
  font-size: 74px;
  line-height: 62px;
}

.back-person{
  font-family: 'CaveatRegular', serif;
  font-size: 26px;
  color: #ff84de;
  margin-top: 10%;
  animation: 3s ease-out 0s 1 back-text;
}



@keyframes back-text{
  0%{
    opacity: .0;

  }
  20%{
    opacity: .1;

  }
  60%{
    opacity: .3;

  }
  100%{
    opacity: 1;
  }
}


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