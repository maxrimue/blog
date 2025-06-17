<template>
  <ul>
    <li v-for="post in posts" :key="post.stem">
      <NuxtLink :to="post.path" class="text-blue-500 hover:underline">
        {{ post.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const posts = await queryCollection("posts").all();
</script>
