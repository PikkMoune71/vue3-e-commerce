<template>
  <div>
    <div v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import ProductCard from "./ProductCard.vue";
import Loader from "./Loader.vue";

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});

const products = ref([]);
const isLoading = ref(false);

const getProductByCategory = async () => {
  try {
    isLoading.value = true;
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${props.category.tag}`
    );
    products.value = await response.json();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

watchEffect(() => {
  getProductByCategory();
});
</script>

<style lang="scss" scoped>
.loader {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 50px auto;
}
</style>
