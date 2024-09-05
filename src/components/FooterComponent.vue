<script setup lang="ts">
const actualYear = new Date().getFullYear()
</script>

<template>
  <footer id="footer" class="footer-area">
    <div class="footer-copyright pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-text text-center pt-20">
              <p>© Copyright {{ actualYear }} Elena Pereira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
