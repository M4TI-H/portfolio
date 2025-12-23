<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
}>();
</script>

<template>
  <div
    class="h-12 w-44 flex items-center justify-between px-4 bg-neutral-200 border border-gray-400 rounded-full hover:ring-1 hover:ring-emerald-600 hover:border-emerald-600 mx-auto sm:mx-0"
  >
    <Icon :name="icon" class="size-8" />
    <div class="w-24 h-full flex justify-center items-center">
      <p class="text-center text-neutral-500 select-none">
        {{ title }}
      </p>
    </div>
  </div>
</template>
