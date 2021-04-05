<template>
<div>
  <div class="chapter-one">
    <div class="title-chapter">
      Эпизод 1
    </div>
    <div class="chapter-one__description">
      <div>Торжественная регистрация "Прощай, свобода"</div>
      <div>
        <span class="time">13.00 </span>
        <span class="description">- Сбор актёров</span>
      </div>
      <div>
        <span class="time">13.30 </span>
        <span class="description">- Камера - мотор</span>
      </div>
      <div>
        <span class="description">Съемочная площадка - Городской ЗАГС</span>
      </div>
    </div>
  </div>


  <div class="chapter-two">
    <div class="title-chapter">
      Эпизод 2
    </div>
    <div class="chapter-two__description">
      <div>Да здравстует тусовка</div>

      <div>
        <span class="time">17.00 </span>
        <span class="description">- Начало громких тостов и горячих танцев</span>
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

.chapter-two{
  margin-top: 50px;
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

.time{
  font-family: 'OpenSansCondensed', serif;
  font-weight: 800;
}

</style>