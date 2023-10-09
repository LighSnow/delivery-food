<template>
  <div class="container">
    <the-promo />
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <div class="actions">
        <ui-input
          v-model="inputValue"
          placeholder="Поиск блюд и их компонентов"
          class-name="input-search"
        />
        <the-select v-model="selectedSort" :options="sortOptions" />
      </div>
    </div>
    <div class="restaurants">
      <cards-wrapper>
        <restaurant-card
          v-for="partner in filteredValue"
          :key="partner.name"
          :image="partner.image"
          :kitchen="partner.kitchen"
          :price="partner.price"
          :stars="partner.stars"
          :time_of_delivery="partner.time_of_delivery"
          :name="partner.name"
          :restaurant="true"
          @click="goToRestaurantHandler(partner.name)"
        />
      </cards-wrapper>
    </div>
  </div>
</template>

<script setup>
import RestaurantCard from "@/components/RestaurantCard.vue";
import { useRouter } from "vue-router";
import usePartners from "@/composables/usePartners";
import CardsWrapper from "@/components/CardsWrapper.vue";
import ThePromo from "@/components/ThePromo.vue";
import UiInput from "@/components/Ui/UiInput.vue";
import TheSelect from "@/components/Ui/UiSelect.vue";
import { computed, ref, watch } from "vue";
import { sortByPrice } from "@/utils/sortByPrice";
import { filterByKeysAndInput } from "@/utils/filterByInputAndKeys";

const { partners } = usePartners();
const router = useRouter();

const inputValue = ref("");
const selectedSort = ref("");

const sortOptions = [
  { value: "cheap", name: "Сначала Дешевые" },
  { value: "expensive", name: "Сначала Дорогие" },
];

watch(selectedSort, (newValue) => {
  partners.value = sortByPrice(partners.value, newValue);
});

const filteredValue = computed(() => {
  return filterByKeysAndInput(partners.value, inputValue.value, [
    "name",
    "kitchen",
  ]);
});

const goToRestaurantHandler = (name) => {
  router.push({ name: "partner", params: { id: name } });
};
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  margin-left: auto;

  @media (max-width: 768px) {
    margin: 10px 0 0 0;
  }
}
</style>
