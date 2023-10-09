<template>
  <div class="food-card">
    <img :src="image" :alt="name" class="food-card-image" />
    <div class="food-card-text">
      <div class="food-card-heading">
        <h3 class="food-card-title food-card-title-reg">{{ name }}</h3>
      </div>
      <div class="food-card-info">
        <div class="food-card-ingredients">
          {{ description }}
        </div>
      </div>
      <div class="food-card-buttons">
        <button
          class="button button-primary button-add-cart"
          @click="addHandler(id, name, price)"
        >
          <span class="button-food-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="food-card-price-bold">{{ price }} ₽</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["on-add"]);

const addHandler = (id, name, price) => {
  emits("on-add", { id, name, price });
};
</script>

<style scoped lang="scss">
.food-card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow: hidden;
  text-decoration: none;

  &-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  &-text {
    padding: 20px 23px 35px;
    min-height: 275px;
    display: flex;
    flex-direction: column;
  }

  &-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &-title {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
  }

  &-title-reg {
    font-weight: 400;
  }

  &-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &-buttons {
    display: flex;
    margin-top: 24px;
    flex-grow: 1;
    align-items: flex-end;
  }

  &-price-bold {
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    margin-left: 30px;
  }

  &-ingredients {
    color: #8c8c8c;
    font-size: 18px;
    line-height: 21px;
  }

  @media (max-width: 768px) {
    &-info {
      flex-wrap: wrap;
    }

    &-title {
      font-size: 18px;
    }

    &-text {
      min-height: 290px;
    }

    &-price-bold {
      margin-left: 20px;
    }
  }

  @media (max-width: 578px) {
    & {
      flex-basis: 100%;
    }

    &-text {
      min-height: auto;
    }

    &-image {
      width: 100%;
    }
  }
}
</style>
