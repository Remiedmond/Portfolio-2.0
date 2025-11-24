<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import REmiportrzait from '../../../../img/design/edmondremi.png';
import REmiportrzaitdheors from '../../../../img/design/portraitremi.png';
import REmiportrzaitirl from '../../../../img/design/moi.jpg';
import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: REmiportrzait,
    alt: "autoportrait sur illustrator",
    title: "autoportrait sur illustrator"
  },
  {
    id: 2,
    url: REmiportrzaitdheors,
    alt: "autoportrait sur illustrator Version tableau",
    title: "Version tableau"
  },
   {
    id: 3,
    url: REmiportrzaitirl,
    alt: "Version originale de la photo",
    title: "Version originale"
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
            <h2 class="gallery-title">Autoportrait</h2>
            
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
        <h1>🤾 Autoportrait "Handballeur" 🤾</h1>
        
        <p>Illustration vectorielle personnelle réalisée sur <span class="highlight">Adobe Illustrator</span> représentant un autoportrait en situation de pratique sportive. Cette œuvre graphique explore l'identité du sportif amateur à travers le prisme de l'art numérique contemporain.</p>
        
        <div class="informations">
            <p><strong>Informations sur l'œuvre :</strong></p>
            <p>Technique : Illustration vectorielle Adobe Illustrator</p>
            <p>Genre : Autoportrait sportif</p>
            <p>Sport représenté : Handball</p>
            <p>Style : Illustration graphique minimaliste</p>
        </div>
        
        
            <p><strong>Processus créatif Illustrator :</strong></p>
            <p>• Vectorisation à partir d'autorégérence photographique</p>
            <p>• Simplification des formes par l'outil plume</p>
            <p>• Palette colorimétrique réduite et contrastée</p>
            <p>• Traitement graphique contemporain des volumes</p>
      
        
        
            
            <strong>La palette chromatique :</strong>
            <p>Les choix colorimetriques privilégient un <span class="highlight">contraste maîtrisé</span> : le blanc du maillot se détache sur un arrière-plan dégradé bleu-gris, tandis que les tonalités chair et les accents colorés (cheveux, détails du visage) créent une harmonie visuelle équilibrée. Cette sobriété chromatique renforce l'impact graphique de l'ensemble.</p>
        
            
    </div>
    </div>
  </div>
</div>
