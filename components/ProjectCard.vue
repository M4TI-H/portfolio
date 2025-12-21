<script setup lang="ts">
const visibleDrawer = ref<boolean>(false);

const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <div class="flex flex-col w-full max-w-7xl">
    <button
      @click="visibleDrawer = !visibleDrawer"
      class="w-full h-24 flex items-center justify-between px-4 bg-neutral-200 hover:bg-neutral-300 border border-gray-400 hover:border-emerald-600 mx-auto sm:mx-0 outline-0 transition-all duration-300 z-10"
      :class="[
        visibleDrawer
          ? 'rounded-t-xl border-b-transparent bg-neutral-300'
          : 'rounded-xl',
      ]"
    >
      <h2 class="font-playfair text-lg sm:text-2xl font-semibold">
        {{ data.name }}
      </h2>

      <Icon
        name="material-symbols:arrow-circle-right-rounded"
        class="items-center justify-center p-2 rounded-lg size-6 sm:size-8 text-emerald-600 shrink-0 transition-transform duration-800"
        :class="{ 'rotate-90': visibleDrawer }"
      />
    </button>

    <div
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :class="visibleDrawer ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden w-full">
        <div
          class="flex flex-col md:flex-row bg-neutral-200 border-x border-b border-gray-400 rounded-b-xl p-4 gap-4 -mt-[1px] opacity-0 transition-opacity duration-500 delay-50"
          :class="{ 'opacity-100': visibleDrawer }"
        >
          <div class="w-full md:w-96 flex flex-col gap-4 shrink-0">
            <div
              class="w-full h-52 bg-neutral-300 rounded-lg shadow-inner"
            ></div>
          </div>

          <div class="flex flex-col gap-4 w-full pt-2">
            <div class="flex flex-wrap items-center gap-3">
              <Icon
                v-for="(icon, id) in data.icons"
                :key="id"
                :name="icon"
                class="size-8"
              />
            </div>

            <p class="text-neutral-600">
              {{ data.description }}
            </p>

            <NuxtLink
              :to="data.url"
              target="_blank"
              class="w-32 h-10 mt-auto flex items-center justify-center gap-2 border border-neutral-800 text-neutral-200 bg-neutral-700 hover:bg-neutral-800 hover:text-neutral-200 rounded-lg transition-colors duration-300"
            >
              Visit on
              <Icon
                name="mdi:github"
                class="size-6 text-neutral-200 transition-colors"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
