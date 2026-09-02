<script>
  import bannière from "../../../../img/Bannière.png";
  import cartedumonde from "../../../../img/carte-du-monde.png";
  import afficheAchicourt from "../../../../img/design/Affiche fête de la bassure version finale.png";
  import dehorsaffichebassure from "../../../../img/design/bassureporte.png";

  import "../.././design.css";
  import { base } from "$app/paths";

  const images = [
    {
      id: 1,
      url: afficheAchicourt,
      alt: "Affiche de la Fête de la Bassure 2026",
      title: "Affiche de la Fête de la Bassure 2026",
    },
    {
      id: 2,
      url: dehorsaffichebassure,
      alt: "Affiche sur une porte pour la Fête de la Bassure 2026",
      title: "Affiche sur une porte pour la Fête de la Bassure 2026",
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
          Affiche pour la Fête de la Bassure organisée par la mairie d'Achicourt
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
            >Affiche « La Bassure en Fête 2026 » – Mairie d’Achicourt</strong
          >
        </p>

        <p>
          Affiche réalisée dans le cadre de mon stage à la mairie d’Achicourt,
          pour promouvoir <em>La Bassure en Fête</em>, grande manifestation
          municipale qui s’est déroulée le 14 mai 2026. Ce projet, mené en
          autonomie sur trois mois (février–mai 2026), visait à recréer du lien
          entre les habitants et à valoriser les nouveaux aménagements de la
          commune, notamment la nouvelle aire de jeux pour enfants.
        </p>

        <div class="horaires">
          <p><strong>Informations pratiques :</strong></p>
          <p>Date : 14 mai 2026</p>
          <p>Lieu : La Bassure, Achicourt</p>
          <p>
            Thématique : Cause animale et environnement (associations CPIE, LPO,
            GON…)
          </p>
        </div>

        <p>
          <strong>Le contexte et les enjeux :</strong><br />
          L’événement s’inscrit dans le calendrier annuel des temps forts de la ville
          et doit parler à un public très large et intergénérationnel : jeunes familles,
          enfants, mais aussi seniors, avec des codes de communication à la fois
          festifs et officiels. Le visuel devait donc concilier attractivité, lisibilité
          et image institutionnelle, tout en intégrant la promotion des derniers
          aménagements urbains.
        </p>

        <p>
          <strong>Le processus de création :</strong><br />
          J’ai réalisé l’intégralité de la production graphique, sous la supervision
          d’Amélie Terlat, Directrice de la Communication, avec l’appui d’Alice Wache,
          Chargée de Communication, pour les aspects techniques liés au print et
          à la vérification des fichiers pour l’impression. Comme il s’agissait d’un
          événement culturel, j’ai également présenté mes pistes au Directeur de
          la Culture pour validation, ce qui a impliqué plusieurs allers-retours
          entre les services Communication et Culture, jusqu’à l’accord final de
          Monsieur le Maire.
        </p>

        <p>
          <strong>Les versions et l’évolution du design :</strong><br />
          Face à des attentes multiples (politiques, culturelles, intergénérationnelles),
          j’ai d’abord travaillé sur Figma pour esquisser plusieurs compositions
          et poser le zoning. Une fois la structure validée, j’ai basculé sur Adobe
          Illustrator pour un rendu vectoriel propre et adapté aux supports municipaux.
          Trois versions distinctes ont été produites :
        </p>

        <ul>
          <li>
            <strong>Première piste :</strong> très figurative et narrative, mettant
            en scène le parc, le château, la plaine de jeux et les animaux, avec
            une typographie inspirée des contes (référence aux Fables de La Fontaine).
            Jugée trop chargée visuellement.
          </li>
          <li>
            <strong>Deuxième piste :</strong> à l’opposé, très minimaliste, en bichromie
            verte, centrée sur la silhouette stylisée d’un âne. Trouvée trop froide
            et peu festive.
          </li>
          <li>
            <strong>Version finale validée :</strong> conserve l’aspect festif et
            coloré de la première proposition, tout en épurant radicalement le fond
            pour mettre en valeur les informations textuelles essentielles et garantir
            une bonne lisibilité.
          </li>
        </ul>

        <p>
          <strong>L’intention :</strong><br />
          Cette affiche cherche à traduire l’esprit convivial et fédérateur de l’événement,
          tout en respectant les codes d’une communication municipale officielle.
          Elle doit à la fois donner envie aux familles de venir profiter des animations
          et rassurer le public senior par un design clair et institutionnel.
        </p>

        <p>
          <strong>Conclusion :</strong><br />
          Ce projet illustre la manière dont un support de communication local doit
          composer avec plusieurs niveaux de validation, des enjeux politiques et
          culturels, et une cible très large. Il montre aussi l’importance d’itérer
          sur le design pour trouver le bon équilibre entre narration, simplicité
          et efficacité informative.
        </p>
      </div>
    </div>
  </div>
</div>
