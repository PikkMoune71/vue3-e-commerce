<template>
  <nav class="nav">
    <RouterLink class="nav-item" :to="{ name: 'home' }">Home</RouterLink>
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
      color: yellow;
    }
  }
}
</style>
