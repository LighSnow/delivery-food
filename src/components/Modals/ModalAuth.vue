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
    <form id="logInForm">
      <fieldset class="modal-body">
        <legend class="modal-title">Авторизация</legend>
        <label class="modal-label-auth">
          <span class="modal-label-auth-title">Логин</span>
          <input v-model="loginValue" id="login" type="text" />
          <span v-if="isInvalid" class="modal-invalid-text">
            Заполните все поля
          </span>
        </label>
        <label class="modal-label-auth">
          <span class="modal-label-auth-title">Пароль</span>
          <input v-model="passwordValue" id="password" type="password" />
          <span v-if="isInvalid" class="modal-invalid-text">
            Заполните все поля
          </span>
        </label>
      </fieldset>
      <div class="modal-footer">
        <button
          @click.prevent="loginHandler"
          class="button button-primary button-login"
          type="submit"
        >
          Войти
        </button>
      </div>
    </form>
  </VueFinalModal>
</template>
<script setup>
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";

const emits = defineEmits(["update:modelValue", "confirm"]);

defineProps({
  title: {
    type: String,
    default: "",
  },
});

const loginValue = ref("");
const passwordValue = ref("");
const isInvalid = ref(false);

const loginHandler = () => {
  if (loginValue.value === "" || passwordValue.value === "") {
    isInvalid.value = true;
    return;
  }
  emits("confirm");
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

  &-label-auth {
    display: block;
    margin: 30px;

    &-title {
      width: 80px;
      display: inline-block;
    }
  }

  &-invalid-text {
    display: flex;
    color: red;
  }

  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
