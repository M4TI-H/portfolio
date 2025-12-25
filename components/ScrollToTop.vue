<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const displayBtn = ref<boolean>(false);
let calculatePositionFlag: boolean = false;

const onScroll = () => {
  if (!calculatePositionFlag) {
    requestAnimationFrame(() => {
      const positionY = window.scrollY;

      displayBtn.value = positionY > 200;
      calculatePositionFlag = false;
    });
    calculatePositionFlag = true;
  }
};

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button
    @click="handleScroll"
    class="group z-50 fixed bottom-4 right-4 flex items-center justify-center text-emerald-100 bg-emerald-600 active:bg-emerald-700 hover:bg-emerald-700 cursor-pointer size-12 rounded-full transition-all duration-300 ease-in-out shadow-lg"
    :class="[
      displayBtn
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10 pointer-events-none',
    ]"
  >
    <Icon
      name="material-symbols:arrow-upward-rounded"
      class="size-6 transition-transform duration-300 group-hover:-translate-y-1"
    />
  </button>
</template>
