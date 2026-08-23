import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The seven project categories from the wireframe. Keep this list in sync
// with src/data/projectCategories.ts (used to render the section headers
// and ordering on the homepage).
const CATEGORY_SLUGS = [
  'tech-projects',
  'people-coaching',
  'systems-design',
  'digital-transformations',
  'ai-automation',
  'simulations-data',
  'crm-dashboards',
] as const;

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(CATEGORY_SLUGS),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    // set true to hide a case study while it's still a draft
    draft: z.boolean().default(false),
    // lower numbers sort first within a category; ties fall back to date
    order: z.number().default(0),
  }),
});

export const collections = { 'case-studies': caseStudies };
export { CATEGORY_SLUGS };
