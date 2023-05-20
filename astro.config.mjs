import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://egidiugabor.com',
  integrations: [mdx(), sitemap(), preact(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});