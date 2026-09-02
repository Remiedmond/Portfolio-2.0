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
import LogoManon from '../../../img/design/logo_manon.png';
import LogoCabinetavocat from '../../../img/design/cabinetavocat.png';
import LogoAna from '../../../img/design/logo Ana avocat.png';
import LogoCabinet from '../../../img/design/cabinetavocat2.png';



</script>

<div class="designglobal">
  <img class="banniere" src={bannière} alt="Bannière">

    <div class="couleurbackroung">
      <div class="designcartemonde2">
        <a class='cartedumonderetour' href='{base}/design'>Retour</a>

        <div class="cartedumondeflexwithg">
        <a class="cartedumondemusiqua" href="{base}/design/logo/Avocat">
              <img class="cartedumondestcecile" src={LogoCabinetavocat} alt="Logo de maitre Manon FONTAINE" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/logo/Avocat2">
              <img class="cartedumondebanniere" src={LogoCabinet} alt="Logo de maitre Ana DA COSTA FARIA" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/logo/JES">
              <img class="cartedumondestcecile" src={LogoJESdehors} alt="Logo JES" />
            </a>
            <a class="cartedumondemusiqua" href="{base}/design/logo/crips">
              <img class="cartedumondebanniere" src={Logocripsdehors} alt="Logo CRIPS" />
            </a>
              <a class="cartedumondemusiqua" href="{base}/design/logo/TES">
              <img class="cartedumondeamicale" src={Logotalentsenscènedehors} alt="Logo Talents en Scène" />
            </a>
        </div>
      </div>
    </div>

</div>