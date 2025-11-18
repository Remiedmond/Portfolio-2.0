<script>
  import { onMount } from "svelte";

  onMount(() => {
    const burger = document.getElementById('burger');
    const productsMenu = document.querySelector('.products-menu');
    if (burger) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('clic');
        productsMenu.classList.toggle('clic');
      });
    }
  });
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
  <link href="css/styles.css" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400;500&display=swap" rel="stylesheet">
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width"/>
</svelte:head>

<div>
  <header class="header">
    <nav>
      <div class="menu container">
        <a class="logo" href="#">SnowRide</a>
        <div id="burger" class="burger-menu"></div>
        <div class="products-menu">
          <a href="#">Planches</a>
          <a href="#">Fixation</a>
          <a href="#">Chaussures</a>
          <a href="#">Masques</a>
          <a href="#">Accessoires</a>
          <a href="#">Protections</a>
          <a href="#">Sécurité</a>
        </div>
        <div class="user-menu">
          <a href="#"><i class='bx bx-search'></i></a>
          <a href="#"><i class='bx bx-user'></i></a>
          <a href="#"><i class='bx bx-cart'></i></a>
        </div>
      </div>
    </nav>

    <div class="banner container">
      <div class="banner-intro">
        <h2>in the game <br>since 92</h2>
        <span>Nouvelle collection snowboard 2022</span>
        <a class="arrow" href="#">en savoir plus</a>
      </div>
      <a href="#">
        <img src="images/target.svg" alt="Target">
      </a>
    </div>
  </header>


<section class="tendance container">
  <article class="tendance-item">
    <div class="tendance-txt">
      <h3>cool attitude !</h3>
      <p>Des tenues de sport qui associent style et confort, c'est possible ?
         Toutes les dernières tendances sont chez SNOWRIDE.
         Pour booster ton look et tes entraînements, tes marques favorites présentent un large choix de vêtements.
         Ellesse, FILA, Champion, adidas, Nike, PUMA ou encore Fred Perry ne cessent d’innover.</p>
      <a class="arrow" href="">découvrir la collection</a>
    </div>
    <div class="tendance-img">
      <img src="images/tendance1.jpg">
    </div>
    <a href="">+</a>
  </article>

  <article class="tendance-item tendance-reverse">
    <div class="tendance-txt">
      <h3>Are you fair ?</h3>
      <p>Vous cherchez à vous faire du bien sans abîmer la planète ?
         Bonne nouvelle ! Il existe aujourd’hui de nombreuses marques de sport éco-responsables qui ont choisi de produire des vêtements de manière éthique pour votre pratique de sport.
         Que vous soyez un sportif confirmé ou un grand débutant vous trouverez dans notre sélection de marques de sport éthiques.</p>
      <a class="arrow" href="">découvrir la collection</a>
    </div>
    <div class="tendance-img">
      <img src="images/tendance2.jpg">
    </div>
    <a href="">+</a>
  </article>
</section>

<section class="products container">
  <h2>Nouveaux arrivages</h2>
  <div class="products-list">
    <a href="" class="product">
      <img src="images/p1.jpg">
      <span class="product-brand">Salomon</span>
      <span class="product-title">Pack Ski Rando Mtn Explore 95</span>
      <span class="product-price">595.00 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p2.jpg">
      <span class="product-brand">Rossignol</span>
      <span class="product-title">Blouson Ski Rossignol</span>
      <span class="product-price">99.90 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p3.jpg">
      <span class="product-brand">diezz</span>
      <span class="product-title">Casque visière Diezz Glide Ventury Black Prune</span>
      <span class="product-price">94.95 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p4.jpg">
      <span class="product-brand">Nitro</span>
      <span class="product-title">Boots Nitro El Mejor</span>
      <span class="product-price">389.90 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p5.jpg">
      <span class="product-brand">Nitro</span>
      <span class="product-title">Planche Snowboard Nitro Cheap Thrills </span>
      <span class="product-price">279.90 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p6.jpg">
      <span class="product-brand">WINTER YOUR LIFE</span>
      <span class="product-title">Masque de Ski Winter Your Life Meije Black</span>
      <span class="product-price">49.90 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p7.jpg">
      <span class="product-brand">Rossignol</span>
      <span class="product-title">Housse Ski Rossignol Tactic Sk Bg Extra Short</span>
      <span class="product-price">49.90 &euro;</span>
    </a>
    <a href="" class="product">
      <img src="images/p8.jpg">
      <span class="product-brand">oakley</span>
      <span class="product-title">Gant Oakley Factory Park Poseidon</span>
      <span class="product-price">23.94 &euro;</span>
    </a>
  </div>
  <a href="">Voir tous les produits</a>
</section>

<section class="adventure">
  <div class="adventure-info">
    <h2>Cumulez des avantages</h2>
    <p>Vos points fidélités vous permettent d'obtenir de nombreux avantages : réductions, offres spéciales, frais de port gratuits, cadeaux et plus encore</p>
    <a class="arrow" href="">Rejoignez le club</a>
  </div>
</section>


<section class="newsletter">
    <h2>Gardez le contact</h2>
    <p>Inscrivez vous à notre newsletter pour  connaître nos dernières actualités,  offres spéciales, etc.</p>
    <form action="">
      <input type="email" value="" placeholder="Votre adresse email...">
      <input type="submit" value="s'abonner">
    </form>
</section>  

<footer>
  <span>
    <strong class="logo">snowride</strong> est une marque déposée de MMI Création. &copy; 2024.
  </span>
</footer>

</div>

<style>
    /* GENERAL */
    .container{
      max-width: 1100px;
      margin: 0 auto;
    
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 62.5%;
    }
    
    
    .arrow::after {
      content: "\ebe6";
      font-family: boxicons!important;
      font-weight: 400;
      font-size: 1.6rem;
      vertical-align: middle;
    }
    img{
      max-width: 100%;
    }
    
    header{
      background-image: url("images/bg-header.jpg");
      background-size: cover;
      height: 600px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
      color: white;
    
    }
    .logo {
        font-family: obitron;
        font-size: medium;
        font-style: italic;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
    }
    
    .menu.container {
      display: flex; 
      justify-content: space-evenly; 
      align-items: center;
      border: 1px;
      border-bottom: solid ;
      border-bottom-color: rgba(255,255,255,0.2) ;
      padding: 0.5rem;
    
    
     }
    .menu .logo{
      color: white;
    }
    
    
    
    .products-menu a{
      text-decoration: none;
      color: white;
      font-size: medium;
      word-spacing: 2rem;
      padding-left:0.5rem ;
    
    }
    
    
    
    .user-menu a{
      text-decoration: none;
      color: white;
      word-break: break-all;
      font-size: medium;
    }
    
    
    .banner.container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: stretch;
    }
    
    
    .banner-intro {
        display: flex;
        flex-direction: column;
        color: white;
        font-size: large;
        padding: 2rem;
        padding-top: 8rem;
    }
    
    .banner h2{
      font-size: 70px;
    font-style: italic;
        font-weight: bold;
    }
    
    .banner span{
        font-size: 20px;
        font-style: italic;
    }
    
    
    .banner a{
    text-decoration: none;
    color: white;
    font-size: 35px;
    font-weight: bold;
    }
    
    .banner img {
      position: absolute;
      top: 40%;
      left: 70%;
      transform: translate(-40%, -50%);
      max-width: 100%;
      height: auto;
    }
    
    /*************************************************************************************************************************************/
    
    .tendance.container{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    
      align-content: stretch;
      padding-top: 1rem;
    }
    
    
    .tendance-item {
      display: flex;
      align-items: center;
      position: relative;
    }
    
    .tendance-txt {
      display: flex;
      flex-direction: column;
      padding:0 50px;
       width: 50%;
    }
    
    
    .tendance-txt  a{
      text-decoration: none;
      color: rgb(0,150,255);
    }
    
    .tendance-item >a{
      color: white;
      text-decoration: none;
      background-color: blue;
      position: absolute;
       bottom: 0px;
        left: 0px;
        right: 0px;
        width: 30px;
        margin: 0 auto;
        padding: 0.7rem;
        z-index: 1;
    
      
    }
    
    @media( max-width:800px){
      .tendance-item{
        background-color: blue;
      }
    }
    
    
    .tendance-img {
      position: relative;
      width:50% ;
      padding-right: 1rem;
    }
    
    
    .tendance-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    
    
    
    
    .tendance-item.tendance-reverse {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
    
    
    
    
    
    /***********************************************************************************************************************/
    
    
    .products-list {
      display: flex;
      flex-wrap: wrap;
    }
    
    
    
    .product img{
    
      height: 300px;
      object-fit: contain;
    }
    
    .product{
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 25%;
      padding-bottom:1rem;
    }
    
    .products-list a{
      text-decoration: none;
    }
    
    
    .products.container{
      text-align: center;
      padding: 2rem;
    }
    
    
    .products > a{
      background-color: rgb(0,150,255);
      color: white;
      padding: 0.4rem;
      text-decoration: none;
      border: 0.2rem;
      border-block: 10 ;
    }
    
    
    
    
    
    .product-brand{
      color:darkgrey;
    }
    
    .product-price{
      color: rgb(0,150,255);
    }
    
    /************************************************************************************************************************************/
    
    
    .adventure{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: stretch;
      text-align: center;
      background-image:    linear-gradient(rgba(0,78, 255, 0.4),rgba(0,78, 255, 0.4)), url('images/bg-advantage.jpg');
      background-size: cover;
      height: 310px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    
    .adventure-info{
      color: white;
    }
    
    .adventure a{
      text-decoration: none;
      color: white;
    }
    
    
    /*******************************************************************************************************************************************/
    
    .newsletter{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: stretch;
      text-align: center;
      border: 1px;
      border-bottom: solid ;
      border-bottom-color: grey ;
      padding: 1rem;
    }
    
    .newsletter input[type="submit"]{
      background-color: rgb(0,150,255);
      border: none;
      padding: 0.4rem;
      color: white;
    }
    
    /*******************************************************************************************************/
    footer  {
        height: 2em ;
        text-align: center;
        padding: 1rem;
        color: grey;
    }
    
    
    
    .logo >span{
      color: grey;
    }


</style>
