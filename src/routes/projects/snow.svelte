<script>
  import Projetsnow from "./projetsnow.svelte";
  import './descweb.css';
  
  import snowpro from '../../img/snowrideprojet.png';
  
  let pagea = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea = component;
  }
</script>

<div class="containerwzb">

    <div class="partiegaucheweb">
    <img src={snowpro} >
        <a class=" {pagea === 'Projetsnow' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Projetsnow')}>
              En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea === 'Projetsnow'}
      <Projetsnow />
     {:else}
      <div class="accueil">
        <h1 class="text-center">Maquette SNOWRIDE</h1>
        <p class="textenter">Voici une maquette faite en première année de BUT MMI.</p>
        <div class="description2">
        <p>
            Ce projet présente une maquette de site e-commerce spécialisé dans l’univers du snowboard et des sports d’hiver. 
            L’objectif est de mettre en avant la nouvelle collection à travers un design moderne et immersif.
        </p>

        <p>
            La page d’accueil se compose d’une grande image de montagne avec un slogan impactant 
            <em>« in the game since 92 »</em>, accompagnée d’un menu clair permettant d’accéder aux différentes catégories : 
            planches, fixations, chaussures, masques, accessoires, protections et sécurité.
        </p>

        <p>
            On retrouve ensuite plusieurs visuels mettant en avant des sportifs en action, ainsi qu’une sélection de produits récents 
            (skis, vestes, casques, gants, etc.) affichés avec leur prix. L’expérience utilisateur est renforcée par la possibilité de 
            voir tous les produits, de s’abonner à la newsletter et de profiter des avantages fidélité.
        </p>
        </div>
         <div class="description2">
                    <p>
                        <strong>Crédits :</strong>  Rémi <i>EDMOND </i>     
                    </p>
                </div>
      </div>
     
      
    {/if}
  </div>
</div>