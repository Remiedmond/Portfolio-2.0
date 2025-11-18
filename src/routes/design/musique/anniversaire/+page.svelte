<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import badgeimg from '../../../../img/design/Musiqua/40 ans.png';
import badgestcecimg from '../../../../img/design/Musiqua/40 ans img.png';

import '../.././design.css';


const images = [
  {
    id: 1,
    url: badgeimg,
    alt: 'Version finale',
    title: "Version finale du badge des 40 ans de l'association de l'harmonie AEMA"
  },
  {
    id: 2,
    url: badgestcecimg,
    alt: 'Version condition réel',
    title: 'Version condition réel porté par un musicien'
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
    <a class='cartedumonderetour' href='/design/musique'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Badge des 40 ans de l'harmonie d'Achicourt</h2>
            
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
        <p>Ce badge commémoratif a été spécialement conçu pour célébrer les 40 ans de l'Harmonie d'Achicourt lors de la Sainte-Cécile 2024, créé par vos soins pour honorer cette étape importante.</p>
        
        <div class="horaires">
            <p><strong>Le badge :</strong></p>
            <p>Occasion : 40ème anniversaire de l'Harmonie d'Achicourt</p>
            <p>Destinataires : Musiciens actuels, anciens musiciens et élus municipaux</p>
            <p>Période commémorée : 1984 - 2024</p>
            
        </div>
        
        <p><strong>Le design symbolique :</strong>
        Le badge adopte un format circulaire sur fond dégradé bleu-rose, évoquant un coucher de soleil. Au centre, le chiffre "40" est mis en valeur, flanqué des années "1984" et "2024" qui marquent cette trajectoire de quatre décennies.
        </p>
        
        <p><strong>Les éléments décoratifs :</strong>
        Des guirlandes de fanions multicolores ornent la partie supérieure, créant une atmosphère festive de célébration. Une portée musicale avec des notes serpente gracieusement à travers le design, rappelant l'essence musicale de l'association.
        </p>
        
        <p><strong>L'identité visuelle :</strong>
        Le logo officiel de l'Harmonie d'Achicourt occupe une place d'honneur, avec sa représentation du sanglier emblématique et la mention "Jeune Harmonie d'Achicourt". Le moulin à vent de l'école de musique  apparaît également, liant l'institution pédagogique à l'ensemble musical.
        </p>
        
        <p><strong>Le symbole de fête :</strong>
        Un gâteau d'anniversaire à étages avec ses bougies allumées trône au bas du badge, symbolisant parfaitement cette célébration d'anniversaire et l'esprit festif de l'événement.
        </p>
        
        <p>Ce badge personnalisé constitue un souvenir précieux et tangible de cette étape majeure dans l'histoire de l'Harmonie d'Achicourt, offert aux acteurs passés et présents qui ont contribué à faire vivre cette aventure musicale communautaire.</p>
    </div>
    </div>
  </div>
</div>
