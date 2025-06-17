<template>
  <ul class="space-y-2">
    <li v-for="link in links.items" :key="link.name">
      <LinkButton :link="link" />
    </li>
    <li>
      <LinkButton :link="emailLink" />
    </li>
  </ul>
</template>

<script setup>
const links = await queryCollection("socialLinks").first();

const emailLink = {
  name: "Email",
  url: "mailto:hey@maxrimue.dev",
  icon: "mdi:email-outline",
};
</script>
