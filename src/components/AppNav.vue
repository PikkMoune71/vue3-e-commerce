<template>
  <nav class="nav">
    <img src="../assets/logo.svg" class="logo" />
    <RouterLink class="nav-item" :to="{ name: 'home' }"
      >Tous les produits</RouterLink
    >
    <RouterLink class="nav-item" :to="{ name: 'categories' }"
      >Catégories</RouterLink
    >
    <div class="container-cart">
      <RouterLink class="nav-cart" :to="{ name: 'cart' }">
        <IconShopping class="icon-cart" />
      </RouterLink>
      <span class="counter-product">{{ totalQuantity }}</span>
    </div>
  </nav>
</template>

<script setup>
import { storeToRefs } from "pinia";
import IconShopping from "./icons/IconShopping.vue";
import { useCartStore } from "../stores/cart.js";

const cartStore = useCartStore();
const { totalQuantity } = storeToRefs(cartStore);
</script>

<style lang="scss" scoped>
.nav {
  background: #333;
  color: #fff;
  position: fixed;
  z-index: 1000;
  inset: 0 0 auto 0;
  padding: 0.5rem;
  display: flex;

  &-item {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    &.is-active {
      font-weight: bold;
      color: #42b883;
    }
  }

  .logo {
    width: 40px;
    height: 40px;
    margin: 0 20px;
  }

  .container-cart {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 50px;
    padding: 0;

    .nav-cart {
      padding: 0 0.2rem;
    }
    .icon-cart {
      width: 25px;
      height: 25px;
      color: white;
      &:hover {
        color: #42b883;
      }
    }
  }
}
</style>
