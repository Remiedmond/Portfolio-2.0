<!-- Header.svelte -->
<script>
  import './Header.css';
  import logo from '../../img/logo.png';
     
  // Props (propriétés reçues du parent)
  export let title = "Mon Portfolio";
     
  // Variables locales
  let isMenuOpen = false;
     
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- HTML du composant -->
<header>
  <nav>
    <div class="Logoaccueil">
      <a href="/">
        <img src={logo} class="logo1" alt="Logo de Rémi EDMOND">
        <h1>{title}</h1>
      </a>
    </div>

    <!-- Menu burger button -->
    <button class="burger-menu" class:open={isMenuOpen} on:click={toggleMenu}>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </button>

    <ul class:open={isMenuOpen}>
      <div class="scene">
        <a href="/about" class="panel profil" on:click={() => isMenuOpen = false}>
          <li>Mon Profil</li>
        </a>
        <a href="/projects" class="panel web" on:click={() => isMenuOpen = false}>
          <li>WEB</li>
        </a>
        <a href="/design" class="panel design" on:click={() => isMenuOpen = false}>
          <li>Design graphique</li>
        </a>
        <a href="/contact" class="panel contact" on:click={() => isMenuOpen = false}>
          <li>Contact</li>
        </a>
      </div>
    </ul>
  </nav>
</header>