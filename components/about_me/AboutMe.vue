<script setup lang="ts">
const isHovered = ref<boolean>(false);
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 lg:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:person-outline" size="24" />
      <TextAnimation :text="`About me`" :active="isHovered" />
    </div>
    <div class="w-full flex justify-between">
      <div class="w-full max-w-[16rem] sm:w-2/5 h-full">
        <img
          class="w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1612983857030-0de0831ff4b7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div
        class="w-full sm:w-3/5 h-full flex flex-col justify-between gap-4"
      ></div>
    </div>
  </section>
</template>
