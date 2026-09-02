<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { browser, dev } from '$app/environment';
  import Loader from '$lib/components/Loader.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  let { children } = $props();

  let isLoading = true;
  let hasLoadedBefore = false;

  onMount(() => {
    if (browser) {
      hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore') === 'true';

      if (!hasLoadedBefore) {
        setTimeout(() => {
          isLoading = false;
          sessionStorage.setItem('hasLoadedBefore', 'true');
        }, 3000);
      } else {
        isLoading = false;
      }
    }
  });
</script>

<svelte:head>
  <title>Rémi Edmond | Développeur Web</title>
  <meta name="description" content="Portfolio de Rémi Edmond - Développeur Web." />
</svelte:head>

{#if isLoading && !hasLoadedBefore}
  <Loader bind:isLoading />
{/if}

<div class="app" class:loaded={!isLoading}>
  <Header />
  <main>
    {@render children?.()}
  </main>
  <Footer />
</div>