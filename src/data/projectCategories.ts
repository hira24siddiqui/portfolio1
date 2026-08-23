// Order + display titles for the seven project categories from the
// wireframe. `slug` must match one of the CATEGORY_SLUGS values in
// src/content/config.ts.
export const projectCategories = [
  { slug: 'tech-projects', title: 'Tech Projects — Case Studies' },
  { slug: 'people-coaching', title: 'People & Coaching + Teaching — Case Studies' },
  { slug: 'systems-design', title: 'Systems Design + Strategy' },
  { slug: 'digital-transformations', title: 'Digital Transformations — Case Studies' },
  { slug: 'ai-automation', title: 'AI Automation — Agents, RAG, n8n, Workflows' },
  { slug: 'simulations-data', title: 'Simulations + Data Analysis' },
  { slug: 'crm-dashboards', title: 'CRM Build + Dashboard Repository' },
] as const;
