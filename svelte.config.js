import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Assure-toi que c'est bien index.html
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev || process.env.VERCEL ? '' : '/Portfolio-2.0'
    },

    // AJOUTE CETTE SECTION ICI :
    prerender: {
      handleHttpError: ({ path, message }) => {
        // Si l'erreur concerne l'icône, on l'ignore (on ne renvoie rien)
        if (path.includes('icon.png')) {
          return;
        }
        // Pour les autres erreurs, on laisse le message s'afficher
        console.warn(message);
      }
    }
  }
};

export default config;