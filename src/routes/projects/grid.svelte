<script>
  import Projetyakapartir from "./projetyakapartir.svelte";
  import './descweb.css';
  
  import gridpro from '../../img/agde.jpg';
  
  let pagea4 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="containerwzb">
    <div class="partiegaucheweb">
     <img src={gridpro} alt="Projet Grid" />
       <a class:active={pagea4 === 'Projetyakapartir'} href="#" on:click|preventDefault={() => show('Projetyakapartir')} >
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea4 === 'Projetyakapartir'}
      <Projetyakapartir />
     {:else}
      <div class="accueil">
        <h1 class="text-center">Maquette CSS Grid</h1>
        <p class="textenter">Voici une maquette faite en deuxième année de BUT MMI.</p>
        <div class="description2">
        <p>
          Le projet <em>"DS Grid "</em> a été réalisé durant notre deuxième année de BUT Métiers du Multimédia et de l’Internet.  
          L’objectif principal de ce travail était de nous initier à l’utilisation de <strong>CSS Grid</strong>, une technologie essentielle pour organiser et structurer des mises en page modernes et responsives.  
        </p>

        <p>
            À travers ce projet, nous avons appris à concevoir une grille flexible permettant de répartir différents blocs de contenu (textes, images, éléments graphiques) de manière claire et harmonieuse.  
            Nous avons ainsi pu expérimenter l’agencement d’un site en travaillant sur la hiérarchie visuelle, l’équilibre des espaces et l’adaptation de la mise en page aux différents formats d’écran.  
        </p>

        <p>
            <em>DS Grid</em> fut donc un projet formateur, combinant pratique du <strong>CSS Grid</strong> et réflexion sur l’ergonomie et la lisibilité d’une interface web.
        </p>
        <p>
            <strong>Crédits :</strong> Rémi <i>EDMOND </i> 
        </p>
        </div>
      </div>
     
    {/if}
  </div>
</div>