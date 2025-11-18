<script>
  import Projetphlox from "./projetphlox.svelte";
  import './descweb.css';
  import duckVideo from '../../videos/musique Duck escape.mp4';
  import duckqr from '../../img/qr_code_duck_escape.png';
  
  let pagea3 = ''; // Variable locale pour ce composant
  

</script>

<div class="containerwzb">
    <div class="partiegaucheweb">
        <video 
          src={duckVideo} 
          alt="Démonstration Duck Escape"
          controls
          autoplay
          muted
          loop
          preload="auto" 
          class="videoduck"
        >
          Votre navigateur ne supporte pas la balise video.
        </video>
        <a href="https://drive.google.com/drive/folders/1VrOnvuIkgAadciXWXSN5uVvtCrngXBke?usp=sharing"> En savoir +</a>
    </div>

            <div class="accueil">
                <h1 class="text-center">Duck Escape</h1>
                <p class="textenter">
                    Nous avons tous déjà rêvé de liberté face aux obstacles qui nous barrent la route. 
                    Duck Escape s'inspire de cette quête universelle en vous mettant dans la peau d'un canard déterminé à s'échapper 
                    coûte que coûte. Dans l'esprit des jeux de ferme relaxants comme Stardew Valley et Fae Farm, nous avons créé un défi 
                    intense et stratégique où chaque seconde compte. Réinventez votre approche tactique, car Duck Escape, avec son système de 
                    blocs adaptatifs et ses cartes générées aléatoirement, offre un gameplay unique : celui de bloquer intelligemment pour 
                    laisser passer... ou empêcher de fuir ! En 45 secondes chrono, saurez-vous maîtriser l'art du placement stratégique ?
                </p>
                <div class="description2">
                    <p>
                        <strong>Crédits :</strong> Camille <i>KLUCK</i> / Célestine <i>MAHIEUX</i> / Rémi <i>EDMOND </i>     
                    </p>
                </div>
                <div class="qrcodeduck">
                    <img src={duckqr}>
                    <p>Pour installer le jeu, scannez le qr code</p>
                </div>
            </div>
</div>