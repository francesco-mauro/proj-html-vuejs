<script>
// Caratteri e stile condiviso delle pagine con griglia di card
import "../assets/fonts/fonts.css";
import "../style/page-cards.scss";
import singapore from "../assets/img/singapore.jpg";
import sushi from "../assets/img/sushi.jpg";
import kimchi from "../assets/img/kimchi.jpg";
import riso from "../assets/img/riso.jpg";
import eggFruit from "../assets/img/egg-fruit.jpg";
import beans from "../assets/img/beans.jpg";

export default {
  data() {
    return {
      places: [
        {
          name: "Marina Table",
          city: "Singapore",
          kind: "Modern Asian",
          text: "Dinner with a view of the bay: small plates to share and a long list of local drinks.",
          image: singapore,
          alt: "Marina Bay Sands in Singapore at dusk, seen from the water",
        },
        {
          name: "Kuro Sushi Counter",
          city: "Tokyo, Japan",
          kind: "Sushi",
          text: "Twelve seats, one chef and sushi rolls cut at the counter in front of you.",
          image: sushi,
          alt: "Two wooden boards with sushi rolls, chopsticks and a knife on a dark table",
        },
        {
          name: "Hanok Bowl House",
          city: "Seoul, South Korea",
          kind: "Korean",
          text: "Bibimbap in a hot stone bowl, with kimchi and a dozen small side dishes.",
          image: kimchi,
          alt: "Wooden restaurant table with a stone bibimbap bowl and small dishes of kimchi and noodles",
        },
        {
          name: "Sizzle & Rice",
          city: "Bangkok, Thailand",
          kind: "Grill",
          text: "Fish, chicken and rice served on hot plates, busy at lunchtime and loud on Fridays.",
          image: riso,
          alt: "Black plates of grilled fish, chicken and shredded cabbage on a dark restaurant table",
        },
        {
          name: "Cafe Alvorada",
          city: "Lisbon, Portugal",
          kind: "Brunch",
          text: "Waffles, eggs and fresh juice on big shared tables, open until late afternoon.",
          image: eggFruit,
          alt: "Brunch table with waffles, fried eggs, strawberries and glasses of orange juice",
        },
        {
          name: "Spice Garden Kitchen",
          city: "Mumbai, India",
          kind: "Vegetarian",
          text: "Chickpea salads, fresh naan and herbs from the roof garden.",
          image: beans,
          alt: "Dark bowl of salad with chickpeas, peas and peppers and a slice of naan",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="ms-pg-hero d-flex justify-content-center align-items-center flex-column">
    <h1>Places</h1>
    <p>
      Restaurants and cafes we like around the world. Vivamus eleifend
      ultricies elit quis imperdiet.
    </p>
  </div>

  <div class="container ms-pg-grid">
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="place in places" :key="place.name">
        <article class="card ms-pg-card">
          <div class="ms-pg-img">
            <img :src="place.image" :alt="place.alt" loading="lazy" decoding="async" />
          </div>
          <div class="card-body">
            <span class="ms-pg-tag">{{ place.kind }}</span>
            <h2>{{ place.name }}</h2>
            <p class="ms-pg-meta">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span class="visually-hidden">City: </span>{{ place.city }}
            </p>
            <p>{{ place.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style></style>
