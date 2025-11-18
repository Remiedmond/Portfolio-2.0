<script>
  import Projetphlox from "./projetphlox.svelte";
  import './descweb.css';
  
  import phloxpro from '../../img/phloxpourpres.png';
  
  let pagea3 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea3 = component;
  }
</script>

<div class="containerwzb">
    <div class="partiegaucheweb">
     <img src={phloxpro} alt="Projet Phlox" />
       <a class:active={pagea3 === 'Projetphlox'} href="#" on:click|preventDefault={() => show('Projetphlox')} >
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea3 === 'Projetphlox'}
      <Projetphlox />
     {:else}
      <div class="accueil">
        <h1 class="text-center">Maquette CSS Grid</h1>
        <p class="textenter">Voici une maquette faite en deuxième année de BUT MMI.</p>
        <div class="description2">
        <p>
          Le projet <em>“PHLOX”</em> a été réalisé durant notre deuxième année de BUT Métiers du Multimédia et de l’Internet.  
          L’objectif principal de ce travail était de nous initier à l’utilisation de <strong>CSS Grid</strong>, une technologie essentielle pour organiser et structurer des mises en page modernes et responsives.  
        </p>

        <p>
            À travers ce projet, nous avons appris à concevoir une grille flexible permettant de répartir différents blocs de contenu (textes, images, éléments graphiques) de manière claire et harmonieuse.  
            Nous avons ainsi pu expérimenter l’agencement d’un site en travaillant sur la hiérarchie visuelle, l’équilibre des espaces et l’adaptation de la mise en page aux différents formats d’écran.  
        </p>

        <p>
            <em>“PHLOX”</em> fut donc un projet formateur, combinant pratique du <strong>CSS Grid</strong> et réflexion sur l’ergonomie et la lisibilité d’une interface web.
        </p>
        <p>
            <strong>Crédits :</strong> Rémi <i>EDMOND </i> 
        </p>
        </div>
      </div>
     
      
    {/if}
  </div>
</div>