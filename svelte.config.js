import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(), // AJOUTEZ CETTE LIGNE
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/Portfolio-2.0' : ''
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      entries: ['*']
    }
  }
};

export default config;