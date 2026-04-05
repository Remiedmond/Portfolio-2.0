<script>
  const text = "À propos de moi ! | ";
  const repeatedText = new Array(20).fill(text).join("");
  let isPaused = false;
</script>

<div class="competences-container">
<div 
  class="flex overflow-x-hidden bg-martens-black py-3" 
  role="region" 
  aria-label="Marquee"
  tabindex="0"
  on:mouseenter={() => isPaused = true} 
  on:mouseleave={() => isPaused = false}
>
  <div class="animate-marquee" class:paused={isPaused} style="animation-play-state: {isPaused ? 'paused' : 'running'};">
    <span >
      {repeatedText}
    </span>
    <span>
      {repeatedText}
    </span>
  </div>
</div>
</div>

<style>
  .competences-container {
    width: 100%;
    background: linear-gradient(270deg, #1b1a1a, #004aad);
    border-top: 6px solid white;
    border-bottom: 6px solid white;
    overflow: hidden;
    margin-top: -0.5rem;
  }

  .marquee-wrapper {
    display: flex;
    overflow: hidden;
    padding: 1rem 0;
  }

  .animate-marquee {
    display: flex;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    font-size: clamp(40px, 8vw, 80px);
    padding: 2rem 5rem; 
    text-transform: uppercase;
  }

   .animate-marquee span {
    padding-right: 0.2em; 
    color: #d8a43a;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (max-width: 600px) {
    .animate-marquee {
      animation-duration: 15s;
    }
  }
</style> 