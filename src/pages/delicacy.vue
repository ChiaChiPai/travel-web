<script setup>
import delicacyBanner from "../assets/images/delicacy_banner.jpg";
import intro_img1 from "../assets/images/img_delicacy1.png";
import intro_img2 from "../assets/images/img_delicacy2.png";
import intro_img3 from "../assets/images/img_delicacy3.png";

const delicacy = `background-image: url(${delicacyBanner});`;
const introImg1 = `background-image: url(${intro_img1});`;
const introImg2 = `background-image: url(${intro_img2});`;
const introImg3 = `background-image: url(${intro_img3});`;

const introList = [
  {
    title: "台灣文化",
    img: intro_img1,
  },
  {
    title: "台灣小吃",
    img: intro_img2,
  },
  {
    title: "台灣各地特色",
    img: intro_img3,
  },
];
</script>
<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom w-[100%] h-700px relative"
    :style="delicacy"
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
      src="../assets/images/delicacy_banner_icon.png"
      alt=""
    />
    <div
      class="absolute left-[50%] bottom-[22%] transform -translate-x-1/2 flex"
    >
      <label ref="input" class="search-bar relative mr-14px">
        <input
          class="
            w-529px
            rounded-8px
            leading-23px
            py-13px
            pl-8px
            pr-13px
            outline-none
          "
          type="search"
          placeholder="請輸入關鍵字"
        />
      </label>
    </div>
  </div>
  <div class="delicacy-intro h-200px relative">
    <div class="flex justify-center absolute -top-84px w-100vw">
      <div
        v-for="(intro, idx) in introList"
        :key="idx"
        :style="`background-image: url(${intro.img});`"
        class="w-326px h-215px flex flex-col"
      >
        <div class="flex-grow"></div>
        <h3
          :class="{
            'rounded-bl-20px': idx === 0,
            'rounded-br-20px': idx === 2,
          }"
          class="
            h-52px
            bg-[rgba(255,255,255,0.28)]
            text-center
            leading-52px
            text-28px
            leading-40px
            font-700
            text-white
          "
        >
          {{ intro.title }}
        </h3>
      </div>
    </div>
  </div>
  <GlobalSubtitle
    :title="`熱門美食`"
    :is-show-more="false"
    class="bg-[#738677]"
  />
  <div class="flex justify-evenly flex-wrap w-1280px mx-auto pt-79px">
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
    <CardImage class="mb-38px" />
  </div>

  <PaginationGroup class="justify-center mb-28px" />
</template>

<style>
.delicacy-intro {
  background: linear-gradient(180deg, #a7b4aa 0%, rgba(167, 180, 170, 0) 100%);
}

.search-bar::after {
  content: "";
  background: url(@/assets/svg/icon_search.svg) no-repeat;
  @apply w-22px h-22px bg-cover absolute right-13px top-15px;
}
</style>
