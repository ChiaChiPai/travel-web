<template>
  <nav
    class="
      flex
      transform
      top-24px
      left-[50%]
      w-[100%]
      z-1
      -translate-x-1/2
      absolute
      xl:w-[1280px]
    "
  >
    <div class="flex pr-[30px] w-[100%] justify-end">
      <ul
        class="
          flex
          font-tc font-bold
          text-[rgba(0,0,0,0.5)]
          navbar
          items-center
        "
      >
        <li>活動新訊</li>
        <li>景點</li>
        <li>美食</li>
        <li>住宿</li>
        <li>交通</li>
      </ul>
      <img class="mr-11px ml-2px" src="@/assets/svg/icon_search.svg" alt="" />
      <img src="@/assets/svg/icon_member.svg" alt="" />
    </div>
  </nav>
</template>

<style lang="postcss">
.navbar li {
  @apply mx-6px relative;
  + li::before {
    content: "";
    width: 2px;
    height: 24px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: -8px;
  }
}
</style>
