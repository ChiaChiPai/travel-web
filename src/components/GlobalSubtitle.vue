<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },

  isShowMore: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="flex bg-[#6E9292] h-[71px] w-[100%] items-center">
    <div
      class="
        flex
        mx-auto
        text-white
        pr-[40px]
        pl-[58px]
        w-[1280px]
        justify-between
      "
    >
      <div class="font-700 text-[48px]">{{ title }}</div>
      <div
        v-if="isShowMore"
        class="border-white rounded-lg border-4 font-400 py-[9px] px-[39px]"
      >
        查看更多
      </div>
    </div>
  </div>
</template>

<style></style>
