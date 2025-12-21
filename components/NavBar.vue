<script setup lang="ts">
import { ref } from "vue";

const visibleDrawer = ref<boolean>(false);
</script>

<template>
  <div class="relative w-full max-w-7xl">
    <div
      class="relative z-20 w-full h-16 shrink-0 flex items-center bg-white border border-gray-300 rounded-xl p-4 sm:p-8 shadow-sm"
    >
      <p class="text-xl text-neutral-800 font-bold whitespace-nowrap">
        Mateusz Hann
      </p>

      <button
        @click="visibleDrawer = !visibleDrawer"
        class="active:bg-gray-100 flex md:hidden items-center justify-center p-2 rounded-lg ml-auto transition-colors"
      >
        <i
          :class="visibleDrawer ? 'pi pi-times' : 'pi pi-bars'"
          class="text-neutral-800 text-lg"
        ></i>
      </button>

      <div class="hidden h-full md:flex items-center gap-8 ml-auto">
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600"
          >About me</a
        >
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600"
          >Projects</a
        >
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600"
          >Achievements</a
        >
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600"
          >Contact</a
        >
      </div>
    </div>

    <div
      v-if="visibleDrawer"
      class="absolute left-0 w-full z-10 bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col mt-2 *:md:hidden"
    >
      <a
        class="w-full p-4 text-center active:bg-gray-100 select-none"
        @click="visibleDrawer = false"
        >About me</a
      >
      <a
        class="w-full p-4 text-center active:bg-gray-100 select-none"
        @click="visibleDrawer = false"
        >Projects</a
      >
      <a
        class="w-full p-4 text-center active:bg-gray-100 select-none"
        @click="visibleDrawer = false"
        >Achievements</a
      >
      <a
        class="w-full p-4 text-center active:bg-gray-100 select-none"
        @click="visibleDrawer = false"
        >Contact</a
      >
    </div>
  </div>
</template>
