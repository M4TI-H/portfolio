<script setup lang="ts">
const isHovered = ref<boolean>(false);
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="flex-1 bg-white border border-gray-300 rounded-xl p-4 sm:p-8 shadow-sm"
  >
    <div class="flex items-center gap-4">
      <i class="pi pi-briefcase text-xl text-neutral-800"></i>
      <h2
        class="text-xl sm:text-2xl text-neutral-800 font-semibold"
        :class="[
          isHovered ? 'underline decoration-8 decoration-emerald-600' : '',
        ]"
      >
        Experience
      </h2>
    </div>
  </section>
</template>
