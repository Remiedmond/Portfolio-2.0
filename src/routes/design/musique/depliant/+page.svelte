<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import depliant1img from '../../../../img/design/Musiqua/dépliant1.png';
import depliant2img from '../../../../img/design/Musiqua/dépliant2.png';
import depliantdehorsimg from '../../../../img/design/Musiqua/dépliant test.png';

import '../.././design.css';
import { base } from '$app/paths';



const images = [
  {
    id: 1,
    url: depliant1img,
    alt: 'partie devant',
    title: 'Version partie devant'
  },
  {
    id: 2,
    url: depliant2img,
    alt: 'partie derrière',
    title: 'Version partie derrière'
  },
    {
    id: 3,
    url: depliantdehorsimg,
    alt: 'dépliant en condition réel',
    title: 'Version dépliant en condition réel'
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
      <a class='cartedumonderetour' href='{base}/design/musique'>Retour</a>
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Dépliant de l'AEMA</h2>
            
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
        <p>Ce dépliant de présentation a été conçu pour renouveler la communication de l'AEMA (Association de l'École de Musique d'Achicourt) et mieux faire connaître ses activités et sa mission auprès du public.</p>
        
        <div class="horaires">
            <p><strong>L'association :</strong></p>
            <p>Nom : AEMA (Association de l'École de Musique d'Achicourt)</p>
            <p>Mission : Soutien de l'école de musique et de l'Harmonie</p>
            <p>Président : FIEVET Mathieu</p>
            <p>Contact : 06 88 15 03 18 / aema.achicourt@gmail.com</p>
        </div>
        
        <p><strong>La présentation :</strong>
        Le volet gauche explique clairement la nature de l'AEMA comme association de soutien à l'école de musique, avec un appel direct aux musiciens pour rejoindre cette communauté engagée dans la promotion de la musique locale.
        </p>
        
        <p><strong>Les activités illustrées :</strong>
        Le dépliant présente trois catégories d'événements organisés par l'AEMA : les concerts (Sainte-Cécile, Fête de la musique), les sorties culturelles (sorties musicales, sortie à Bagatelle), et les autres moments conviviaux (soirée barbecue, soirée de la Sainte-Cécile).
        </p>
        
        <p><strong>L'approche visuelle :</strong>
        Le design moderne utilise des dégradés de bleu sur fond musical subtil avec des silhouettes d'instruments. Les photos authentiques montrent la réalité des activités : concerts en salle, sorties en plein air, moments de convivialité, créant une image vivante et attractive de l'association.
        </p>
        
        <p><strong>L'appel à l'action :</strong>
        La mention "ÉVEILLEZ VOS TALENTS MUSICAUX!" en rouge attire l'attention et encourage l'engagement, tandis que les informations de contact sont clairement mises en valeur pour faciliter les démarches d'adhésion.
        </p>
        
        <p>Ce nouveau dépliant modernise efficacement l'image de l'AEMA en présentant de façon dynamique et accessible toute la richesse de ses activités musicales et sociales, remplaçant avantageusement l'ancien support de communication.</p>
    </div>
    </div>
  </div>
</div>
