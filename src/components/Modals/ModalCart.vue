<template>
  <VueFinalModal
    class="modal"
    content-class="modal-dialog"
    @update:model-value="(val) => emits('update:modelValue', val)"
  >
    <button class="modal-close-auth" @click="emits('update:modelValue', false)">
      &times;
    </button>
    <div v-if="title" class="modal-header">
      <h3 class="modal-title">
        {{ title }}
      </h3>
    </div>
    <template v-if="store.total > 0">
      <div class="modal-body">
        <div v-for="cart in store.cart" :key="cart.id" class="modal-food-row">
          <span class="modal-food-name">{{ cart.name }}</span>
          <strong class="modal-food-price">{{ cart.price }} ₽</strong>
          <div class="modal-food-counter">
            <button
              @click="removeFromCardHandler(cart.id)"
              class="modal-counter-button"
            >
              -
            </button>
            <span class="modal-counter">{{ cart.quantity }}</span>
            <button
              @click="addToCardHandler(cart.id, cart.name, cart.price)"
              class="modal-counter-button"
            >
              +
            </button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ store.total }} ₽</span>
        <div class="modal-footer-buttons">
          <button @click="emits('confirm')" class="button button-primary">
            Оформить заказ
          </button>
          <button
            @click="emits('update:modelValue', false)"
            class="button clear-cart"
          >
            Отмена
          </button>
        </div>
      </div>
    </template>
    <h3 v-else>Корзина Пуста</h3>
  </VueFinalModal>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { VueFinalModal } from "vue-final-modal";
const store = useCartStore();

defineProps({
  title: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue", "confirm"]);

const addToCardHandler = (id, name, price) => {
  store.add({ id, name, price });
};

const removeFromCardHandler = (id) => {
  store.remove(id);
};
</script>

<style scoped lang="scss">
.modal {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
  }
  &-title {
    margin: 0;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }
  &-body {
    margin-bottom: 22px;
  }
  &-food-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 15px;
  }
  &-food-name {
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
  }
  &-food-price {
    margin-left: auto;
    margin-right: 47px;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
  }
  &-food-counter {
    display: flex;
    align-items: center;
  }

  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-footer-buttons {
    display: flex;
    align-items: center;
  }

  &-pricetag {
    background: #262626;
    border-radius: 5px;
    color: #ffffff;
    padding: 15px 20px;
    font-size: 20px;
    line-height: 23px;
  }

  &-counter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 39px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #40a9ff;
    box-sizing: border-box;
    border-radius: 2px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #40a9ff;

    &:hover {
      background: #40a9ff;
      border: 1px solid #ffffff;
      color: #ffffff;
    }
  }

  &-counter {
    font-size: 16px;
    line-height: 24px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
