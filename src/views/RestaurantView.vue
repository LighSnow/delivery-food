<template>
  <div class="container">
    <div class="menu">
      <div class="section-heading">
        <h2 class="section-title restaurant-title">
          {{ partner.name }}
        </h2>
        <div class="card-info">
          <div class="rating">{{ partner.stars }}</div>
          <div class="price">От {{ partner.price }} ₽</div>
          <div class="category">{{ partner.kitchen }}</div>
        </div>
        <div class="actions">
          <ui-input
            v-model="inputValue"
            placeholder="Поиск блюд и их компонентов"
            class-name="input-search"
          />
          <the-select v-model="selectedSort" :options="sortOptions" />
        </div>
      </div>
      <cards-wrapper v-if="products.length">
        <food-card
          v-for="restaurant in filteredValue"
          :key="restaurant.name"
          :description="restaurant.description"
          :image="restaurant.image"
          :name="restaurant.name"
          :price="restaurant.price"
          :id="restaurant.id"
          @on-add="addToCardHandler"
        />
      </cards-wrapper>
      <h3 v-else>Блюд не найдено</h3>
    </div>
  </div>
</template>

<script setup>
import CardsWrapper from "@/components/CardsWrapper.vue";
import { useRoute, useRouter } from "vue-router";
import TheSelect from "@/components/Ui/UiSelect.vue";
import { computed, ref, watch } from "vue";
import useGetRestaurant from "@/composables/usePartner";
import UiInput from "@/components/Ui/UiInput.vue";
import { useCartStore } from "@/stores/useCartStore";
import { sortByPrice } from "@/utils/sortByPrice";
import { filterByKeysAndInput } from "@/utils/filterByInputAndKeys";
import FoodCard from "@/components/FoodCard.vue";

const store = useCartStore();
const route = useRoute();
const router = useRouter();
const inputValue = ref("");

const selectedSort = ref("");
const sortOptions = [
  { value: "cheap", name: "Сначала Дешевые" },
  { value: "expensive", name: "Сначала Дорогие" },
];

const addToCardHandler = (item) => {
  store.add(item);
};

const { partner } = useGetRestaurant(route.params.id);

const filteredValue = computed(() => {
  return filterByKeysAndInput(partner.value.products, inputValue.value, [
    "name",
    "description",
  ]);
});

watch(selectedSort, (newValue) => {
  partner.value.products = sortByPrice(partner.value?.products, newValue);
});

const products = computed(() => {
  return partner.value?.products ?? [];
});
</script>

<style scoped>
.rating {
  background-image: url("@/assets/img/icon/rating.svg");
  background-repeat: no-repeat;
  background-position: 0 7px;
  padding-left: 20px;
  margin-right: 26px;
  color: #ffc107;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
}

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.price,
.category {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 32px;
}

.price {
  margin-right: 10px;
}

.category {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
}

.price:after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #8c8c8c;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: 10px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  flex-wrap: wrap;
}

@media (max-width: 1366px) {
  .rating {
    margin-right: 15px;
  }

  .category,
  .price {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .card-info {
    flex-wrap: wrap;
  }

  .card .rating {
    flex-basis: 100%;
  }

  .actions {
    margin: 10px 0 0 0;
  }
}

@media (max-width: 578px) {
  .section-title {
    font-size: 20px;
  }
}
</style>
