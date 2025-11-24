<script>
import { base } from '$app/paths'; 
import bannière from '../../img/Bannière.png';
import cartedumonde from '../../img/carte-du-monde.png';
import './design.css';
</script>

<div class="designglobal">
  <img class="bannière" src={bannière}>

  <div class="designcartemonde">
    <img class="cartedumonde" src={cartedumonde}>
    <a class="cartedumondeMusique" href="{base}/design/musique">Musique</a>
    <a class="cartedumondeGraphisme" href="{base}/design/graphisme">Graphisme</a>
    <a class="cartedumondeEvenementiel" href="{base}/design/evenementiel">Evenementiel</a>
    <a class="cartedumondeLogo" href="{base}/design/logo">Logos</a>
  </div>
</div>