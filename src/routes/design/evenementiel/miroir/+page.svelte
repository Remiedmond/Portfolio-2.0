<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import miroir1 from '../../../../img/design/miroir1.jpeg';
import miroir2 from '../../../../img/design/miroir2.jpg';
import miroirdehors from '../../../../img/design/Miroir dehors.png';
import '../.././design.css';


const images = [
  {
    id: 1,
    url: miroir1,
    alt: 'Expo miroir verticale',
    title: "Version finale Expo miroir verticale"
  },
  {
    id: 2,
    url: miroir2,
    alt: 'Expo miroir Horizontale',
    title: "Version finale Expo miroir Horizontale"
  },
  {
    id: 3,
    url: miroirdehors,
    alt: 'Image en condition réelle',
    title: "Image en condition réelle"
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
    <a class='cartedumonderetour' href='/design/evenementiel'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Exposition Miroir</h2>
            
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
    <p><strong>Exposition "Miroir"</strong></p>
    
    <p>Affiche réalisée dans le cadre d’un projet scolaire pour promouvoir l’exposition fictive <em>Miroir</em>, présentée au Musée d’Art Moderne de Paris. Cette composition joue sur l’idée du reflet et de la mise en abîme, en réunissant différents univers artistiques autour du thème du miroir.</p>
    
    <div class="horaires">
        <p><strong>Informations pratiques :</strong></p>
        <p>Date : du 9 mai au 30 juillet 2024</p>
        <p>Lieu : Musée d’Art Moderne de Paris</p>
        <p>Thématique : Le miroir dans l’art, de la peinture au cinéma</p>
    </div>
    
    <p><strong>Le visuel :</strong>
    L’affiche intègre une photographie en noir et blanc de Denis Roche, jouant sur les reflets et la superposition d’images, qui sert de base au concept. Autour de ce visuel, différents fragments d’œuvres emblématiques (Caravage, Magritte, Escher, Picasso…) sont incrustés pour évoquer la pluralité des approches artistiques du miroir, entre illusion, introspection et mise en scène.</p>
    
    <p><strong>La typographie :</strong>
    Le titre "Miroir" adopte une police stylisée, légèrement déformée, afin de rappeler l’effet de réflexion et de déformation propre aux miroirs. Le contraste entre le noir profond de la bannière et le blanc du texte met en avant le caractère énigmatique et intrigant de l’exposition.</p>
    
    <p><strong>L’intention :</strong>
    Cette affiche cherche à interpeller le spectateur en brouillant les frontières entre réalité et image, reflet et vérité. Elle met en avant la richesse symbolique du miroir, à la fois outil artistique et métaphore de la perception.</p>
    
    <p><strong>Conclusion :</strong>
    Ce projet graphique illustre la manière dont une affiche peut condenser visuellement l’essence d’une exposition. Par le jeu des images, de la typographie et de la composition, il s’agit d’éveiller la curiosité et d’inviter le public à venir explorer ce thème universel et intemporel.</p>
</div>

    </div>
  </div>
</div>
