<template>
  <BaseScreen>
    <div class="flex flex-col md:flex-row gap-8 w-full">
      <!-- Posts Section -->
      <section class="flex-1 flex flex-col gap-4">
        <h2 class="text-lg font-semibold mb-2">Posts</h2>
        <main>
          <BlogPostList />
        </main>
      </section>

      <!-- Divider (visible only on large screens) -->
      <div class="hidden md:block w-px bg-gray-300" />

      <!-- About Me Section -->
      <aside class="md:w-1/3 flex flex-col gap-4">
        <h2 class="text-lg font-semibold mb-2">About Me</h2>
        <p>
          Hey, I'm Max! I'm a software engineer with a passion for building
          software the next person doesn't lose hair over.
        </p>
        <SocialLinks />
      </aside>
    </div>
  </BaseScreen>
</template>
