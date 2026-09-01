<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import Jeuxolympiquesgoalball from '../../../../img/design/jeuxolympiquegoalball.jpg';
import Jeuxolympiquesimag from '../../../../img/design/jolympiques.jpg';

import '../.././design.css';
import { base } from '$app/paths';

const images = [
  {
    id: 1,
    url: Jeuxolympiquesimag,
    alt: 'Version finale',
    title: "Version finale Affiche"
  },
  {
    id: 2,
    url: Jeuxolympiquesgoalball,
    alt: 'Photo Goalball',
    title: "Photo prise pendant les Jeux paralympique en Goalball"
  }
];

let selectedImage = images[0];


function selectImage(image) {
  selectedImage = image;
}



</script>


<div class="designglobal">
  <img class="banniere" src={bannière} alt="Bannière">

  <div class="couleurbackroungd">
     <a class='cartedumonderetour' href='{base}/design/evenementiel'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Affiche Jeux olympiques</h2>
            
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
        <h1>🔥 Affiche "Paris 2024" 🔥</h1>
        
        <p>Création graphique personnelle réalisée à partir de <span>photographies prises sur le terrain</span> lors des Jeux Olympiques et Paralympiques de Paris 2024. Cette composition unique témoigne d'une expérience vécue et documentée à travers les différents sites de compétition.</p>
        
        <div class="informations">
            <p><strong>Informations sur le projet :</strong></p>
            <p>Événement : Jeux Olympiques et Paralympiques Paris 2024</p>
            <p>Période : juillet - septembre 2024</p>
            <p>Technique : Collage photographique et composition graphique</p>
            <p>Thématique : L'expérience spectateur au cœur de l'événement olympique</p>
        </div>
        
            <p><strong>Lieux photographiés et sports documentés :</strong></p>
            <div class="lieux-liste">
                <div class="lieu-item">
                    <strong>🏀 Villeneuve-d'Ascq</strong><br>
                    Handball & Basketball
                </div>
                <div class="lieu-item">
                    <strong>🚣 Vaires-sur-Marne</strong><br>
                    Aviron
                </div>
                <div class="lieu-item">
                    <strong>🤺 Versailles</strong><br>
                    Pentathlon moderne
                </div>
                <div class="lieu-item">
                    <strong>🏃 Liévin</strong><br>
                    Entraînement équipe NL athlétisme
                </div>
                <div class="lieu-item">
                    <strong>🚴 Paris</strong><br>
                    Cyclisme
                </div>
                <div class="lieu-item">
                    <strong>🏊 Nanterre</strong><br>
                    Natation paralympique
                </div>
                <div class="lieu-item">
                    <strong>🏃 Stade de France</strong><br>
                    Athlétisme paralympique
                </div>
                <div class="lieu-item">
                    <strong>🎾 Roland-Garros</strong><br>
                    Tennis fauteuil
                </div>
                <div class="lieu-item">
                    <strong>🏐 Villepinte</strong><br>
                    Volleyball assis
                </div>
                <div class="lieu-item">
                    <strong>⚽ Paris Sud</strong><br>
                    Goalball
                </div>
            </div>
            <strong>Le concept visuel :</strong>
            <p>L'affiche fusionne des moments capturés personnellement sur les différents sites olympiques, créant un patchwork dynamique qui reflète la diversité des disciplines et des lieux de compétition. Chaque élément photographique raconte une partie de l'aventure olympique vécue en tant que spectateur engagé, des sports traditionnels aux épreuves paralympiques.</p>
       
        
       
            <strong>La composition :</strong>
            <p>La <span class="highlight">flamme olympique</span> <span class="flame-icon">🔥</span> trône au centre, symbole unificateur autour duquel gravitent les différentes scènes sportives. Les formes géométriques colorées reprennent les codes visuels de Paris 2024, créant un lien harmonieux entre les anneaux olympiques, le logo paralympique et les moments photographiés.</p>
    
        
        </div>
    </div>
  </div>
</div>
