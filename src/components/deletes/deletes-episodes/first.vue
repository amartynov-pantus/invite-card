<template>
<div >contents Page 1

  <div id="cardflip">
    <div class="inside">Inside</div>
    <div id="card1" @click="upend = true" :class="{'flip': upend}">
      <div class="front">Outside</div>
      <div class="back">Opened</div>
    </div>
  </div>

</div>
</template>

<script>
export default {
name: "first",

  data() {
    return {
      upend: false,
    }
  },

  methods: {
    clickNext(){
      this.$emit('update:sceneEndingName', 'first')
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/front.scss";

#cardflip {
  width: 200px;
  height: 260px;
  position: relative;
  perspective: 800px;
  margin:80px auto 0;
  cursor:pointer
}
#card1 {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform-origin: left center;
  &.flip{
    transition: transform 1s;
    transform:rotateY(-220deg);
  }
  div{
    width: 100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    color:#fff;
    font-size:50px;
    text-align:center;
    line-height:260px;
    backface-visibility: hidden;
  }
}


//.front{
//  background-color:blue
//}
.back{
  background-color:red;
  transform:rotateY(180deg)
}


.inside{
  width: 100%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  color:#fff;
  font-size:50px;
  text-align:center;
  line-height:260px;
  backface-visibility: hidden;
}

.inside{
  backface-visibility: visible;
  color:#000;
  background:#ccc;
}

</style>