<script setup lang="ts">
const props = defineProps({
  hobby: String,
  icon: String
})
</script>

<template>
  <div class="hobby">
    <span class="icon"> <i :class="props.icon" style="font-size: 3rem"></i></span>
    <span class="title"> {{ props.hobby }}</span>
  </div>
</template>

<style scoped>
.hobby {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 8rem;
}
.icon {
  display: flex;
  justify-content: center;
}
.title {
  padding: 1rem;
  text-align: center;
}
</style>
