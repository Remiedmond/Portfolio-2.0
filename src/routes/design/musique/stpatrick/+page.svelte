<script>
import { onMount } from 'svelte';
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import stpatrickdehorsimg from '../../../../img/design/Musiqua/Affiche-de-Saint-Patrick dehors.png';
import stpatrickafficheimg from '../../../../img/design/Musiqua/Affiche-de-Saint-Patrick-7emeversion.jpg';
import '../.././design.css';

const images = [
  {
    id: 1,
    url: stpatrickdehorsimg,
    alt: 'Affiche Saint-Patrick dehors',
    title: 'Version extérieure'
  },
  {
    id: 2,
    url: stpatrickafficheimg,
    alt: 'Affiche Saint-Patrick 7ème version',
    title: 'Version finale'
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
    <a class='cartedumonderetour' href='/design/musique'>Retour</a> 
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Affiches Saint-Patrick</h2>
            
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
        <p>Cette affiche annonce un événement musical festif organisé par l'Harmonie d'Achicourt : un concert de Saint Patrick, célébrant la culture irlandaise à travers la musique.</p>
        
        <div class="horaires">
            <p><strong>L'événement :</strong></p>
            <p>Date : Lundi 17 mars 2025 à 19h</p>
            <p>Lieu : Espace François Mitterrand à Achicourt</p>
            <p>Entrée : Ouvert à tous</p>
            <p>Animation : Vente de boissons et petite restauration</p>
        </div>
        
        <p><strong>Le contexte :</strong>
        La Saint-Patrick, célébrée le 17 mars, est la fête nationale irlandaise qui s'est popularisée dans le monde entier. C'est l'occasion de célébrer la culture irlandaise à travers la musique, souvent accompagnée de festivités conviviales.
        </p>
        
        <p><strong>L'aspect visuel :</strong>
        L'affiche adopte une esthétique irlandaise avec un paysage de collines verdoyantes sous un ciel nuageux. Le personnage central, une femme en robe verte portant un chapeau de leprechaun, joue de la flûte traversière. Les trèfles à quatre feuilles et la palette de couleurs vert et orange renforcent l'ambiance irlandaise.
        </p>
        
        <p><strong>Les participants :</strong>
        L'événement réunit la classe de flûte de l'école de musique et l'Harmonie d'Achicourt, avec la participation des sonneurs de l'Artois, apportant une dimension supplémentaire avec leurs instruments traditionnels.
        </p>
        
        <p><strong>Les partenaires :</strong>
        L'événement est organisé par l'AEMA (Association de l'École de Musique d'Achicourt) en partenariat avec la ville d'Achicourt et l'école de musique Micale.
        </p>
        
        <p>Ce concert promet une soirée festive mêlant musique classique d'harmonie et sonorités traditionnelles irlandaises dans une ambiance conviviale.</p>
    </div>
    </div>
  </div>
</div>
