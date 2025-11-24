<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import mystereiut from '../../../../img/design/EDMOND_Rémi.jpg';
import ùysterealiutimg from '../../../../img/design/mystereàliut.png';
import '../.././design.css';
import { base } from '$app/paths';  

const images = [
  {
    id: 1,
    url: mystereiut,
    alt: "Expo mystere à l'IUT",
    title: "Expo mystere à l'IUT"
  },
  {
    id: 2,
    url: ùysterealiutimg,
    alt: "Expo mystere à l'IUT",
    title: "Version finale Expo mystere à l'IUT"
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
            <h2 class="gallery-title">Exposition Mystère à l'IUT</h2>
            
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
    <p><strong>Mystère à l’IUT</strong></p>
    
    <p>Affiche de film fictif réalisée dans le cadre d’un projet scolaire. Le concept repose sur la mise en scène d’une intrigue inquiétante se déroulant dans les couloirs de l’IUT de Lens.</p>
    
    <div class="horaires">
        <p><strong>Contraintes du projet :</strong></p>
        <p>- Intégrer cinq photographies en noir et blanc prises à l’intérieur de l’IUT</p>
        <p>- Construire une atmosphère mystérieuse et narrative à partir de ces images</p>
        <p>- Faire apparaître les noms des acteurs et réalisateurs</p>
        <p>- S’inspirer du style graphique de Saul Bass</p>
    </div>
    
    <p><strong>Le visuel :</strong>
    L’affiche reprend cinq clichés en noir et blanc mettant en scène différentes situations ambiguës dans les couloirs : silhouettes inquiétantes, jeux de lumière et postures dramatiques. La composition suggère un récit troublant, laissant au spectateur le soin d’imaginer l’histoire derrière les images.</p>
    
    <p><strong>La typographie et la mise en page :</strong>
    Le titre "Mystère à l’IUT" est présenté dans une typographie déformée, aux accents graphiques rappelant les créations emblématiques de Saul Bass. Les aplats de couleur rouge et orange renforcent l’atmosphère dramatique et contrastent avec le noir et blanc des photographies.</p>
    
    <p><strong>Les crédits :</strong>
    Les noms des protagonistes — Manuel François, Hugo Deleforge, Yacine Saïfi et Rémi Edmond — apparaissent en bas de chaque photo, à la manière d’une affiche cinématographique traditionnelle. Le logo de l’IUT de Lens ancre l’affiche dans son contexte scolaire.</p>
    
    <p><strong>L’intention :</strong>
    Cette création graphique cherche à captiver le spectateur en installant un climat de tension et de mystère dès l’affiche. Par la combinaison du noir et blanc photographique et d’un graphisme inspiré de Saul Bass, elle reprend les codes du cinéma de suspense tout en valorisant la créativité des étudiants.</p>
</div>

    </div>
  </div>
</div>
