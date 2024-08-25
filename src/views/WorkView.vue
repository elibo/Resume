<script setup lang="ts">
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'
import { useDataStore } from '../stores/data'

const workData = useDataStore().workData
</script>

<template>
  <div class="main">
    <Timeline :value="workData" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ margin: '0 1rem', paddingTop: '0.8rem' }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mt-4" :style="{ marginBottom: '1rem' }">
          <template #title>
            <div class="title">{{ slotProps.item.company }}</div>
          </template>
          <template #subtitle>
            <div class="subtitle">{{ slotProps.item.date }}</div></template
          >
          <template #content>
            <p>
              {{ slotProps.item.description }}
            </p>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style scoped>
.main {
  padding: 2rem 0;
}
.title {
  color: #48da9b;
  font-size: 1.8rem;
}
.subtitle {
  color: #48da9b;
}
</style>
