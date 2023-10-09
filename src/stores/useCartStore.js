import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({});

  const count = computed(() => {
    return Object.keys(cart.value).reduce((acc, id) => {
      return acc + cart.value[id].quantity;
    }, 0);
  });

  const total = computed(() => {
    return Object.keys(cart.value).reduce((acc, id) => {
      return acc + cart.value[id].price * cart.value[id].quantity;
    }, 0);
  });

  const add = (item) => {
    const id = item.id;
    if (cart.value[id]) {
      cart.value[id].quantity += 1;
    } else {
      cart.value[id] = {
        ...item,
        quantity: 1,
      };
    }
  };

  const remove = (productId) => {
    if (!cart.value[productId]) return;

    cart.value[productId].quantity -= 1;

    if (cart.value[productId].quantity === 0) {
      delete cart.value[productId];
    }
  };

  const reset = () => {
    cart.value = {};
  };

  return {
    cart,
    count,
    total,
    add,
    remove,
    reset,
  };
});
