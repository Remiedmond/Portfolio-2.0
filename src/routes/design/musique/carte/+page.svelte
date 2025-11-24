<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import amicaleimg from '../../../../img/design/Musiqua/Amicale.png';
import amicalecarteimg from '../../../../img/design/Musiqua/Amicale carte.png';
import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: amicaleimg,
    alt: 'Version finale',
    title: 'Version finale'
  },
  {
    id: 2,
    url: amicalecarteimg,
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
      <a class='cartedumonderetour' href='{base}/design/musique'>Retour</a>
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Carte d'adhésion à L'AEMA</h2>
            
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
        <p>Cette nouvelle carte d'adhérent AEMA modernise l'identité visuelle de l'association avec un design épuré et professionnel, remplaçant l'ancienne version pour offrir aux membres un support d'identification renouvelé.</p>
        
        <div class="horaires">
            <p><strong>La carte d'adhésion :</strong></p>
            <p>Association : AEMA (Association de l'École de Musique d'Achicourt)</p>
            <p>Statut : Adhérent</p>
            <p>Période : 2025-2026</p>
            <p>Format : Carte de membre officielle</p>
        </div>
        
        <p><strong>Le design moderne :</strong>
        La carte adopte un style minimaliste et élégant avec un fond blanc encadré d'un liseré bleu royal. Cette sobriété donne un aspect professionnel et contemporain à ce document d'adhésion, loin des anciennes versions souvent surchargées.
        </p>
        
        <p><strong>L'identité visuelle :</strong>
        Deux logos principaux ornent la carte : celui de l'école de musique Micale avec son moulin caractéristique, et le logo stylisé de l'AEMA. Cette double signature affirme le lien indissociable entre l'institution pédagogique et son association de soutien.
        </p>
        
        <p><strong>La fonctionnalité :</strong>
        La mention "ADHÉRENT" et l'année "2025-2026" sont clairement affichées, permettant une identification immédiate du statut du porteur. Les espaces prévus pour les informations personnelles respectent les standards des cartes d'adhésion modernes.
        </p>
        
        <p><strong>Le renouvellement :</strong>
        Cette refonte graphique s'inscrit dans la modernisation globale des supports de communication de l'AEMA, apportant cohérence et fraîcheur à l'image de l'association auprès de ses adhérents.
        </p>
        
        <p>Cette nouvelle carte d'adhérent témoigne du dynamisme et de la volonté de modernisation de l'AEMA, offrant à ses membres un support d'identification digne de l'engagement qu'ils portent à la musique et à l'association.</p>
    </div>
    </div>
  </div>
</div>
