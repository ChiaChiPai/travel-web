<script setup>
import delicacyBanner from "../assets/images/delicacy_banner.jpg";

const delicacy = `background-image: url(${delicacyBanner});`;
</script>
<template>
  <div
    class="bg-cover bg-no-repeat bg-bottom w-[100%] h-700px relative"
    :style="delicacy"
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
      src="../assets/images/delicacy_banner_icon.png"
      alt=""
    />
    <div
      class="absolute left-[50%] bottom-[22%] transform -translate-x-1/2 flex"
    >
      <label ref="input" class="search-bar relative mr-14px">
        <input
          class="
            w-529px
            rounded-8px
            leading-23px
            py-13px
            pl-8px
            pr-13px
            outline-none
          "
          type="search"
          placeholder="請輸入關鍵字"
        />
      </label>
    </div>
  </div>
</template>
