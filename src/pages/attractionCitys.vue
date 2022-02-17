<script setup>
import AttractionBanner from '../components/AttractionBanner.vue';</script>

<template>
  <AttractionBanner />
  <AttractionIntro />
  <GlobalSubtitle class="bg-[#6E9292]" :title="`熱門景點`" />
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

<style lang="postcss"></style>