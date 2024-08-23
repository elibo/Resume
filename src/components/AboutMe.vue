<script setup lang="ts">
import LinkWithIcon from './LinkWithIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import DownloadCVIcon from './icons/DownloadCVIcon.vue'
</script>

<template>
  <div>
    <div class="header">Hi There!</div>
    <div class="info">
      I'm Elena, a frontend developer based in Spain. <br />During the last 8 years I've been
      working in different companies developing applications mostly with Angular and ReactJS. <br />
      Right now I'm learning VueJS to try and stay fresh on all the frameworks that I can
    </div>
    <div class="header">Want to contact me?</div>

    <div class="subheader">Phone</div>
    <div class="info">+34 617763680</div>
    <div class="subheader">Email</div>
    <div class="info">epv1991@gmail.com</div>
    <div class="subheader">Adress</div>
    <div class="info">Rua Leiras Pulpeiro 2, 32005 Ourense</div>

    <div class="icons">
      <LinkWithIcon url="https://github.com/elibo" tooltip="Github Profile">
        <template #icon>
          <GithubIcon />
        </template>
      </LinkWithIcon>
      <LinkWithIcon url="#" tooltip="Download CV">
        <template #icon>
          <DownloadCVIcon />
        </template>
      </LinkWithIcon>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 1.8rem;
  color: #48da9b;
}

.info {
  font-size: 1.1rem;
  color: #bbb7c8;
}

.subheader {
  font-size: 1.3rem;
  color: #ffffff;
}

.icons {
  display: flex;
  justify-content: space-evenly;
}
</style>
