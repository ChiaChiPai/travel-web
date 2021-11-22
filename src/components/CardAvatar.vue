<script setup></script>

<template>
  <div
    class="
      w-[368px]
      border-[2px] border-[rgba(0,
      0, 0,
      0.3)]
      rounded-[30px]
      relative
    "
  >
    <img
      class="
        max-w-[128px]
        absolute
        left-[50%]
        top-[-75px]
        transform
        -translate-x-1/2
      "
      src="@/assets/images/img_avatar.png"
      alt=""
    />
    <img
      class="absolute right-18px top-18px"
      src="@/assets/images/icon_tag.png"
      alt=""
    />
    <div class="w-[100%] h-[256px] bg-[#0f0] mb-[8px] rounded-t-[30px]"></div>
    <div class="px-[15px]">
      <h3
        class="
          leading-[45px]
          text-[32px] text-[rgba(0,0,0,0.8)]
          mr-[12px]
          mb-12px
        "
      >
        胡切仔麵
      </h3>
      <ul class="text-[14px] text-[rgba(0,0,0,0.5)] leading-[27px]">
        <li>
          除了台北101台北到底還有那些夜景？
          讓KKday告訴你台北還有哪些易達又美麗的夜景景點吧!
        </li>
      </ul>
      <ul
        class="
          label
          flex
          justify-end
          items-center
          text-[14px] text-[rgba(0,0,0,0.3)]
          h-40px
        "
      >
        <li>
          <img src="@/assets/svg/icon_eye.svg" alt="" />
          <span>3萬</span>
        </li>
        <li>
          <img src="@/assets/svg/icon_love.svg" alt="" />
          <span>3千</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.label {
  img {
    @apply mr-6px;
  }
  li {
    @apply flex items-center;
  }
  li + li {
    @apply ml-18px;
  }
}
</style>
