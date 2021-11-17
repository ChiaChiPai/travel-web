<script setup>
import { ref } from "vue"
import indexBanner from "../assets/images/bg_index.png"

const indexBannerImg = `background-image: url(${indexBanner});`

const count = ref(0)
</script>

<template>
  <div
    class="bg-cover bg-no-repeat w-[100%] absolute"
    :style="indexBannerImg"
  >
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
        mt-[54.4531vw]
        text-center
        mb-[3.9vw]
        transform
        bottom-[15.97vw]
        text-[rgba(0,0,0,0.5)]
        leading-[1.4]
      "
    >
      台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！<br />
      到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!
    </p>
    <IndexWeather />
  </div>
</template>

<style lang="postcss">
</style>
