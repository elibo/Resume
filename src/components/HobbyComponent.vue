<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="hobbies" class="services-area gray-bg pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center pb-30">
            <h2 class="title">{{ t('hobbies.title') }}</h2>
            <p>
              {{ t('hobbies.subtitle') }}
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="single-service text-center mt-30">
            <div class="service-icon">
              <i class="lni-game"></i>
            </div>
            <div class="service-content">
              <h4 class="service-title">
                <a href="#">{{ t('hobbies.games') }}</a>
              </h4>
              <p>
                {{ t('hobbies.games2') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="single-service text-center mt-30">
            <div class="service-icon">
              <i class="lni-scooter"></i>
            </div>
            <div class="service-content">
              <h4 class="service-title">
                <a href="#contact">{{ t('hobbies.bike') }}</a>
              </h4>
              <p>
                {{ t('hobbies.bike2') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="single-service text-center mt-30">
            <div class="service-icon">
              <i class="lni-library"></i>
            </div>
            <div class="service-content">
              <h4 class="service-title">
                <a href="#">{{ t('hobbies.books') }}</a>
              </h4>
              <p>
                {{ t('hobbies.books2') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
