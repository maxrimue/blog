<template>
  <ul class="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
    <li v-for="link in links.items" :key="link.name">
      <LinkButton :link="link" />
    </li>
  </ul>
</template>

<script setup>
const links = await queryCollection("socialLinks").first();
</script>
