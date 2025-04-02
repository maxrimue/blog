<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="post.link" class="text-blue-500 hover:underline">
        {{ post.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
