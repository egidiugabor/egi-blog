import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import NetlifyCMS from 'astro-netlify-cms';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), NetlifyCMS({
		config: {
		  backend: {
			name: 'git-gateway',
			branch: 'main',
		  },
		  collections: [
			// Content collections
		  ],
		},
	  })],
});
