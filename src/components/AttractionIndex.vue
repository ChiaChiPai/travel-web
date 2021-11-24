<template>
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
