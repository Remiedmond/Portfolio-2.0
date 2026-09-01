<script>
  import './descweb.css';
  import friseImg from '../../img/frise.png'; 
  
  let pagea4 = ''; 
</script>

<div class="project-container">
    <div class="project-header">
        <span class="big-num">03</span>
        <div class="title-block">
            <h2 class="project-name">Frise <span class="highlight">CHRONOLOGIQUE</span></h2>
            <p class="project-subtitle">OUTIL DE VISUALISATION HISTORIQUE — BUT MMI</p>
        </div>
    </div>

    <div class="project-content">
        <div class="visual-side">
            <div class="img-frame">
                <img src={friseImg} alt="Aperçu de la frise chronologique">
            </div>
            <a href="https://frise-chronologique-self.vercel.app/" target="_blank" class="btn-editorial">
                Tester l'outil <i class='bx bx-time-five'></i>
            </a>
        </div>

        <div class="info-side">
            <div class="specs">
                <div class="spec-item"><span>TYPE</span> Outil Interactif</div>
                <div class="spec-item"><span>FOCUS</span> UX / Data Viz /Svelte</div>
                <div class="spec-item"><span>CREDITS</span> Rémi EDMOND</div>
            </div>

            <div class="text-description">
                <p>
                    Ce projet consiste en la création d'une <strong>frise chronologique interactive</strong>. L'enjeu principal était de proposer une navigation fluide à travers le temps, permettant de consulter des événements de manière ordonnée et esthétique.
                </p>
                <p>
                    L'interface a été pensée pour être <strong>intuitive</strong> : chaque point de la frise déclenche l'affichage d'informations détaillées, offrant ainsi une double lecture entre la vue d'ensemble temporelle et le détail spécifique de chaque date.
                </p>
                <p class="quote">
                    "Un travail sur la structure de l'information et l'interactivité pour rendre l'histoire accessible et dynamique."
                </p>
            </div>
        </div>
    </div>
</div>