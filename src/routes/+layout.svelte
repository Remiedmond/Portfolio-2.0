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
  <meta 
    name="description" 
    content="Portfolio de Rémi Edmond, développeur web et futur expert DevOps. Découvrez mes projets, compétences full-stack et réalisations techniques." 
  />

  <!-- Balises Open Graph pour les aperçus LinkedIn / réseaux sociaux -->
  <meta property="og:title" content="Rémi Edmond | Développeur Web" />
  <meta 
    property="og:description" 
    content="Portfolio de Rémi Edmond, développeur web et futur expert DevOps. Découvrez mes projets et réalisations techniques." 
  />
  <meta property="og:url" content="https://www.remi-edmond.fr" />
  <meta property="og:type" content="website" />
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
