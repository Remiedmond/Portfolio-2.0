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
import AfficheMainSquare from '../../../img/design/MainSquareFestival2026_AFFICHE.png';
import AfficheMainSquareExterieur from '../../../img/design/affiche mainsquare exterieur.png';
import afficheAchicourt from '../../../img/design/Affiche fête de la bassure version finale.png';
import dehorsaffichebassure from '../../../img/design/bassureporte.png';


import '.././design.css';
</script>

<div class="designglobal">
  <img class="banniere" src={bannière} alt="Bannière">

    <div class="couleurbackroung">
      <div class="designcartemonde2">
        <a class='cartedumonderetour' href='{base}/design'>Retour</a>

        <div class="cartedumondeflexwithg">
          <a class="cartedumondemusiqua" href="{base}/design/evenementiel/mainsquare2026">
              <img class="cartedumondestcecile" src={AfficheMainSquareExterieur} alt="Affiche Main Square Festival 2026"  />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/fetedelabassure">
              <img class="cartedumondeamicale" src={dehorsaffichebassure} alt="Affiche de la Fête de la Bassure 2026 d'Achicourt" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/miroir">
              <img class="cartedumondestcecile" src={miroirdehors} alt="Affiche sur le theme Miroir"  />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/jeux olympique">
              <img class="cartedumondeamicale" src={Jeuxolympiquesgoalball} alt="Jeux Olympiques" />
            </a>
             <a class="cartedumondemusiqua" href="{base}/design/evenementiel/centredeloisirs">
              <img class="cartedumondebanniere" src={deco2img} alt="Centre de loisirs" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/mystere">
              <img class="cartedumondebanniere" src={ùysterealiutimg} alt="Affiche Mystère à l'IUT" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/evenementiel/portrait">
              <img class="cartedumondebanniere" src={REmiportrzaitdheors} alt="Portrait" />
            </a>
        </div>
      </div>
    </div>

</div>