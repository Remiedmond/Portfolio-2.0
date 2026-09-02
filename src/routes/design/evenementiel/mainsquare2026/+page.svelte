<script>
  import bannière from "../../../../img/Bannière.png";
  import cartedumonde from "../../../../img/carte-du-monde.png";
  import AfficheMainSquare from "../../../../img/design/MainSquareFestival2026_AFFICHE.png";
  import AfficheMainSquareExterieur from "../../../../img/design/affiche mainsquare exterieur.png";

  import "../.././design.css";
  import { base } from "$app/paths";

  const images = [
    {
      id: 1,
      url: AfficheMainSquare,
      alt: "Une des affiches du Main Square Festival 2026",
      title: "Une des Affiches du Main Square Festival 2026",
    },
    {
      id: 2,
      url: AfficheMainSquareExterieur,
      alt: "Affiche prise en condition réel sur le site du Main Square Festival 2026",
      title:
        "l'affiche prise en condition réel sur le site du Main Square Festival 2026",
    },
  ];

  let selectedImage = images[0];

  function selectImage(image) {
    selectedImage = image;
  }
</script>

<div class="designglobal">
  <img class="banniere" src={bannière} alt="Bannière" />

  <div class="couleurbackroungd">
    <a class="cartedumonderetour" href="{base}/design/evenementiel">Retour</a>

    <div class="gallery-container">
      <div class="gallery-omages">
        <h2 class="gallery-title">
          Affiche pour le Main Square Festival 2026 Concours « Dessinez votre Main Square »
        </h2>

        <!-- Image principale -->
        <div class="main-image-container">
          <div class="main-image-wrapper">
            <div class="main-image-shadow"></div>
            <div class="main-image-card">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                class="main-image"
              />
              <div class="image-overlay">
                {selectedImage.id}/{images.length}
              </div>
              <div class="image-caption">{selectedImage.title}</div>
            </div>
          </div>
        </div>

        <!-- Miniatures -->
        <div class="thumbnails-container">
          {#each images as image}
            <button
              class="thumbnail-wrapper {selectedImage.id === image.id
                ? 'active'
                : ''}"
              on:click={() => selectImage(image)}
            >
              <div class="thumbnail-shadow"></div>
              <div class="thumbnail-card">
                <img src={image.url} alt={image.alt} class="thumbnail" />
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
        <p>
          <strong
            >Affiche « Midnight Generation » – Main Square Festival 2026</strong
          >
        </p>

        <p>
          Affiche réalisée dans le cadre du concours <em
            >« Dessinez votre Main Square »</em
          >, organisé pour l’édition 2026 du Main Square Festival. Le concours
          invitait les participants à imaginer une affiche personnelle autour de
          la programmation du festival, avec la possibilité de mettre en avant
          l’ensemble des artistes ou un groupe spécifique.
        </p>

        <div class="horaires">
          <p><strong>Informations pratiques :</strong></p>
          <p>Événement : Main Square Festival 2026</p>
          <p>Date : du 3 au 5 juillet 2026</p>
          <p>Lieu : La Citadelle d’Arras</p>
          <p>Concours : « Dessinez votre Main Square »</p>
          <p>Résultat : sélection parmi les 20 affiches gagnantes</p>
        </div>

        <p>
          <strong>Le contexte du projet :</strong><br />
          Pour participer au concours, j’ai choisi de réaliser une affiche consacrée
          au groupe <em>Midnight Generation</em>. Mon objectif était de créer un
          visuel original, immédiatement identifiable et en accord avec
          l’univers musical du groupe, tout en l’intégrant à l’identité visuelle
          du Main Square Festival.
        </p>

        <p>
          <strong>Le concept visuel :</strong><br />
          L’affiche représente plusieurs spectateurs installés dans une salle de
          cinéma, face au public. Cette mise en scène inverse le rapport habituel
          entre l’artiste et le spectateur : au lieu d’observer un concert depuis
          la salle, le public est placé dans la position de celui qui est regardé.
          Cette idée permet de créer une relation directe avec la personne qui observe
          l’affiche et de suggérer une expérience immersive.
        </p>

        <p>
          La composition s’appuie sur une ambiance sombre et cinématographique,
          inspirée des salles de spectacle. Les sièges et les personnages
          structurent la partie centrale du visuel, tandis que le titre <em
            >Midnight Generation</em
          > apparaît au premier plan avec un traitement lumineux et doré. Le contraste
          entre les teintes sombres de la salle et la typographie orange et jaune
          attire le regard vers le nom du groupe.
        </p>

        <p>
          <strong>La réalisation :</strong><br />
          J’ai conçu et finalisé l’affiche sur Adobe Illustrator. J’ai travaillé
          la composition, les contrastes, la hiérarchie des éléments et l’intégration
          du logo officiel du Main Square Festival 2026. Le visuel a ensuite été
          envoyé via le formulaire prévu sur le site officiel du festival, en respectant
          le gabarit et les contraintes demandées.
        </p>

        <p>
          <strong>Les contraintes techniques :</strong><br />
          Le concours imposait la réalisation d’une affiche au format portrait de
          118,5 × 175 cm, en résolution 300 DPI et en mode colorimétrique CMJN. La
          présence du logo du Main Square Festival 2026 était également obligatoire.
          Ces contraintes m’ont permis de travailler sur un fichier adapté à l’impression
          grand format et destiné à être présenté dans un contexte professionnel.
        </p>

        <p>
          <strong>La sélection et l’exposition :</strong><br />
          Mon affiche a été sélectionnée parmi les 20 créations gagnantes du concours.
          Elle a ainsi été imprimée puis exposée sur le site du Main Square Festival,
          dans la Citadelle d’Arras, pendant les trois jours de l’événement. Cette
          expérience m’a également permis de remporter deux pass VIP pour une journée
          du festival.
        </p>

        <p>
          <strong>L’intention :</strong><br />
          À travers cette affiche, j’ai cherché à représenter l’univers de
          <em>Midnight Generation</em> tout en proposant une interprétation personnelle
          de l’expérience du festival. Le choix d’une salle de cinéma permet de créer
          une image intrigante et de jouer sur la frontière entre le spectacle observé
          et le spectateur qui regarde.
        </p>

        <p>
          <strong>Conclusion :</strong><br />
          Ce projet m’a permis de concevoir une affiche destinée à un événement culturel
          reconnu localement, en respectant un cahier des charges précis et des contraintes
          de production liées à l’impression grand format. La sélection de mon travail
          parmi les 20 affiches gagnantes représente une véritable reconnaissance
          de ma démarche créative et de ma capacité à proposer une composition originale,
          lisible et adaptée à l’identité du Main Square Festival.
        </p>
      </div>
    </div>
  </div>
</div>
