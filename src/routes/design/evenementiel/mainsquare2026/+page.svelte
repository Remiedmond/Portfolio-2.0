<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import AfficheMainSquare from '../../../../img/design/MainSquareFestival2026_AFFICHE.png';
import AfficheMainSquareExterieur from '../../../../img/design/affiche mainsquare exterieur.png';

import '../.././design.css';
import { base } from '$app/paths';

const images = [
  {
    id: 1,
    url: AfficheMainSquare,
    alt: 'Une des affiches du Main Square Festival 2026',
    title: "Une des Affiches du Main Square Festival 2026"
  },
  {
    id: 2,
    url: AfficheMainSquareExterieur,
    alt: 'Affiche prise en condition réel sur le site du Main Square Festival 2026',
    title: "l'affiche prise en condition réel sur le site du Main Square Festival 2026"
  }
];

let selectedImage = images[0];


function selectImage(image) {
  selectedImage = image;
}



</script>


<div class="designglobal">
  <img class="banniere" src={bannière} alt="Bannière">

  <div class="couleurbackroungd">
     <a class='cartedumonderetour' href='{base}/design/evenementiel'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Affiche pour la Fête de la Bassure organisée par la mairie d'Achicourt</h2>
            
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
        <h1>Fête de la Bassure 2026</h1>
        <p>Affiche réalisée pour la fête de la Bassure organisée par la mairie d'Achicourt. L'affiche a été conçue pour promouvoir l'événement et attirer l'attention du public. Elle met en avant les activités et les attractions prévues lors de la fête, tout en reflétant l'esprit festif et convivial de l'événement.</p>
        <p>Le design de l'affiche a été pensé pour être à la fois attrayant et informatif, en utilisant des couleurs vives et des éléments graphiques qui évoquent la joie et la célébration. L'objectif était de créer une affiche qui capte l'attention et incite les gens à participer à la fête.</p>
        <p>En résumé, cette affiche pour la fête de la Bassure est un outil de communication essentiel pour promouvoir l'événement et encourager la participation de la communauté locale.</p>
        </div>
    </div>
  </div>
</div>
