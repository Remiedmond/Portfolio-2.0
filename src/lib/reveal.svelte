<script>
  import { onMount } from 'svelte';
  export let delay = "0s";
  export let transition = "0.8s";

  let element;
  let isIntersecting = false;

  onMount(() => {
    if (!element) return;

    // 1. Sécurité : si l'élément est déjà dans le viewport au montage, on affiche direct
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isIntersecting = true;
      return;
    }

    // 2. Observer classique pour les éléments hors écran
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIntersecting = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,            // Déclenche dès le moindre pixel
        rootMargin: "100px 0px"  // Pré-charge 100px avant que l'élément n'entre dans l'écran
      }
    );

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
    transform: translateY(30px);
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    will-change: opacity, transform;
  }

  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
</style>
