import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { glob } from "astro/loaders";

const evenemang = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/evenemang" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    eventType: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    location: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    price: z.string().optional(),
    speaker: z.string().optional(),
    lastSignupDate: z.string().optional(),
  }),
});

export const collections = { evenemang };
