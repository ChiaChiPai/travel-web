<script setup>
const navList = [
  {
    title: "活動新訊",
    content: ["最新消息", "活動異動", "熱門話題"],
  },
  {
    title: "景點",
    content: ["熱門景點", "網紅攻略", "主題景點"],
  },
  {
    title: "美食",
    content: [
      "台灣文化",
      "台灣小吃",
      "台灣在地特色",
      "熱門美食",
      "網紅必推美食",
    ],
  },
  {
    title: "住宿",
    content: ["觀光旅館", "旅館", "民宿", "住宿推薦"],
  },
  {
    title: "交通",
    content: ["陸運資訊 ", "高速公路", "交通租賃"],
  },
];
</script>

<template>
  <div class="veiwpoint-bg w-[100vw] h-376px flex justify-center pt-72px">
    <ul v-for="nav in navList" :key="nav.title" class="footer-title mx-50px">
      <h3 class="font-700 text-28px leading-39px mb-18px">
        {{ nav.title }}
      </h3>
      <li v-for="content in nav.content" :key="content">{{ content }}</li>
    </ul>
  </div>
  <div class="bg-[#6E9292] pt-18px pb-13px pl-28px flex">
    <img src="@/assets/images/icon_taiwan.png" class="w-52px mr-28px" alt="" />
    <p class="font-700 text-[#f8f8f8]">
      24小時免付費旅遊諮詢熱線：0800-011765<br />免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）
    </p>
  </div>
</template>

<style lang="postcss">
.veiwpoint-bg {
  background: linear-gradient(0deg, #a7d4da 0%, rgba(167, 212, 218, 0) 89.54%);
}
.footer-title {
  li {
    @apply mb-18px text-[rgba(0,0,0,0.5)] text-24px;
  }
}
</style>
