<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Blog Posts Section -->
      <main class="flex-1 p-4">
        <h1 class="text-xl font-bold mb-4">@maxrimue's Blog</h1>
        <BlogPostList />
      </main>

      <!-- Divider (visible only on large screens) -->
      <div class="hidden md:block w-px bg-gray-300" />

      <!-- About Me Section -->
      <aside class="md:w-1/3 flex flex-col p-4 gap-4">
        <h1 class="text-xl font-bold">About Me</h1>
        <p>
          Hey, I'm Max! I'm a software engineer with a passion for building
          software the next person doesn't lose hair over.
        </p>
        <SocialLinks />
        <LinkButton :link="emailLink" />
      </aside>
    </div>
  </div>
</template>

<script setup>
import BlogPostList from "~/components/BlogPostList.vue";
import LinkButton from "~/components/LinkButton.vue";
import SocialLinks from "~/components/SocialLinks.vue";

const emailLink = {
  name: "Email",
  url: "mailto:hey@maxrimue.dev",
  icon: "mdi:email-outline",
};
</script>

<style scoped></style>
