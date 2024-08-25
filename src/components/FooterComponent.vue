<script setup lang="ts">
const actualYear = new Date().getFullYear()
</script>

<template>
  <div class="footer">© Copyright {{ actualYear }} Elena Pereira</div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  grid-column: 1/3;
}
</style>
