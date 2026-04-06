<script>
  import Projetyakapartir from "./projetyakapartir.svelte";
  import './descweb.css';
  import gridpro from '../../img/agde.jpg';
  
  let pagea4 = ''; 
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="project-container">
    {#if pagea4 === 'Projetyakapartir'}
        <Projetyakapartir />
        
    {:else}
        <!-- En-tête : Numéro 03 et Titre -->
        <div class="project-header">
            <span class="big-num">03</span>
            <div class="title-block">
                <h2 class="project-name">Projet <span class="highlight">DS GRID</span></h2>
                <p class="project-subtitle">YAKA PARTIR — BUT MMI 2</p>
            </div>
        </div>

        <div class="project-content">
            <!-- Partie Visuelle -->
            <div class="visual-side">
                <div class="img-frame">
                    <img src={gridpro} alt="Projet Yaka Partir">
                </div>
                <button class="btn-editorial" on:click|preventDefault={() => show('Projetyakapartir')}>
                    Détails du projet <i class='bx bx-plus-circle'></i>
                </button>
            </div>

            <!-- Partie Texte -->
            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>PROJET</span> Yaka Partir</div>
                    <div class="spec-item"><span>DOMAINE</span> Tourisme / Voyage</div>
                    <div class="spec-item"><span>CREDITS</span>  Rémi EDMOND</div>
                </div>

                <div class="text-description">
                    <p>
                        Réalisé en deuxième année de BUT MMI, ce projet intitulé <em>"DS Grid"</em> avait pour but de perfectionner notre maîtrise des structures complexes via <strong>CSS Grid</strong>.
                    </p>
                    <p>
                        L'enjeu était de concevoir une interface capable d'adapter des blocs de contenus hétérogènes (galeries photos, textes descriptifs) sur des formats d'écrans variés, tout en garantissant une <strong>hiérarchie visuelle</strong> impeccable.
                    </p>
                    <p class="quote">
                        "Une réflexion poussée sur l'agencement flexible et l'ergonomie d'un site de destination."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>