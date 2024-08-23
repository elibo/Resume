<script setup lang="ts">
const props = defineProps({
  url: String,
  tooltip: String
})
</script>
<template>
  <div class="item">
    <a :href="props.url" :title="props.tooltip">
      <slot name="icon"></slot>
    </a>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}
</style>
