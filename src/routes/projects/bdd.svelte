<script>
  import './descweb.css';
  
  import bddseriepro from '../../img/bddserie.png';
  
  let pagea4 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="containerwzb">
     <div class="partiegaucheweb">
     <img src={bddseriepro} alt="Projet en Base de données " />
       <a href="https://youtu.be/mfv1aijVhvM"   >
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea4 === 'Projetyakapartir'}
      <Projetyakapartir />
     {:else}
      <div class="accueil">
        <h1 class="text-center">Projet en Base de données MySQL</h1>
        <p class="textenter">Voici un projet fait en première année de BUT MMI.</p>
        <div class="description2">
        <p>
            Le projet <em>“Séries”</em> a été développé lors de notre première année de BUT Métiers du Multimédia et de l’Internet.  
            Il s’agissait de concevoir une application web permettant de consulter et gérer une base de données de séries, tout en découvrant pour la première fois l’utilisation d’un système de gestion de base de données avec <strong>MySQL</strong>.
        </p>
        <p>
            L’interface utilisateur a été construite en <strong>HTML/CSS</strong> pour offrir une présentation claire et agréable, tandis que <strong>PHP</strong> assurait la logique applicative et les interactions avec la base de données.  
            Ce projet constituait une étape importante, car il nous a initiés à la conception, la création et l’exploitation d’une base de données relationnelle.
        </p>
         <p>
            Ce projet nous a permis de comprendre les bases de la modélisation d’une base de données (tables, relations, clés primaires/étrangères), d’apprendre à gérer les requêtes SQL (INSERT, UPDATE, DELETE, SELECT) et de mettre en pratique la communication entre <strong>PHP</strong> et <strong>MySQL</strong>.  
            C’était une première approche concrète du développement dynamique d’applications web, qui nous a donné des bases solides pour la suite de notre parcours.
        </p>
        <p>
            Bienvenue dans l’univers du projet <em>“Séries”</em> !
        </p>

        <p>
            <strong>Crédits :</strong> Rémi <i>EDMOND </i> 
        </p>
        </div>
      </div>
     
      
    {/if}
  </div>
</div>