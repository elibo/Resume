<script setup lang="ts">
import HobbyComponent from '@/components/HobbyComponent.vue'

const years = new Date().getFullYear() - 1991
</script>

<template>
  <div class="main">
    <div class="header">Some bits about me</div>
    <div class="info">
      I'm {{ years }} years old and the majority of those I've been enjoying all things technology.
      Since a young age I discovered videogames and computers and that changed my perspective in
      life. I love the sense of acomplishment that I get when I find the solution to a bothersome
      problem and that's pretty much the life of a developer, finding solutions and fixing problems.
      <br />
      My first steps into programming were hand in hand with the old fella Angular JS then to
      discover Angular 2 and typescript and later ReactJS. In the last years I've been learning new
      frameworks and right now I'm full on VueJS, maybe in a future I'll go all in with VueJS work
      related but for now I keep it as a simple hobby.
    </div>

    <div class="header">Not all in life is work</div>
    <div class="info">
      Even though I enjoy my job I love to spend my free time doing multiple activities. Some of
      those include:
      <div class="hobbies">
        <HobbyComponent hobby="Motorcycle Riding" icon="pi pi-gauge" />
        <HobbyComponent hobby="Listening to music" icon="pi pi-headphones" />
        <HobbyComponent hobby="Playing videogames" icon="pi pi-trophy" />
        <HobbyComponent hobby="Playing piano" icon="pi pi-play" />
        <HobbyComponent hobby="Reading books" icon="pi pi-book" />
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
