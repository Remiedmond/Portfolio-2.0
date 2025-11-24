<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import LogoJES from '../../../../img/design/Logo Design 1.png';
import LogoJESdehors from '../../../../img/design/Logo Design 1 bus.png';

import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: LogoJES,
    alt: 'Version finale',
    title: "Version finale du Logo"
  },
  {
    id: 2,
    url: LogoJESdehors,
    alt: 'Version condition réel',
    title: 'Version condition réel sur un Bus'
  }
];

let selectedImage = images[0];


function selectImage(image) {
  selectedImage = image;
}



</script>


<div class="designglobal">
  <img class="bannière" src={bannière} alt="Bannière">

  <div class="couleurbackroungd">
    <a class='cartedumonderetour' href='{base}/design/logo'>Retour</a>
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Logo JES</h2>
            
            <!-- Image principale -->
            <div class="main-image-container">
                <div class="main-image-wrapper">
                <div class="main-image-shadow"></div>
                <div class="main-image-card">
                    <img src={selectedImage.url} alt={selectedImage.alt} class="main-image">
                    <div class="image-overlay">{selectedImage.id}/{images.length}</div>
                    <div class="image-caption">{selectedImage.title}</div>
                </div>
                </div>
            </div>

            <!-- Miniatures -->
            <div class="thumbnails-container">
                {#each images as image}
                <button 
                    class="thumbnail-wrapper {selectedImage.id === image.id ? 'active' : ''}"
                    on:click={() => selectImage(image)}
                >
                    <div class="thumbnail-shadow"></div>
                    <div class="thumbnail-card">
                    <img src={image.url} alt={image.alt} class="thumbnail">
                    {#if selectedImage.id === image.id}
                        <div class="active-indicator">
                        <div class="indicator-dot"></div>
                        </div>
                    {/if}
                    </div>
                </button>
                {/each}
            </div>

        </div>
        <div class="gallery-blabla">
          <p>Ce logo signé <em>JE</em> incarne l’identité visuelle de Jules E., professionnel de l’immobilier, en alliant rigueur et modernité à travers une conception graphique à la fois sobre et évocatrice.</p> 
          <div class="horaires"> 
            <p><strong>Le logo :</strong></p> 
            <p>Nom : JE</p> <p>Domaine : Immobilier</p> 
            <p>Style : Minimaliste, professionnel et symbolique</p> 
          </div> 
          <p><strong>Le design :</strong> La lettre <em>J</em>, subtilement transformée en toiture, rappelle immédiatement l’univers de l’immobilier et l’idée d’abri, tandis que le <em>E</em> renforce la signature personnelle de Jules E. L’ensemble évoque la solidité et la fiabilité, qualités essentielles dans ce secteur.</p> 
          <p><strong>La dualité visuelle :</strong> Le logo marie des courbes arrondies et des lignes droites, traduisant à la fois le sérieux d’un professionnel rigoureux et l’ouverture d’esprit d’un acteur capable d’apporter flexibilité et modernité à son métier. C’est une identité à la fois carrée et cool.</p> 
          <p><strong>L’identité de marque :</strong> Par son minimalisme assumé, ce visuel se démarque par sa lisibilité et sa force symbolique. Il s’inscrit dans une communication claire et professionnelle, adaptée aussi bien aux supports traditionnels qu’aux plateformes numériques.</p> 
          <p><strong>La vision :</strong> Plus qu’un simple logo, il illustre la philosophie de Jules E. : proposer un accompagnement immobilier fiable, humain et moderne, où chaque projet trouve son toit, et chaque client sa place.</p> <p>Ce logo reflète donc l’essence de Jules E. : un professionnel de l’immobilier sérieux, moderne, mais accessible, offrant une identité visuelle forte et immédiatement reconnaissable.</p> 
        </div>
    </div>
  </div>
</div>
