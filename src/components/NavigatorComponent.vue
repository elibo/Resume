<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Profile</RouterLink>
    <RouterLink to="/education">Education</RouterLink>
    <RouterLink to="/skills">Skills</RouterLink>
    <RouterLink to="/work">Work Experience</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
  grid-column: 1 / 3;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
