import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "posts/*.md",
      schema: z.object({
        date: z.date(),
      }),
    }),
    socialLinks: defineCollection({
      type: "data",
      source: "socialLinks.json",
      schema: z.object({
        items: z
          .object({
            name: z.string(),
            url: z.string(),
            icon: z.string(),
          })
          .array(),
      }),
    }),
  },
});
