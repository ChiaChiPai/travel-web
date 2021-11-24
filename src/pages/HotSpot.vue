<script setup></script>

<template>
  <div class="bg-[#6E9292] py-15px px-30px">
    <img src="@/assets/images/icon_taiwan.png" class="w-72px mr-28px" alt="" />
  </div>
  <div class="attraction-intro mb-8px">
    <AttractionIntro />
  </div>
  <div class="flex max-w-1280px mx-auto pl-43px pr-89px pb-27px">
    <div class="w-[50.9375%] border-r-gray-600">
      <h2 class="font-700 text-48px leading-68px mb-32px">景點資訊</h2>
      <dl class="info mb-51px">
        <dt>地址</dt>
        <dd>臺北市信義區信義路5段7號</dd>
        <dt>電話</dt>
        <dd
          class="
            rounded-10px
            border-[rgba(0,0,0,0.5)] border-width-[3px]
            py-4px
            pl-14px
            pr-60px
          "
        >
          +886-2-81018800
        </dd>
        <dt>開放時間</dt>
        <dd>星期一～五 11:00 - 21:00</dd>
        <dd>星期六.日 10:00 - 21:00</dd>
      </dl>
      <ul
        class="
          w-[96.61%]
          recommand
          flex
          justify-center
          pt-14px
          border-t-2px border-[rgba(0,0,0,0.5)]
        "
      >
        <li>周邊推薦</li>
        <li>周邊美食</li>
        <li>周邊住宿</li>
      </ul>
    </div>
    <div class="pl-63px border-l-2px border-[rgba(0,0,0,0.5)]">
      <h3
        class="
          text-32px
          leading-45px
          text-32px text-[rgba(0,0,0,0.8)]
          mb-26px
          font-700
        "
      >
        景點地圖
      </h3>
      <div class="w-476px h-408px rounded-20px bg-gray-200"></div>
    </div>
  </div>
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

<style lang="postcss" scoped>
.attraction-intro {
  background: linear-gradient(180deg, #adccce 0%, rgba(230, 245, 245, 0) 50%);
}

.info {
  dt {
    @apply text-32px text-[rgba(0,0,0,0.8)] leading-45px font-bold inline;
  }
  dd {
    @apply text-32px text-[rgba(0,0,0,0.5)] leading-45px inline;
    margin-inline-start: 24px;
  }
  dd + dt::before {
    content: "";
    height: 36px;
    display: block;
    mask-repeat: 10px;
  }

  dd + dd {
    margin-left: 152px;
  }
}
.recommand {
  li {
    @apply text-32px leading-45px font-700 rounded-10px py-14px px-18px box-border;
    border: 3px solid rgba(0, 0, 0, 0.5);
  }
  li + li {
    @apply ml-18px;
  }
}
</style>
