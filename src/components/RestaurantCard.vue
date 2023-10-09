<template>
  <div class="card">
    <img :src="image" :alt="name" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ name }}</h3>
        <span class="card-tag tag">{{ time_of_delivery }} мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="card-rating">{{ stars }}</div>
        <div class="card-price">От {{ price }} ₽</div>
        <div class="card-category">{{ kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  time_of_delivery: {
    type: Number,
    default: null,
  },
  stars: {
    type: Number,
    default: null,
  },
  price: {
    type: Number,
    default: null,
  },
  kitchen: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.card {
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

  &-tag {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    background: #262626;
    border-radius: 2px;
    padding: 1px 8px;
  }

  &-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &-rating {
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

  &-price,
  &-category {
    color: #8c8c8c;
    font-size: 18px;
    line-height: 32px;
  }

  &-price {
    margin-right: 10px;

    &:after {
      content: "";
      width: 5px;
      height: 5px;
      background-color: #8c8c8c;
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      margin-left: 10px;
    }
  }

  &-category {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 150px;
  }

  @media (max-width: 1366px) {
    &-rating {
      margin-right: 15px;
    }

    &-category,
    &-price {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    &-info {
      flex-wrap: wrap;
    }

    &-rating {
      flex-basis: 100%;
    }

    &-title {
      font-size: 18px;
    }
  }

  @media (max-width: 578px) {
    &-image {
      width: 100%;
    }
  }
}
</style>
