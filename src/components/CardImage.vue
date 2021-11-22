<script setup>
defineProps({
  isShowOption: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="w-[368px] h-[420px] rounded-30px overflow-hidden relative">
    <div v-if="isShowOption">
      <div
        class="
          w-125px
          h-40px
          bg-white
          rounded-30px
          absolute
          left-18px
          top-18px
          flex
          items-center
          justify-center
          text-14px text-[rgba(0,0,0,0.3)]
        "
      >
        <img class="w-16px mx-4px" src="@/assets/svg/icon_visitor.svg" alt="" />
        <div>4.2</div>
        <img class="w-24px mx-4px" src="@/assets/svg/icon_eye.svg" alt="" />
        <div>4.2萬</div>
      </div>
      <img
        class="absolute right-18px top-18px"
        src="@/assets/images/icon_tag.png"
        alt=""
      />
    </div>
    <div class="w-[100%] h-[100%] bg-[#0f0] mb-[8px] pt-354px">
      <div
        class="
          flex
          font-700
          justify-between
          items-center
          text-white
          px-12px
          bg-[rgba(0,0,0,0.4)]
          h-66px
        "
      >
        <div class="text-36px leading-[39.2px] text-shadow-sm">台北１０１</div>
        <div v-if="isShowOption" class="flex item-center">
          <img
            class="mr-[4px]"
            src="@/assets/svg/icon_location-white.svg"
            alt=""
          />
          <span
            class="
              inline-block
              text-base text-16px
              leading-22px
              whitespace-nowrap
            "
            >南投縣</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
