<template>
<div >
  <div class="description-text">
    Переверни :)
  </div>

  <label :class="['wrapper', { 'animation-roll': showRoll }]"  >

    <input type="checkbox"  />

    <transition name="animation-rotate" mode="out-in">
      <div v-if="showRotate" class="card" @animationend="runNext" >

        <div class="front" @click="clickNext">

          <div class="logo" v-if="showRoll" >
            <span class="name1" >С</span>
            <span class="ampersand">и</span>
            <span class="name2">А</span>
            <span class="date">05.06.2021</span>
          </div>


        </div>

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
      showBack: false,
      showBackEvent: false,
      showBackPerson: false,
    }

  },

  methods: {
    runNext(){
      this.showRoll = true

    },

    clickNext(){
      this.$emit('update:episodePlay', 'front')
    }

  },

  mounted() {
    this.showRotate = true
  }

}
</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Open+Sans);


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

  input {
    display: none;
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
  align-items: center;
}


.logo {
  width: 165px !important;
  height: 180px !important;
  font-family: Baskerville, serif;
  color: #ff4f90;
  position: relative !important;
  margin: 0 auto;

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
    top: 26px;
    left: 28px;
    -webkit-transition: width 2s, height 2s,  -webkit-transform 5s;
  }

  .name2 {
    top: 72px;
    left: 77px;
  }

  .ampersand {
    font-style: italic;
    top: 36px;
    left: 75px;
  }

  .date {
    border-top: 1px solid #575557;
    border-bottom: 1px solid #575557;
    position: absolute;
    top: 159px;
    left: 60px;
  }

  @keyframes animation-name {
    0% {
      opacity: .5;
      top: 100px;
      color: #ff393c;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {}
  }


}



</style>