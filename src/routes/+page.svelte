<script>
import { onMount } from 'svelte';
import Header from '$lib/components/Header.svelte';
import IMGaccueil from '../img/accueil-site-web.jpg';
import logo from '../img/logo.png';
import notes from '../img/notesettout.png';
import notes2 from '../img/notes2.png';
import pHTML from '../img/html.png';
import pCSS from '../img/css.png';
import pJS from '../img/js.png';
import pPGP from '../img/pgp.png';
import pPython from '../img/python.png';
import pMySQL from '../img/mysql.png';
import pGit from '../img/git.png';
import pGitlab from '../img/GitLablogo.png';
import pUxUi from '../img/ux-ui.png';
import pIllustrator from '../img/Illustrator Logo.png';
import pPS from '../img/Logo ps.png';
import pInDesign from '../img/in design.png';
import pFigma from '../img/Figma.png';
import pPP from '../img/pp.png';
import pAfterEffect from '../img/after effect.png';
import pMusescore from '../img/musescore.png';
import pCanva from '../img/Canva-Logo.png';
import pAudition from '../img/audition.png';
import pReact from '../img/Reactlogo.png';
import pSvelte from '../img/Sveltelogo.png';
import pKotlin from '../img/Kotlinlogo.png';
import pAPI from '../img/APIlogo.png';
import pLaravel from '../img/Laravellogo.png';
import pWordpress from '../img/wordpresslogo.png';
import pElementor from '../img/Elementorlogo.png';
import pDocker from '../img/dockerlogo.png';


import './Accueil.css';
let isVisible = false;
  
  onMount(() => {
    // Animation d'entrée
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });


</script>


<svelte:head>
  <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>


<img src={IMGaccueil} class="imageaccueil" alt="Image d'accueil avec les couleurs et le tromboniste">


<main class="container" class:visible={isVisible}>
<h1 class="section-title"> Qui suis-je ?</h1>
        <div class="qui2">
          <div class="quisuisje">
            <p><span class="autolova">Bonjour ! </span> Je suis Rémi EDMOND j'ai 20 ans, actuellement en troisième année de BUT Métiers du
              Multimédia et de l'Internet.
              Aimant la création de site web, je cherche une alternance pour ma troisième année.
              J'ai pour projet de travailler dans le domaine de la création web. Vous trouverez des informations
              sur moi tout le long des pages!
              </p>
          </div>
          <div class="container10">
            <div class="card card0">
              <div class="border">
                <h2>Rémi EDMOND</h2>
                <div class="iconsss">
                  <a href="https://www.instagram.com/remi.edm.crea/"><i class='bx bxl-instagram' aria-hidden="true"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100075399970510"><i class='bx bxl-facebook-circle'
                      aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/r%C3%A9mi-edmond-375255286/"><i class='bx bxl-linkedin'
                      aria-hidden="true"></i></a>
                  <a href="https://www.youtube.com/channel/UC7Zo0pTwfNzGmmBk3IA6t5A"><i class='bx bxl-youtube'
                      aria-hidden="true"></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>

<div class="notesfond">       
  <img src={notes2} class="notesettout" alt="Image avec des notes et des clés de sol et fa">
</div>

 <div>
        <div class="competences-container">
            <div class="scrolling-text" id="scrollingText">
                MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES | MES COMPÉTENCES
            </div>
        </div>
        
    </div>
<div class="competencestatal">
  <div class="developpementwebFront">
    <h1 class=""> <span>Front</span>-end  <i class='bx bxs-network-chart'></i></h1>
    <p>Prototypage interactif</p>
    <p>Design UI/UX et ergonomie</p>
    <p>Intégration HTML5, CSS3, JavaScript</p>
    <p>Utilisation de frameworks  </p>
    <p>Production de sites web responsives et accessibles</p>
    <div class="toutleslogos">
      <img src={pHTML} alt="Logo HTML">
      <img src={pCSS} alt="Logo CSS">
      <img src={pJS} alt="Logo JavaScript">
      <img src={pFigma} alt="Logo Figma">
      <img src={pUxUi} alt="Logo UX/UI">
      <img src={pReact} alt="Logo React">
      <img src={pSvelte} alt="Logo Svelte">
      <img src={pWordpress} alt="Logo Wordpress">
      <img src={pElementor} alt="Logo Elementor">
    </div>
  </div>

  <div class="developpementwebback">
    <h1 class=""> <span>Back</span>-end <i class='bx bxs-network-chart'></i></h1>
    <p>Développement d’applications web dynamiques</p>
    <p>Conception d’API REST</p>
    <p>Utilisation et gestion de bases de données</p>
    <p>Sécurité informatique (authentification, protection des données, RGPD)</p>
    <p>Développement collaboratif</p>
    <div class="toutleslogos">
      <img src={pPGP} alt="Logo PHP">
      <img src={pPython} alt="Logo Python">
      <img src={pMySQL} alt="Logo MySQL">
      <img src={pGit} alt="Logo GitHub">
      <img src={pGitlab} alt="Logo Gitlab">
      <img src={pLaravel} alt="Logo Laravel">
      <img src={pAPI} alt="Logo API">
      <img src={pKotlin} alt="Logo Kotlin">
      <img src={pDocker} alt="Logo Docker">
        
    </div>
  </div>

  <div class="designgrapgique">
    <h1 class=""> <span>Design</span> Graphique <i class='bx bx-message-rounded-dots'></i></h1>
    <p>Approche créative et conceptuelle</p>
    <p>Création d’identités visuelles (logos, chartes graphiques)</p>
    <p>Production de contenus print et web</p>
    <p>Maîtrise des logiciels d'Adobe</p>
    <div class="toutleslogos">
      <img src={pIllustrator} alt="Logo Illustrator">
      <img src={pPS} alt="Logo Photoshop">
      <img src={pInDesign} alt="Logo InDesign">
      <img src={pCanva} alt="Logo Canva">
    </div>
  </div>


  <div class="designaudio">
    <h1 class=""> <span>Audio</span>visuel <i class='bx bxs-music'></i></h1>
    <p>Scénarisation et storytelling visuel</p>
    <p>Captation audio et vidéo</p>
    <p>Montage et post-production</p>
    <p>Motion design et animation graphique</p>
    <p>Prise de vue et retouche photographique</p>
    <div class="toutleslogos">
      <img src={pPP} alt="Logo Premiere Pro">
      <img src={pAfterEffect} alt="Logo After Effects">
      <img src={pMusescore} alt="Logo Musescore">
      <img src={pAudition}  alt="Logo Audition">
    </div>
  </div>
</div>
</main>
