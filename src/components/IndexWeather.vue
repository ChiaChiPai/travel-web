<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import "swiper/css/navigation"
  import SwiperCore, {
  Navigation
} from 'swiper';
SwiperCore.use([Navigation]);

  const swiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }


</script>

<template>
  <div class="mx-auto max-w-1060px relative">
    <swiper :navigation="true" :slidesPerView="8" class="swiper-costom">
      <swiper-slide v-for="item in 10" :key="item">
        <div class="flex flex-col text-lg items-center">
          <div class="mb-12px ">台北市</div>
          <img class="mb-[14px] max-w-[5.3125vw]" src="@/assets/images/icon_night-ring.png" alt="">
          <div class="text-[rgba(0,0,0,0.5)] text-5xl leading-[68px] degree relative" text>24</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<style lang="postcss">
.swiper {
  position: static;
}

.degree::after{
  content: '';
  background: url(@/assets/images/icon_degree.png);
  width: 18px;
  height: 28px;
  background-size: contain;
  position: absolute;
}

.swiper .swiper-button-prev {
  background: url(@/assets/images/icon_prev.png);
  width: 55px;
  height: 55px;
  background-size: contain;
  left: -60px;
}
.swiper-button-prev:after {
  content: '';
}

.swiper .swiper-button-next {
  background: url(@/assets/images/icon_next.png);
  width: 55px;
  height: 55px;
  background-size: contain;
  right: -60px;
}
.swiper-button-next:after {
  content: '';
}
</style>