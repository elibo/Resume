<script setup lang="ts">
import SkillsComponent from './SkillsComponent.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="about-area pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <h2 class="title">{{ t('about.title') }}</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="col-sm-12">
            <div class="header-image small d-sm-block d-lg-none">
              <img src="/src/assets/avatar.jpg" alt="Me" />
            </div>
          </div>
          <div class="about-content mt-50">
            <h5 class="about-title">{{ t('about.subtitle') }}</h5>
            <p>
              {{ t('about.info') }}
            </p>
            <ul class="clearfix">
              <li>
                <div class="single-info d-flex align-items-center">
                  <div class="info-icon">
                    <i class="lni-calendar"></i>
                  </div>
                  <div class="info-text">
                    <p>
                      <span>{{ t('about.birth') }}:</span> 28 {{ t('months.january') }} 1991
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-info d-flex align-items-center">
                  <div class="info-icon">
                    <i class="lni-envelope"></i>
                  </div>
                  <div class="info-text">
                    <p><span>Email:</span> epv1991@gmail.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-info d-flex align-items-center">
                  <div class="info-icon">
                    <i class="lni-phone-handset"></i>
                  </div>
                  <div class="info-text">
                    <p>
                      <span>{{ t('about.phone') }}:</span> +34 617 763 680
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-info d-flex align-items-center">
                  <div class="info-icon">
                    <i class="lni-map-marker"></i>
                  </div>
                  <div class="info-text">
                    <p>
                      <span>{{ t('about.location') }}:</span> Ourense, {{ t('about.spain') }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <SkillsComponent />
      </div>
    </div>
  </section>
</template>
