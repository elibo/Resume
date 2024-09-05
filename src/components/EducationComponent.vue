<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="education" class="work-area pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <h2 class="title">{{ t('education.title') }}</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-6 col-sm-8">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              {{ t('education.apps') }}
              <p class="work-title">2014 - 2016</p>
              <p>{{ t('education.apps-info') }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-6 col-sm-8">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              {{ t('education.systems') }}
              <p class="work-title">2012 - 2014</p>
              <p>
                {{ t('education.systems-info') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
