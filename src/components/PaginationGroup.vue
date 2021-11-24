<template>
  <ul class="pagination flex">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</template>

<style lang="postcss" scoped>
.pagination {
  li {
    @apply w-44px h-44px rounded-full bg-[#f8f8f8] text-center leading-44px text-[rgba(0,0,0,0.8)] mx-4px;
    &.active {
      @apply bg-[rgba(0,0,0,0.3)];
    }
  }
}
</style>
