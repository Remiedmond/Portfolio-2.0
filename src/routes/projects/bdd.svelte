<script>
  import './descweb.css';
  import bddseriepro from '../../img/bddserie.png';
  
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
        <div class="project-header">
            <span class="big-num">08</span>
            <div class="title-block">
                <h2 class="project-name">Bases de <span class="highlight">DONNÉES</span></h2>
                <p class="project-subtitle">APPLICATION SÉRIES — BUT MMI 1</p>
            </div>
        </div>

        <div class="project-content">
            <div class="visual-side">
                <div class="img-frame">
                    <img src={bddseriepro} alt="Projet Base de données Séries">
                </div>
                <a href="https://youtu.be/mfv1aijVhvM" target="_blank" class="btn-editorial">
                    Voir la démo <i class='bx bxl-youtube'></i>
                </a>
            </div>

            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>SGBD</span> MySQL</div>
                    <div class="spec-item"><span>LOGIQUE</span> PHP 7.4 / 8</div>
                    <div class="spec-item"><span>CREDITS</span> Rémi EDMOND</div>
                </div>

                <div class="text-description">
                    <p>
                        Le projet <strong>“Séries”</strong> consistait à concevoir une application web permettant de consulter et gérer un catalogue de contenus via un système de gestion de base de données.
                    </p>
                    <p>
                        Ce travail a permis de poser des bases solides sur la <strong>modélisation SQL</strong> (tables, relations, clés primaires et étrangères) et l'exécution de requêtes complexes pour dynamiser l'interface utilisateur.
                    </p>
                    <p class="quote">
                        "Une première approche concrète du développement dynamique et de l'exploitation de données relationnelles."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>