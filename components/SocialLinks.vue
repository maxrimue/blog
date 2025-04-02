<template>
  <ul class="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
    <li v-for="link in links" :key="link.name">
      <LinkButton :link="link" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>
