<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import bannieredehors from '../../../../img/design/Musiqua/Bannière dehors.png';
import banniereimg from '../../../../img/design/Musiqua/bannière 1 .png';

import '../.././design.css';

const images = [
  {
    id: 1,
    url: banniereimg,
    alt: 'Version finale',
    title: 'Version finale'
  },
  {
    id: 2,
    url: bannieredehors,
    alt: 'Version condition réel',
    title: 'Version condition réel'
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
            <h2 class="gallery-title">Bannière des 40 ans de l'harmonie</h2>
            
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
        <p>Cette bannière commémore les 40 années d'existence de l'Harmonie d'Achicourt, créée dans le cadre des célébrations de la Sainte-Cécile 2024.</p>
        
        <div class="horaires">
            <p><strong>La signification historique :</strong></p>
            <p>Période : 1984 - 2024</p>
            <p>Anniversaire : 40 ans de l'Harmonie d'Achicourt</p>
            <p>Événement : Sainte-Cécile 2024</p>
            <p>Organisateur : École de musique d'Achicourt</p>
        </div>
        
        <p><strong>Le concept visuel :</strong>
        La bannière utilise un contraste saisissant entre le passé et le présent. L'année "1984" est illustrée avec des images en noir et blanc évoquant les débuts de l'harmonie, tandis que "2024" est remplie de photos colorées montrant l'orchestre en action aujourd'hui.
        </p>
        
        <p><strong>L'ambiance festive :</strong>
        Le fond bleu ciel orné de guirlandes multicolores triangulaires crée une atmosphère de célébration. Ces fanions aux couleurs vives (rouge, orange, jaune, vert, bleu) rappellent les fêtes de village et les événements communautaires.
        </p>
        
        <p><strong>Les éléments symboliques :</strong>
        Au centre, le chiffre "40" en doré marque cet anniversaire remarquable. Le logo de l'Harmonie d'Achicourt avec sa représentation stylisée d'un musicien sur fond de note de musique est fièrement affiché.
        </p>
        
        <p><strong>L'identité :</strong>
        La bannière porte la signature de l'école de musique d'Achicourt, soulignant le lien entre l'institution pédagogique et l'ensemble musical qu'elle a vu naître et grandir.
        </p>
        
        <p>Cette création graphique témoigne de quatre décennies de passion musicale et de vie associative à Achicourt, illustrant l'évolution de l'harmonie depuis sa création jusqu'à aujourd'hui.</p>
    </div>
    </div>
  </div>
</div>
