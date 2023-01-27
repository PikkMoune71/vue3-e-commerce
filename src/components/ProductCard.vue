<template>
  <div class="card-product">
    <div class="img-product">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="description-product">
      <h2>{{ product.title }}</h2>
      <p>
        <span>Catégorie : {{ product.category }}</span>
      </p>
      <div class="content-price">
        <p class="price">{{ product.price }} €</p>
        <div class="rate">
          <p v-if="product.rating.rate > 2.5" class="rate-up">
            {{ product.rating.rate }} / 5
            <span class="notes">({{ product.rating.count }} votes)</span>
          </p>
          <p v-else class="rate-down">
            {{ product.rating.rate }} / 5
            <span class="notes">({{ product.rating.count }}) votes</span>
          </p>
        </div>
      </div>
      <div class="btn-product">
        <RouterLink
          class="btn-primary"
          :to="{ name: 'product', params: { id: product.id } }"
          >Détails</RouterLink
        >
        <button @click="addToCart(product)" class="btn-success card">
          <IconShopping class="icon-shopping" /> Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconShopping from "@/components/icons/IconShopping.vue";
import { useCartStore } from "../stores/cart.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
const { addToCart } = cartStore;
</script>

<style lang="scss" scoped>
.card-product {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  color: black;
  padding: 15px;
  margin-top: 10px;

  .img-product {
    display: flex;

    img {
      width: 200px;
      height: auto;
      background-size: cover;
    }
  }
  .description-product {
    position: relative;
    text-align: left;
    margin-left: 30px;
    h2 {
      font-weight: bold;
      width: 300px;
    }
    span {
      color: grey;
    }
    .content-price {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .price {
        font-weight: bold;
        font-size: 20px;
      }

      .rate-up {
        color: green;
        font-weight: bold;
      }
      .rate-down {
        color: red;
        font-weight: bold;
      }

      .notes {
        font-size: 10px;
        color: grey;
      }
    }
    .btn-product {
      display: flex;
      justify-content: center;
      a:first-child {
        margin-right: 10px;
      }

      .card {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-shopping {
          width: 25px;
          height: 25px;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
