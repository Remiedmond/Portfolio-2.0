<script>
  import { base } from '$app/paths';
  import banniere from '../../../img/Bannière.png';
  import '.././design.css';

  const videos = [
    {
      id: 'tzwzCRK_LR0',
      title: 'Présentation du Trombone — École de musique d’Achicourt',
      category: 'Pédagogie & Musique',
      desc: 'Vidéo dynamique et ludique pour faire découvrir le trombone à coulisse et inviter les nouveaux élèves à rejoindre la classe de l’école de musique.',
      type: 'youtube',
      aspect: '16/9',
      thumb: 'https://img.youtube.com/vi/tzwzCRK_LR0/mqdefault.jpg'
    },
    {
      id: 'le-pre-achicourt',
      src: `${base}/videos/le-pre-achicourt.mp4`, // Chemin vers ta vidéo locale dans static/videos/
      title: 'Le Pré d’Achicourt — Nature & Biodiversité',
      category: 'Communication Municipale',
      desc: 'Reportage et valorisation de la zone humide préservée par la commune et la communauté urbaine d’Arras (gestion différenciée, triton crêté et promenade du Crinchon).',
      type: 'local',
      aspect: '9/16',
      thumb: `${base}/img/achicourt.png`  // Ou une capture du début de la vidéo
    },
    {
      id: 'QyEcFmxvOCU',
      title: 'WebTV - à la manière du jeu télévisé "Burger Quiz""',
      category: 'Captation & Performance',
      desc: 'Présentation interactive d\'une émission de quiz en ligne. J\'ai réalisé la captation audio, le montage et l\'habillage graphique de cette émission fictive, en m\'inspirant du style visuel de l\'émission "Burger Quiz".',
      type: 'youtube',
      aspect: '16/9',
      thumb: 'https://img.youtube.com/vi/QyEcFmxvOCU/mqdefault.jpg'
    },
    {
      id: 'PLWknKVObRTwA96Pkye7B4-nkM1Sf_BFm7',
      title: 'Corse vue du Ciel — Série en Drone',
      category: 'Prise de vue aérienne',
      desc: 'Série de vidéos immersives en drone explorant les paysages et points de vue emblématiques de la Corse.',
      type: 'playlist',
      aspect: '16/9',
      thumb: 'https://img.youtube.com/vi/edfD7uzSJkc/mqdefault.jpg'
    },
    {
      id: '_8QUUhQFyZI',
      title: 'CV Vidéo — Rémi EDMOND',
      category: 'Présentation & Parcours',
      desc: 'Présentation de mon profil, de mes compétences en développement web, design graphique et audiovisuel.',
      type: 'youtube',
      aspect: '16/9',
      thumb: 'https://img.youtube.com/vi/_8QUUhQFyZI/mqdefault.jpg'
    }
  ];

  let currentVideo = videos[0];

  function selectVideo(video) {
    currentVideo = video;
  }
</script>

<div class="designglobal">
  {#if banniere}
    <img class="banniere" src={banniere} alt="Bannière">
  {/if}

  <div class="couleurbackroung">
    <div class="designcartemonde2">
      <a class="cartedumonderetour" href="{base}/design">← Retour</a>

      <div class="audiovisuel-layout">
        <!-- Lecteur principal auto-adaptatif (16:9 ou 9:16) -->
        <div class="video-main-display">
          <div class="video-player-frame" class:is-vertical={currentVideo.aspect === '9/16'}>
            {#if currentVideo.type === 'local'}
              <video 
                src={currentVideo.src} 
                controls 
                autoplay 
                muted 
                playsinline 
                loop
              >
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
            {:else if currentVideo.type === 'playlist'}
              <iframe
                src="https://www.youtube.com/embed/videoseries?list={currentVideo.id}&autoplay=1&mute=1&playsinline=1"
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            {:else}
              <iframe
                src="https://www.youtube.com/embed/{currentVideo.id}?autoplay=1&mute=1&playsinline=1"
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            {/if}
          </div>

          <div class="video-info-box">
            <span class="video-tag">{currentVideo.category}</span>
            <h2>{currentVideo.title}</h2>
            <p>{currentVideo.desc}</p>
          </div>
        </div>

        <!-- Liste / Grille latérale des réalisations -->
        <div class="video-grid-selection">
          <h3 class="selection-title">Sélectionner un projet</h3>
          
          {#each videos as video}
            <button
              type="button"
              class="video-card-btn {currentVideo.id === video.id ? 'is-active' : ''}"
              on:click={() => selectVideo(video)}
            >
              <div class="video-card-thumb">
                <img src={video.thumb} alt={video.title} />
                {#if video.type === 'playlist'}
                  <span class="playlist-badge">Playlist</span>
                {:else if video.aspect === '9/16'}
                  <span class="vertical-badge">Vertical</span>
                {/if}
              </div>

              <div class="video-card-text">
                <span class="card-category">{video.category}</span>
                <h4>{video.title}</h4>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
