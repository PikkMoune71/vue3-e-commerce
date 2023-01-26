<template>
  <div v-if="category">
    <h1>
      {{ category.name }}
    </h1>
    <ProductByCategory :category="category" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import categoriesData from "@/categories";
import ProductByCategory from "../components/ProductByCategory.vue";

const props = defineProps({
  categoryName: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    default: 20,
  },
});

const categories = ref(categoriesData);

const category = computed(() =>
  categories.value.find((c) => c.tag === props.categoryName)
);
</script>

<style lang="scss" scoped>
.stationList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
