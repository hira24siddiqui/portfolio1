# Hira Siddiqui — Portfolio

A dark/techy, data-driven portfolio site built with [Astro](https://astro.build), scaffolded from a hand-drawn wireframe. Static output — deploys free on GitHub Pages.

## Structure

- `src/pages/index.astro` — the one-page portfolio, assembled from the sections below.
- `src/components/` — reusable UI pieces (Nav, Hero, Timeline, SkillGroup, IkigaiDiagram, CaseStudyCard, etc).
- `src/data/` — plain content files. **This is where you edit your real content** for the sections that aren't full case studies:
  - `site.ts` — name, tagline, story, gallery photos, email, social links
  - `achievements.ts`, `certifications.ts`, `timeline.ts`, `skills.ts`, `hobbies.ts`, `aspirations.ts`
- `src/content/case-studies/*.md` — one Markdown file per project case study. Each gets its own page automatically at `/case-studies/<filename>/`. Frontmatter fields:
  ```yaml
  title: "Project name"
  category: tech-projects   # must match a slug in src/data/projectCategories.ts
  summary: "One-line summary shown on the card"
  tags: ["Tag One", "Tag Two"]
  date: 2026-01-01
  order: 1                  # lower sorts first within its category
  draft: false               # set true to hide it without deleting the file
  ```
  Everything below the `---` is the case study body (Markdown, rendered on its page).
- `src/content/config.ts` — the case-study schema and the list of valid category slugs.
- `public/` — static files served as-is (favicon, and put real photos in `public/images/`, referenced from `site.ts`'s `gallery` array).

## Adding your content

1. **Text sections** (story, achievements, certifications, timeline, skills, hobbies, aspirations): edit the corresponding file in `src/data/`. Everything is a plain array/object — add, remove, or edit entries directly.
2. **Photos**: drop image files into `public/images/`, then reference them (e.g. `/images/your-photo.jpg`) from `site.ts`.
3. **Case studies**: copy one of the existing placeholder `.md` files in `src/content/case-studies/`, rename it, and fill in the frontmatter + body. It'll automatically show up under the right category on the homepage and get its own page.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.
3. Update `astro.config.mjs`:
   - `site`: set to your real GitHub Pages URL.
   - `base`:
     - If the repo is named `<your-username>.github.io` (a user/root site), keep `base: '/'`.
     - If it's a different repo name (a project site, e.g. `portfolio`), set `base: '/portfolio/'` (matching the repo name) so links resolve correctly.
4. Push to `main` — check the **Actions** tab for build/deploy status. Your site will be live at the URL shown in **Settings → Pages** once it finishes.
5. Optional: add a custom domain in **Settings → Pages → Custom domain**, and point your domain's DNS at GitHub Pages per [their docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
