<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="work" class="work-area pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <h2 class="title">{{ t('work.title') }}</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-6 col-sm-8">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              Senior Frontend Engineer
              <p class="work-title">
                Sparta • {{ t('months.august') }} 2022 - {{ t('months.february') }} 2024
              </p>
              <p>
                {{ t('work.sparta') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-6 col-sm-8">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              Senior Frontend Developer
              <p class="work-title">
                Plexus • {{ t('months.december') }} 2019 - {{ t('months.july') }} 2022
              </p>
              <p>
                {{ t('work.plexus') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-6 col-sm-8">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              Junior Full Stack Developer
              <p class="work-title">
                Citecam • {{ t('months.july') }} 2016 - {{ t('months.december') }} 2019
              </p>
              <p>
                {{ t('work.citecam') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
