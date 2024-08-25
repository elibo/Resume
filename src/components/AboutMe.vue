<script setup lang="ts"></script>

<template>
  <div>
    <div class="header">Hi There!</div>
    <div class="info">
      I'm Elena, a frontend developer based in Spain. <br />During the last 8 years I've been
      working in different companies developing applications mostly with Angular and ReactJS.
    </div>
    <div class="header">Want to contact me?</div>
    <div class="subheader"><i class="pi pi-mobile" style="font-size: 1rem"></i> Phone</div>
    <div class="info">+34 617 763 680</div>
    <div class="subheader"><i class="pi pi-at" style="font-size: 1rem"></i> Email</div>
    <div class="info">epv1991@gmail.com</div>
    <div class="subheader"><i class="pi pi-map" style="font-size: 1rem"></i> Address</div>
    <div class="info">
      Rua Leiras Pulpeiro 2<br />
      32005 Ourense
    </div>

    <div class="icons">
      <a href="https://github.com/elibo" title="My github">
        <i class="pi pi-github" style="font-size: 2rem"></i>
      </a>
      <a href="https://www.linkedin.com/in/elena-pereira-vazquez-637b47113/" title="My linkedin">
        <i class="pi pi-linkedin" style="font-size: 2rem"></i>
      </a>
      <a
        href="/public/files/ElenaPereiraCV.pdf"
        title="My CV"
        target="_blank"
        download="ElenaPereiraCV.pdf"
        ><i class="pi pi-cloud-download" style="font-size: 2rem"></i
      ></a>
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
