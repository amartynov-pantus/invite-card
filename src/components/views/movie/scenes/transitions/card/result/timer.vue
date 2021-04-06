<template>
<!--  <div class="timer-box">-->
<!--    <span class="timer-text">До мероприятия осталось:  </span>-->
<!--    <div class="timer-value">{{ dateByWedding }}</div>-->
<!--  </div>-->


  <flip-countdown id="timer" deadline="2021-06-05 14:00:00"></flip-countdown>


</template>



<script>

import FlipCountdown from '@/components/views/movie/scenes/transitions/card/result/FlipCountdown'

export default {
name: "timer",

  components: { FlipCountdown },

  // data(){
  //   return{
  //     countDownDate: new Date("Jun 5, 2021 14:00:00").getTime(),
  //     dateByWedding: null,
  //   }
  // },

  // methods: {
  //   getTimerValue(){
  //
  //     setTimeout(() => {
  //       // Get today's date and time
  //       let now = new Date().getTime();
  //       // Find the distance between now and the count down date
  //       let distance = this.countDownDate - now;
  //       // Time calculations for days, hours, minutes and seconds
  //       let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //       this.dateByWedding = days + " д. " + hours + " ч. "  + minutes + " м. " + seconds + " с. "
  //       this.getTimerValue()
  //     }, 1000)
  //
  //   },
  //
  // },

  // created() {
  //   this.getTimerValue()
  // }

}
</script>

<style lang="scss">

#timer flip-card__top{
  background: red !important;
}

</style>