<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
}>();
</script>

<template>
  <div
    class="size-16 md:size-24 flex flex-col items-center justify-center gap-4 p-2 bg-neutral-200 border border-gray-400 rounded-xl hover:border-2 hover:border-emerald-600"
  >
    <Icon
      :name="icon"
      class="size-12 lg:size-16 transition-transform duration-300 group-hover:scale-110"
    />
    <p class="hidden md:flex text-xs sm:text-base text-neutral-500 select-none">
      {{ title }}
    </p>
  </div>
</template>
