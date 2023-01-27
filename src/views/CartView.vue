<template>
  <div>
    <h1 class="title">Votre Panier</h1>
    <hr class="line" />
    <Cart />
  </div>
</template>

<script setup>
import Cart from "@/components/Cart.vue";
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-top: 2rem;
}
.line {
  width: 100px;
  margin: 0 auto;
}
</style>
