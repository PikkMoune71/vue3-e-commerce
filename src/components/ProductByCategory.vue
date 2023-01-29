<template>
  <div>
    <input
      type="text"
      v-model="searchProduct"
      placeholder="Search product(s)..."
      class="search"
    />

    <select
      name="sortBy"
      id="sortBy"
      @change="sortBy(sortType)"
      v-model="sortType"
      class="sortBy"
    >
      <option value="">-- Trier par --</option>
      <option v-for="item in sortOptions" :value="item.value">
        {{ item.text }}
      </option>
    </select>
    <div v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div v-for="product in filteredList()" :key="product.id">
      <ProductCard :product="product" />
    </div>
    <div class="product-error" v-if="searchProduct && !filteredList().length">
      <span>Aucun produit n'a été trouvé.. Vérifier votre recherche</span>
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
const searchProduct = ref("");
const sortType = ref("noteDESC");
const sortOptions = ref([
  { text: "Trier par ordre ASC", value: "ordreASC" },
  { text: "Trier par ordre DESC", value: "ordreDESC" },
  { text: "Trier par note ASC", value: "noteASC" },
  { text: "Trier par note DESC", value: "noteDESC" },
]);

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

// fonction pour rechercher un produit
const filteredList = () => {
  return products.value.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(searchProduct.value.toLowerCase());
  });
};

//fonction pour filtrer les produits ordre alphabétique
const sortList = () => {
  return products.value.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
};

//fonction pour filtrer les produits par ordre alphabétique inverse
const sortListReverse = () => {
  return products.value.sort((a, b) => {
    return b.title.localeCompare(a.title);
  });
};

//fonction pour filtrer les produits par note croissante
const sortListRate = () => {
  return products.value.sort((a, b) => {
    return a.rating.rate - b.rating.rate;
  });
};

//fonction pour filtrer les produits par note décroissante
const sortListRateReverse = () => {
  return products.value.sort((a, b) => {
    return b.rating.rate - a.rating.rate;
  });
};

//fonction pour onchange du select
const sortBy = (sortType) => {
  if (sortType === "ordreASC") {
    sortList();
  } else if (sortType === "ordreDESC") {
    sortListReverse();
  } else if (sortType === "noteASC") {
    sortListRate();
  } else if (sortType === "noteDESC") {
    sortListRateReverse();
  }
};

watchEffect(async () => {
  await getProductByCategory();
});

watchEffect(() => {
  sortListRateReverse();
});
</script>

<style lang="scss" scoped>
.sortBy {
  width: 35%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 10px;
}
.search {
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;

  &:focus {
    outline-color: black;
  }
}
.loader {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 50px auto;
}
</style>
