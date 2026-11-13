<script>
import AppIconsSocial from "./AppIconsSocial.vue";

export default {
  components: {
    AppIconsSocial,
  },
  data() {
    return {
      menu: [
        {
          title: "Recipes",
          routeName: "recipes",
        },
        {
          title: "Places",
          routeName: "places",
        },
        {
          title: "Blog",
          routeName: "blog",
        },
        {
          title: "About",
          routeName: "about",
        },
        {
          title: "Contact",
          routeName: "contacts",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="full-width text-black ms_footer">
    <!-- Spazio immagini -->

    <div class="d-flex flex-wrap mb-5">
      <div class="col-12 col-md-3 ms_image">
        <img
          src="../assets/img/banana.jpg"
          alt=""
          class="img-fluid"
          width="800"
          height="527"
          loading="lazy"
          decoding="async"
        />
        <div class="ms_content">
          <p>Fruit Platter with Banana, Mango, Berries and Orange</p>
        </div>
      </div>
      <div class="col-12 col-md-3 ms_image">
        <img
          src="../assets/img/egg-fruit.jpg"
          alt=""
          class="img-fluid"
          width="800"
          height="527"
          loading="lazy"
          decoding="async"
        />
        <div class="ms_content">
          <p>Breakfast Delight With Strawberry, Egg and Fruit</p>
        </div>
      </div>
      <div class="col-12 col-md-3 ms_image">
        <img
          src="../assets/img/ice-cream.jpg"
          alt=""
          class="img-fluid"
          width="800"
          height="527"
          loading="lazy"
          decoding="async"
        />
        <div class="ms_content">
          <p>Ice Cream Heaven with vanilla Chocolate and Pistacchio</p>
        </div>
      </div>
      <div class="col-12 col-md-3 ms_image">
        <img
          src="../assets/img/summer-drink.jpg"
          alt=""
          class="img-fluid"
          width="800"
          height="527"
          loading="lazy"
          decoding="async"
        />
        <div class="ms_content">
          <p>Video Recipe: How to Make a Cool Summer Drink</p>
        </div>
      </div>
    </div>

    <!-- /Spazio immagini -->

    <!-- FOOTER DOWN -->

    <!-- Section 1 -->
    <!-- mx-0: la riga non sta in un container, senza i margini negativi la pagina non scorre di lato -->
    <div class="row mx-0 justify-content-around text-center text-md-start">
      <div class="col-md-3 text-center">
        <div class="mb-4">
          <img
            src="../assets/img/footer-logo-mobile.png"
            alt="logo avada food"
            class="img-fluid ms_logo"
            width="284"
            height="124"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Icone Social -->
        <AppIconsSocial />
        <!-- /Icone Social -->
      </div>
      <!-- /Section 1 -->

      <!-- Section 2 -->
      <div class="col-md-3 nav-icons">
        <ul class="list-unstyled">
          <li v-for="item in menu" :key="item" class="mb-3">
            <router-link :to="{ name: item.routeName }" class="ms_router-link">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /Section 2 -->

      <!-- Section 3 -->
      <div class="col-md-3 ms_contact">
        <!-- h2 con la dimensione di un h6: nell'ordine dei titoli non si salta da h1/h2 a h6 -->
        <h2 class="h6 text-uppercase mb-4 font-weight-bold ms_text-orange">
          Contact US
        </h2>

        <!-- gli <hr> stanno dentro i <li>: in una <ul> sono permessi solo <li> -->
        <ul class="list-unstyled">
          <li>
            <div class="d-flex flex-row gap-3">
              <div>
                <i class="fa-solid fa-location-dot ms_text-orange" aria-hidden="true"></i>
              </div>
              <div>12345 Avada Main Street, New York, NY 555555</div>
            </div>
            <hr />
          </li>

          <li>
            <div class="d-flex flex-row gap-3">
              <div><i class="fa-solid fa-phone-flip ms_text-orange" aria-hidden="true"></i></div>
              <div>+ 0100-505-0000</div>
            </div>
            <hr />
          </li>

          <li>
            <div class="d-flex flex-row gap-3">
              <div>
                <i class="fa-solid fa-envelope ms_text-orange" aria-hidden="true"></i>
              </div>
              <div>info@avada-domain.com</div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <!-- /Section 3 -->

      <!-- Section 4  -->
      <div class="col-md-3">
        <h2 class="h6 text-uppercase mb-4 font-weight-bold ms_text-orange">
          GET OUR APP
        </h2>
        <div class="d-flex flex-column gap-3">
          <!-- GooglePlay -->
          <a href="#">
            <img
              src="../assets/img/download-android.png"
              alt="GooglePlay"
              class="ms_logo"
              width="280"
              height="92"
              loading="lazy"
              decoding="async"
          /></a>
          <!-- AppStore -->
          <a href="#">
            <img
              src="../assets/img/download-app-store.png"
              alt="AppStore"
              class="ms_logo"
              width="280"
              height="92"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
      <!-- /Section 4 -->
    </div>
    <!-- /Footer Down -->
  </div>

  <!-- Copyright -->
  <div class="text-center py-4 bg_lightgrey ms_copy">
    © Copyright 2012 - 2019 |
    <a href="#">Avada Website Builder</a>
    by
    <a href="#">ThemeFusion</a>
    | All Rights Reserved | Powered by
    <a href="#">WordPress</a>
  </div>
  <!-- /Copyright -->
</template>

<style lang="scss" scoped>
.full-width {
  width: 100%;
  box-sizing: border-box;
}

.ms_copy {
  font-size: 0.75em;

  a {
    // i link dentro il testo si distinguono con la sottolineatura, non solo dal colore
    text-decoration: underline;
    color: black;
  }
}

.ms_footer {
  background-color: #fff;
  // la barretta arancione dei link (nascosta, ma conta) sporgeva di qualche pixel e la pagina scorreva di lato
  overflow-x: clip;
}

// /Immagini TOP FOOTER

.ms_router-link {
  text-decoration: none;
  color: inherit;
}

.ms_contact {
  color: #67615a;
}

.ms_logo {
  width: 200px;
  max-width: 100%; // a 768px la colonna è più stretta di 200px
  height: auto;
}

// Colori
.ms_text-orange {
  color: #fc7523;
}
// i titoli arancio sono testo: il #fc7523 su bianco dava 2,7:1, l'arancio scuro 4,6:1 (le icone restano chiare)
h2.ms_text-orange {
  color: #c8500a;
}

.bg_lightgrey {
  background-color: #f5f5f0;
}

// Hover IMG
.ms_image {
  position: relative;

  img {
    width: 100%;
    display: block;
    margin: auto;
  }
}

.ms_content {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(250, 146, 0, 0.485);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  // Da aggiungere
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.6s; 


  //Font Style
  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
  }
}

.ms_content:hover {
  opacity: 1;
  // da aggiugnere
  transition: 1s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

// HOVER MENU

.nav-icons ul {
  padding-left: 0;
}

.nav-icons ul li {
  list-style: none;
  margin-right: 20px;
  /* Spazio tra gli elementi */
}

.nav-icons router-link {
  height: 100vh;
  width: 70vw;
  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
}

.nav-icons a {
  position: relative;
  text-decoration: none;
  font-family: sans-serif;
  color: black;
  font-size: 18px;
  letter-spacing: 0.5px;
  padding: 0 10px;
}

.nav-icons a:after {
  content: "";
  position: absolute;
  background-color: orange;
  height: 100%;
  width: 3px;
  right: 50%;
  top: 0;
  transform: translateX(50%);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
}

.nav-icons a:hover {
  color: #c8500a; // l'«orange» su bianco dava 2:1
}

.nav-icons a:hover:after {
  transform: translateX(200px);
  opacity: 1;
  visibility: visible;
}

// Classe Active

.nav-icons .router-link-active {
  color: #c8500a; // l'«orange» su bianco dava 2:1
  height: 100%;
}

.nav-icons .router-link-active:after {
  height: 100%;
  transform: translateX(200px);
  opacity: 1;
  visibility: visible;
}
</style>
