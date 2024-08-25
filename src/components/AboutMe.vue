<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const profile = useDataStore().profileData
</script>

<template>
  <div>
    <div class="header">{{ profile.header.title }}</div>
    <div class="info">
      {{ profile.header.info }}
    </div>
    <div class="header">{{ profile.contact.header }}</div>
    <span v-for="(data, index) in profile.contact.data" v-bind:key="index">
      <div class="subheader">
        <i :class="data.icon" style="font-size: 1rem"></i> {{ data.title }}
      </div>
      <div class="info">{{ data.info }}</div>
    </span>

    <div class="icons">
      <a
        v-for="(social, index) in profile.socials"
        v-bind:key="index"
        :href="social.link"
        :title="social.title"
        target="_blank"
        :download="social.download ? 'ElenaPereiraCV.pdf' : ''"
      >
        <i :class="social.icon" style="font-size: 2rem"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
:nth-child(2) {
  padding-bottom: 1rem;
}

.subheader {
  font-size: 1.3rem;
  color: #ffffff;
}

.icons {
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}
</style>
