<template>
  <nav class="nav">
    <img src="../assets/logo.svg" class="logo" />
    <RouterLink class="nav-item" :to="{ name: 'home' }"
      >Tous les produits</RouterLink
    >
    <RouterLink class="nav-item" :to="{ name: 'categories' }"
      >Catégories</RouterLink
    >
  </nav>
</template>

<script setup></script>

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
}
</style>
