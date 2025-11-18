<script>
  import './descweb.css';
  
  import gsappro from '../../img/dessin.png';
  
  let pagea4 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="containerwzb">
     <div class="partiegaucheweb">
     <img src={gsappro} alt="Projet Grid" />
       <a href="/css2/index.html">
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea4 === 'Projetyakapartir'}
      <Projetyakapartir />
     {:else}
      <div class="accueil">
        <h1 class="text-center">Page GSAP & ScrollReveal</h1>
        <p class="textenter">Voici une maquette faite en deuxième année de BUT MMI.</p>
        <div class="description2">
        <p>
             Le projet <em>“Les grands moments du sport”</em> a été réalisé au cours de notre deuxième année de BUT Métiers du Multimédia et de l’Internet.  
             L’objectif était de concevoir un site web interactif et immersif, permettant de revisiter certains événements marquants de l’histoire du sport tout en mettant en avant nos premières compétences en animation et intégration web.
        </p>
        <p>
            Pour la partie visuelle et structurelle, nous avons utilisé <strong>HTML</strong> et <strong>CSS</strong> afin de créer une mise en page claire et responsive.  
            Afin de rendre le site plus dynamique, nous avons intégré <strong>ScrollReveal</strong> pour les animations d’apparition au défilement, et <strong>GSAP</strong> pour mettre en place des animations plus complexes, notamment sur la section de natation avec la course des nageurs.
        </p>
        <p>
            Ce projet nous a permis d’explorer pour la première fois l’univers des bibliothèques d’animations JavaScript et d’apprendre à combiner des outils comme ScrollReveal et GSAP pour améliorer l’interactivité d’un site web.  
            Au-delà de l’aspect technique, il nous a appris à scénariser une narration visuelle et à concevoir une expérience immersive centrée sur l’utilisateur.  
        </p>
        <p>
            <em>“Les grands moments du sport”</em> a ainsi été une étape importante dans notre apprentissage du web, en nous familiarisant avec l’animation front-end et l’enrichissement de l’expérience utilisateur par le mouvement.
        </p>
        <p>
            <strong>Crédits :</strong> Arthur <i>CARRE</i> / Rémi <i>EDMOND </i> / Louan <i>NECKI</i>     
        </p>
        </div>
      </div>
     
      
    {/if}
  </div>
</div>