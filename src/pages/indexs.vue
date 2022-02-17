<script setup>
import { ref } from "vue";
import indexBanner from "../assets/images/bg_index.png";
import cardFood from "../assets/images/card_food.png";
import cardInspect from "../assets/images/card_inspect.png";
import cardAccommodation from "../assets/images/card_accommodation.png";
import cardTraffic from "../assets/images/card_traffic.png";

const indexBannerImg = `background-image: url(${indexBanner});`;
const cardMenu = [
  {
    img: cardInspect,
    title: "景點",
  },
  {
    img: cardFood,
    title: "美食",
  },
  {
    img: cardAccommodation,
    title: "住宿",
  },
  {
    img: cardTraffic,
    title: "交通",
  },
];

const vw = (px) => {
  return (px / 1280) * 100 + "vw";
};

const count = ref(0);
</script>

<template>
  <div class="bg-cover bg-no-repeat bg-bottom w-[100%]" :style="indexBannerImg">
    <img
      class="
        transform
        top-45px
        left-[50%]
        w-[22.1875vw]
        -translate-x-1/2
        absolute
        xl:w-[284px]
      "
      src="../assets/images/icon_taiwan.png"
      alt=""
    />
    <p
      class="
        text-center
        mb-[3.9vw]
        transform
        pt-[54.4531vw]
        bottom-[15.97vw]
        text-[rgba(0,0,0,0.5)]
        leading-[1.4]
      "
    >
      台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！<br />
      到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
    </p>
    <IndexWeather class="pb-[62px]" />
  </div>
  <ul class="flex mb-[55px] justify-center">
    <li
      v-for="card in cardMenu"
      :key="card.title"
      :style="`background-image: url(${card.img});`"
      class="bg-cover bg-no-repeat h-[390px] mx-[18.5px] w-[285px] relative"
    >
      <p
        class="
          font-weight font-bold
          top-[15px]
          right-[16px]
          text-[30px]
          leading-[43px]
          w-[30px]
          absolute
        "
      >
        {{ card.title }}
      </p>
    </li>
  </ul>

  <GlobalSubtitle class="bg-[#6E9292]" :title="`熱門景點`" />
  <div class="flex justify-center pt-[79px]">
    <CardImage />
    <CardImage class="mx-[35px]" />
    <CardImage />
  </div>

  <GlobalSubtitle class="bg-[#738677] mt-[90px]" :title="`熱門美食`" />
  <div class="flex justify-center pt-[79px]">
    <CardText />
    <CardText class="mx-[35px]" />
    <CardText />
  </div>
  <GlobalSubtitle class="bg-[#C2BB96] mt-[90px]" :title="`住宿推薦`" />
  <div class="flex justify-center pt-[79px]">
    <CardText />
    <CardText class="mx-[35px]" />
    <CardText />
  </div>
</template>

<style lang="postcss"></style>
