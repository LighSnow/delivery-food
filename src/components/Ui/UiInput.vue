<template>
  <label class="search">
    <input
      :value="modelValue"
      type="text"
      class="input"
      :class="className"
      :placeholder="placeholder"
      @input="changeHandler"
    />
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

let interval;
const changeHandler = (event) => {
  if (interval) {
    clearInterval(interval);
  }

  interval = setTimeout(() => {
    emits("update:modelValue", event.target.value);
  }, 300);
};
</script>

<style scoped lang="scss">
.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 35px;
  background-repeat: no-repeat;
  background-position: left 11px center;

  &-address {
    width: 100%;
    background-image: url("@/assets/img/icon/home.svg");
  }

  &-search {
    width: 300px;
    background-image: url("@/assets/img/icon/search.svg");
  }

  @media (max-width: 578px) {
    &-address {
      margin-top: 15px;
      order: 5;
      flex: 1;
    }
  }
}
</style>
