<script setup lang="ts">
import NavigatorComponent from './components/NavigatorComponent.vue'
import ProfileHeader from './components/ProfileHeader.vue'
import FooterComponent from './components/FooterComponent.vue'
import AboutMe from './components/AboutMe.vue'
import HobbyComponent from './components/HobbyComponent.vue'
import WorkComponent from './components/WorkComponent.vue'
</script>

<template>
  <!-- <TemplateComponent /> -->
  <NavigatorComponent />
  <ProfileHeader name="ELENA" surname="PEREIRA" />
  <AboutMe />
  <HobbyComponent />
  <WorkComponent />
  <FooterComponent />
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
