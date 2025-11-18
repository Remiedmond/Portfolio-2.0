<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import LivreJackk from '../../../../img/design/Livreestet.png';
import LivreJackinterieur from '../../../../img/design/EDMOND_Rémi_kerouac_sujet_1_b.jpg';
import LivreJackexterieur from '../../../../img/design/EDMOND_Rémi_kerouac_sujet_1_a.jpg';
import LivreJackmarquepage from '../../../../img/design/EDMOND_Rémi_kerouac_sujet_1_c.jpg';
import LivreJackinterieurmp from '../../../../img/design/Livreestetmarquepage.png';
import '../.././design.css';


const images = [
  {
    id: 1,
    url: LivreJackk,
    alt: 'Version finale',
    title: "Version finale du Logo Crips"
  },
  {
    id: 2,
    url: LivreJackinterieur,
    alt: 'Version condition réel',
    title: "Version condition réel sur l'entrée du métro"
  },
   {
    id: 3,
    url: LivreJackexterieur,
    alt: 'Version condition réel',
    title: "Version condition réel sur l'entrée du métro"
  },
  {
    id: 4,
    url: LivreJackmarquepage,
    alt: 'Version condition réel',
    title: "Version condition réel sur l'entrée du métro"
  },
  {
    id: 5,
    url: LivreJackinterieurmp,
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
    <a class='cartedumonderetour' href='/design/graphisme'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Couverture Livre de Jack KEROUEL</h2>
            
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
            <h1>Couverture du livre de Kerouac</h1>
            <p>Création fictive de la couverture du livre de Kerouac "Sur la route" avec son marque page associé. Mots clés de la consigne : Errance, machine à écrire, années 70.</p>
        </div>
    </div>
  </div>
</div>
