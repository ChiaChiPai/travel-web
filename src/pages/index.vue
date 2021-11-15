<script setup>
import { ref } from "vue"
import indexBanner from "../assets/images/bg_index.png"

const indexBannerImg = `background-image: url(${indexBanner});`

const count = ref(0)
</script>

<template>
  <div
    class="bg-cover bg-no-repeat h-[83.046vw] w-[100vw] absolute xl:h-[1063px]"
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
  </div>
</template>

<style lang="postcss">
</style>
