<template>
  <div >
    <div v-if="!cardShow" class="description-text">
      Вам письмо, откройте конверт :)
    </div>
    <div v-if="!cardShow" class="wrapper">

      <div class="mail">
        <div class="cover" @click="cardShow=!cardShow"></div>
        <div class="letter"><h1>открыть</h1></div>
      </div>

    </div>
    <Card v-if="cardShow"></Card>


  </div>
</template>

<script>
export default {
name: "mail"
}
</script>

<style scoped lang="scss">

.wrapper {
  position: absolute;

  /* Absolute positioning */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

/* Move x,y */
}

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
  cursor: pointer;

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
  z-index: 3;
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
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #798992;
    font-weight: 900;
    animation: blink 1s linear infinite;
    animation-delay: 3s;
    text-decoration-line: underline;
}
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
}

.description-text {
  margin: 10px 0;
  text-align: center;
  font-size: 20px;
  color: #798992;
  font-family: system-ui;
}

</style>