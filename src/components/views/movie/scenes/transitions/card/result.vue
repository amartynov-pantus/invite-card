<template>
<div class="result-box">
  <div>
    <div class="timer-box">
      <span class="timer-text">До мероприятия осталось:  </span>
      <div class="timer-value">{{ dateByWedding }}</div>
    </div>

    <div class="thanks-box">
      Ваше участие для нас необходимо!
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "result",

  data(){
    return{
      countDownDate: new Date("Jun 5, 2021 14:00:00").getTime(),
      dateByWedding: null,
    }
  },

  methods: {
    getTimerValue(){

      setTimeout(() => {
                // Get today's date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance = this.countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.dateByWedding = days + " д. " + hours + " ч. "  + minutes + " м. " + seconds + " с. "
        this.getTimerValue()
      }, 1000)

    },

  },

  created() {
    this.getTimerValue()
  }
}
</script>

<style scoped lang="scss">

.result-box{
  display: flex;
  align-items: center;
  height: 100%;
}

.timer-box{
  font-family: "Arimo", serif;
  font-size: 30px;
  margin-bottom: 30px;
}

.thanks-box{
  margin: auto;
  font-family: "RosaMarena", serif;
  font-size: 40px;
}

</style>