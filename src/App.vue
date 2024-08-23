<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigatorComponent from './components/NavigatorComponent.vue'
import ProfileHeader from './components/ProfileHeader.vue'
</script>

<template>
  <NavigatorComponent />
  <header>
    <ProfileHeader name="ELENA" surname="PEREIRA" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 90vh;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .avatar {
    margin: 0 2rem 0 0;
  }
}
</style>
