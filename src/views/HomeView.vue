<template>
  <div>
    <h1 class="title">Tous les produits</h1>
    <hr class="line" />
    <AllProducts />
  </div>
</template>

<script setup>
import AllProducts from "../components/AllProducts.vue";
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-top: 2rem;
}

.line {
  width: 100px;
  margin: 0 auto 20px auto;
}
</style>
