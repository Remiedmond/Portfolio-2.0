<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import Museeexcalier from '../../../../img/design/EDMOND_Rémi_Fondécran_MDE.jpg';
import Museeexcalierfd from '../../../../img/design/EDMOND_Rémi_CarteVisiteRecto_MDE.jpg';

import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: Museeexcalierfd,
    alt: 'Version finale',
    title: "Version finale du Logo Crips"
  },
  {
    id: 2,
    url: Museeexcalier,
    alt: 'Version condition réel',
    title: "Version condition réel sur l'entrée du métro"
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
    <a class='cartedumonderetour' href='{base}/design/graphisme'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Logo Musée de l'escalier</h2>
            
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
            <h1>Logo du musée de l'escalier</h1>
            <p>Création fictive d'un logo pour le musée de l'escalier de Paris. Mots clés de la consigne : simpliste et très vague.</p>
        </div>
    </div>
  </div>
</div>
