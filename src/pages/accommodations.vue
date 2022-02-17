<script setup>
import AccommodationBanner from "../assets/images/Accommodation_banner.jpg";

const Accommodation = `background-image: url(${AccommodationBanner});`;
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom w-[100%] h-700px relative"
    :style="Accommodation"
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
      src="../assets/images/Accommodation_banner_icon.png"
      alt=""
    />
    <ul
      class="
        search
        absolute
        left-[50%]
        bottom-[3%]
        transform
        -translate-x-1/2
        flex
        text-14px
      "
    >
      <li class="">
        <label ref="input" class="search_title">目的地</label>
        <input
          class="
            w-351px
            rounded-8px
            leading-23px
            py-13px
            pl-14px
            pr-13px
            outline-none
          "
          type="search"
          placeholder="你要去哪裡？"
        />
      </li>
      <li class="">
        <div class="search_title">入住-退房</div>
        <div
          class="
            w-159px
            rounded-8px
            leading-23px
            py-13px
            pl-14px
            pr-13px
            outline-none
            bg-white
            text-[rgba(0,0,0,0.5)]
            cursor-pointer
          "
        >
          <img
            src="@/assets/svg/icon_calendar.svg"
            class="inline-block mr-12px"
            alt=""
          />
          <p class="leading-20px inline-block">2021/10/6~10/9</p>
        </div>
      </li>
      <li class="">
        <div class="search_title">房間及人數</div>
        <div
          class="
            w-254px
            rounded-8px
            leading-23px
            py-13px
            pl-14px
            pr-13px
            outline-none
            bg-white
            text-[rgba(0,0,0,0.5)]
            cursor-pointer
            text-center
          "
        >
          ２位成人，1間房間
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.search_title {
  @apply block text-28px leading-39px text-[rgba(0,0,0,0.5)] mb-14px font-700;
}
.search {
  @apply bg-[rgba(255,255,255,0.4)] px-20px py-35px shadow-lg rounded-20px;
  li {
    @apply mx-19px;
  }
}
</style>
