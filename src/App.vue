<script setup>
import { RouterView } from "vue-router";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { ModalsContainer } from "vue-final-modal";
</script>

<template>
  <the-header />
  <main class="main">
    <RouterView />
    <ModalsContainer />
  </main>
  <the-footer />
</template>

<style scoped>
.main {
  background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 0) 1.04%,
    #f5f5f5 100%
  );
  padding: 0 0 30px 0;
}
</style>
