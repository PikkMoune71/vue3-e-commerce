<template>
  <div>
    <p class="no-product" v-if="cart.length == 0">Votre panier est vide.</p>
    <div v-for="product in cart" :key="product.id">
      <div>
        <div class="container-cart">
          <div class="info img">
            <img :src="product.image" />
          </div>
          <div class="info title">
            <RouterLink
              class="link-product"
              :to="{ name: 'product', params: { id: product.id } }"
              >{{ product.title }}</RouterLink
            >
          </div>
          <div class="info price">
            <p>{{ product.price }} €</p>
          </div>
          <div class="info quantity">
            <button @click="removeFromCart(product)" class="btn-quantity">
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              placeholder="Quantité"
              :value="product.quantity"
              class="input-quantity"
            />
            <button @click="addFromCart(product)" class="btn-quantity">
              +
            </button>
          </div>
          <div class="info delete">
            <button @click="removeProductFromCart(product)" class="btn-delete">
              <IconDelete class="icon-delete" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cart.length > 0" class="total">
      <hr />
      <p>
        Total : <span>{{ totalFixed }} €</span>
      </p>
      <button class="btn-success cart" @click="clearCart">Payer</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cart.js";
import IconDelete from "@/components/icons/IconDelete.vue";

const cartStore = useCartStore();
const { addFromCart, removeFromCart, removeProductFromCart, clearCart } =
  cartStore;
const { cart, totalFixed } = storeToRefs(cartStore);
</script>

<style lang="scss" scoped>
.no-product {
  font-size: 1.5rem;
  margin-top: 100px;
  color: grey;
}
.container-cart {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .info {
    margin: 20px;
    img {
      width: 50px;
      margin: 0 20px;
    }

    &.title {
      width: 200px;
      .link-product {
        color: black;
      }
    }

    &.quantity {
      display: flex;
      align-items: center;
      .btn-quantity {
        width: 30px;
        height: 30px;
        margin: 5px;
        border-radius: 3px;
        border: 1px solid #ccc;
        background: none;
        cursor: pointer;
      }

      .input-quantity {
        width: 30px;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #ccc;
        width: 50px;
        text-align: center;
      }
    }

    &.delete {
      .btn-delete {
        background: none;
        border: none;
        cursor: pointer;
      }
      .icon-delete {
        width: 25px;
        height: 25px;
        color: rgb(232, 46, 46);
      }
    }
  }
}

.total {
  align-items: center;
  margin: 20px;
  font-size: 1.5rem;
  font-weight: bold;

  hr {
    opacity: 0.3;
  }

  p {
    margin-top: 10px;
    span {
      font-weight: bold;
    }
  }

  .cart {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>
