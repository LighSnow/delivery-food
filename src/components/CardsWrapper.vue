<script setup></script>

<template>
  <div class="cards">
    <slot />
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 578px) {
    grid-template-columns: 1fr;
  }
}
</style>
