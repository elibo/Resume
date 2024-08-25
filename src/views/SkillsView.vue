<script setup lang="ts">
import SkillComponent from '@/components/SkillComponent.vue'
</script>

<template>
  <div class="main">
    <div class="header">Let's have a look to some of my skills</div>
    <div class="info">
      Since starting working I have worked with tons of technologies but here I only showing those
      ones that I consider more important

      <div class="skills">
        <SkillComponent title="ReactJS" level="4" />
        <SkillComponent title="Angular" level="4" />
        <SkillComponent title="Typescript" level="4" />
        <hr />
        <SkillComponent title="Spanish" level="5" />
        <SkillComponent title="English" level="4" />
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
