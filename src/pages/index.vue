<script setup>
import { ref } from "vue"
import indexBanner from "../assets/images/index_banner.png"

const indexBannerImg = `background-image: url(${indexBanner});`

const count = ref(0)
</script>

<template>
  <div
    class="w-[1280px] h-[1063px] bg-cover bg-no-repeat mx-auto"
    :style="indexBannerImg"
  ></div>
</template>

<style scoped></style>
