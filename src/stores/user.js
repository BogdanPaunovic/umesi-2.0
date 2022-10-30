import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const doubleCount = computed(() => user.value);
  function increment() {
    console.log(`Hello: ${user.value}`);
  }

  return { user, doubleCount, increment };
});
