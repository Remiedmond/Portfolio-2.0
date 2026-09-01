<script>
import { onMount } from 'svelte';
import bannière from '../../img/Bannière.png';

import pRoyan from '../../img/royan.png';
import pHand from '../../img/hand.jpg';
import pSeef from '../../img/seef.png';
import pHarmonie from '../../img/harmonie.jpg';
import pHanf from '../../img/hanf.png';
import pCourse from '../../img/course.jpg';
import pFest from '../../img/fest.jpg';
import pProfil from '../../img/photo de profil.jpg';
import pMMI from '../../img/mmi.svg';
import pBac from '../../img/bac.jpg';
import pBafa from '../../img/bafa.png';
import pSncf from '../../img/sncf.png';
import preuz from '../../img/reuz.svg';
import pColo1 from '../../img/colo.jpg';
import pColo2 from '../../img/colo2.jpg';
import pColo3 from '../../img/colo3.jpeg';
import pAms from '../../img/ams.jpg';
import pTennis from '../../img/tennis.png';
import pAchicourt from '../../img/achicourt.png';
import pAema from '../../img/Aema.jpg';
import pFrance from '../../img/france.png';
import pAnglais from '../../img/anglais.png';
import pEspagne from '../../img/espagne.png';
import CVRE from '../../img/CV Rémi EDMOND.pdf';

import Propos from '$lib/propos.svelte';

import './profil.css';


  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  onMount(() => {
  gsap.registerPlugin(ScrollTrigger);

  const timer = setTimeout(() => {
    // Configuration commune pour l'effet aller-retour
    const scrollSettings = {
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse" // L'effet magique est ici
    };

    // 1. FORMATIONS
    gsap.to(".Formations .NIVEAU", {
      scrollTrigger: {
        trigger: ".Formations",
        ...scrollSettings
      },
      opacity: 1,
      visibility: "visible",
      y: 0,
      stagger: 0.2,
      duration: 0.8
    });

    // 2. EXPÉRIENCES
    gsap.to(".sncf, .colo", {
      scrollTrigger: {
        trigger: ".exper", // On utilise la div parente .exper
        ...scrollSettings
      },
      opacity: 1,
      visibility: "visible",
      y: 0,
      stagger: 0.3,
      duration: 1
    });

    // 3. ACTIVITÉS
    gsap.to(".handphoto, .velo, .tennis, .trombone, .aema", {
      scrollTrigger: {
        trigger: ".mesactis",
        ...scrollSettings
      },
      opacity: 1,
      visibility: "visible",
      y: 0,
      stagger: 0.1,
      duration: 0.6
    });

    // 4. LANGUES (Ajoutées ici)
    gsap.to(".langues .NIVEAU", {
      scrollTrigger: {
        trigger: ".langues",
        ...scrollSettings
      },
      opacity: 1,
      visibility: "visible",
      y: 0,
      stagger: 0.2,
      duration: 0.8
    });

    ScrollTrigger.refresh();
  }, 100);

  return () => {
    clearTimeout(timer);
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
});

</script>

<img class="bannière" src={bannière} alt="Bannière">

<section class="contentabout">

   

      <section class="moi">

        <Propos />
        <p class="description">
          Je m'appelle Rémi EDMOND, j'ai 21 ans et je suis actuellement étudiant en BUT Métiers du Multimédia et de l'Internet à l'IUT de Lens.  
          Comme vous pouvez le voir sur les photos ci-dessus, je suis passionné de sport et de musique.  
          Je joue du trombone depuis l'âge de 6 ans et je fais partie d'une harmonie.  
          Côté sport, je pratique le handball en tant que gardien, ainsi que le tennis, le cyclisme et la course à pied.
        </p>
        <div class="telecv">
          <p class="titrecv">Mon CV
            <a href={CVRE} class="btn-download" download={CVRE} target="_blank">
              <i class='bx bx-down-arrow-alt'></i> Télécharger le PDF
            </a>
          </p>
        </div>

        <img class="moncv" src={pProfil} alt="Photo de profil">


        <p class="titrecv">Mes Formations</p>
        <div class="Formations">
          <div class="NIVEAU">
            <img src={pMMI} alt="MMI">
            <p class="sportive">BUT MMI 2023-2026</p>
          </div>
          <div class="NIVEAU">
            <img src={pBac} alt="Bac">
            <p class="sportive">Bac général SPC & NSI 2023</p>


          </div>
          <div class="NIVEAU">
            <img src={pBafa} alt="BAFA">
            <p class="sportive">BAFA</p>
          </div>

        </div>

        <div class="exper">
          <p class="titrecv">Mes Experiences</p>
          <div class="experiences">
            <div class="sncf">
              <img src={pSncf} alt="Stage avec le logo SNCF">
              <p class="sncf1">Stage de 3ème dans le secteur ferroviaire</p>
              <a href="https://re-uz.com/"><img src={preuz} alt="Stage avec le logo Re-uz"></a>
              <p class="sncf1">Stage de 2ème année de BUT MMI en Développement WEB. Spécialité Svelte et Wordpress </p>
            
            </div>
            <div class="colo">
              <a href="" id="colo1">
                  <img src={pColo1} alt="Photo Colo 1">
              </a>
              <a href="" id="colo2">
                  <img src={pColo2} alt="Photo Colo 2">
              </a>
              <a href="" id="colo3">
                  <img src={pColo3} alt="Photo Colo 3">
              </a>
              <a href="" id="colo4" style="text-decoration: none;">
                <p class="sportive"> Animateur en colonie de vacances & centre d'accueil ! 2023-2026  </p>
              </a>
            </div>
          </div>
        </div>

        <p class="titrecv">Mes activités</p>
        <div class="mesactis">
          <p class="sportives"> Sportives</p>
          <div class="sport">
            <div class="handphoto"> <a href="https://www.facebook.com/AMSHandball">
            <img src={pAms} alt="Handball Achicourt" >
                <p>Handball à Achicourt</p>
              </a></div>
            <div class="course"></div>
            <div class="velo"><a href="https://www.youtube.com/watch?v=FNl5yh9oFXU"><img
                  src="https://images.pexels.com/photos/5409748/pexels-photo-5409748.jpeg" alt="Cyclisme">
                <p>Cyclisme</p>
              </a></div>
            <div class="tennis"> <a href="https://www.facebook.com/AchicourtTennisClub"> 
            <img src={pTennis} alt="Tennis Achicourt" />
                <p>Tennis à Achicourt</p>
              </a></div>
          </div>
          <p class="musicales"> Musicales</p>
          <div class="musique">
            <div class="trombone"><a href="trombone.html">
            <img src={pAchicourt} alt="Trombone Achicourt" />
                <p>Trombone à l'harmonie d'Achicourt</p>
              </a></div>
            <div class="aema"> <a href="https://www.facebook.com/achicourt.aema">
             <img src={pAema} alt="AEMA" />
                <p>Trésorier de l'association AEMA</p>
              </a></div>
          </div>
        </div>

        <p class="titrecv">Mes Langues</p>
        <div class="langues">
          <div class="NIVEAU">
             <img src={pFrance} alt="Français"/>
            <p class="sportive">Courant</p>
          </div>
          <div class="NIVEAU">
           <img src={pAnglais} alt="Anglais" />
            <p class="sportive">B1</p>
          </div>
          <div class="NIVEAU">
            <img src={pEspagne} alt="Espagnol" />
            <p class="sportive">A2</p>
          </div>

        </div>
      </section>

    </section>

    <style>
     
/* Position de départ (cachée) */
.Formations .NIVEAU, 
.langues .NIVEAU {
  opacity: 0;
  transform: translateY(30px); /* Légèrement vers le bas */
}

.experiences > div {
  opacity: 0;
  transform: translateX(-30px); /* Légèrement vers la gauche */
}

.sport > div, .musique > div {
  opacity: 0;
  transform: scale(0.9); /* Légèrement plus petit */
}
    </style>