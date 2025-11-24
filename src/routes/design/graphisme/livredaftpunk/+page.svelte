<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import LivreDaftpunk from '../../../../img/design/Livreestetdaftpunk.png';
import LivreDaftpunkexterieur from '../../../../img/design/livreestetdaftpunkcouverture.png';
import LivreDaftpunkmp from '../../../../img/design/livreestetdaftpunkmarquepage.png';

import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: LivreDaftpunk,
    alt: 'Version finale',
    title: "Version finale du Logo Crips"
  },
  {
    id: 2,
    url: LivreDaftpunkexterieur,
    alt: 'Version condition réel',
    title: "Version condition réel sur l'entrée du métro"
  },
   {
    id: 3,
    url: LivreDaftpunkmp,
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
    <a class='cartedumonderetour' href='{base}/design/graphisme'>Retour</a>
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Couverture Livre sur l'Histoire des DAFT PUNK</h2>
            
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
        <p>Daft Punk : Une Carrière</p>
        
        <div class="horaires">
            <p><strong>Dans l'univers infini de la musique électronique, deux légendes se sont élevées, portant des casques emblématiques comme des armures futuristes : 
</strong></p>
            <p>Thomas Bangalter et Guy-Manuel de Homem-Christo, les hommes derrière Daft Punk.</p>
            <p>
Leur épopée débute dans les ruelles sombres de la scène underground des années 90, où leur son novateur résonne comme un appel à l'aventure. Avec des hymnes intemporels comme "Around the World" et "Harder, Better, Faster, Stronger", ils conquièrent les esprits, transcendant le genre lui-même.
Leur carrière durera une trentaine d'années.
</p>
<p> Avec beaucoup de collaborations et d'immenses tubes, ces robots de chair et de métal se dressent tel un monument à l'innovation sonore. Ils contemplent leur héritage musical comme des déités électroniques ayant façonné l'âme de toute une génération. Dans cette œuvre ultime, Daft Punk apparaît fusionné avec ses propres créations, soulignant l'unité parfaite entre les artistes et l'univers qu'ils ont bâti, note par note, beat par beat.
          </p>
            <p>1993-2021 : L'odyssée s'achève, mais la musique demeure éternelle.</p>
        </div>
        
        <p><strong>Conception graphique</strong>
          Cette couverture, réalisée sur Photoshop, incarne la fusion parfaite entre contraintes éditoriales et vision artistique. Chaque élément répond à des exigences précises : l'éditeur Sony Music impose sa signature institutionnelle, le prix de 12,50€ ancre l'œuvre dans la réalité commerciale, tandis que les dimensions standardisées du format album dictent l'architecture visuelle.
        </p>
        
        <p>
          Dans ce cadre contraint, la création graphique transcende ses limites. Les casques iconiques brillent sous un éclairage dramatique, les codes-barres et mentions légales se fondent harmonieusement dans la composition sombre. Chaque contrainte devient une opportunité créative, transformant les obligations éditoriales en éléments esthétiques qui servent le propos artistique.
        </p>
      </div>
    </div>
  </div>
</div>
