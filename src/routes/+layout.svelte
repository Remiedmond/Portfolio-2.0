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

  // Déclaration avec les runes Svelte 5
  let isLoading = $state(true);
  let hasLoadedBefore = $state(false);

  onMount(() => {
    if (browser) {
      hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore') === 'true';
      if (hasLoadedBefore) {
        isLoading = false;
      }
    }
  });

  function handleFinish() {
    isLoading = false;
    if (browser) {
      sessionStorage.setItem('hasLoadedBefore', 'true');
    }
  }
</script>

<svelte:head>
  <title>Rémi Edmond | Développeur Web</title>
  <meta name="description" content="Portfolio de Rémi Edmond - Développeur Web." />
</svelte:head>

{#if isLoading && !hasLoadedBefore}
  <Loader onFinish={handleFinish} />
{/if}

<div class="app" class:loaded={!isLoading}>
  <Header />
  <main>
    {@render children?.()}
  </main>
  <Footer />
</div>
