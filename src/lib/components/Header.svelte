<script>
  import './Header.css';
  import logo from '../../img/logo.png';
  import { base } from '$app/paths';
     
  export let title = "Rémi EDMOND";
  let isMenuOpen = false;
     
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <nav>
    <div >
      <a class="Logoaccueil" href="{base}/">
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
        <a href="{base}/about" class="navbarrea" on:click={() => isMenuOpen = false}>
          <li>Mon Profil</li>
        </a>
        <a href="{base}/projects" class="navbarrea" on:click={() => isMenuOpen = false}>
          <li>Le WEB</li>
        </a>
        <a href="{base}/design" class="navbarrea" on:click={() => isMenuOpen = false}>
          <li>Design graphique</li>
        </a>
        <a href="{base}/contact" class="contacter"  on:click={() => isMenuOpen = false}>
          <li>Me contacter</li>
        </a>
      </div>
    </ul>
  </nav>
</header>