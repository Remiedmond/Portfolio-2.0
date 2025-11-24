<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import stceciledehors from '../../../../img/design/Musiqua/stcecile dehors.png';
import stcecileimg from '../../../../img/design/Musiqua/stcecile.png';
import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: stcecileimg,
    alt: 'Affiche Sainte-Cécile',
    title: 'Version finale'
  },
  {
    id: 2,
    url: stceciledehors,
    alt: 'Affiche Sainte-Cécile dehors',
    title: 'Version extérieure'
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
            <h2 class="gallery-title">Affiche Sainte-Cécile</h2>
            
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
            <p>Cette affiche annonce un événement musical spécial organisé par l'Harmonie d'Achicourt : le concert de la Sainte-Cécile 2024, qui coïncide avec le 40ème anniversaire de cet ensemble musical.</p>
            <div class="horaires">
              <p><strong>L'événement :</strong></p>
               <p> Date : Dimanche 24 novembre 2024 à 15h</p>
                <p>Lieu : Espace François Mitterrand à Achicourt</p>
                <p>Entrée : Gratuite</p>
                <p>Organisateur : L'école de musique d'Achicourt
              </p>
            </div>
            <p><strong>Le contexte :</strong>
            La Sainte-Cécile est la fête traditionnelle des musiciens, célébrée le 22 novembre en l'honneur de sainte Cécile, patronne des musiciens. C'est l'occasion pour les harmonies et orchestres de donner des concerts festifs.
          </p>
          <p><strong>L'aspect visuel :</strong>
          L'affiche présente un design coloré sur fond bleu avec une composition artistique d'instruments de musique (saxophone, trompette, trombone, batterie, clarinette) disposés de manière dynamique autour du chiffre "40 Ans". Les notes de musique dispersées et les clés (sol et fa) renforcent l'ambiance musicale.
          </p>
          <p>
            <strong>Les partenaires :</strong>
          L'événement est soutenu par la ville d'Achicourt (avec son logo "Harmonie Achicourt"), l'école de musique, et le département du Pas-de-Calais (Hauts-de-France).
          </p>
          <p>Cet anniversaire marque quatre décennies d'activité musicale de l'Harmonie d'Achicourt dans cette commune du Pas-de-Calais.</p>
        </div>
    </div>
  </div>
</div>
