<template>
  <main class="s-main">
    <s-cats />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
