<script>

import montagnee from '../../img/montagnee.png';
import Phloximg from '../../img/phlox.png';
import Gridimg from '../../img/grid.png';
import Gsapimg from '../../img/gsapcss.png';
import Nomadimg from '../../img/logonomad.png';
import Laplaylistimg from '../../img/laplaylist.png';
import Instaphpimg from '../../img/instagramprojet.png';
import Bddimg from '../../img/series.png';
import Duckescapeimg from '../../img/duckescape.png';
import Friseimg from '../../img/frise.png';
import Escapeimg from '../../img/escape.png';
import './projects.css';

  let pagea = ''; 

  function show(component) {
    pagea = component;
  }

  import Test from "./test.svelte";
  import Test2 from "./test2.svelte";
  import Autres from "./autresweb.svelte";
  import Snow from "./snow.svelte";
  import Phlox from "./phlox.svelte";
  import Grid from "./grid.svelte";
  import GSAPCSS from "./gsapcss.svelte";
  import Nomad from "./nomad.svelte";
  import Playlist from "./laplaylist.svelte";
  import Instaphp from "./instamgram.svelte";
  import BDDprojet from "./bdd.svelte";
  import Duckescape from "./duckescape.svelte";
  import Frise from "./frise.svelte";
  import Escape from "./escape.svelte";


</script>



  <div class=" ">
    {#if pagea === 'Test'}
  <Test />
{:else if pagea === 'Test2'}
  <Test2 />
{:else if pagea === 'Autres'}
  <Autres />
{:else if pagea === 'Snow'}
  <Snow />
{:else if pagea === 'Phlox'}
  <Phlox />
{:else if pagea === 'Grid'}
  <Grid />
{:else if pagea === 'GSAPCSS'}
  <GSAPCSS />
{:else if pagea === 'Nomad'}
  <Nomad />
{:else if pagea === 'Playlist'}
  <Playlist />
{:else if pagea === 'Instaphp'}
  <Instaphp />
{:else if pagea === 'BDDprojet'}
  <BDDprojet />
{:else if pagea === 'Duckescape'}
  <Duckescape />
{:else if pagea === 'Frise'}
  <Frise />
{:else if pagea === 'Escape'}
  <Escape />
{:else}
 
 <div class="imageweb">
  <div class="image-container">
    <a class=" {pagea === 'Duckescape' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Duckescape')}>
      <img src={Duckescapeimg} alt="Image Logo la Playlist festival">
    </a> 
  </div>
  <div class="image-container">
    <a class=" {pagea === 'Frise' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Frise')}>
      <img src={Friseimg} alt="Image Frise">
    </a>
  </div>
  <div class="image-container">
    <a class=" {pagea === 'Escape' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Escape')}>
      <img src={Escapeimg} alt="Image Escape">
    </a>
  </div>
</div> 
{/if}

  </div>
