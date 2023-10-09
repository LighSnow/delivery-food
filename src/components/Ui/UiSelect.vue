<template>
  <select class="select" :value="modelValue" @change="changeOptions">
    <option disabled value="">Сортировать по:</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(["update:modelValue"]);

const changeOptions = (event) => {
  emits("update:modelValue", event.target.value);
};
</script>

<style scoped>
.select {
  width: 175px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 0px 8px 8px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}
</style>
