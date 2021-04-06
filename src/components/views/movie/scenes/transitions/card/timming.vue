<template>
<div class="timming-box">
  <div class="chapter-one">
    <div class="title-chapter">
      Эпизод 1
    </div>
    <div class="chapter-one__description">
      <div>Торжественная регистрация "Прощай, свобода"</div>
      <div class="text_plan">
        <div>
          <span class="plan-font">13.00 </span>
          <span class="plan-font">- Сбор актёров</span>
        </div>
        <div>
          <span class="plan-font">13.30 </span>
          <span class="plan-font">- Камера - мотор</span>
        </div>

        <div>
          <span class="plan-font">Съемочная площадка - Городской ЗАГС</span>
        </div>
      </div>
    </div>
  </div>


  <div class="chapter-two">
    <div class="title-chapter">
      Эпизод 2
    </div>
    <div class="chapter-two__description">
      <div class="">"Да здравстует тусовка"</div>

      <div class="text_plan">
        <div>
          <span class="plan-font">14.30 </span>
          <span class="plan-font">- Фуршет</span>
        </div>
        <div>
          <span class="plan-font">15.00 </span>
          <span class="plan-font">- Фотосессия</span>
        </div>

        <div>
          <span class="plan-font">16.00 </span>
          <span class="plan-font">- Начало громких тостов и горячих танцев</span>
        </div>

        <div>
          <span class="plan-font">22.00 </span>
          <span class="plan-font">- Завершение мероприятия</span>
        </div>

        <div>
          <span class="plan-font">22.30 </span>
          <span class="plan-font">- Трансфер</span>
        </div>


      <div>
        <span class="description"><span class="plan-font">Съемочная площадка - Санаторий "Синяя птица"</span> </span>
      </div>
      </div>


    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "timming",
}
</script>

<style scoped lang="scss">


.timming-box {
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

.chapter-two{
  margin-top: 80px;
}


.title-chapter{
  font-family: "RosaMarena", serif;
  //font-weight: 800;
  //text-decoration-line: underline;
  text-transform: uppercase;
  font-size: 28px;

}

.chapter-one__description, .chapter-two__description {
  text-align: center;
  font-family: "Arimo", serif;
  //font-weight: 200;
  font-size: 17px;
  & div{
    margin: 20px 0;
  }
}

.plan-font{
  font-family: 'OpenSansCondensed', serif;
  font-weight: 400;
  font-size: 20px;
}

.text_plan{
  text-align: left;
  line-height: 0.5;
}



@media screen and (max-width: 900px) {
  .chapter-two{
    margin-top: 0;
  }
  .title-chapter{
    font-size: 20px;
  }
  .chapter-one__description{
    font-size: 15px;
  }
  .chapter-one__description, .chapter-two__description {
    & div {
      margin: 0 !important;
    }
    & > div {
      margin: 10px !important;
      font-size: 14px;
    }
  }
  .text_plan {
    margin: 0 !important;
    line-height: unset;
  }
  .plan-font{
    font-size: 16px;
  }
}

</style>