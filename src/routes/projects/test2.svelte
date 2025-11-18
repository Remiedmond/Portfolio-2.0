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


</script>



<div class="containerprojects"> 

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
{:else}
 
 <div class="imageweb">
  <div class="image-container">
    <a class=" {pagea === 'Playlist' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Playlist')}>
      <img src={Laplaylistimg} alt="Image Logo la Playlist festival">
    </a> 
  </div>
  <div class="image-container">
    <a class=" {pagea === 'Nomad' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Nomad')}>
      <img src={Nomadimg} alt="Image Logo Nomad">
    </a> 
  </div>
  <div class="image-container">
    <a class=" {pagea === 'Instaphp' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('Instaphp')}>
      <img src={Instaphpimg} alt="Image Logo la Playlist festival">
    </a> 
  </div>
  <div class="image-container">
    <a class=" {pagea === 'BDDprojet' ? 'active' : ''}" href="#" on:click|preventDefault={() => show('BDDprojet')}>
      <img src={Bddimg} alt="Image Logo la Playlist festival">
    </a> 
  </div>    
</div> 
{/if}

  </div>
</div>