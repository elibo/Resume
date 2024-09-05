<script setup lang="ts">
import SkillComponent from './SkillComponent.vue'
</script>

<template>
  <section id="about" class="about-area pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <h2 class="title">About Me</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="about-content mt-50">
            <h5 class="about-title">Hi There! I'm Elena Pereira</h5>
            <p>
              a frontend developer based in Spain. During the last 8 years I've been working in
              different companies developing applications mostly with Angular and ReactJS.
            </p>
            <ul class="clearfix">
              <li>
                <div class="single-info d-flex align-items-center">
                  <div class="info-icon">
                    <i class="lni-calendar"></i>
                  </div>
                  <div class="info-text">
                    <p><span>Birthdate:</span> 28 January 1991</p>
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
                    <p><span>Phone:</span> +34 617 763 680</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-info d-flex align-items-center">
                  <div class="info-icon">
                    <i class="lni-map-marker"></i>
                  </div>
                  <div class="info-text">
                    <p><span>Location:</span> Ourense, Spain</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <SkillComponent />
      </div>
    </div>
  </section>
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
