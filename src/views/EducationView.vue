<script setup lang="ts">
import { useDataStore } from '@/stores/data'
const education = useDataStore().educationData
</script>

<template>
  <div class="main">
    <div v-for="key in Object.keys(education)" v-bind:key="key">
      <div class="header">{{ key }}</div>
      <div class="info">
        {{ education[key] }}
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
