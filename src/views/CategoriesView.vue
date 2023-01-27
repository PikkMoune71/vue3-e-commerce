<template>
  <div>
    <h1 class="title">Categories</h1>
    <hr class="line" />
    <template v-if="$route.name === 'categories'">
      <p class="text-choose">Choisir une catégorie :</p>
    </template>
    <nav class="nav">
      <RouterLink
        v-for="category in categories"
        :key="category.id"
        class="nav-item card"
        :to="{
          name: 'category',
          params: { tag: category.tag },
        }"
      >
        {{ category.name }}
      </RouterLink>
    </nav>
    <RouterView :key="$router.path" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import categoriesData from "@/categories";
const categories = ref(categoriesData);
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
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  .nav-item {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    &.is-active {
      font-weight: bold;
      color: #42b883;
    }

    &.card {
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      width: 300px;
      margin: 5px;
      border-radius: 5px;
      padding: 20px 10px;
      text-align: center;
    }
  }
}
.text-choose {
  text-align: center;
  font-size: 25px;
  margin-top: 60px;
}
</style>
