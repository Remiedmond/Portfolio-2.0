<script>
  import './descweb.css';
  import duckVideo from '../../videos/musique Duck escape.mp4';
  import duckqr from '../../img/qr_code_duck_escape.png';
  
  let pagea3 = ''; 
</script>

<div class="project-container">
    <!-- En-tête : Numéro 09 et Titre -->
    <div class="project-header">
        <span class="big-num">09</span>
        <div class="title-block">
            <h2 class="project-name"><span class="highlight">DUCK</span> ESCAPE</h2>
            <p class="project-subtitle">GAME DESIGN — STRATÉGIE & TACTIQUE</p>
        </div>
    </div>

    <div class="project-content">
        <!-- Partie Visuelle : Vidéo + Lien -->
        <div class="visual-side">
            <div class="img-frame">
                <video 
                  src={duckVideo} 
                  controls
                  autoplay
                  muted
                  loop
                  preload="auto" 
                  class="videoduck"
                >
                  <track kind="captions" />
                  Votre navigateur ne supporte pas la balise video.
                </video>
            </div>
            <a href="https://drive.google.com/drive/folders/1VrOnvuIkgAadciXWXSN5uVvtCrngXBke?usp=sharing" target="_blank" class="btn-editorial">
                Détails du Game Design <i class='bx bx-file'></i>
            </a>
        </div>

        <!-- Partie Texte -->
        <div class="info-side">
            <div class="specs">
                <div class="spec-item"><span>GENRE</span> Puzzle / Stratégie</div>
                <div class="spec-item"><span>TIME</span> 45 Secondes Chrono</div>
                <div class="spec-item"><span>CREDITS</span> Camille KLUCK / Célestine MAHIEUX / Rémi EDMOND</div>
            </div>

            <div class="text-description">
                <p>
                    <strong>Duck Escape</strong> réinvente le jeu de ferme tactique. Dans ce défi intense, vous incarnez un canard déterminé à s'échapper à travers des cartes générées aléatoirement.
                </p>
                <p>
                    Le gameplay repose sur un système de <strong>blocs adaptatifs</strong> : saurez-vous maîtriser l'art du placement stratégique pour fuir les obstacles en moins de 45 secondes ?
                </p>
                
                <!-- Section QR Code intégrée proprement -->
                <div class="qr-section">
                    <img src={duckqr} alt="Scan to play" class="qr-img">
                    <div class="qr-text">
                        <p><strong>INSTALLER LE JEU</strong></p>
                        <p>Scannez pour tester l'expérience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>