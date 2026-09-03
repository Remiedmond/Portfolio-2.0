<!-- src/lib/components/Loader.svelte -->
<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import logo from '../../img/logo.png';

  let { onFinish } = $props();

  let progress = $state(0);
  let loadingText = $state("Initialisation...");
  let isVisible = $state(true);

  const loadingSteps = [
    { text: "Initialisation...", threshold: 25 },
    { text: "Chargement des ressources...", threshold: 65 },
    { text: "Préparation de l'interface...", threshold: 90 },
    { text: "Finalisation...", threshold: 100 }
  ];

  onMount(() => {
    const totalDuration = 2500;
    const intervalTime = 30;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      progress = Math.min(progress + increment, 100);

      const current = loadingSteps.find(step => progress <= step.threshold);
      if (current) {
        loadingText = current.text;
      }

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          isVisible = false;
          if (onFinish) onFinish();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  });
</script>

{#if isVisible}
  <div 
    class="loader-container" 
    transition:fade={{ duration: 400 }}
  >
    <div class="loader-content" transition:scale={{ duration: 300, delay: 100 }}>
      <div class="logo">
        <img class="logoimgprofil" src={logo} alt="Logo" />
        <h1>Portfolio Rémi EDMOND</h1>
      </div>
      
      <div class="progress-container">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            style="width: {progress}%"
          ></div>
        </div>
        <div class="progress-text">
          {Math.round(progress)}%
        </div>
      </div>
      
      <div class="loading-text">
        {loadingText}
      </div>
      
      <div class="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
{/if}

<style>
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #1b1a1a, #004aad);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    font-family: 'League Spartan', sans-serif;
    font-weight: bold;
  }
  
  .loader-content {
    text-align: center;
    color: white;
    max-width: 400px;
    padding: 2rem;
  }
  
  .logo h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    letter-spacing: 2px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
  .logoimgprofil {
    width: 50%;
  }
  .progress-container {
    margin-bottom: 1.5rem;
  }
  
  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 0.5rem;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00f5ff, #0099ff, #00f5ff);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
    border-radius: 10px;
    transition: width 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 153, 255, 0.3);
  }
  
  .progress-text {
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
  
  .loading-text {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    min-height: 24px;
  }
  
  .loading-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  
  .loading-dots span {
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .loading-dots span:nth-child(1) {
    animation-delay: -0.32s;
  }
  
  .loading-dots span:nth-child(2) {
    animation-delay: -0.16s;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    .loader-content {
      padding: 1rem;
    }
    .logo h1 {
      font-size: 2rem;
    }
  }
</style>