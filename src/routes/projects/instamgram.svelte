<script>
  import './descweb.css';
  
  import instapro from '../../img/instagramprojet.png';
  
  let pagea4 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="containerwzb">
     <div class="partiegaucheweb">
     <img src={instapro} alt="Projet Instagram de wish" />
       <a href="https://www.youtube.com/watch?v=F3kEP9JmCwo">
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea4 === 'Projetyakapartir'}
      <Projetyakapartir />
     {:else}
      <div class="accueil">
        <h1 class="text-center">INSTAGRAM sous PHP </h1>
        <p class="textenter">Voici un projet fait en première année de BUT MMI.</p>
        <div class="description2">
        <p>
            Mon projet <em>“Mini-Instagram”</em> a été développé en première année de BUT Métiers du Multimédia et de l’Internet. 
            L’objectif était de concevoir, en conditions proches du réel, une application web inspirée d’Instagram permettant de publier des images, 
            d’interagir avec les contenus et de suivre d’autres utilisateurs.
        </p>
        <p>
            J'ai réalisé l’interface en <strong>HTML/CSS</strong> pour proposer une expérience claire et responsive, tandis que la logique applicative et les échanges avec la base de données ont été assurés en <strong>PHP</strong>.
            Le projet couvre l’ensemble du parcours utilisateur : de la création de compte à la publication d’images, en passant par la navigation dans un fil d’actualité alimenté par les abonnements.
            <strong>Fonctionnalités clés :</strong> ajout de plusieurs images avec légende et tags, <em>likes</em> et compteur en temps réel, système d’abonnement/désabonnement pour suivre des profils, pages de profil avec photo, bio et grille des publications, fil d’actualité personnalisé selon les abonnements, recherche basique par utilisateur ou mot-clé, et gestion de compte (inscription, connexion, modification des informations).
        </p>
        <p>
            Bonne découverte de <em>“Mini-Instagram”</em> !
        </p>

        <p>
            <strong>Crédits :</strong> Rémi <i>EDMOND </i> 
        </p>
        </div>
      </div>
     
      
    {/if}
  </div>
</div>