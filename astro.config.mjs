import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages: https://VIACO111.github.io/NJA/
const githubUser = 'VIACO111';
const repoName = 'NJA';

export default defineConfig({
  site: `https://${githubUser}.github.io`,
  base: `/${repoName}/`,
  integrations: [tailwind()],
});
