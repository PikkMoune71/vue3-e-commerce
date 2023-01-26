<template>
  <div>
    <h1>Categories</h1>
    <nav class="nav">
      <RouterLink
        v-for="category in categories"
        :key="category.id"
        class="nav-item"
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
.nav {
  display: flex;
  .nav-item {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    &.is-active {
      font-weight: bold;
      color: #42b883;
    }
  }
}
</style>
