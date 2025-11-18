<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import Logocrips from '../../../../img/design/Logo Design 2.png';
import Logocripsdehors from '../../../../img/design/Logo Design 2 metro.png';

import '../.././design.css';


const images = [
  {
    id: 1,
    url: Logocrips,
    alt: 'Version finale',
    title: "Version finale du Logo Crips"
  },
  {
    id: 2,
    url: Logocripsdehors,
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
    <a class='cartedumonderetour' href='/design/logo'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Logo Crips</h2>
            
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
          <p>Ce logo conçu pour <em>Rips Records Shop</em> incarne l’univers du vinyle et du jazz à travers une identité visuelle vivante et expressive, réalisée dans le cadre d’un projet d’études sur Illustrator.</p> 
          <div class="horaires"> 
            <p><strong>Le logo :</strong></p> 
            <p>Nom : Rips Records Shop</p> 
            <p>Domaine : Disquaire spécialisé – vinyles jazz</p> 
            <p>Conception : Projet étudiant</p> <p>Thème : Jazz & vinyles</p> 
          </div> 
          <p><strong>Le design :</strong> La typographie, inspirée du logo de Radio Jazz Musique, évoque d’emblée l’univers sonore et culturel du jazz. Les lettres sont habillées d’éléments instrumentaux : le <em>C</em> et le <em>O</em> sont métamorphosés en soubassophone et vinyle, tandis que des touches visuelles rappellent le trombone et le saxophone. Cette intégration subtile d’éléments graphiques musicaux renforce l’authenticité du logo.</p> 
          <p><strong>L’identité visuelle :</strong> L’usage du vinyle comme élément central rappelle le produit phare du disquaire : les disques vinyles. Associé aux instruments de jazz emblématiques, le logo plonge immédiatement le spectateur dans une ambiance rétro et chaleureuse, propre aux clubs de jazz et aux collectionneurs passionnés.</p> 
          <p><strong>Le style graphique :</strong> Le rouge intense de la typographie contraste avec le fond clair et les touches dorées des instruments, créant un équilibre entre dynamisme et élégance. L’ensemble reste lisible et impactant, tout en racontant une histoire musicale.</p> <p><strong>La vision :</strong> Ce logo va au-delà d’une simple signature graphique : il met en avant une passion pour la musique, une identité forte et une atmosphère unique, où chaque détail fait écho au jazz et à l’amour du vinyle.</p> 
          <p>Ce projet étudiant illustre parfaitement la capacité du design graphique à traduire une thématique musicale en image : <em>Crips Records Shop</em> devient ainsi une marque immédiatement reconnaissable et chargée de sens.</p> 
        </div>
    </div>
  </div>
</div>
