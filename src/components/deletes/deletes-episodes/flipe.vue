<template>
<div class="flipe">
    sdfsd
  <label class="wrapper"  >


<!--    <transition name="animation-rotate" mode="out-in">-->
      <div class="card"  >

        <div class="front"  >

          <div class="bg-frame wrapper" >




            <div class="box-gold-frame">
              <img

                  class="bg-gold-frame"
                  :src="require('@/assets/images/bg-gold-frame.svg')"
                  alt="Icon Applicabilities"
              />
            </div>


          </div>

          <div class="logo" id="no">

            <span class="name1" >Андрей</span>
            <span class="ampersand">и</span>
            <span class="name2">София</span>
            <!--            <span class="date">05.06.2021</span>-->
          </div>






        </div>




      </div>
<!--    </transition>-->

  </label>


</div>
</template>

<script>
export default {
name: "flipe"
}
</script>

<style  lang="scss">

@import "~@/assets/css/front.scss";

.name1, .name2, .ampersand {
  animation: none;
}


</style>