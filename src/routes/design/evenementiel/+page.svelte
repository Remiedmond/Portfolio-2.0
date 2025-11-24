<script>
import { base } from '$app/paths'; // AJOUTEZ CETTE LIGNE
import bannière from '../../../img/Bannière.png';
import cartedumonde from '../../../img/carte-du-monde.png';
import Jeuxolympiquesgoalball from '../../../img/design/jeuxolympiquegoalball.jpg';
import Jeuxolympiquesimag from '../../../img/design/jolympiques.jpg';
import mystereiut from '../../../img/design/EDMOND_Rémi.jpg';
import ùysterealiutimg from '../../../img/design/mystereàliut.png';
import miroir1 from '../../../img/design/miroir1.jpeg';
import miroir2 from '../../../img/design/miroir2.jpg';
import miroirdehors from '../../../img/design/Miroir dehors.png';
import deco1img from '../../../img/design/Décoration Partie 1.png'; 
import deco2img from '../../../img/design/Décoration Accueil de loisirs.png'; 
import REmiportrzait from '../../../img/design/edmondremi.png';
import REmiportrzaitdheors from '../../../img/design/portraitremi.png';

import '.././design.css';
</script>

<div class="designglobal">
  <img class="bannière" src={bannière}>

    <div class="couleurbackroung">
      <div class="designcartemonde2">
        <a class='cartedumonderetour' href='{base}/design'>Retour</a>

        <div class="cartedumondeflexwithg">
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/miroir">
              <img class="cartedumondestcecile" src={miroirdehors} />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/jeux olympique">
              <img class="cartedumondeamicale" src={Jeuxolympiquesgoalball} />
            </a>
             <a class="cartedumondemusiqua" href="{base}/design/evenementiel/centredeloisirs">
              <img class="cartedumondebanniere" src={deco2img} />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/mystere">
              <img class="cartedumondebanniere" src={ùysterealiutimg} />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/portrait">
              <img class="cartedumondebanniere" src={REmiportrzaitdheors} />
            </a>
        </div>
      </div>
    </div>

</div>