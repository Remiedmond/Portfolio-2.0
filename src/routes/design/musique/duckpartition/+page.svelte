<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import ducklogo from '../../../../img/duckescape.png';
import duckpartoche from '../../../../img/design/Musiqua/Musique jeux Duck escape-Trombone_page-0001.jpg';

import '../.././design.css';



const images = [
  {
    id: 1,
    url: duckpartoche,
    alt: 'Partition de trombone',
    title: 'Partition de trombone du jeu Duck Escape'
  },
  {
    id: 2,
    url: ducklogo,
    alt: 'Logo Duck Escape',
    title: 'Logo Duck Escape'
  },
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
            <h2 class="gallery-title">Duck Escape Musique</h2>
            
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
          <p>Cette partition de trombone pour <em>Duck Escape</em> illustre l’identité musicale du jeu avec une écriture rythmée et mélodieuse, pensée pour plonger le joueur dans une atmosphère immersive et vivante.</p> 
          <div class="horaires"> 
            <p><strong>La partition :</strong></p> 
            <p>Œuvre : Duck Escape – musique du jeu</p> 
            <p>Instrument : Trombone</p> <p>Compositeur : Rémi Edmond</p> 
            <p>Inspiration : Animal Crossing & Pokémon</p> 
          </div> 
          <p><strong>Le style musical :</strong> La pièce adopte un ton à la fois léger et dynamique, avec des tempi variés allant de 120 à 130, ce qui traduit l’énergie et le mouvement du gameplay. Les nuances (p, mf, dim…) renforcent le caractère expressif de la musique, apportant des couleurs différentes selon les passages.</p> 
          <p><strong>L’identité sonore :</strong> Les phrases mélodiques, construites sur des motifs simples et entraînants, rappellent l’univers des jeux vidéo chaleureux et poétiques. On y retrouve une proximité avec les ambiances musicales d’Animal Crossing et de Pokémon, qui oscillent entre la douceur et la vitalité.</p> 
          <p><strong>La fonctionnalité ludique :</strong> Cette partition n’est pas qu’une simple pièce musicale : elle est conçue pour accompagner et rythmer l’expérience de jeu. Les variations de tempo et d’intensité participent à l’immersion, guidant le joueur à travers les différentes phases de l’aventure.</p> 
          <p><strong>Le projet global :</strong> Cette partie de trombone n’est qu’un extrait : l’ensemble des partitions pour les autres instruments est disponible sur le drive musical du projet. Ensemble, elles forment une bande-son cohérente et riche qui incarne pleinement l’univers de <em>Duck Escape</em>.</p> 
          <p>À travers cette écriture musicale soignée, <em>Duck Escape</em> affirme une identité sonore unique, entre nostalgie des grands classiques vidéoludiques et fraîcheur créative contemporaine.</p> 
        </div>
    </div>
  </div>
</div>
