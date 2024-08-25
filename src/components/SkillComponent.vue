<script setup lang="ts">
const props = defineProps({
  title: String,
  level: String
})
const isActive = (n: number) => {
  const level = Number(props.level)
  return level === n || n < level
}
</script>

<template>
  <div class="skill">
    <span class="title">{{ props.title }}</span>
    <span class="dots">
      <span class="dot" v-for="n in 5" v-bind:key="n" v-bind:class="{ active: isActive(n) }"></span>
    </span>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
}
.skill {
  padding: 1rem;
}
.dots {
  display: flex;
  flex-direction: row;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb7c8;
  border-radius: 50%;
  display: inline-block;
  margin: 1rem;
}
.dot.active {
  background-color: #48da9b;
}
</style>
