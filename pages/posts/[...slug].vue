<template>
  <BaseScreen>
    <div class="prose prose-lg mx-auto prose-pre:bg-gray-100">
      <ContentRenderer :value="page" />
    </div>
  </BaseScreen>
</template>

<script setup>
import BaseScreen from "~/components/BaseScreen.vue";

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("posts").path(route.path).first();
});
</script>
