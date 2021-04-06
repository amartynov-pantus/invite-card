<template>
  <div class="legend-box" >
    <div class="legend-title">ВНИМАНИЕ! ATTENTION! ACHTUNG!</div>

    <div class="legend-box-blocks">
      <div class="legend-gueusts-person">{{this.$route.query.name1}} и {{this.$route.query.name2}}</div>

      <div class="legend-event-info">

        <div class="legend-event-info__date-box">
          <div class="legend-event-info__day">05</div>
          <div class="legend-event-info__month-year">
            <div>ИЮНЯ</div>
            <div>2021 ГОДА</div>
          </div>

        </div>
        <div class="legend-event-info__separator"><span>|</span></div>
        <div class="legend-event-info__location-box">
          <div>
            <span class="event-time">13.30 Регистрация</span>
            <span class="event-descrition">  (гор. ЗАГС)</span>
          </div>
          <div>
            <span class="event-time">16.00 Банкет </span>
            <span class="event-descrition">(Санаторий "Синяя птица")</span>
          </div>
        </div>

      </div>

      <div class="legend-detail">
        <div class="legend-detail__film">
          Киностудия Martynovy Pictures приглашает принять участие в съемках романтического экшена "... и объявили
          их мужем и женой"
        </div>
        <div class="legend-detail__actors">
          <span>В главных ролях:</span>
          <span>Андрей - жених</span>
          <span>София - невеста</span>
        </div>
      </div>
    </div>





  </div>
</template>

<script>
export default {
  name: "story",
  data() {
    return {
      showAnimations: false,
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped lang="scss">



.legend-box{
  display: block !important;
  animation: 3s ease-out 0s 1 back-text;
  @keyframes back-text{
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

.legend-box-blocks{
  margin-top: 115px;
}

.legend-title{
  font-family: 'Arimo', serif;
  font-size: 17px;
  font-weight: 600;
}

.legend-gueusts-person{
  font-family: "RosaMarena", serif;
  font-size: 51px;
  margin-top: 25px;
}

.legend-detail{
  font-family: "Arimo", serif;
  font-size: 17px;
  margin-top: 60px;

  & .legend-detail__actors{
    margin-top: 59px;

    & span {
      display: block;
    }

  }

}

.legend-event-info{
  margin-top: 15%;

  //color: #ff84de;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  animation: 3s ease-out 0s 1 back-text;
  /*opacity: .1;*/

  .legend-event-info > div {
    padding: 5px;
  }


  .legend-event-info__date-box{

    display: flex;
    justify-content: center;
    text-align: start;
  }

  .legend-event-info__day{
    font-family: 'OpenSansCondensed', serif;
    font-size: 103px;
    line-height: 77px;
    margin-right: 10px;
  }

  .legend-event-info__month-year{
    margin: auto;
    font-family: 'AlmaticRegular', serif;
  }

  .legend-event-info__location-box{
    TEXT-ALIGN: start;

    & .event-time{
      font-family: 'AlmaticBold', serif;
    }
    & .event-descrition{
      font-family: 'AlmaticRegular', serif;
    }

  }

  .legend-event-info__month-year > div:nth-child(1) , .legend-event-info__location-box > div:nth-child(1)  {
    font-family: 'AlmaticBold', serif;
  }

  .legend-event-info__separator{
    font-size: 74px;
    line-height: 62px;
    margin: 0 5px;
  }

}


@media screen and (max-width: 900px) {
  .legend-title{
    font-size: 12px !important;
  }
  .legend-box-blocks{
    margin: 0 !important;
  }
  .legend-gueusts-person {
    font-size: 40px;
  }
  .legend-event-info{
    font-size: 15px;
    margin-top: 8%;
    .legend-event-info__day{
      font-size: 63px;
      line-height: 48px;

    }
    .legend-event-info__separator{
      font-size: 52px;
      line-height: 20px;
    }
    & .legend-event-info__separator > span {
      position: absolute;
      top: 45%;
      left: 42%;
    }
    & .legend-event-info__location-box {
      padding-left: 10px;
    }
  }
  .legend-detail{
    font-size: 14px;
    margin-top: 24px;

    & .legend-detail__actors{
      margin-top: 21px;
    }
  }
}



</style>