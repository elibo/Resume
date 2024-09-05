<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="navigation fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="page-scroll" href="#">{{ t('nav.home') }}</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll" href="#about">{{ t('nav.about') }}</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll" href="#education">{{ t('nav.education') }}</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll" href="#work">{{ t('nav.work') }}</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll" href="#hobbies">{{ t('nav.hobbies') }}</a>
              </li>
              <li
                class="option"
                :class="{ active: $i18n.locale === 'es' }"
                @click="$i18n.locale = 'es'"
              >
                ES
              </li>
              <li
                class="option"
                :class="{ active: $i18n.locale === 'en' }"
                @click="$i18n.locale = 'en'"
              >
                EN
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@media (max-width: 900px) {
  .option {
    margin: 4px 0;
  }
}
.option {
  padding: 0 0.25rem;
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: #48da9b;
  }
}
</style>
