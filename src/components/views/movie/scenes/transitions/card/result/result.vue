<template>
<div class="result-box">
  <div>

    <div class="thanks-box">
      Ваше участие для нас необходимо!
    </div>
      <div class="timer-box">
        <span class="timer-text">До мероприятия осталось:  </span>
        <div class="timer-value">
          <Timer />
        </div>
      </div>




  </div>

</div>
</template>

<script>
import Timer from "@/components/views/movie/scenes/transitions/card/result/timer";
export default {
  name: "result",
  components: {Timer},
}
</script>

<style scoped lang="scss">

.result-box{
  //display: flex;
  //align-items: center;
  //height: 100%;
}

.timer-box{

  //margin-bottom: 30px;
  margin-top: 135px;

  & .timer-text{
    font-family: "Arimo", serif;
    font-size: 17px;
  }

  & .timer-value{
    margin-top: 20px;
    font-family: 'OpenSansCondensed', serif;
    font-size: 30px;
  }
}

.thanks-box{
  margin: auto;
  font-family: "RosaMarena", serif;
  font-size: 60px;
  margin-top: 210px;
}

</style>