<script>
  import { base } from '$app/paths';
  import banniere from '../../../img/Bannière.png';
  import '.././design.css';

  // Liste de tes projets vidéo
  const videos = [
    {
      id: 'tzwzCRK_LR0',
      title: 'Présentation du Trombone — École de musique d’Achicourt',
      category: 'Pédagogie & Musique',
      desc: 'Vidéo dynamique et ludique pour faire découvrir le trombone à coulisse et inviter les nouveaux élèves à rejoindre la classe de l’école de musique.',
      type: 'video'
    },
    {
      id: 'PLWknKVObRTwA96Pkye7B4-nkM1Sf_BFm7',
      title: 'Corse vue du Ciel — Série en Drone',
      category: 'Prise de vue aérienne',
      desc: 'Série de vidéos immersives en drone explorant les paysages et points de vue emblématiques de la Corse.',
      type: 'playlist'
    },
    {
      id: '_8QUUhQFyZI',
      title: 'CV Vidéo — Rémi EDMOND',
      category: 'Présentation & Parcours',
      desc: 'Présentation de mon profil, de mes compétences en développement web, design graphique et audiovisuel.',
      type: 'video'
    }
  ];

  // Vidéo actuellement sélectionnée dans le grand lecteur
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
        <!-- Lecteur principal responsive 16:9 -->
        <div class="video-main-display">
          <div class="video-player-frame">
            {#if currentVideo.type === 'playlist'}
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

        <!-- Liste / Grille de sélection des projets vidéo -->
        <div class="video-grid-selection">
          <h3 class="selection-title">Sélectionner un projet</h3>
          
          {#each videos as video}
            <button
              type="button"
              class="video-card-btn {currentVideo.id === video.id ? 'is-active' : ''}"
              on:click={() => selectVideo(video)}
            >
              <div class="video-card-thumb">
                {#if video.type === 'playlist'}
                  <img src="https://img.youtube.com/vi/edfD7uzSJkc/mqdefault.jpg" alt={video.title} />
                  <span class="playlist-badge">Playlist</span>
                {:else}
                  <img src="https://img.youtube.com/vi/{video.id}/mqdefault.jpg" alt={video.title} />
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
