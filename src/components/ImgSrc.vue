<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "png"
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  classString: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <img
    :srcset="`${name}.${type} 1x, ${name}@2x.${type} 2x, ${name}@3x.${type} 3x,`"
    :src="`${name}.${type}`"
    :alt="alt"
    :width="width"
    :height="height"
    :class="classString"
  >
</template>