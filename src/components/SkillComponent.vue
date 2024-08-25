<script setup lang="ts">
import type { SkillType } from '@/types/data'
import type { PropType } from 'vue'

const props = defineProps({
  skill: Object as PropType<SkillType>
})
const { name, level } = props.skill!
const isActive = (n: number) => {
  return level && (level === n || n < level)
}
</script>

<template>
  <div class="skill">
    <span class="title">{{ name }}</span>
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
