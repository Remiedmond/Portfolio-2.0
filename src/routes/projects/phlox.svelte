<script>
  import './descweb.css';
  import phloxpro from '../../img/phloxpourpres.png';
  
  let pagea3 = ''; 
  
  function show(component) {
    pagea3 = component;
  }
</script>

<div class="project-container">
    {#if pagea3 === 'Projetphlox'}
        <Projetphlox />
        <button class="btn-back" on:click={() => show('')}>
            <i class='bx bx-left-arrow-alt'></i> Retour à la description
        </button>
    {:else}
        <div class="project-header">
            <span class="big-num">02</span>
            <div class="title-block">
                <h2 class="project-name">Projet <span class="highlight">PHLOX</span></h2>
                <p class="project-subtitle">BUT MMI — 2ème Année</p>
            </div>
        </div>

        <div class="project-content">
            <!-- Partie Visuelle -->
            <div class="visual-side">
                <div class="img-frame">
                    <img src={phloxpro} alt="Projet Phlox">
                </div>
               <a href="https://phlox-css.vercel.app/" target="_blank" class="btn-editorial">
                Voir le projet <i class='bx bx-right-arrow-alt'></i>
            </a>
            </div>

            <!-- Partie Texte -->
            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>FOCUS</span> CSS Grid Layout</div>
                    <div class="spec-item"><span>TECH</span> HTML5 / CSS3</div>
                    <div class="spec-item"><span>CRÉDITS</span> Rémi EDMOND</div>
                </div>

                <div class="text-description">
                    <p>
                        L’objectif principal de ce travail était de nous initier à l’utilisation de <strong>CSS Grid</strong>, une technologie essentielle pour organiser et structurer des mises en page modernes.
                    </p>
                    <p>
                        À travers <em>“PHLOX”</em>, nous avons conçu une grille flexible permettant de répartir blocs de contenu, images et éléments graphiques de manière claire et harmonieuse, tout en travaillant la hiérarchie visuelle.
                    </p>
                    <p class="quote">
                        "Un projet formateur combinant pratique technique et réflexion sur l’ergonomie d’interface."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>