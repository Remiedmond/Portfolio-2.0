<script>
  import { onMount } from "svelte";
  import Papple from '../../img/brands/apple.png';
  import Pbose from '../../img/brands/bose.png';
  import Pbeat from '../../img/brands/beat.png';
  import Psony from '../../img/brands/sony.png';
  import Psamsung from '../../img/brands/samsung.png';
  import Pcasquerouge from '../../img/casqueRouge.png';
  import Pearphone from '../../img/earphone.png';
  import Pheadphone from '../../img/headphoneRed.png';
  import Plaptop from '../../img/laptop.png';
  import Pvr from '../../img/vr.png';
  import Pwatch from '../../img/watch.png';
  import Pwatchgreeen from '../../img/watchGreen.png';
  import Palexa from '../../img/alexa.png';
  import Pps5 from '../../img/ps5.png';
  import Ptablette from '../../img/products/p1.png';
  import Pwebcam from '../../img/products/p2.png';
  import Pcasquenoir from '../../img/products/p3.png';
  import Pairpods from '../../img/products/p4.png';
  import Pcasquegaming  from '../../img/products/p5.png';
  import Pmixage from '../../img/products/p6.png';
  import Pecouteurfilaire from '../../img/products/p7.png';
  import Penceintevieille from '../../img/products/p8.png';
  import Pnews1 from '../../img/news/news1.jpeg';
  import Pnews2 from '../../img/news/news2.jpeg';  
  import Pnews3 from '../../img/news/news3.webp';

  




  onMount(() => {
    // Ajout d'interactivité pour le menu mobile si nécessaire
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav');
    if (burger) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
      });
    }
  });
</script>

<svelte:head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>

<div class="container">
  <nav>
    <div class="PHLOXxpages">
      <p class="PHLOX"><strong>PHLOX</strong></p>
      <div class="pages">
        <a href="#">accueil</a>
        <a href="#">shop</a>
        <a href="#">nos magasins</a>
        <a href="#">blog</a>
        <a href="#">nous contacter</a>
      </div>
    </div>
    <div class="compte">
      <a href="#">login</a>
      <i class='bx bx-search-alt-2'></i>
      <i class='bx bxs-basket'></i>
    </div>
  </nav>

  <main>
    <section class="section1">
      <p class="beats">Beats Solo</p>
      <h1>Wireless</h1>
      <h2 class="HEADPHONE"><strong>HEADPHONE</strong></h2>
      <button>Shop by categorie</button>
      <p class="droite"><strong>Description</strong> Beats Solo Wireless on-ear headphones immerse you in rich, award-winning sound everywhere you want to go</p>
      <img src={Pcasquerouge} alt="Casque rouge Beats">
    </section>

    <section class="section2">
      <div id="sec2">
        <div class="card" id="headphone">
          <div>
            <h3>Enjoy</h3>
            <h2>With</h2>
            <h1>EARPHONE</h1>
            <button class="boutonrouge">Browse</button>
          </div>
          <div>
            <img src={Pearphone} alt="Écouteurs">
          </div>
        </div>
        <div class="card" id="montre">
          <h3>New</h3>
          <h2>Wearal</h2>
          <h1>GADGET</h1>
          <button>Browse</button>
          <img src={Pwatch} alt="Montre ">
        </div>
        <div class="card" id="laptop">
          <h3>Trend</h3>
          <h2>Devices</h2>
          <h1>LAPTOP</h1>
          <button>Browse</button>
          <img src={Plaptop} alt="Ordinateur portable">
        </div>
        <div class="card" id="console">
          <h3>Best</h3>
          <h2>Gaming</h2>
          <h1>Console</h1>
          <button class="boutonrouge">Browse</button>
          <img src={Pps5} alt="Console PS5">
        </div>
        <div class="card" id="vr">
          <h3>Play</h3>
          <h2>Game</h2>
          <h1>OCULUS</h1>
          <button>Browse</button>
          <img src={Pvr} alt="Casque VR">
        </div>
        <div class="card" id="enceinte">
          <h3>New</h3>
          <h2>Amazon</h2>
          <h1>SPEAKER</h1>
          <button>Browse</button>
          <img src={Palexa} alt="Enceinte Alexa">
        </div>
      </div>
    </section>

    <section class="section3">
      <div class="picto-card">
        <i class='bx bx-package'></i>
        <span>
          <h1>Free Shipping</h1>
          <p>Free Shipping On All Order</p>
        </span>
      </div>
      <div class="picto-card">
        <i class='bx bx-money-withdraw'></i>
        <span>
          <h1>Money Guarantee</h1>
          <p>30 Day Money Back</p>
        </span>
      </div>
      <div class="picto-card">
        <i class='bx bxs-message-rounded'></i>
        <span>
          <h1>Online Support 24/7</h1>
          <p>Technical Support 24/7</p>
        </span>
      </div>
      <div class="picto-card">
        <i class='bx bxs-credit-card'></i>
        <span>
          <h1>Secure Payment</h1>
          <p>All Cards Accepted</p>
        </span>
      </div>
    </section>

    <section class="section4">
      <div class="gauche">
        <p>20% OFF</p>
        <h1>FINE SMILE</h1>
        <p>15 Nov to 7 Dec</p>
      </div>
      <div class="droit">
        <p class="beatsolo">Beats solo air</p>
        <h1>Summer Sale</h1>
        <p>Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.</p>
        <button>Shop</button>
      </div>
      <img src={Pheadphone} alt="Casque rouge">
    </section>

    <section class="section5">
      <div class="titrer">
        <h1 class="Bestseller">Best Seller Products</h1>
        <p>Top selling items in 2021</p>
      </div>

      <div class="imagereduc">
        <a href="#" class="product-link">
          <div class="sony">
            <div class="memefond">
              <img src={Ptablette} alt="Sony Xperia Z">
            </div>
            <p>Sony Xperia Z</p>
            <p class="pprix">995 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="logitech1">
            <div class="memefond">
              <img src={Pwebcam} alt="Logitech C920s">
            </div>
            <p>Logitech C920s HD Pro</p>
            <p class="pprix">125.99 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="Bose1">
            <div class="memefond">
              <img src={Pcasquenoir} alt="Bose SoundLink">
              <p class="cinqpourcent">-5% Off</p>
            </div>
            <p>Bose SoundLink II</p>
            <p class="pprix"><strike>199€</strike> 159 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="Bose2">
            <div class="memefond">
              <img src={Pairpods} alt="Bose QuietControl">
            </div>
            <p>Bose QuietControl 30</p>
            <p class="pprix">29,99 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="logitech2">
            <div class="memefond">
              <img src={Pcasquegaming} alt="Logitech G432">
            </div>
            <p>Logitech G432 Casque Camer Filaire</p>
            <p class="pprix">39,99 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="Focusrite">
            <div class="memefond">
              <img src={Pmixage} alt="Focusrite Scarlett">
            </div>
            <p>Focusrite Scarlett Solo</p>
            <p class="pprix">105 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="Powerbeats">
            <div class="memefond">
              <img src={Pecouteurfilaire} alt="Powerbeats Pro">
            </div>
            <p>Powerbeats Pro sans Fil</p>
            <p class="pprix">179,99 €</p>
          </div>
        </a>
        <a href="#" class="product-link">
          <div class="logitech3">
            <div class="memefond">
              <img src={Penceintevieille} alt="Logitech Z207">
            </div>
            <p>Logitech Z207 Système de Hauts-Parleurs</p>
            <p class="pprix">39,98 €</p>
          </div>
        </a>
      </div>
    </section>

    <section class="section6">
      <div class="gauche">
        <p>20% OFF</p>
        <h1>HAPPY HOURS</h1>
        <p>15 Nov to 7 Dec</p>
      </div>
      <div class="droit">
        <p class="beatsolo">Beats solo air</p>
        <h1>Summer Sale</h1>
        <p>Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.</p>
        <button>Shop</button>
      </div>
      <img src={Pwatchgreeen } alt="Montre verte">
    </section>

    <section class="section7">
      <div class="titrer">
        <h1 class="Bestseller">Recent News</h1>
        <p>View the latest technology news and products</p>
      </div>

      <div class="imagereduc">
        <a href="#" class="news-link">
          <div class="usbc">
            <div>
              <img src={Pnews1} alt="News USB-C">
            </div>
            <p class="petit">October 01, 2021</p>
            <h2>New USB-C Type 2.1 standard offers up to 240 W power delivery</h2>
            <p class="remonte">240 W power delivery over USB-C lets high-powered laptops lose the barrel jack...</p>
          </div>
        </a>
        <a href="#" class="news-link">
          <div class="micro2">
            <div>
              <img src={Pnews2} alt="News microphone">
            </div>
            <p class="petit">September 28, 2021</p>
            <h2>Ara: new USB mic from AKG</h2>
            <p class="remonte">AKG have released a nifty new USB microphone, called the Ara. A self-contained recording solution, the...</p>
          </div>
        </a>
        <a href="#" class="news-link">
          <div class="casque2">
            <div>
              <img src={Pnews3} alt="News casque">
            </div>
            <p class="petit">July 10, 2021</p>
            <h2>Five reasons you should check out OneOdio's A70 wireless headphones</h2>
            <p class="remonte">A good pair of headphones is an absolute must-have in the modern world, and wireless pairs, in particular, are...</p>
          </div>
        </a>
      </div>
    </section>
  </main>
</div>

<div class="footer">
  <div class="brands">
    <img src={Psony} alt="Sony">
    <img src={Pbeat} alt="Beats">
    <img src={Papple} alt="Apple">
    <img src={Psamsung} alt="Samsung">
    <img src={Pbose} alt="Bose">
  </div>
</div>

<footer>
  <div class="footer-section">
    <h3 class="PHLOX">PHLOX</h3>
    <p>PHLOX is a brand of the mmiLens Company. Many thanks to those companies for the credits and photos.</p>
    <div class="social-icons">
      <a href="#"><i class='bx bxl-facebook' alt="Facebook"></i></a>
      <a href="#"><i class='bx bxl-instagram' alt="Instagram"></i></a>
      <a href="#"><i class='bx bxl-linkedin' alt="LinkedIn"></i></a>
      <a href="#"><i class='bx bxl-twitter' alt="Twitter"></i></a>
    </div>
  </div>
  <div class="footer-section">
    <h3 class="footer-title">Quick Links</h3>
    <ul class="footer-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div class="footer-section">
    <h3 class="footer-title">Contact</h3>
    <p>Rue Olivier de Serres, BP 64505<br>
      Grandchamp des Fontaines<br>
      44245 La Chapelle sur Erdre Cedex
    </p>
  </div>
  <div class="footer-section">
    <h3 class="footer-title">Subscribe to our email</h3>
    <p><strong>For Latest News & Updates</strong></p>
    <form class="subscribe-form">
      <input type="email" placeholder="Enter your email">
      
    </form>
  </div>
</footer>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  align-items: center;
  margin-top: 2rem;
}

.PHLOXxpages {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.PHLOX {
  color: red;
  font-family: "Spartan", sans-serif;
  gap: 1.5rem;
  letter-spacing: 1rem;
}

.pages {
  margin-left: 2.4rem;
}

.pages a {
  padding-right: 0.7rem;
  text-decoration: none;
  color: grey;
}

.compte {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.compte a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: grey;
  gap: 0.5rem;
}

.compte .bx {
  display: flex;
  align-items: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Section 1 */
.section1 {
  background-image: linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%);
  width: 100%;
  height: auto;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: baseline;
  align-content: center;
}

.section1 h2 {
  color: white;
  font-size: clamp(2rem, 12vw, 8.5rem);
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  margin-left: 2rem;
}

.section1 h1 {
  color: black;
  font-size: clamp(1.5rem, 4vw, 5rem);
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  margin-left: 2rem;
  margin-bottom: -4rem;
}

.beats {
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  margin-left: 2rem;
  margin-top: 5rem;
  margin-bottom: -1rem;
  font-size: clamp(1rem, 2vw, 1.25rem);
}

.section1 button {
  background-color: red;
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  color: white;
  margin-top: -5rem;
  margin-left: 2rem;
  cursor: pointer;
}

.droite {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-self: flex-end;
  text-align: right;
  align-content: flex-end;
  margin-left: auto;
  width: 30%;
  margin-right: 4rem;
  margin-top: -2rem;
}

.section1 img {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%) rotate(20deg);
  max-width: 200px;
  width: 100%;
  right: 0;
}

.section1 img:hover {
  position: absolute;
  top: 45%;
  left: 60%;
  transform: translate(-50%, -50%) rotate(20deg);
  max-width: 200px;
  width: 100%;
  right: 0;
  filter: grayscale(100%);
}

/* Section 2 */
.card button {
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  outline: none;
  padding-left: 2rem;
  padding-right: 2rem;
  z-index: 200;
  cursor: pointer;
}

.section2 img {
  position: absolute;
  max-width: 150px;
  width: 100%;
  right: 0;
}

#sec2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "ecouteur montre laptop laptop "
                      "console console vr enceinte ";
  gap: 1rem;
  justify-content: center;
  margin: 20px auto;
  align-items: center;
  align-content: center;
  width: 100%;
}

#sec2 .card {
  padding: 30px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  align-content: center;
  grid-area: ecouteur;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
}

.card h1, .card h2 {
  margin-top: -0.5rem;
}

#sec2 #headphone {
  color: white;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  display: flex;
  flex-direction: column;
  grid-area: ecouteur;
}

#headphone img {
  position: absolute;
  top: 60%;
  left: 80%;
  transform: translate(-50%, -50%);
  max-width: 170px;
  width: 100%;
  right: 0;
}

.boutonrouge {
  color: white;
  background-color: red;
  outline: none;
  z-index: 201;
}

#sec2 #montre {
  color: white;
  background-image: linear-gradient(315deg, #ffdd00 0%, #fbb034 74%);
  display: flex;
  flex-direction: column;
  grid-area: montre;
}

#montre img {
  position: absolute;
  top: 35%;
  left: 60%;
  transform: translate(-50%, -50%);
  max-width: 150px;
}

#sec2 #laptop {
  color: white;
  background-image: linear-gradient(147deg, #db3445 0%, #f71735 74%);
  display: flex;
  flex-direction: column;
  grid-area: laptop;
}

#laptop img {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  max-width: 350px;
}

#sec2 #console {
  color: white;
  background-image: linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%);
  display: flex;
  flex-direction: column;
  grid-area: console;
}

#console img {
  position: absolute;
  top: 10%;
  left: 50%;
  max-width: 250px;
}

#sec2 #vr {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
  grid-area: vr;
}

#vr img {
  position: absolute;
  max-width: 250px;
  bottom: 0;
  right: 0;
  left: 20%;
}

#sec2 #enceinte {
  color: white;
  background-image: linear-gradient(315deg, #09c6f9 0%, #045de9 74%);
  display: flex;
  flex-direction: column;
  grid-area: enceinte;
}

#enceinte img {
  position: absolute;
  max-width: 100px;
  bottom: 5%;
  right: 15%;
  transform: rotate(20deg);
}

/* Section 3 */
.section3 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  margin: 2rem 0;
}

.section3 h1 {
  font-size: medium;
}

.section3 p {
  font-size: small;
  margin-top: -0.5rem;
}

.section3 .bx {
  color: red;
  font-size: 50px;
  margin-right: 1rem;
}

.section3 .picto-card {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-start;
}

/* Section 4 */
.section4 {
  background-image: linear-gradient(147deg, #db3445 0%, #f71735 74%);
  color: white;
  width: 100%;
  height: auto;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  margin-top: 5rem;
}

.section4 button {
  background-color: white;
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  color: red;
  cursor: pointer;
}

.gauche {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: left;
  text-align: left;
  margin-left: 4rem;
  width: 30%;
}

.gauche h1 {
  font-size: clamp(1.5rem, 4vw, 7rem);
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  margin-top: -0.8rem;
  margin-bottom: -0.7rem;
}

.droit {
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
  width: 25%;
  margin-bottom: 2rem;
}

.droit .beatsolo {
  margin-top: 2rem;
}

.droit h1 {
  font-size: clamp(1.5rem, 4vw, 2.7rem);
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
}

.section4 img {
  position: absolute;
  top: -20%;
  left: 15%;
  max-width: 400px;
  width: 100%;
  right: 50%;
  height: 100%;
}

/* Section 5 */
.section5 {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.section5 .titrer {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.section5 .titrer p {
  color: #60575767;
  margin-top: -1rem;
  font-size: large;
}

.section5 .imagereduc {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "sony logitech1 Bose1 Bose2 "
                      "logitech2 Focusrite Powerbeats logitech3 ";
  gap: 1rem;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.section5 .imagereduc img {
  max-width: 200px;
  min-width: 200px;
  object-fit: contain;
  width: 100%;
}

.section5 .imagereduc .Bose1 .cinqpourcent {
  position: absolute;
  top: 15px;
  left: 0;
  background: #e63946;
  color: white;
  padding: 5px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 0.9rem;
}

.section5 .imagereduc p {
  color: #60575767;
}

.section5 .imagereduc .pprix {
  margin-top: -0.5rem;
}

.section5 .imagereduc .sony {
  grid-area: sony;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section5 .imagereduc .logitech1 {
  grid-area: logitech1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section5 .imagereduc .Bose1 {
  grid-area: Bose1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  position: relative;
}

.section5 .imagereduc .Bose2 {
  grid-area: Bose2;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section5 .imagereduc .logitech2 {
  grid-area: logitech2;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section5 .imagereduc .Focusrite {
  grid-area: Focusrite;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section5 .imagereduc .Powerbeats {
  grid-area: Powerbeats;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section5 .imagereduc .logitech3 {
  grid-area: logitech3;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.memefond{
  background-image:  linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
  padding-left: 2rem;
  padding-right: 2rem;
  max-width:  400px;
  max-height: 300px;
  min-height: 200px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
	align-items: center;
	align-content: center;
}





/*********************************************************************** Section 6 *********************************************/

.section6{
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%); /* le vert */
  color: white;
  width: 100%;
  height: auto;
  border-radius: 2rem;
  position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;

    margin-top: 5rem;
}





.section6 button{
  background-color: white;
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  color: #0bab64;
 
}



.gauche{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: left;
  text-align: left;
  margin-left: 6rem;
  width: 30%;
 
}

.gauche h1 {
  font-size: clamp(1.5rem, 4vw, 7rem); /* S'adapte entre 1.5rem et 5rem */
  font-weight: bold;
  font-family: "spartan";
  margin-top: -0.8rem;
  margin-bottom: -0.7rem;
  

  
}

.droit{
	display: flex;
	flex-direction: column;
  margin-right: 4rem;
  width: 25%; 
  margin-bottom: 2rem;
}

.droit .beatsolo{
  margin-top: 2rem;
}

.droit h1 {
  font-size: clamp(1.5rem, 4vw, 2.7rem); /* S'adapte entre 1.5rem et 5rem */
  font-weight: bold;
  font-family: "spartan";
  margin-top: -0.5rem; 
  margin-bottom: -0.5rem; 
}

.section6 img {
  position: absolute;
  top: -20%;
  left: 35%;
  max-width: 400px;
  right: 50%;
height:100%;

}



/****************************************************************section 7 ****************************************/


.section7{
  margin-top: 2rem;
  margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.section7 .titrer{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.section7 .titrer p{
  color: #60575767 ;
  margin-top: -1rem;
  font-size: large;
 
}

.section7 .imagereduc{
	display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-areas: "usbc micro2 casque2 ";
  gap: 1rem;
	justify-content: center;
	align-items: center;
	align-content: center;
  margin-bottom: 1rem;
  width: 100%;
}

.section7 .imagereduc .usbc{ 
  grid-area: usbc;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section7 .imagereduc .micro2{ 
  grid-area: micro2;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}
.section7 .imagereduc .casque2{ 
  grid-area: casque2;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
}

.section7 .imagereduc img{
  max-height: 200px;
  min-height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 2rem;

}


.section7 h2{
  font-size: medium;
}


.section7  .imagereduc p{
  color: #60575767 ;
}


.section7  .imagereduc h2{
  color: #060202 ;
  margin-top: -0.2rem;
}


.section7  .imagereduc .remonte{
  margin-top: -0.2rem;
}


.section7  .imagereduc .petit{
  font-size: small;
}


/************************************************************footer************************************************/
.footer{
  background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%); /* le gris pour les marques */
  margin-top: 2rem;
}

.brands{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: flex-end;
  width: 100%;
  gap: 3rem;
  
}
.brands img {
  width: 100%;
  max-width: 200px;
  object-fit: cover;
  margin-top: 2rem;
  margin-bottom: 2rem;
  filter: grayscale(100%); 
  transition: filter 0.3s ease; 
}

.brands img:hover {
  filter: none; 
}

/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

footer {
  display: grid;
  grid-template-rows:  1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-gap:0.2rem;
  grid-template-columns:  repeat(4,1fr);
  background-color: #fff;
  padding: 2rem;
  color: #333;
}


.footer-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
}



.social-icons a {
  margin-right: 0.5rem;
  color: #333;
  font-size: x-large;
}



.footer-links {
  list-style: none;
  padding: 0.2rem;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #e74c3c;
}

.subscribe-form {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border-radius: 10rem;
}

.subscribe-form input {
  flex: 1;
  padding: 1rem;
  padding-right: 4rem;
  border: 1px solid #7b7b7b;
  border-radius: 5rem;
  outline: none;
  position: relative;
}

.subscribe-form button {
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius:5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  right: 3rem;
}

.subscribe-form button:hover {
  background-color: #c0392b;
}




/* Pour les grands écrans (à partir de 1200px) */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
  .section1 h2, .section1 h1 {
    font-size: clamp(2.5rem, 6vw, 9rem);
  }
}

/* Pour les écrans moyens (tablettes et petits laptops, entre 768px et 1199px) */
@media (max-width: 1199px) and (min-width: 768px) {
  nav {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }
  .PHLOXxpages {
    flex-wrap: wrap;
    gap: 1rem;
  }
  .section1 img {
    max-width: 150px;
  }
  #sec2 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "ecouteur montre"
      "laptop laptop"
      "console vr";
  }
  .section5 .imagereduc {
    grid-template-columns: repeat(3, 1fr);
  }
  .section7 .imagereduc {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Pour les petits écrans (mobiles, jusqu'à 767px) */
@media (max-width: 767px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
  .PHLOXxpages {
    flex-direction: column;
    gap: 1rem;
  }
  .section1 {
    align-items: center;
    text-align: center;
  }
  .section1 h2, .section1 h1 {
    margin-left: 0;
    font-size: clamp(1.5rem, 4vw, 5rem);
  }
  .section1 img {
    position: static;
    transform: none;
    margin: 1rem auto;
    max-width: 120px;
  }
  #sec2 {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "ecouteur"
      "montre"
      "laptop"
      "console"
      "vr"
      "enceinte";
  }
  .section3 {
    flex-direction: column;
    align-items: center;
  }
  .section5 .imagereduc {
    grid-template-columns: repeat(2, 1fr);
  }
  .section7 .imagereduc {
    grid-template-columns: 1fr;
  }
  .section6 img {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
  }
  footer .brands {
    flex-direction: column;
    gap: 1rem;
  }
}


.fixed-return {
        position: fixed;
        bottom: 20px; 
        left: 90%; 
        transform: translateX(-50%); 
        background-color:#fd3030; 
        color: white; 
        padding: 18px 35px; 
        text-decoration: none; 
        border-radius: 5px; 
        font-weight: bold; 
        font-size: x-large;
    }

    .fixed-return:hover {
        background-color: #ffbaba99;  /* couleur au survol */
    }

    

/* Media Queries pour le responsive */

/* Très grands écrans */
@media (min-width: 1400px) {
  .container {
    max-width: 1400px;
  }
}

/* Grands écrans */
@media (min-width: 1200px) and (max-width: 1399px) {
  .container {
    max-width: 1200px;
  }
}

/* Écrans moyens (tablettes en mode paysage) */
@media (max-width: 1199px) and (min-width: 992px) {
  nav {
    padding: 0 2rem;
  }
  
  #sec2 {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "ecouteur montre laptop"
      "console vr enceinte";
  }
  
  .section5 .imagereduc {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

/* Tablettes */
@media (max-width: 991px) and (min-width: 768px) {
  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 2rem;
  }
  
  .PHLOXxpages {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .pages {
    margin-left: 0;
  }
  
  .section1 {
    text-align: center;
    align-items: center;
  }
  
  .section1 img {
    position: static;
    transform: none;
    margin: 2rem auto;
    display: block;
  }
  
  .droite {
    display: none;
  }
  
  #sec2 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "ecouteur montre"
      "laptop laptop"
      "console vr";
    gap: 1rem;
  }
  
  #sec2 #enceinte {
    display: none;
  }
  
  .section3 {
    flex-direction: column;
    gap: 2rem;
  }
  
  .section4, .section6 {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .gauche, .droit {
    width: 100%;
    margin: 0;
  }
  
  .section4 img, .section6 img {
    position: static;
    transform: none;
    margin: 2rem auto;
    display: block;
  }
  
  .section5 .imagereduc {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  
  .section7 .imagereduc {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
      "usbc micro2"
      "casque2 casque2";
  }
  
  footer {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Mobiles en mode paysage */
@media (max-width: 767px) and (min-width: 576px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
  
  .section1 {
    text-align: center;
    align-items: center;
    padding: 2rem 1rem;
  }
  
  .section1 img {
    position: static;
    transform: none;
    margin: 2rem auto;
    display: block;
  }
  
  .droite {
    display: none;
  }
  
  #sec2 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "ecouteur montre"
      "laptop laptop"
      "console vr";
    gap: 1rem;
  }
  
  #sec2 #enceinte {
    display: none;
  }
  
  .section5 .imagereduc {
    grid-template-columns: repeat(2, 1fr);
  }
  
  footer {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Petits mobiles */
@media (max-width: 575px) {
  .container {
    padding: 0 0.5rem;
  }
  
  nav {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0.5rem;
  }
  
  .PHLOX {
    letter-spacing: 0.5rem;
  }
  
  .pages a {
    padding-right: 0.5rem;
  }
  
  .section1 {
    text-align: center;
    align-items: center;
    padding: 1.5rem 1rem;
    border-radius: 1rem;
  }
  
  .section1 img {
    position: static;
    transform: none;
    margin: 1rem auto;
    display: block;
    max-width: 120px;
  }
  
  .droite {
    display: none;
  }
  
  #sec2 {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "ecouteur"
      "montre"
      "laptop"
      "console"
      "vr";
    gap: 1rem;
  }
  
  #sec2 #enceinte {
    display: none;
  }
  
  #sec2 .card {
    padding: 20px;
    min-height: 150px;
  }
  
  .section3 {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .section3 .picto-card {
    flex-direction: column;
    text-align: center;
    min-width: auto;
  }
  
  .section4, .section6 {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
    border-radius: 1rem;
  }
}
</style>