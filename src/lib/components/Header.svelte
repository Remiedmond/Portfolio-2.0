<script>
  import './Header.css';
  import logo from '../../img/logo.png';
  import { base } from '$app/paths';
     
  export let title = "Mon Portfolio";
  let isMenuOpen = false;
     
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <nav>
    <div class="Logoaccueil">
      <a href="{base}/">
        <img src={logo} class="logo1" alt="Logo de Rémi EDMOND">
        <h1>{title}</h1>
      </a>
    </div>

    <button class="burger-menu" class:open={isMenuOpen} on:click={toggleMenu}>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </button>

    <ul class:open={isMenuOpen}>
      <div class="scene">
        <a href="{base}/about" class="panel profil" on:click={() => isMenuOpen = false}>
          <li>Mon Profil</li>
        </a>
        <a href="{base}/projects" class="panel web" on:click={() => isMenuOpen = false}>
          <li>WEB</li>
        </a>
        <a href="{base}/design" class="panel design" on:click={() => isMenuOpen = false}>
          <li>Design graphique</li>
        </a>
        <a href="{base}/contact" class="panel contact" on:click={() => isMenuOpen = false}>
          <li>Contact</li>
        </a>
      </div>
    </ul>
  </nav>
</header>