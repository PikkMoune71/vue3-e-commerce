import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import CategoryView from "../views/CategoryView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
      children: [
        {
          path: ":tag",
          name: "category",
          component: CategoryView,
          props: (route) => ({
            categoryName: route.params.tag,
            limit: route.query.limit || undefined,
          }),
        },
      ],
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductView,
      props: (route) => ({
        productId: route.params.id,
      }),
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
  linkActiveClass: "is-active",
});

export default router;
