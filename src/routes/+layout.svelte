<!-- src/routes/+layout.svelte -->
<script>
 import '../app.css';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Loader from '$lib/components/Loader.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let isLoading = true;
  let hasLoadedBefore = false;
  
  onMount(() => {
    // Vérifier si l'utilisateur a déjà visité le site dans cette session
    if (browser) {
      hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore') === 'true';
      
      if (!hasLoadedBefore) {
        // Premier chargement - afficher le loader
        setTimeout(() => {
          isLoading = false;
          sessionStorage.setItem('hasLoadedBefore', 'true');
        }, 3000); // Durée minimale du chargement
      } else {
        // Déjà chargé - pas de loader
        isLoading = false;
      }
    }
  });
</script>

<svelte:head>
  <title>Mon Portfolio</title>
  <meta name="description" content="Portfolio personnel" />
</svelte:head>

{#if isLoading && !hasLoadedBefore}
  <Loader bind:isLoading />
{/if}

<div class="app" class:loaded={!isLoading}>
  <Header />
  <main>
    <slot />
  </main>
  
  <Footer />
</div>
