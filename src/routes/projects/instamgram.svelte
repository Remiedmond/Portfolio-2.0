<script>
  import './descweb.css';
  import instapro from '../../img/instagramprojet.png';
  
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
            <span class="big-num">07</span>
            <div class="title-block">
                <h2 class="project-name">Mini <span class="highlight">INSTAGRAM</span></h2>
                <p class="project-subtitle">DÉVELOPPEMENT PHP & MYSQL — BUT MMI 1</p>
            </div>
        </div>

        <div class="project-content">
            <div class="visual-side">
                <div class="img-frame">
                    <img src={instapro} alt="Projet Mini Instagram">
                </div>
                <a href="https://www.youtube.com/watch?v=F3kEP9JmCwo" target="_blank" class="btn-editorial">
                    Voir la démo <i class='bx bxl-youtube'></i>
                </a>
            </div>

            <div class="info-side">
                <div class="specs">
                    <div class="spec-item"><span>LANGAGE</span> PHP / SQL</div>
                    <div class="spec-item"><span>BASE DE DONNÉES</span> MySQL</div>
                    <div class="spec-item"><span>FOCUS</span> CRUD & Authentification</div>
                </div>

                <div class="text-description">
                    <p>
                        L’objectif était de concevoir une application web inspirée d’Instagram permettant de publier des images, d’interagir avec les contenus et de gérer un réseau d'utilisateurs.
                    </p>
                    <p>
                        Le projet couvre l’intégralité du <strong>parcours utilisateur</strong> : inscription, connexion sécurisée, fil d’actualité personnalisé selon les abonnements, système de likes en temps réel et gestion complète des profils.
                    </p>
                    <p class="quote">
                        "Une immersion dans la logique applicative et les échanges complexes avec la base de données."
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>