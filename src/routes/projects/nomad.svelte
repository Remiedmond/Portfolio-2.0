<script>
  import './descweb.css';
  
  import nomadpro from '../../img/logonomad.png';
  
  let pagea4 = ''; // Variable locale pour ce composant
  
  function show(component) {
    pagea4 = component;
  }
</script>

<div class="containerwzb">
     <div class="partiegaucheweb">
     <img src={nomadpro} alt="Projet Marathon Du WEB" />
       <a href="https://drive.google.com/drive/folders/1FH7mq-C_dqykFewvefni1mJn_oJQeNhs?usp=sharing">
          En savoir +
        </a>
    </div>

  <div class="">
    {#if pagea4 === 'Projetyakapartir'}
      <Projetyakapartir />
     {:else}
      <div class="accueil">
        <h1 class="text-center">"NOMAD / Marathon Du WEB </h1>
        <p class="textenter">Voici un projet fictif de festival créé de A à Z fait en projet de milieu de deuxième année de BUT MMI.</p>
        <div class="description2">
        <p>
            Le projet <em>“Marathon du Web”</em> a été réalisé dans le cadre de notre formation en BUT Métiers du Multimédia et de l’Internet, en collaboration avec 8 étudiants (5 MMI et 3 informatique).  
            L’objectif était de créer un carnet de voyage interactif sur le thème du <strong>Road Trip</strong>, en utilisant le framework <strong>Laravel</strong> pour gérer la partie back-end et la base de données.  
        </p>
        <p>
            Au sein de ce projet, j’ai participé à la fois à la création graphique et à l’intégration web, en veillant à harmoniser le design et l’expérience utilisateur avec les fonctionnalités techniques.  
            J’ai également pris un rôle de coordination au sein de l’équipe, en organisant des points réguliers et en motivant les membres pour avancer efficacement vers nos objectifs communs.  
         </p>
        <p>
            Ce projet nous a permis de combiner nos compétences en développement web et en design, tout en expérimentant la gestion d’un projet collaboratif de grande envergure.  
            Il a constitué une excellente occasion de mettre en pratique Laravel pour la création d’un site dynamique, tout en développant notre sens de l’organisation et du travail en équipe.
         </p>

        <p>
            <strong>Crédits :</strong>  Clément <i>BLOND</i> / Maxime <i> CAI </i> / Thomas <i>CALUJEK</i> / Maxime <i>CHEMIN</i> / Sophie <i>CHUCHE</i> / Rémi <i>EDMOND </i> / Diego <i>GARENAUX</i> / Valentin <i>LANTOINE </i> 
        </p>
        </div>
      </div>
     
      
    {/if}
  </div>
</div>