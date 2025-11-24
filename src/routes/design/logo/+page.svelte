<script>
import bannière from '../../../img/Bannière.png';
import cartedumonde from '../../../img/carte-du-monde.png';
import LogoJES from '../../../img/design/Logo Design 1.png';
import LogoJESdehors from '../../../img/design/Logo Design 1 bus.png';
import Logocrips from '../../../img/design/Logo Design 2.png';
import Logocripsdehors from '../../../img/design/Logo Design 2 metro.png';
import Logotalentsenscène from '../../../img/design/Logo Design 3.png';
import Logotalentsenscènedehors from '../../../img/design/Logo Design 3 panneau.png';
import '.././design.css';
import { base } from '$app/paths';



</script>

<div class="designglobal">
  <img class="bannière" src={bannière}>

    <div class="couleurbackroung">
      <div class="designcartemonde2">
        <a class='cartedumonderetour' href='{base}/design'>Retour</a>

        <div class="cartedumondeflexwithg">
            <a class="cartedumondemusiqua" href="{base}/design/logo/JES">
              <img class="cartedumondestcecile" src={LogoJESdehors} />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/logo/CRIPS">
              <img class="cartedumondebanniere" src={Logocripsdehors} />
            </a>
              <a class="cartedumondemusiqua" href="{base}/design/logo/Talentsenscène">
              <img class="cartedumondeamicale" src={Logotalentsenscènedehors} />
            </a>
        </div>
      </div>
    </div>

</div>