import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://egidiugabor.com',
  prefetch: true,
  viewTransitions: true,
  integrations: [
    mdx(), 
    sitemap(), 
    preact(),
    icon()
  ]
});