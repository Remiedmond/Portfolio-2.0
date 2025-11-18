<!-- src/lib/components/Loader.svelte -->
<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  
  import logo from '../../img/logo.png';
  
  export let isLoading = true;
  
  let progress = 0;
  let loadingText = "Chargement en cours...";
  
  const loadingSteps = [
    { text: "Initialisation...", duration: 800 },
    { text: "Chargement des ressources...", duration: 1200 },
    { text: "Préparation de l'interface...", duration: 600 },
    { text: "Finalisation...", duration: 400 }
  ];
  
  onMount(() => {
    startLoading();
  });
  
  async function startLoading() {
    let currentStep = 0;
    let totalDuration = loadingSteps.reduce((acc, step) => acc + step.duration, 0);
    let elapsedTime = 0;
    
    for (const step of loadingSteps) {
      loadingText = step.text;
      
      const stepInterval = setInterval(() => {
        elapsedTime += 50;
        progress = Math.min((elapsedTime / totalDuration) * 100, 100);
        
        if (elapsedTime >= totalDuration) {
          clearInterval(stepInterval);
          setTimeout(() => {
            isLoading = false;
          }, 500);
        }
      }, 50);
      
      await new Promise(resolve => setTimeout(resolve, step.duration));
      currentStep++;
    }
  }
</script>

{#if isLoading}
  <div 
    class="loader-container" 
    transition:fade={{ duration: 500 }}
  >
    <div class="loader-content" transition:scale={{ duration: 300, delay: 200 }}>
      <!-- Logo ou titre du site -->
      <div class="logo">
        <img class="logoimgprofil" src={logo}>
        <h1>Portfolio Rémi EDMOND</h1>
      </div>
      
      <!-- Barre de progression -->
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
      
      <!-- Texte de chargement -->
      <div class="loading-text">
        {loadingText}
      </div>
      
      <!-- Animation de points -->
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
  .logoimgprofil{
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
  
  /* Responsive */
  @media (max-width: 768px) {
    .loader-content {
      padding: 1rem;
    }
    
    .logo h1 {
      font-size: 2rem;
    }
  }
</style>