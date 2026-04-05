<script>
  import './descweb.css';
  import laplaylistpro from '../../img/laplaylist.png';
  
  let pagea4 = ''; 
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="project-container">
    {#if pagea4 === 'Projetyakapartir'}
        <Projetyakapartir />
        <button class="btn-back" on:click={() => show('')}>
            <i class='bx bx-left-arrow-alt'></i> Retour
        </button>
    {:else}
        <!-- En-tête : Numéro 06 et Titre -->
        <div class="project-header">
            <span class="big-num">06</span>
            <div class="title-block">
                <h2 class="project-name">Festival <span class="highlight">LA PLAYLIST</span></h2>
                <p class="project-subtitle">PROJET DE FIN D'ANNÉE — BUT MMI 1</p>
            </div>
        </div>

        <div class="project-content">
            <!-- Partie Visuelle -->
            <div class="visual-side">
                <div class="img-frame">
                    <img src={laplaylistpro} alt="Projet Festival La Playlist">
                </div>
                <a href="https://drive.google.com/drive/folders/1Bv-qyU4qnIZYvyckyGK84WuCk3Q43PEu?usp=sharing" target="_blank" class="btn-editorial">
                    Découvrir l'univers <i class='bx bx-music'></i>
                </a>
            </div>

            <!-- Partie Texte -->
            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>CONCEPT</span> Création 360°</div>
                    <div class="spec-item"><span>DOMAINES</span> Graphisme / AV / Web</div>
                    <div class="spec-item"><span>CREDITS</span> Maël BAYAERT-DERUE / Hugo DELEFORGE / Rémi EDMOND / Yacine SALFI / Hugo TREBUCHERE</div>
                </div>

                <div class="text-description">
                    <p>
                        <strong>La Playlist</strong> est un projet de fin d'année consistant à concevoir un festival fictif dans des conditions proches de la réalité professionnelle.
                    </p>
                    <p>
                        De l'identité visuelle à la production audiovisuelle, en passant par le développement du site web, ce projet a mobilisé l'ensemble de nos compétences pour créer une expérience cohérente et immersive.
                    </p>
                    <p class="quote">
                        "Une immersion totale dans la création d'un événement, de l'idée originale à sa visibilité numérique."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>