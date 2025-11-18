<script>
  import './descweb.css';
  
  import laplaylistpro from '../../img/laplaylist.png';
  
  let pagea4 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="containerwzb">
     <div class="partiegaucheweb">
     <img src={laplaylistpro} alt="Projet Festival La Playlist" />
       <a href="https://drive.google.com/drive/folders/1Bv-qyU4qnIZYvyckyGK84WuCk3Q43PEu?usp=sharing">
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea4 === 'Projetyakapartir'}
      <Projetyakapartir />
     {:else}
      <div class="accueil">
        <h1 class="text-center">"La Playlist" FEST' </h1>
        <p class="textenter">Voici un projet fictif de festival créé de A à Z fait en projet final de première année de BUT MMI.</p>
        <div class="description2">
        <p>
           Le festival <em>“La Playlist”</em> est un projet étudiant que nous avons imaginé et réalisé dans le cadre du projet de fin d’année de notre première année de BUT Métiers du Multimédia et de l’Internet à l’IUT de Lens.  
           Ce projet avait pour objectif de nous plonger dans des conditions proches de la réalité professionnelle en nous demandant de concevoir un festival de A à Z. Nous avons donc travaillé en équipe pour définir l’identité et le concept du festival, développer sa communication visuelle, produire du contenu audiovisuel et créer un site web fonctionnel afin d’assurer sa visibilité et son bon déroulement.  
           Cette expérience nous a permis de mettre en pratique l’ensemble des compétences acquises durant notre formation, que ce soit en graphisme, en audiovisuel ou en développement web, tout en développant notre esprit d’équipe, notre créativité et notre sens de l’organisation.  
        </p>
        <p>
            Bon visionnage et bienvenue dans l’univers de <em>“La Playlist”</em> !
        </p>

        <p>
            <strong>Crédits :</strong> Maël <i>BAYAERT-DERUE </i> / Hugo <i>DELEFORGE</i> / Rémi <i>EDMOND </i> / Yacine <i>SALFI</i> / Hugo <i>TREBUCHERE </i> 
        </p>
        </div>
      </div>
     
      
    {/if}
  </div>
</div>