<template>
  <div class="layout">
    <div class="layout-body">
      <RouterView :key="$route.path" />
    </div>
    <div class="layout-footer">
      <AppNav />
    </div>
  </div>
</template>

<script setup>
import AppNav from "./components/AppNav.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  &-body {
    padding: 2rem;
    margin: 3rem auto 0;
  }
}
</style>
