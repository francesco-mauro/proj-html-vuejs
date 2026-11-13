<script>
// Caratteri e stile condiviso delle pagine con griglia di card
import "../assets/fonts/fonts.css";
import "../style/page-cards.scss";
import sushi from "../assets/img/sushi.jpg";
import riso from "../assets/img/riso.jpg";
import kimchi from "../assets/img/kimchi.jpg";
import eggFruit from "../assets/img/egg-fruit.jpg";
import summerDrink from "../assets/img/summer-drink.jpg";
import beans from "../assets/img/beans.jpg";

export default {
  data() {
    return {
      posts: [
        {
          title: "Food Corner: Top Japanese Restaurants for Sushi",
          date: "March 25, 2019",
          dateIso: "2019-03-25",
          category: "Food Corner",
          text: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt, with our picks for the best sushi counters in town.",
          image: sushi,
          alt: "Two wooden boards with sushi rolls, chopsticks and a knife on a dark table",
        },
        {
          title: "Roundup: My New Favourite Recipes For Healthy Living",
          date: "March 18, 2019",
          dateIso: "2019-03-18",
          category: "Roundup",
          text: "Orci varius natoque penatibus et magnis dis parturient montes. Ten light dishes for busy weeks.",
          image: riso,
          alt: "Black plates of grilled fish, chicken and shredded cabbage on a dark table",
        },
        {
          title: "Meal Prep: Korean Bibimbap with Kimchi",
          date: "March 11, 2019",
          dateIso: "2019-03-11",
          category: "Meal Prep",
          text: "Donec tincidunt posuere ornare. How to cook a bibimbap bowl and keep the toppings fresh for the week.",
          image: kimchi,
          alt: "Stone bowl of bibimbap with an egg yolk, surrounded by small dishes of kimchi and noodles",
        },
        {
          title: "Sunday Brunch: Waffles, Eggs and Fresh Fruit",
          date: "March 4, 2019",
          dateIso: "2019-03-04",
          category: "Brunch",
          text: "Phasellus placerat odio non feugiat sollicitudin. A long table, a few friends and plenty of waffles.",
          image: eggFruit,
          alt: "Breakfast table with waffles, fried eggs, strawberries and glasses of orange juice",
        },
        {
          title: "Cool Drinks for a Hot Afternoon",
          date: "February 25, 2019",
          dateIso: "2019-02-25",
          category: "Drinks",
          text: "Integer vitae elementum ex. Mint, citrus and a lot of ice: two summer drinks you can make in five minutes.",
          image: summerDrink,
          alt: "Two tall glasses with ice, citrus slices and mint, with paper straws",
        },
        {
          title: "Lunch Favourite with Salad, Naan and Beans",
          date: "February 18, 2019",
          dateIso: "2019-02-18",
          category: "Lunch",
          text: "Sed porttitor, diam eget convallis volutpat. A bowl full of chickpeas, vegetables and herbs, with warm naan.",
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
    <h1>Blog</h1>
    <p>
      Stories from the kitchen, restaurant tips and weekly roundups. Aliquam
      erat volutpat, ut quis ligula a magna blandit finibus.
    </p>
  </div>

  <div class="container ms-pg-grid">
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="post in posts" :key="post.title">
        <article class="card ms-pg-card">
          <div class="ms-pg-img">
            <img :src="post.image" :alt="post.alt" />
          </div>
          <div class="card-body">
            <span class="ms-pg-tag">{{ post.category }}</span>
            <h2>{{ post.title }}</h2>
            <p class="ms-pg-meta">
              <i class="fa-regular fa-calendar" aria-hidden="true"></i>
              <time :datetime="post.dateIso">{{ post.date }}</time>
            </p>
            <p>{{ post.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style></style>
