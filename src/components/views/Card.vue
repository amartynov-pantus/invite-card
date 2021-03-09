<template>
  <div class="container">
    <div class="box">
      fdfdfdf
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  methods: {

  },

  mounted() {

  }

}
</script>

<style scoped>


.container{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background: url('~@/assets/logoCard.jpg') no-repeat center center;
  background-size: contain;
  border-style: solid;
  border-width: 1px;
  display: block;

  -webkit-transition: width 2s, height 2s,  -webkit-transform 2s;
  transition: width 2s, height 2s,  transform 2s;
  animation: 1s ease-out 0s 1 rotateCard;
  animation-fill-mode: forwards;


}

@keyframes rotateCard{
  0%{
    opacity: .5;
    width: 100px;
    height: 150px;
  }
  /*50%{opacity: .5;}*/
  100%{
    width: 533px;
    height: 800px;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}


/*.box:hover {*/
/*  !*background-color: #FFCCCC;*!*/
/*  width: 200px;*/
/*  height: 200px;*/
/*  -webkit-transform: rotate(360deg);*/
/*  transform: rotate(360deg);*/

/*}*/

</style>