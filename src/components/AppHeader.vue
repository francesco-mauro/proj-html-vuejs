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
            title: "Home",
            routeName: "home",
          },
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
  <div class="ivory-background px-4"> <!-- Aggiunta classe ivory-background -->
    <header class="d-flex flex-wrap justify-content-between align-items-start pt-3 px-lg-5 full-width site-header">
      <!-- ------------------LINKS DOWNLOAD APP, ADVERTISE------------------ -->
      <div class="d-flex align-items-start w-30 ms-lg-5 header-links">
        <a href="https://1.envato.market/qjLX5" class="nav-link orange-hover">Download App <span
            class="badge ios-orange text-white">iOS</span> </a>
        <a href="https://1.envato.market/qjLX5" class="nav-link ms-3 orange-hover">Advertise with us</a>
      </div>
      <!-- ------------------LINKS DOWNLOAD APP, ADVERTISE------------------ -->

      <!-- ------------------Logo------------------ -->
      <div class="d-flex align-items-center header-logo">
        <router-link :to="{ name: 'home' }"
          class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="../assets/img/avada-food-logo.svg" alt="Avada Food, home page" width="40" height="32" class="logo">
        </router-link>
      </div>
      <!-- ------------------Logo------------------ -->

      <!-- ------------------Social media links------------------ -->
      <div class="d-flex justify-content-end align-items-start w-30 my-wrapper me-lg-5 header-social">
        <AppIconsSocial />
      </div>
      <!-- ------------------Social media links------------------ -->
    </header>

    <!-- NavICONS -->
    <nav class="d-flex gap-2 justify-content-center pt-4 nav-icons" aria-label="Main menu">
      <ul class="d-flex flex-wrap justify-content-center">
        <li v-for="item in menu" :key="item.routeName" class="mb-3">
          <router-link :to="{ name: item.routeName }" class="ms_router-link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- NavICONS -->
  </div>
</template>

<style scoped>
  /* ------------------SIZES------------------------- */

  .w-30 {
    width: 30%;
  }

  /* ------------------FULL WIDTH------------------------- */

  .full-width {
    width: 100%;
    box-sizing: border-box;
  }

  /* ------------------SIZES------------------------- */

  .logo {
    width: 200%;
    height: auto;
  }

  .nav-link {
    color: #000;
    margin-right: 10px;
  }

  .nav-link.active {
    color: #ff6600;
  }

  .ios-orange{
    /* arancio scuro: con il testo bianco il #FA7523 dava 2,75:1, questo 4,6:1 */
    background-color: #c8500a;
    color: white;
  }

  /* ------------------HOVER EFFECTS-------------------------------- */

  .orange-hover:hover {
    color: #ff6600;
  }

  /* ------------------BACKGROUND COLOR AVORIO--------------------- */

  .ivory-background {
    background-color: #f5f5f1;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ------------------BACKGROUND COLOR AVORIO--------------------- */

  /* -----------------buttons--------------------- */

  .nav-icons ul {
    padding-left: 0;
    column-gap: 20px;
  }

  .nav-icons ul li {
    list-style: none;
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
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px; 
    transition: 0.3s;
  }

  /* arancio scuro: l'«orange» su fondo avorio dava 1,8:1, questo 4,8:1 */
  .nav-icons a:hover {
    color: #b84a08;
  }

  .nav-icons a:hover:after {
    width: 100%;
  }

  /* ---------------------------  Active class with router link ------------------------ */

  .nav-icons .router-link-active {
    color: #b84a08;
  }

  .nav-icons .router-link-active:after {
    width: 100%;
  }

  /* -----------------buttons--------------------- */

  /* ------------------TABLET E TELEFONO------------------------- */
  /* Sotto i 992px le tre parti dell'intestazione vanno in colonna, il logo per primo,
     e il menu va a capo restando centrato: prima usciva dallo schermo da tutti e due i lati */

  @media (max-width: 991.98px) {
    .site-header {
      flex-direction: column;
      align-items: center !important;
      gap: 12px;
    }

    .w-30 {
      width: auto;
    }

    .header-logo {
      order: -1;
    }

    .header-links .nav-link {
      white-space: nowrap;
    }

    .nav-icons {
      padding-top: 12px !important;
    }
  }

  @media (max-width: 575.98px) {
    .nav-icons ul {
      column-gap: 4px;
    }

    .nav-icons a {
      font-size: 16px;
    }
  }

  /* ------------------TABLET E TELEFONO------------------------- */
</style>