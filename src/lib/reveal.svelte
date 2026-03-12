<script>
  import { onMount } from 'svelte';
  export let delay = "0s";
  export let transition = "0.8s";

  let element;
  let isIntersecting = false;

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // LOG POUR DEBUG
      console.log("Élément détecté :", entry.target, "Visible :", entry.isIntersecting);
      
      if (entry.isIntersecting) {
        isIntersecting = true;
        observer.unobserve(element); 
      }
    }, { 
      threshold: 0.05, // Déclenche dès que 5% est visible
      rootMargin: "50px 0px" // Déclenche même si l'élément est encore 50px en dessous du bord
    });

    observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<div 
  bind:this={element} 
  class="reveal" 
  class:animate-in={isIntersecting}
  style:transition-delay={delay}
  style:transition-duration={transition}
>
  <slot />
</div>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    /* Sécurité pour ne pas bloquer le layout */
    width: 100%; 
    min-height: 10px; 
  }

  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
</style>