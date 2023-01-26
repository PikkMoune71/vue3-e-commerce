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
import { ref, watch, watchEffect } from "vue";
import Loader from "@/components/Loader.vue";
import ProductCard from "./ProductCard.vue";

const products = ref([]);
const searchProduct = ref("");
const isLoading = ref(false);
const sortType = ref("noteDESC");
const sortOptions = ref([
  { text: "Trier par ordre ASC", value: "ordreASC" },
  { text: "Trier par ordre DESC", value: "ordreDESC" },
  { text: "Trier par note ASC", value: "noteASC" },
  { text: "Trier par note DESC", value: "noteDESC" },
]);

const getAllProducts = () => {
  try {
    isLoading.value = true;
    sortBy();
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => ((products.value = json), (isLoading.value = false)));
  } catch (err) {
    console.log(err);
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
  await getAllProducts();
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
.card-product {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  color: black;
  padding: 15px;
  margin: 10px;

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
      a:first-child {
        margin-right: 10px;
      }
    }
  }
}

.product-error {
  span {
    color: grey;
  }
}
</style>
