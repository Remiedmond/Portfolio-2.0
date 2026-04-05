<script>
  import './descweb.css';
  
  import snowpro from '../../img/snowrideprojet.png';
  
  let pagea = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea = component;
  }
</script>
<div class="project-container">
    <!-- En-tête : Numéro et Titre stylisé -->
    <div class="project-header">
        <span class="big-num">01</span>
        <div class="title-block">
            <h2 class="project-name">Maquette <span class="highlight">SNOWRIDE</span></h2>
            <p class="project-subtitle">BUT MMI — 1ère Année</p>
        </div>
    </div>

    <div class="project-content">
        <!-- Partie Visuelle -->
        <div class="visual-side">
            <div class="img-frame">
                <img src={snowpro} alt="Projet Snowride">
            </div>
            <a href="https://html-snowride.vercel.app/" target="_blank" class="btn-editorial">
                Voir le projet <i class='bx bx-right-arrow-alt'></i>
            </a>
        </div>

        <!-- Partie Texte -->
        <div class="info-side">
            <div class="specs">
                <div class="spec-item"><span> CREDITS</span> Rémi EDMOND</div>
                <div class="spec-item"><span>TYPE</span> E-Commerce</div>
                <div class="spec-item"><span>STACK</span> UI / UX Design</div>
            </div>

            <div class="text-description">
                <p>
                    Ce projet présente une maquette de site e-commerce spécialisé dans l’univers du snowboard. 
                    L’objectif est de mettre en avant la nouvelle collection à travers un design moderne.
                </p>
                <p>
                    Le design mise sur une immersion totale avec des visuels de montagne et une hiérarchie 
                    claire des catégories : planches, fixations et accessoires.
                </p>
                <p>
                  
                </p>
            </div>
        </div>
    </div>
</div>