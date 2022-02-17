<script setup>
import AttractionBanner from '../components/AttractionBanner.vue';</script>

<template>
  <AttractionBanner />
  <GlobalSubtitle class="bg-[#6E9292]" :title="`熱門景點`" />
  <div class="flex justify-center pt-[79px] pb-[90px] bg-grient-attraction">
    <CardImage />
    <CardImage class="mx-[35px]" />
    <CardImage />
  </div>
  <GlobalSubtitle class="bg-[#6E9292]" :title="`主題景點`" />
  <div class="flex justify-center pt-[79px] pb-[90px]">
    <CardImage :isShowOption="false" />
    <CardImage class="mx-[35px]" :isShowOption="false" />
    <CardImage :isShowOption="false" />
  </div>
</template>

<style lang="postcss"></style>
