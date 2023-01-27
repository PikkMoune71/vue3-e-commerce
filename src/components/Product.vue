<template>
  <div>
    <div v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div v-else>
      <h1 class="title">Fiche Produit de l'article n°{{ $route.params.id }}</h1>
      <div class="container-product">
        <div class="img-container">
          <img :src="product.image" alt="product" />
        </div>
        <div class="container-description">
          <h2>{{ product.title }}</h2>
          <p class="category">
            <span
              >Catégorie :
              <RouterLink
                class="nav-item"
                :to="{
                  name: 'category',
                  params: { tag: product.category },
                }"
              >
                {{ product.category }}
              </RouterLink></span
            >
          </p>
          <p class="description">{{ product.description }}</p>
          <p class="price">{{ product.price }} €</p>
          <button @click="addToCart(product)" class="btn-success card">
            <IconShopping class="icon-shopping" /> Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Loader from "@/components/Loader.vue";
import IconShopping from "@/components/icons/IconShopping.vue";
import { useCartStore } from "../stores/cart.js";

const $route = useRoute();
const id = $route.params.id;
const product = ref([]);
const isLoading = ref(false);
const cartStore = useCartStore();
const { addToCart } = cartStore;

const getProductById = () => {
  try {
    isLoading.value = true;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => ((product.value = json), (isLoading.value = false)));
  } catch (err) {
    console.log(err);
  }
};

watchEffect(async () => {
  await getProductById();
});
</script>

<style lang="scss" scoped>
.title {
  margin-top: 20px;
}
.loader {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 50px auto;
}

.container-product {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 50px 0;

  .img-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: auto;
      background-size: cover;
    }
  }
  .container-description {
    margin-left: 10%;
    width: 300px;
    h2 {
      width: 300px;
      font-weight: bold;
      font-size: 30px;
    }
    .category {
      margin-top: 10px;
      .nav-item {
        font-weight: bold;
        color: #42b883;
      }
    }
    .description {
      margin-top: 30px;
      width: 300px;
      text-align: justify;
    }
    .price {
      font-weight: bold;
      font-size: 20px;
      margin: 40px 0;
    }

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      width: 100%;
      .icon-shopping {
        width: 25px;
        height: 25px;
        margin: 0 10px;
      }
    }
  }

  @media (max-width: 830px) {
    .container-description {
      margin-left: 0;
    }
  }
}
</style>
