import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// Cloudflare Pages: https://opw.wearevia.co
export default defineConfig({
  site: 'https://www.wearevia.co',
  base: '/RCTraining',
  integrations: [tailwind(), icon()],
  build: {
    // Astro default; Cloudflare Pages should use output dir "dist"
    inlineStylesheets: 'auto',
  },
});
