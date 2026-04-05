<script>
  import './descweb.css';
  import gsappro from '../../img/dessin.png';
  
  let pagea4 = ''; 
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="project-container">
    {#if pagea4 === 'Projetyakapartir'}
        <!-- Gardé au cas où tu aurais un sous-composant plus tard -->
        <Projetyakapartir />
        <button class="btn-back" on:click={() => show('')}>
            <i class='bx bx-left-arrow-alt'></i> Retour
        </button>
    {:else}
        <!-- En-tête : Numéro 04 et Titre -->
        <div class="project-header">
            <span class="big-num">04</span>
            <div class="title-block">
                <h2 class="project-name">Projet <span class="highlight">ANIMATIONS</span></h2>
                <p class="project-subtitle">LES GRANDS MOMENTS DU SPORT — BUT MMI 2</p>
            </div>
        </div>

        <div class="project-content">
            <!-- Partie Visuelle -->
            <div class="visual-side">
                <div class="img-frame">
                    <img src={gsappro} alt="Projet GSAP Sport">
                </div>
                <a href="https://gsap-rho-woad.vercel.app/" target="_blank" class="btn-editorial">
                    Explorer l'expérience <i class='bx bx-run'></i>
                </a>
            </div>

            <!-- Partie Texte -->
            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>TOOLS</span> GSAP & ScrollReveal</div>
                    <div class="spec-item"><span>FOCUS</span> Interactivité & Motion</div>
                    <div class="spec-item"><span>CRÉDITS</span> Arthur CARRE / Rémi EDMOND</div>
                </div>

                <div class="text-description">
                    <p>
                        L'enjeu de ce projet était de concevoir un site immersif revisitant l'histoire du sport grâce aux bibliothèques d'animations JavaScript.
                    </p>
                    <p>
                        Nous avons intégré <strong>ScrollReveal</strong> pour les apparitions au défilement et <strong>GSAP</strong> pour des séquences complexes, comme la simulation d'une course de natation interactive.
                    </p>
                    <p class="quote">
                        "Une étape clé dans l'apprentissage du web, mêlant narration visuelle et performance front-end."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>