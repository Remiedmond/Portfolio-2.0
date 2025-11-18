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

import './profil.css';

onMount(() => {
  
  // Menu button functionality
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

  // Button animation functionality
  document.querySelectorAll('.button').forEach(button => {
    let duration = 3000,
      svg = button.querySelector('svg'),
      svgPath = new Proxy({
        y: null,
        smoothing: null
      }, {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            svg.innerHTML = getPath(target.y, target.smoothing, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        }
      });

    button.style.setProperty('--duration', duration);
    svgPath.y = 20;
    svgPath.smoothing = 0;

    button.addEventListener('click', e => {
      e.preventDefault();

      if (!button.classList.contains('loading')) {
        button.classList.add('loading');

        // Vérifier si GSAP est disponible
        if (typeof gsap !== 'undefined') {
          gsap.to(svgPath, {
            smoothing: .3,
            duration: duration * .065 / 1000
          });

          gsap.to(svgPath, {
            y: 12,
            duration: duration * .265 / 1000,
            delay: duration * .065 / 1000,
            ease: Elastic.easeOut.config(1.12, .4)
          });
        }

        setTimeout(() => {
          svg.innerHTML = getPath(0, 0, [
            [3, 14],
            [8, 19],
            [21, 6]
          ]);
        }, duration / 2);
      }
    });
  });

  // Path generation functions
  function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = {
          length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing;
      return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    },
      cps = cp(a[i - 1], a[i - 2], point, false),
      cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  }

  function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
      [4, 12],
      [12, update],
      [20, 12]
    ],
      d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
  }

  // Scroll to top functionality
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    const handleScroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.remove('hidden');
      } else {
        scrollToTopBtn.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  /*--------------------
  Carousel functionality
  --------------------*/
  
  /*--------------------
  Vars
  --------------------*/
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;

  /*--------------------
  Constants
  --------------------*/
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  /*--------------------
  Get Z Index
  --------------------*/
  const getZindex = (array, index) => (
    array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i))
  );

  /*--------------------
  Items
  --------------------*/
  const carouselItems = document.querySelectorAll('.carousel-item');
  const cursors = document.querySelectorAll('.cursor');

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...carouselItems], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / carouselItems.length);
  };

  /*--------------------
  Animate
  --------------------*/
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor(progress / 100 * (carouselItems.length - 1));
    carouselItems.forEach((item, index) => displayItems(item, index, active));
  };

  // Initialize animation
  if (carouselItems.length > 0) {
    animate();
  }

  /*--------------------
  Click on Items
  --------------------*/
  carouselItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      progress = (i / carouselItems.length) * 100 + 10;
      animate();
    });
  });

  /*--------------------
  Event Handlers
  --------------------*/
  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    progress = progress + wheelProgress;
    animate();
  };

  const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
      cursors.forEach((cursor) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    progress = progress + mouseProgress;
    startX = x;
    animate();
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  /*--------------------
  Video Toggle Function
  --------------------*/
  window.togglePlay = function() {
    const video = document.getElementById('videoPlayer');
    const playButton = document.getElementById('playButton');

    if (video && video.style.display === 'none') {
      video.style.display = 'block';
      if (playButton) playButton.style.display = 'none';
      video.src += "?autoplay=1";
    }
  };

  /*--------------------
  Event Listeners
  --------------------*/
  const wheelHandler = (e) => handleWheel(e);
  const mouseDownHandler = (e) => handleMouseDown(e);
  const mouseMoveHandler = (e) => handleMouseMove(e);
  const mouseUpHandler = () => handleMouseUp();
  const touchStartHandler = (e) => handleMouseDown(e);
  const touchMoveHandler = (e) => handleMouseMove(e);
  const touchEndHandler = () => handleMouseUp();

  document.addEventListener('wheel', wheelHandler);
  document.addEventListener('mousedown', mouseDownHandler);
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
  document.addEventListener('touchstart', touchStartHandler);
  document.addEventListener('touchmove', touchMoveHandler);
  document.addEventListener('touchend', touchEndHandler);

  // Cleanup function pour éviter les fuites mémoire
  return () => {
    document.removeEventListener('wheel', wheelHandler);
    document.removeEventListener('mousedown', mouseDownHandler);
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    document.removeEventListener('touchstart', touchStartHandler);
    document.removeEventListener('touchmove', touchMoveHandler);
    document.removeEventListener('touchend', touchEndHandler);
  };
});

</script>

<img class="bannière" src={bannière} alt="Bannière">

<section class="contentabout">

   <div class="titrecv-container">
            <div class="titrecv-text" id="titrecvText">
                MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS | MES PHOTOS |
            </div>
    </div>
  <div class="carousel">
    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">Un couché de soleil sur la plage </div>
        <div class="num">01</div>
        <img src={pRoyan} alt="Royan" />
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">Victoire de la coupe hand -18 </div>
        <div class="num">02</div>
        <img src={pHand} style="object-position: 24% center" alt="Handball coupe -18" />
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">Un moment de ski </div>
        <div class="num">03</div>
        <img src={pSeef} alt="Ski" />
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">La fête de la musique à Arras </div>
        <div class="num">04</div>
        <img src={pHarmonie} alt="Fête de la musique Arras" />
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">Mon poste de gardien de handball</div>
        <div class="num">05</div>
        <img src={pHanf} alt="Gardien de handball" />
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">Après une course</div>
        <div class="num">06</div>
        <img src={pCourse} alt="Après une course" />
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-box">
        <div class="title">Après un concert lors d'un festival </div>
        <div class="num">07</div>
        <img src={pFest} alt="Concert festival" />
      </div>
    </div>
  </div>

      <div class="cursor"></div>
      <div class="cursor cursor2"></div>
      <section class="moi">

         <div class="titrecv-container">
            <div class="titrecv-text" id="titrecvText">
                À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! | À propos de moi ! |
            </div>
    </div>
        <p class="description">
          Je m'appelle Rémi EDMOND, j'ai 20 ans et je suis actuellement étudiant en BUT Métiers du Multimédia et de l'Internet à l'IUT de Lens.  
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
            <p class="sportive">BUT MMI 3ème année</p>
          </div>
          <div class="NIVEAU">
            <img src={pBac} alt="Bac">
            <p class="sportive">Bac général SPC & NSI</p>


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
                <p class="sportive"> Animateur en colonie de vacances & centre d'accueil !(2023-2024-2025)  </p>
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