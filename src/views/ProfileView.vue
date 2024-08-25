<script setup lang="ts">
import HobbyComponent from '@/components/HobbyComponent.vue'

import { useDataStore } from '@/stores/data'

const aboutMe = useDataStore().hobbiesData
</script>

<template>
  <div class="main">
    <div class="header">{{ aboutMe.about.title }}</div>
    <div class="info">
      {{ aboutMe.about.line1 }}
      <br />
      {{ aboutMe.about.line2 }}
    </div>

    <div class="header">{{ aboutMe.hobbies.title }}</div>
    <div class="info">
      {{ aboutMe.hobbies.subtitle }}
      <div class="hobbies">
        <HobbyComponent
          v-for="(hobby, index) in aboutMe.hobbies.list"
          v-bind:key="index"
          :hobby="hobby.hobby"
          :icon="hobby.icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.hobbies {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
