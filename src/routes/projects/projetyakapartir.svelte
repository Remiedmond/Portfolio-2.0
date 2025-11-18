<script>
  // Import des images depuis ../../img
  import parisImg from '../../img/paris.jpg';
  import lilleImg from '../../img/lille.jpg';
  import annecyImg from '../../img/annecy.jpg';
  import bordeauxImg from '../../img/bordeaux.jpg';
  import niceImg from '../../img/nice.jpg';
  import agdeImg from '../../img/agde.jpg';
  import lyonImg from '../../img/lyon.jpg';
  import bonifacioImg from '../../img/bonifacio.jpg';
  import carnacImg from '../../img/carnac.jpg';
  import montelimarImg from '../../img/montelimar.jpg';
  import biarritzImg from '../../img/biarritz.jpg';
  import markerImg from '../../img/marker.png';

  // Variables réactives pour le formulaire
  let selectedCity = '';
  let arrivalDate = '';
  let departureDate = '';

  // Fonction de recherche
  function handleSearch(event) {
    event.preventDefault();
    console.log('Recherche:', { selectedCity, arrivalDate, departureDate });
    // Logique de recherche à implémenter
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&family=Poiret+One&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap" rel="stylesheet">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>

<header class="container header">
  <a href="" class="logo">Yaka Partir.Fr</a>
  <nav class="menu">
    <a href="" class="active">Accueil</a>
    <a href="">Notre guide</a>
    <a href="">S'inspirer</a>
    <a href="">Infos pratiques</a>
  </nav>
  <a href="" class="button">S'inscrire</a>
</header>

<section class="container banner">
  <div class="banner__presentation">
    <h1>Visiter les plus <strong>belles villes</strong> de France</h1>
    <p>Ah, le plaisir de musarder le nez en l'air, de déambuler entre amis, en famille.
       En France, plus qu'ailleurs, on sait prendre le temps de vivre et de profiter de ces bons moments partagés.</p>
  </div>
  <div class="banner__gallery">
    <img id="photo1" src={parisImg} alt="Paris">
    <img id="photo2" src={lilleImg} alt="Lille">
    <img id="photo3" src={annecyImg} alt="Annecy">
    <img id="photo4" src={bordeauxImg} alt="Bordeaux">
    <img id="photo5" src={niceImg} alt="Nice">
  </div>
  <form on:submit={handleSearch}>
    <div class="input_data">
      <label for="city-select">Destination:</label>
      <select name="city" id="city-select" bind:value={selectedCity}>
        <option value="">Où voulez vous aller ?</option>
        <option value="5">Bordeaux</option>
        <option value="2">Lille</option>
        <option value="6">Lyon</option>
        <option value="1">Marseille</option>
        <option value="3">Paris</option>
        <option value="4">Strasbourg</option>
      </select>
    </div>
    <div class="input_data">
      <label for="arrival-select">Arrivée:</label>
      <input type="date" name="arrival" id="arrival-select" bind:value={arrivalDate}>
    </div>
    <div class="input_data">
      <label for="departure-select">Départ:</label>
      <input type="date" name="departure" id="departure-select" bind:value={departureDate}>
    </div>
    <div class="input_data">
      <input class="button" type="submit" value="Chercher">
    </div>
  </form>
</section>

<section class="container city">
  <h2>Quelques lieux à ne pas manquer</h2>
  <div class="city__gallery">
    <a href="" id="city1">
      <img src={agdeImg} alt="Agde">
      <span>Agde – Occitanie</span>
    </a>
    <a href="" id="city2">
      <img src={lyonImg} alt="Lyon">
      <span>Lyon - Auvergne-Rhône-Alpes</span>
    </a>
    <a href="" id="city3">
      <img src={bonifacioImg} alt="Bonifacio">
      <span>Bonifacio - Corse</span>
    </a>
    <a href="" id="city4">
      <img src={carnacImg} alt="Carnac">
      <span>Carnac - Bretagne</span>
    </a>
    <a href="" id="city5">
      <img src={montelimarImg} alt="Montélimar">
      <span>Montélimar - Auvergne-Rhône-Alpes</span>
    </a>
    <a href="" id="city6">
      <img src={biarritzImg} alt="Biarritz">
      <span>Biarritz - Nouvelle-Aquitaine</span>
    </a>
  </div>
</section>

<footer class="container footer">
  <a href="" class="logo">Yaka Partir.Fr</a>
  <div><strong>YakaPartir.fr</strong> est une marque déposée de MMI Création Rémi EDMOND. &copy; 2025.</div>
</footer>

<style>

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .logo {
    font-family: "Poiret One", sans-serif;
    font-size: xx-large;
  }

  .logo::first-letter {
    color: rgba(18,102,252,1);
    font-weight: bold;
  }

  .menu a {
    margin: 0.5rem;
  }

  .menu .active {
    font-weight: bold;
  }

  .button {
    background-color: rgba(18, 102, 252, 1);
    padding: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    color: white;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: none;
  }

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 2rem;
    padding: 0.2rem;
    border-bottom: 2px solid rgba(220, 220, 220, 0.5);
  }

  .banner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    position: relative;
  }

  .banner__presentation {
    width: 50%;
    height: 100%;
  }

  .banner__presentation h1 {
    font-size: 5rem;
  }

  .banner__presentation p {
    font-size: 1.3rem;
  }

  .banner__presentation h1 strong {
    color: rgba(18,102,252,1);
  }

  .banner__gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "photo1 photo1 . . "
                        "photo1 photo1 photo2 . "
                        "photo1 photo1 photo2 photo5 "
                        "photo3 photo3 photo2 photo5"
                        "photo3 photo3 photo4 photo5"
                        "photo3 photo3 photo4 photo5";
    gap: 0.5rem;
    justify-content: center;
    margin: 20px auto;
    align-items: center;
    align-content: center;
    width: 50%;
    height: 150%;
    overflow: hidden;
  }

  #photo1 {
    grid-area: photo1;
    width: 100%;
    height: 100%;
    border-top-left-radius: 2rem;
  }

  #photo1 img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  #photo2 {
    grid-area: photo2;
    width: 100%;
    height: 100%;
    border-top-right-radius: 2rem;
  }

  #photo2 img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  #photo3 {
    grid-area: photo3;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    border-bottom-right-radius: 0rem;
  }

  #photo3 img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  #photo4 {
    grid-area: photo4;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  #photo4 img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  #photo5 {
    grid-area: photo5;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  #photo5 img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  form {
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 1rem;
    border-radius: 1rem;
    position: absolute;
    top: 80%;
    left: 10%;
  }

  .input_data {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
  }

  .input_data .departure-select {
    font-weight: bold;
  }

  .input_data button {
    border-color: none;
  }

  .city h2 {
    position: relative;
    margin-bottom: 4rem;
    font-size: large;
  }

  .city h2::after {
    position: absolute;
    top: 20%;
    left: 18%;
    right: -30px;
    transform: rotate(-5deg);
    z-index: -1;
    content: "";
    background-image: url({markerImg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 40%;
    height: 30px;
  }

  .city__gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "city1 city1 city2 city3 "
                        "city4 city5 city2 city6 ";
    gap: 2.5rem;
    justify-content: center;
    margin: 20px auto;
    align-items: center;
    align-content: center;
    position: relative;
  }

  .city__gallery img {
    width: 100%;
    border-radius: 10px;
    border: 5px solid white;
    z-index: 1;
  }

  #city1 {
    grid-area: city1;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: scale(1) rotate(4deg);
  }

  #city1:hover {
    transform: scale(1.1);
  }

  #city1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #city2 {
    grid-area: city2;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: scale(1) rotate(-1deg);
  }

  #city2:hover {
    transform: scale(1.1);
  }

  #city2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #city3 {
    grid-area: city3;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: scale(1) rotate(4deg);
  }

  #city3:hover {
    transform: scale(1.1);
  }

  #city3 img {
    width: 100%;
    height: 100%;
  }

  #city4 {
    grid-area: city4;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: scale(1) rotate(2deg);
  }

  #city4:hover {
    transform: scale(1.1);
  }

  #city4 img {
    width: 100%;
    height: 100%;
  }

  #city5 {
    grid-area: city5;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: scale(1) rotate(-2deg);
  }

  #city5:hover {
    transform: scale(1.1);
  }

  #city5 img {
    width: 100%;
    height: 100%;
  }

  #city6 {
    grid-area: city6;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: scale(1) rotate(-2deg);
  }

  #city6:hover {
    transform: scale(1.1);
  }

  #city6 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .city__gallery span {
    position: absolute;
    top: 100%;
    left: 1%;
    margin-top: -2rem;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding-left: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    width: 98%;
  }

  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 2rem;
    padding: 0.2rem;
    border-top: 2px solid rgba(220, 220, 220, 0.5);
  }

</style>