<template>
  <BaseScreen>
    <title>{{ page.title }} - @maxrimue's Blog</title>
    <h1 class="text-2xl font-bold">{{ page.title }}</h1>
    <p class="opacity-70">{{ formattedDate }}</p>
    <div class="prose prose-pre:bg-gray-100 font-serif">
      <ContentRenderer :value="page" />
    </div>
  </BaseScreen>
</template>

<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("posts").path(route.path).first();
});

const formattedDate = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date(page.value.date));
</script>
