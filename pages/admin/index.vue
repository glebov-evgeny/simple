<template>
  <main class="s-main">
    <s-lk />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
