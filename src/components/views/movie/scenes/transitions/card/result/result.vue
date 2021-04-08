<template>
<div class="result-box">
  <div>

    <div class="hashtag">#martinovypictures</div>

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

  animation: 1s ease-out 0s 1 opacity-text;
  @keyframes opacity-text{
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

.hashtag{
  font-size: 30px;
  text-transform: uppercase;
}

.thanks-box{
  margin: auto;
  font-family: "RosaMarena", serif;
  font-size: 60px;
  margin-top: 200px;
}

@media screen and (max-width: 900px) {
  .thanks-box{
    font-size: 40px;
    margin-top: 70px;
  }
  .timer-box{
    margin-top: 43px;
  }
  .hashtag{
    font-size: 17px;

  }
}

</style>