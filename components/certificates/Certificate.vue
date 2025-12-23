<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <div
    class="relative flex-1 flex flex-col border border-neutral-300 rounded-lg p-4 gap-2 bg-white sm:hover:scale-110 hover:z-40 transition-transform duration-200"
  >
    <div class="absolute -bottom-4 right-4 flex flex-col items-center">
      <div
        class="relative z-20 size-12 flex items-center justify-center rounded-full bg-yellow-500 border border-amber-700 shadow-sm"
      >
        <Icon name="material-symbols:verified" class="text-amber-700 size-8" />
      </div>

      <div
        class="w-8 h-12 bg-emerald-600 -mt-6 z-10 shadow-sm"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)"
      ></div>
    </div>
    <div class="w-full flex items-center justify-between">
      <h3 class="text-xl font-semibold">{{ data.exam }}</h3>
      <p class="text-sm text-neutral-500">{{ data.date }}</p>
    </div>
    <p class="text-lg">{{ data.description }}</p>
    <p class="text-xl font-semibold mt-auto">
      Score: <span class="text-emerald-600">{{ data.score }} </span>
    </p>
  </div>
</template>
