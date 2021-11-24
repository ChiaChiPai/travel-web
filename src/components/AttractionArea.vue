<template>
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

  <GlobalSubtitle
    class="bg-[#6E9292] mb-41px"
    :title="`網紅這樣玩`"
    :is-show-more="false"
  />
  <div class="flex justify-center pt-[79px] pb-[90px]">
    <CardAvatar />
    <CardAvatar class="mx-[35px]" />
    <CardAvatar />
  </div>
</template>
