<script>
// Caratteri e stile condiviso delle pagine con griglia di card
import "../assets/fonts/fonts.css";
import "../style/page-cards.scss";
import banana from "../assets/img/banana.jpg";
import beans from "../assets/img/beans.jpg";
import eggFruit from "../assets/img/egg-fruit.jpg";
import iceCream from "../assets/img/ice-cream.jpg";
import drink from "../assets/img/drink.jpg";
import fruitVegetables from "../assets/img/fruit-vegetables.jpg";
import sushi from "../assets/img/sushi.jpg";
import riso from "../assets/img/riso.jpg";
import kimchi from "../assets/img/kimchi.jpg";

export default {
  data() {
    return {
      recipes: [
        {
          title: "Fruit Platter with Banana, Mango, Berries and Orange",
          category: "Healthy",
          time: "15 min",
          text: "A colourful plate of fresh fruit, ready in minutes and served with a little dark chocolate.",
          image: banana,
          alt: "Plate of sliced fruit with berries and a banana, next to a bar of dark chocolate",
        },
        {
          title: "Lunch Favourite with Salad, Naan and Beans",
          category: "Quick & Easy",
          time: "35 min",
          text: "Chickpeas, peas, peppers and fresh herbs in a deep bowl, with warm naan on the side.",
          image: beans,
          alt: "Dark bowl of salad with chickpeas, peas and peppers and a slice of naan",
        },
        {
          title: "Breakfast Delight With Strawberry, Egg and Fruit",
          category: "Dinner",
          time: "25 min",
          text: "Waffles with blueberries and strawberries, fried eggs and fresh juice for a big table.",
          image: eggFruit,
          alt: "Breakfast table with waffles, fried eggs, strawberries and glasses of orange juice",
        },
        {
          title: "Ice Cream Heaven With Vanilla, Chocolate and Pistachio",
          category: "Dessert",
          time: "20 min",
          text: "Three scoops in small bowls, each with a different flavour, served with golden spoons.",
          image: iceCream,
          alt: "Three bowls with scoops of vanilla, chocolate and pistachio ice cream and golden spoons",
        },
        {
          title: "The Perfect Cosmopolitan",
          category: "Drinks",
          time: "5 min",
          text: "A pink cocktail shaken with ice and poured into a martini glass, step by step.",
          image: drink,
          alt: "Pink cocktail poured from a shaker into a martini glass",
        },
        {
          title: "Ketogenic Diet Recipe with Avocado",
          category: "Healthy",
          time: "30 min",
          text: "Chopped vegetables, salad and avocado on a wooden board, with a light low-carb dressing.",
          image: fruitVegetables,
          alt: "Hands chopping peppers, lettuce and avocado on a wooden board with bowls of cucumber and tomatoes",
        },
        {
          title: "Sushi Boards for Two",
          category: "Dinner",
          time: "45 min",
          text: "Two wooden boards of sushi rolls, with chopsticks, soy sauce and lettuce leaves.",
          image: sushi,
          alt: "Two wooden boards with sushi rolls, chopsticks and a knife on a dark table",
        },
        {
          title: "Sizzling Plates with Grilled Fish and Rice",
          category: "Dinner",
          time: "40 min",
          text: "Fish and chicken served on hot plates with crunchy shredded cabbage and sweetcorn.",
          image: riso,
          alt: "Black plates of grilled fish, chicken and shredded cabbage on a dark table",
        },
        {
          title: "Meal Prep: Korean Bibimbap with Kimchi",
          category: "Quick & Easy",
          time: "35 min",
          text: "A stone bowl with rice, vegetables and an egg yolk, surrounded by small dishes of kimchi.",
          image: kimchi,
          alt: "Stone bowl of bibimbap with an egg yolk, surrounded by small dishes of kimchi and noodles",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="ms-pg-hero d-flex justify-content-center align-items-center flex-column">
    <h1>Recipes</h1>
    <p>
      Nunc rutrum a nibh id ornare. Vivamus eleifend ultricies elit quis
      imperdiet. Pick a dish and start cooking.
    </p>
  </div>

  <div class="container ms-pg-grid">
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="recipe in recipes" :key="recipe.title">
        <article class="card ms-pg-card">
          <div class="ms-pg-img">
            <img :src="recipe.image" :alt="recipe.alt" loading="lazy" decoding="async" />
          </div>
          <div class="card-body">
            <span class="ms-pg-tag">{{ recipe.category }}</span>
            <h2>{{ recipe.title }}</h2>
            <p class="ms-pg-meta">
              <i class="fa-regular fa-clock" aria-hidden="true"></i>
              <span class="visually-hidden">Preparation time: </span>{{ recipe.time }}
            </p>
            <p>{{ recipe.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style></style>
