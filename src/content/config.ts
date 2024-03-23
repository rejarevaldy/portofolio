import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      date: z.string(),
      featured: z.boolean().default(false),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
