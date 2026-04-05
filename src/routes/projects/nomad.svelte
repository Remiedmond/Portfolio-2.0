<script>
  import './descweb.css';
  import nomadpro from '../../img/logonomad.png';
  
  let pagea4 = ''; 
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="project-container">
    {#if pagea4 === 'Projetyakapartir'}
        <!-- Gardé pour la structure si besoin -->
        <Projetyakapartir />
        <button class="btn-back" on:click={() => show('')}>
            <i class='bx bx-left-arrow-alt'></i> Retour
        </button>
    {:else}
        <!-- En-tête : Numéro 05 et Titre -->
        <div class="project-header">
            <span class="big-num">05</span>
            <div class="title-block">
                <h2 class="project-name">Marathon <span class="highlight">DU WEB</span></h2>
                <p class="project-subtitle">NOMAD — PROJET COLLABORATIF LARAVEL</p>
            </div>
        </div>

        <div class="project-content">
            <!-- Partie Visuelle -->
            <div class="visual-side">
                <div class="img-frame">
                    <img src={nomadpro} alt="Projet Nomad Marathon du Web">
                </div>
                <a href="https://drive.google.com/drive/folders/1FH7mq-C_dqykFewvefni1mJn_oJQeNhs?usp=sharing" target="_blank" class="btn-editorial">
                    Voir les livrables 
                </a>
            </div>

            <!-- Partie Texte -->
            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>FRAMEWORK</span> Laravel (PHP)</div>
                    <div class="spec-item"><span>RÔLE</span> Coordination & Intégration</div>
                    <div class="spec-item"><span>CREDITS</span>Clément BLOND / Maxime CAI / Thomas CALUJEK / Maxime CHEMIN / Sophie CHUCHE / Rémi EDMOND / Diego GARENAUX / Valentin LANTOINE</div>
                </div>

                <div class="text-description">
                    <p>
                        <strong>NOMAD</strong> est un carnet de voyage interactif sur le thème du Road Trip. Ce projet de grande envergure a nécessité une collaboration étroite entre designers et développeurs informatiques.
                    </p>
                    <p>
                        Au-delà de la création graphique et de l’intégration, j’ai assuré la <strong>coordination de l'équipe</strong>, veillant à l'organisation des objectifs et à la motivation du groupe pour garantir la livraison d'un site dynamique et robuste.
                    </p>
                    <p class="quote">
                        "Une expérience intense de gestion de projet collaborative mettant en pratique la puissance de Laravel."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>
