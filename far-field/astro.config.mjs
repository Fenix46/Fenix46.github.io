// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://fenix46.github.io',
	base: '/Fenix46.github.io',
	integrations: [
		mdx(),
		sitemap()
	],
	output: 'static',
	trailingSlash: 'always',
	build: {
		assets: 'assets'
	}
});
