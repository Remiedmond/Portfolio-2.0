<script>
  import Header from '$lib/components/Header.svelte';
  import Competences from '$lib/competences.svelte';
  import Reveal from '$lib/reveal.svelte';
  import './Accueil.css';

  // Imports d'images
  import IMGaccueil from '../img/accueil-site-web.jpg';
  import logo from '../img/logo.png';
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

  // LOGIQUE D'ANIMATION POUR LES COMPÉTENCES (SANS CASSER LE ROW)
  function reveal(node, { delay = '0s' } = {}) {
    node.style.opacity = "0";
    node.style.transform = "translateY(40px)";
    node.style.transition = `opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
    node.style.transitionDelay = delay;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
        observer.unobserve(node);
      }
    }, { threshold: 0.1 });

    observer.observe(node);
    return {
      destroy() { observer.disconnect(); }
    };
  }

  // Configuration des données structurées Schema.org
  const schemaOrgPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rémi Edmond",
    "url": "https://www.remi-edmond.fr",
    "jobTitle": "Développeur Web Full-Stack & DevOps",
    "description": "Développeur web spécialisé en SvelteKit, React, Node.js et écosystèmes DevOps.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arras",
      "addressRegion": "Hauts-de-France",
      "addressCountry": "FR"
    },
    // Liens vers tes profils publics officiels (aide Google à faire le lien d'entité)
    "sameAs": [
      "https://github.com/ton-pseudo-github",
      "https://www.linkedin.com/in/ton-profil-linkedin"
    ],
    "knowsAbout": [
      "Web Development",
      "SvelteKit",
      "React",
      "Node.js",
      "DevOps",
      "Tailwind CSS",
      "Git"
    ]
  };

  const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(schemaOrgPerson)}</${'script'}>`;
</script>

<svelte:head>
  <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
  <!-- Injection sécurisée du JSON-LD -->
  {@html jsonLdScript}
</svelte:head>

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/_8QUUhQFyZI?autoplay=1&mute=1&playsinline=1"
    title="CV Vidéo Rémi EDMOND"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

<main class="container">
  <Reveal>
    <div class="qui2">
      <div class="quisuisje">
        <h1> Bonjour, </h1>
        <h3> Je suis Rémi !</h3>
        <p> 
          Actuellement en 1ère année d'Expert en informatique et système d'information (BAC+4), je façonne des expériences numériques où la technique rencontre l’image. 
          Mon parcours m'a permis de fusionner le code, la stratégie de communication et l'audiovisuel pour concevoir 
          des projets web complets et immersifs.
        </p>
      </div>
      <div class="container10">
        <div class="card card0">
          <div class="border">
            <h2>Rémi EDMOND</h2>
            <div class="iconsss">
              <a href="https://www.instagram.com/remi.edm.crea/"><i class='bx bxl-instagram'></i></a>
              <a href="https://www.facebook.com/profile.php?id=100075399970510"><i class='bx bxl-facebook-circle'></i></a>
              <a href="https://www.linkedin.com/in/rémi-edmond-375255286/"><i class='bx bxl-linkedin'></i></a>
              <a href="https://www.youtube.com/channel/UC7Zo0pTwfNzGmmBk3IA6t5A"><i class='bx bxl-youtube'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Reveal>

  <div class="notesfond">      
    <img src={notes2} class="notesettout" alt="Notes">
  </div>

  <div>
    <Competences />
  </div>

  <div class="competencestatal">
    <div class="developpementwebFront" use:reveal={{ delay: '0s' }}>
      <h1> <span>Front</span>-end <i class='bx bxs-network-chart'></i></h1>
      <p>○ Prototypage interactif</p>
      <p>○ Design UI/UX et ergonomie</p>
      <p>○ Intégration HTML5, CSS3, JavaScript</p>
      <div class="toutleslogos">
        <img src={pHTML} alt="Logo HTML"><img src={pCSS} alt="Logo CSS"><img src={pJS} alt="Logo JS"><img src={pFigma} alt="Logo Figma"><img src={pUxUi} alt="Logo UX"><img src={pReact} alt="Logo React"><img src={pSvelte} alt="Logo Svelte"><img src={pWordpress} alt="Logo WP"><img src={pElementor} alt="Logo Elementor">
      </div>
    </div>

    <div class="developpementwebback" use:reveal={{ delay: '0.15s' }}>
      <h1> <span>Back</span>-end <i class='bx bxs-network-chart'></i></h1>
      <p>○ Développement d’applications et sites web dynamiques</p>
      <p>○ Conception d’API REST</p>
      <div class="toutleslogos">
        <img src={pPGP} alt="Logo PHP"><img src={pPython} alt="Logo Python"><img src={pMySQL} alt="Logo MySQL"><img src={pGit} alt="Logo Git"><img src={pGitlab} alt="Logo Gitlab"><img src={pLaravel} alt="Logo Laravel"><img src={pAPI} alt="Logo API"><img src={pKotlin} alt="Logo Kotlin"><img src={pDocker} alt="Logo Docker">
      </div>
    </div>

    <div class="designgrapgique" use:reveal={{ delay: '0.3s' }}>
      <h1> <span>Design</span> Graph <i class='bx bx-message-rounded-dots'></i></h1>
      <p>○ Approche créative et conceptuelle</p>
      <p>○ Création d’identités visuelles</p>
      <div class="toutleslogos">
        <img src={pIllustrator} alt="Logo AI"><img src={pPS} alt="Logo PS"><img src={pInDesign} alt="Logo ID"><img src={pCanva} alt="Logo Canva">
      </div>
    </div>

    <div class="designaudio" use:reveal={{ delay: '0.45s' }}>
      <h1> <span>Audio</span>visuel <i class='bx bxs-music'></i></h1>
      <p>○ Scénarisation et storytelling visuel</p>
      <p>○ Montage et post-production</p>
      <div class="toutleslogos">
        <img src={pPP} alt="Logo PP"><img src={pAfterEffect} alt="Logo AE"><img src={pMusescore} alt="Logo MS"><img src={pAudition} alt="Logo AU">
      </div>
    </div>
  </div>
</main>