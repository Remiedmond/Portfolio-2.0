<script>
import bannière from '../../../img/Bannière.png';
import cartedumonde from '../../../img/carte-du-monde.png';
import stceciledehors from '../../../img/design/Musiqua/stcecile dehors.png';
import stcecileimg from '../../../img/design/Musiqua/stcecile.png';
import bannieredehors from '../../../img/design/Musiqua/Bannière dehors.png';
import banniereimg from '../../../img/design/Musiqua/bannière 1 .png';
import amicaleimg from '../../../img/design/Musiqua/Amicale.png';
import amicalecarteimg from '../../../img/design/Musiqua/Amicale carte.png';
import badgeimg from '../../../img/design/Musiqua/40 ans.png';
import depliant1img from '../../../img/design/Musiqua/dépliant1.png';
import depliant2img from '../../../img/design/Musiqua/dépliant2.png';
import depliantdehorsimg from '../../../img/design/Musiqua/dépliant test.png';
import badgestcecimg from '../../../img/design/Musiqua/40 ans img.png';
import bbqafficheimg from '../../../img/design/Musiqua/Affiche Barbecue AEMA.png';
import bbqaffichedehorsimg from '../../../img/design/Musiqua/Affiche Barbecue AEMA dehors.png';
import stpatrickdehorsimg from '../../../img/design/Musiqua/Affiche-de-Saint-Patrick dehors.png';
import stpatrickafficheimg from '../../../img/design/Musiqua/Affiche-de-Saint-Patrick-7emeversion.jpg';
import stpatrickdehorsimg2026 from '../../../img/design/Musiqua/stpat2026.png';
import stpatrickafficheimg2026 from '../../../img/design/Musiqua/Saint Patrick 2026.png';
import ducklogo from '../../../img/duckescape.png';
import '.././design.css';
import { base } from '$app/paths';


</script>

<div class="designglobal">
  <img class="banniere" src={bannière} alt="Bannière">

    <div class="couleurbackroung">
      <div class="designcartemonde2">
        <a class='cartedumonderetour' href='{base}/design'>Retour</a>

        <div class="cartedumondeflexwithg">
          <a class="cartedumondemusiqua" href="{base}/design/musique/stpatrick2026">
            <img class="cartedumondestcecile" src={stpatrickdehorsimg2026} alt="Affiche Saint-Patrick 2026" />
          </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/stcecile">
              <img class="cartedumondestcecile" src={stceciledehors} alt="St Cécile" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/banniere">
              <img class="cartedumondebanniere" src={bannieredehors} alt="Bannière" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/carte">
              <img class="cartedumondeamicale" src={amicalecarteimg} alt="carte de membre de l'Amicale" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/anniversaire">
              <img class="cartedumondeaniversaire" src={badgestcecimg} alt="Badge 40 Ans" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/stpatrick2025">
              <img class="cartedumondestpatrick" src={stpatrickdehorsimg} alt="Affiche Saint-Patrick 2025" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/barbecue">
              <img class="cartedumondebarbecue" src={bbqaffichedehorsimg} alt="Affiche Barbecue" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/depliant">
              <img class="cartedumondedepliant" src={depliantdehorsimg} alt="Dépliant" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/musique/duckescape">
              <img class="cartedumondedepliant" src={ducklogo} alt="Duck Escape" />
            </a>
        </div>
      </div>
    </div>

</div>