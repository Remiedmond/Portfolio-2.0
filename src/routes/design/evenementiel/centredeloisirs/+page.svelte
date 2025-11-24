<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import deco1img from '../../../../img/design/Décoration Partie 1.png'; 
import deco2img from '../../../../img/design/Décoration Accueil de loisirs.png'; 

import '../.././design.css';
import { base } from '$app/paths';

const images = [
  {
    id: 1,
    url: deco1img,
    alt: 'Version finale 1',
    title: "Version finale Affiche 1"
  },
  {
    id: 2,
    url: deco2img,
      alt: 'Version finale 2',
    title: "Version finale Affiche 2"
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
      <a class='cartedumonderetour' href='{base}/design/evenementiel'>Retour</a>
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Affiche pour centre de loisirs</h2>
            
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
            <p>Affiches faites dans le cadre d'aiguiller les parents à quel endroit ce trouve la garderie et de quand à quand ce passe le centre. </p>
        </div>
    </div>
  </div>
</div>
