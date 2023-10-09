import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const auth = ref(false);

  const login = () => {
    auth.value = true;
  };

  const logout = () => {
    auth.value = false;
  };

  return {
    auth,
    login,
    logout,
  };
});
