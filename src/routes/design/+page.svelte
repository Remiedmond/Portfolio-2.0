<script>
  import { base } from '$app/paths';
  import banniere from '../../img/Bannière.png';
  import cartedumonde from '../../img/carte-du-monde.png';
  import './design.css';
</script>

<div class="designglobal">
  {#if banniere}
    <img class="banniere" src={banniere} alt="Bannière">
  {/if}

  <div class="designcartemonde">
    <img class="cartedumonde" src={cartedumonde} alt="Carte du monde">
    
    <!-- Boutons positionnés sur les continents -->
    <a class="cartedumondeMusique" href="{base}/design/musique">Musique</a>
    <a class="cartedumondeGraphisme" href="{base}/design/graphisme">Graphisme</a>
    <a class="cartedumondeEvenementiel" href="{base}/design/evenementiel">Événementiel</a>
    <a class="cartedumondeLogo" href="{base}/design/logo">Logos</a>
    <a class="cartedumondeAudiovisuel" href="{base}/design/audiovisuel">Audiovisuel</a>
  </div>
</div>
