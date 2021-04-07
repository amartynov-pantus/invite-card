<template>
  <div>

<!--    <div @click="goNextScene" style="color: #dedede; text-align: center">-->
<!--      open=============-->
<!--    </div>-->

    <div class="tooltip-text" >
      Вам письмо, нажмите на конверт :)
    </div>

    <div class="wrapper">

      <div class="mail">
        <div class="cover" ></div>
        <div class="letter" ><h1 @click="goNextScene" class="open-text">открыть</h1></div>
      </div>

    </div>


  </div>
</template>

<script>

export default {
  name: "mail",

  methods: {
    goNextScene(){
      console.log('op')
        this.$emit('update:sceneEndingName', 'mail')

    }
  }

}
</script>

<style scoped lang="scss">



.mail {
  width: 300px;
  height: 200px;
  background: #ff8789;
  position: relative;
  transform-style: preserve-3d;
  /* Keep 3Dx effect */
  border-bottom-left-radius: 20px;
  /* Lower left corner */
  border-bottom-right-radius: 20px;
  //cursor: pointer;
  /* Mouse style */
  &:before {
    /* add before */
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-left: 140px solid Transparent;
    border-right: 150px solid #ff393c;
    border-top: 100px solid Transparent;
    border-bottom: 100px solid #ff393c;
    z-index: 5;

    /* Cascading sort */
    border-bottom-right-radius: 10px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-left: 150px solid #ff5355;
    border-right: 140px solid Transparent;
    border-top: 100px solid Transparent;
    border-bottom: 100px solid #ff5355;
    z-index: 4;
    border-bottom-left-radius: 10px;
  }
}

/* Right */

/* left */

.cover:before {
  /* Above */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-top: 100px solid #ff8789;
  border-bottom: 100px solid transparent;
  z-index: 6;
  transform-origin: top;
  transform: rotateX(0deg);
  transition: all 1s 1s ease;
}

.letter {
  /* Card */
  position: absolute;
  //z-index: 3;
  top: 0px;
  left: 10px;
  background: #dedede;
  width: 280px;
  height: 180px;
  border-radius: 20px;
  transition: all 1s ease;

  /* Transition time */

  h1 {
    /* @ symbol */
    z-index: 100;
    position: absolute;
    top: 25%;
    left: 30%;
    //transform: translate(-50%, -50%);
    font-size: 30px;
    color: #798992;
    font-weight: 900;
    animation: blink 1s linear ;
    animation-delay: 3s;
    animation-iteration-count: 3;
    text-decoration-line: underline;
    cursor: pointer;
  }
}
h1 {
  cursor: pointer;
}
@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
}
.open-text{
  opacity: 0;
}

.mail:hover {
  .cover:before {
    transform: rotateX(180deg);
    /* Flip the X axis */
    transition: all 1s ease;
  }

  .letter {
    top: -80px;
    /* Use top to move */
    transition: all 1s 1s ease;
  }
  .open-text{
    z-index: 20;
    opacity: 1;
  }

}


@media screen and (max-width: 900px) {
  .tooltip-text{
    font-size: 16px;
  }

  .mail:hover {
    transition: none;
  }

}


</style>