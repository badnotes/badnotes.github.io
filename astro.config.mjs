import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://badnotes.github.io',
  base: 'fyme.cc',
});
