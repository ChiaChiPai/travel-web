<script setup>
import attractionBanner from "../assets/images/attraction_banner.jpg";

const attraction = `background-image: url(${attractionBanner});`;
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom w-[100%] h-700px relative"
    :style="attraction"
  >
    <img
      class="
        transform
        top-[40%]
        left-[50%]
        w-[44.44444vw]
        -translate-x-1/2 -translate-y-1/2
        absolute
        xl:w-[568px]
      "
      src="../assets/images/atrraction_banner_icon.png"
      alt=""
    />
  </div>
  <GlobalSubtitle class="bg-[#6E9292]" :title="`熱門景點`" />
  <div class="flex justify-center pt-[79px] pb-[90px] bg-grient-attraction">
    <CardImage />
    <CardImage class="mx-[35px]" />
    <CardImage />
  </div>
  <GlobalSubtitle class="bg-[#6E9292]" :title="`網紅攻略`" />
  <div class="flex justify-center pt-[79px] pb-[90px] bg-grient-attraction">
    <CardAvatar />
    <CardAvatar class="mx-[35px]" />
    <CardAvatar />
  </div>
  <GlobalSubtitle class="bg-[#6E9292]" :title="`主題景點`" />
  <div class="flex justify-center pt-[79px] pb-[90px]">
    <CardImage :isShowOption="false" />
    <CardImage class="mx-[35px]" :isShowOption="false" />
    <CardImage :isShowOption="false" />
  </div>
</template>

<style lang="postcss">
.bg-grient-attraction {
  background: linear-gradient(
    179.72deg,
    #adccce 0.72%,
    rgba(173, 204, 206, 0) 67.54%
  );
}
</style>
