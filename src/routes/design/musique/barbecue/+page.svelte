<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import bbqafficheimg from '../../../../img/design/Musiqua/Affiche Barbecue AEMA.png';
import bbqaffichedehorsimg from '../../../../img/design/Musiqua/Affiche Barbecue AEMA dehors.png';
import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: bbqafficheimg,
    alt: 'Version finale',
    title: 'Version finale'
  },
  {
    id: 2,
    url: bbqaffichedehorsimg,
    alt: 'Version condition réel',
    title: 'Version condition réel en extérieur'
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
            <h2 class="gallery-title">Affiche pour le Barbecue de l'AEMA</h2>
            
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
        <p>Cette affiche conviviale annonce la soirée barbecue de fin d'année organisée par l'AEMA (Association de l'École de Musique d'Achicourt) pour rassembler ses membres dans une ambiance détendue et festive.</p>
        
        <div class="horaires">
            <p><strong>L'événement :</strong></p>
            <p>Date : Vendredi 27 juin 2025</p>
            <p>Heure : À partir de 19h</p>
            <p>Lieu : École de musique d'Achicourt</p>
            <p>Public : Membres de l'AEMA</p>
            <p>Occasion : Barbecue de fin d'année scolaire</p>
        </div>
        
        <p><strong>Le concept :</strong>
        Cette soirée marque la fin de l'année scolaire musicale et offre un moment de détente et de convivialité entre tous les acteurs de l'école de musique : élèves, professeurs, parents et membres de l'association.
        </p>
        
        <p><strong>L'univers graphique :</strong>
        L'affiche adopte un style moderne et coloré avec une composition en mosaïque. Chaque vignette illustre un élément du barbecue : ketchup, moutarde, spatule, grill enflammé, et saucisses grillées. Les couleurs vives (rouge, orange, jaune, vert, violet) créent une atmosphère joyeuse et appétissante.
        </p>
        
        <p><strong>L'identité musicale :</strong>
        Le logo de l'AEMA avec son moulin emblématique occupe la place centrale, accompagné de notes de musique qui rappellent que même dans la convivialité, la musique reste au cœur de cette communauté.
        </p>
        
        <p><strong>L'esprit festif :</strong>
        Le design graphique moderne avec ses blocs colorés évoque l'ambiance décontractée d'un événement estival, parfait pour clôturer une année d'apprentissage musical dans la bonne humeur.
        </p>
        
        <p>Cette invitation au barbecue témoigne de l'importance accordée à la dimension humaine et sociale au sein de l'AEMA, où la musique rassemble mais où les liens se créent aussi autour de moments de partage plus informels.</p>
    </div>
    </div>
  </div>
</div>
