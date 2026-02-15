import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Cloudflare Pages: https://opw.wearevia.co
export default defineConfig({
  site: 'https://opw.wearevia.co',
  integrations: [tailwind()],
  build: {
    // Astro default; Cloudflare Pages should use output dir "dist"
    inlineStylesheets: 'auto',
  },
});
