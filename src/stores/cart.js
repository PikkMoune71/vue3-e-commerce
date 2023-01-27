import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  //total price
  const total = computed(() => {
    return cart.value.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  });

  //total produits en fonction de la quantité
  const totalQuantity = computed(() => {
    return cart.value.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  });

  // add to cart
  function addToCart(product) {
    const existing = cart.value.find((p) => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }

  // add from cart
  function addFromCart(product) {
    const existing = cart.value.find((p) => p.id === product.id);

    if (existing.quantity > 0) {
      existing.quantity++;
    } else {
      cart.value = cart.value.filter((p) => p.id !== product.id);
    }
  }

  // remove from cart
  function removeFromCart(product) {
    const existing = cart.value.find((p) => p.id === product.id);

    if (existing.quantity > 1) {
      existing.quantity--;
      localStorage.removeItem("Cart", JSON.stringify(cart.value));
    } else {
      cart.value = cart.value.filter((p) => p.id !== product.id);
    }
  }

  // remove product from cart
  function removeProductFromCart(product) {
    cart.value = cart.value.filter((p) => p.id !== product.id);
  }

  // clear cart
  function clearCart() {
    cart.value = [];
  }

  // persist
  const cartLocal = localStorage.getItem("Cart");
  if (cartLocal) {
    cart.value = JSON.parse(cartLocal);
  }

  watch(
    cart,
    () => {
      localStorage.setItem("Cart", JSON.stringify(cart.value));
    },
    { deep: true }
  );

  // actualiser le total à chaque changement
  watch(
    total,
    () => {
      localStorage.setItem("Total", JSON.stringify(total.value));
    },
    { deep: true }
  );

  // actualiser le totalQuantity à chaque changement
  watch(
    totalQuantity,
    () => {
      localStorage.setItem(
        "TotalQuantity",
        JSON.stringify(totalQuantity.value)
      );
    },
    { deep: true }
  );

  return {
    cart,
    total,
    totalQuantity,
    addToCart,
    addFromCart,
    removeFromCart,
    removeProductFromCart,
    clearCart,
  };
});
