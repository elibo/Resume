<script setup lang="ts">
import SkillComponent from '@/components/SkillComponent.vue'
import { useDataStore } from '@/stores/data'
const skillsData = useDataStore().skillsData
</script>

<template>
  <div class="main">
    <div class="header">Let's have a look to some of my skills</div>
    <div class="info">
      Since starting working I have worked with tons of technologies but here I only showing those
      ones that I consider more important

      <div class="skills">
        <SkillComponent v-for="(skill, index) in skillsData" v-bind:key="index" :skill="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
