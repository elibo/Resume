<script setup lang="ts">
import AboutMe from './AboutMe.vue'
const props = defineProps({
  name: String,
  surname: String
})
</script>

<template>
  <div>
    <div class="header">
      <div class="name">{{ props.name }}</div>
      <div class="surname">{{ props.surname }}</div>
    </div>
    <div class="position">WEB FRONTEND DEVELOPER</div>
    <img alt="avatar" class="avatar" src="@/assets/avatar.jpg" />
    <AboutMe />
  </div>
</template>

<style scoped>
.header {
  font-size: 3rem;
  display: flex;
  justify-content: space-evenly;
  .name {
    color: #48da9b;
  }
  .surname {
    color: #837c9a;
  }
}
.position {
  font-size: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  color: #48da9b;
}
.avatar {
  display: block;
  height: 30rem;
  margin: 1rem auto 2rem;
}
</style>
