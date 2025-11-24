<script>
import bannière from '../../../../img/Bannière.png';
import cartedumonde from '../../../../img/carte-du-monde.png';
import Logotalentsenscène from '../../../../img/design/Logo Design 3.png';
import Logotalentsenscènedehors from '../../../../img/design/Logo Design 3 panneau.png';

import '../.././design.css';
import { base } from '$app/paths';


const images = [
  {
    id: 1,
    url: Logotalentsenscène,
    alt: 'Version finale',
    title: "Version prototype d'une association culturelle de Beaurains"
  },
  {
    id: 2,
    url: Logotalentsenscènedehors,
    alt: 'Version condition réel',
    title: 'Version condition réel'
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
    <a class='cartedumonderetour' href='{base}/design/logo'>Retour</a>
    

    <div class="gallery-container">
        <div class="gallery-omages">
            <h2 class="gallery-title">Logo prototype de Talents en scène</h2>
            
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
    <p>Ce nouveau logo "Talents en Scène" modernise l’identité visuelle de l’association culturelle de Beaurains en reflétant son ouverture artistique et son esprit collectif.</p>
    
    <div class="horaires">
        <p><strong>L’association :</strong></p>
        <p>Nom : Talents en Scène</p>
        <p>Ville : Beaurains</p>
        <p>Domaines : Danse, chant, théâtre, acting, expression scénique</p>
        <p>Support : Identité visuelle officielle</p>
    </div>
    
    <p><strong>Le design du logo :</strong>
    Le logo met en avant une scène stylisée, encadrée de rideaux rouges et surplombée d’un micro suspendu. Cette mise en scène traduit l’idée d’un lieu où chaque talent peut s’exprimer, qu’il soit chanteur, danseur ou comédien.
    </p>
    
    <p><strong>L’identité visuelle :</strong>
    L’association a choisi une palette de couleurs dynamiques : le rouge des rideaux pour l’énergie et la passion, le violet pour la créativité et l’expression artistique, et le jaune lumineux pour la visibilité et l’optimisme. Le texte en lettres capitales, orné d’un effet lumineux, évoque les enseignes de spectacle et de cabaret.
    </p>
    
    <p><strong>La symbolique :</strong>
    La scène ouverte et le micro central incarnent l’idée de partage et de mise en avant de chaque talent. Les rideaux entrouverts invitent à la découverte et à l’émerveillement, tout en symbolisant l’esprit collectif et la diversité des pratiques artistiques.
    </p>
    
    <p><strong>Le renouvellement :</strong>
    Ce logo constitue une étape importante dans la structuration de l’association, en apportant une identité claire et fédératrice. Il sera décliné sur les supports de communication (affiches, réseaux sociaux, programmes) pour renforcer la visibilité de Talents en Scène.
    </p>
    
    <p>Avec ce logo, "Talents en Scène" affirme son ambition de devenir un espace incontournable de création et d’expression artistique à Beaurains, rassemblant passionnés et curieux autour de la danse, du chant, du théâtre et de toutes les formes de performance.</p>
</div>
    </div>
  </div>
</div>
