<template>
  <a
    :href="link.url"
    target="_blank"
    class="flex items-center gap-2 w-full px-4 py-2 rounded-md outline outline-1 outline-gray-400 transition hover:text-white hover:bg-black hover:outline-black"
  >
    <Icon v-if="link.icon" :name="link.icon" class="text-2xl" />
    <span>{{ link.name }}</span>
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>
