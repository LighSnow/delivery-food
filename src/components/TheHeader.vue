<template>
  <div class="container">
    <header class="header">
      <RouterLink class="logo" to="/">
        <img :src="logo" alt="Logo" />
      </RouterLink>
      <ui-input
        class="header-address"
        placeholder="Адрес доставки"
        class-name="input-address"
      />
      <div class="header-buttons">
        <span class="user-name"></span>
        <button
          v-if="!authStore.auth"
          @click="() => openAuthModal()"
          class="button button-primary button-auth"
        >
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button
          @click="openCartModal"
          class="button button-cart"
          id="cart-button"
        >
          <span class="count">{{ cartStore.count }}</span>
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button
          v-if="authStore.auth"
          @click="logoutHandler"
          class="button button-primary button-out"
        >
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import logo from "@/assets/img/icon/logo.svg";
import UiInput from "@/components/Ui/UiInput.vue";
import { useModal } from "vue-final-modal";
import ModalAuth from "@/components/Modals/ModalAuth.vue";
import { useCartStore } from "@/stores/useCartStore";
import { useAuthStore } from "@/stores/useAuthStore";
import ModalCart from "@/components/Modals/ModalCart.vue";

const { open: openAuthModal, close: closeAuthModal } = useModal({
  component: ModalAuth,
  attrs: {
    onConfirm() {
      authStore.login();
      closeAuthModal();
    },
  },
});

const { open: openCartModal, close: closeCartModal } = useModal({
  component: ModalCart,
  attrs: {
    title: "Корзина",
    onConfirm() {
      cartStore.reset();
      closeCartModal();
    },
  },
});

const cartStore = useCartStore();
const authStore = useAuthStore();

const logoutHandler = () => {
  authStore.logout();
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  &-address {
    flex: 0.8;
  }

  &-buttons {
    display: flex;
    align-items: center;
  }

  &-user-name {
    display: none;
    margin-right: 20px;
    font-weight: bold;
    font-size: 18px;
  }
  @media (max-width: 578px) {
    &-address {
      min-width: 100%;
      order: 1;
    }

    &-header {
      flex-wrap: wrap;
    }
  }
}
</style>
