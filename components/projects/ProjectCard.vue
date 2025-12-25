<script setup lang="ts">
const visibleDrawer = ref<boolean>(false);

const props = defineProps<{
  data: any;
}>();

const displayGallery = ref<boolean>(false);
const activeIndex = ref<number>(0);
const isFullscreen = ref<boolean>(true);
</script>

<template>
  <div class="flex flex-col w-full max-w-7xl">
    <button
      @click="visibleDrawer = !visibleDrawer"
      class="w-full h-16 lg:h-24 flex items-center justify-between px-8 bg-neutral-200 hover:bg-neutral-300 border border-gray-400 hover:border-emerald-600 mx-auto sm:mx-0 outline-0 transition-all duration-300 z-10"
      :class="[
        visibleDrawer
          ? 'rounded-t-xl border-b-transparent bg-neutral-300'
          : 'rounded-xl',
      ]"
    >
      <h2 class="font-playfair text-lg sm:text-2xl font-semibold">
        {{ data.name }}
      </h2>

      <div
        class="bg-white rounded-full size-2 flex items-center justify-center p-2 shrink-0"
      >
        <Icon
          name="material-symbols:arrow-circle-right-rounded"
          class="bg-emerald-600 size-6 sm:size-8 shrink-0 transition-transform duration-800"
          :class="{ 'rotate-90': visibleDrawer }"
        />
      </div>
    </button>

    <div
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :class="visibleDrawer ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden w-full">
        <div
          class="flex flex-col md:flex-row bg-neutral-200 border-x border-b border-gray-300 rounded-b-xl p-4 gap-6 lg:gap-8 opacity-0 transition-opacity duration-500 delay-50"
          :class="{ 'opacity-100': visibleDrawer }"
        >
          <div
            class="w-full md:w-1/3 lg:w-[400px] flex flex-col gap-4 shrink-0"
          >
            <div
              class="relative w-full aspect-video bg-neutral-200 rounded-lg overflow-hidden cursor-pointer group shadow-sm transition-shadow"
              @click="displayGallery = true"
            >
              <img
                v-if="data.cover"
                :src="data.cover"
                :alt="data.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
              />
              <div
                class="absolute md:hidden top-2 right-2 flex items-center gap-2 bg-black/50 px-2 py-1 rounded-lg"
              >
                <p class="text-neutral-200">Click to expand</p>
                <Icon
                  name="material-symbols:expand-content-rounded"
                  class="size-6 text-neutral-200"
                />
              </div>

              <div
                class="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors duration-300"
              >
                <button
                  class="bg-black/50 text-neutral-100 outline-none p-2 rounded-lg flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm select-none"
                >
                  <Icon
                    name="material-symbols:imagesmode-outline"
                    class="size-6"
                  />
                  See gallery
                </button>
              </div>
            </div>

            <Galleria
              v-model:visible="displayGallery"
              v-model:activeIndex="activeIndex"
              :value="isFullscreen ? data.imagesFull : data.imagesMobile"
              :circular="true"
              fullScreen
              :showItemNavigators="true"
              :showThumbnails="false"
              maskClass="relative !bg-black/80 backdrop-blur-md select-none"
            >
              <template #header>
                <button
                  @click="displayGallery = false"
                  class="absolute top-4 right-4 z-50 flex items-center justify-center p-2 rounded-full transition-colors duration-300 backdrop-blur-sm outline-none"
                >
                  <Icon
                    name="material-symbols:close-rounded"
                    class="size-6 text-neutral-100"
                  />
                </button>

                <button
                  @click="
                    isFullscreen = !isFullscreen;
                    activeIndex = 0;
                  "
                  class="absolute top-4 left-4 z-50 flex items-cente text-sm text-neutral-200 font-semibold gap-2 py-2 px-4 bg-black/60 hover:bg-black rounded-lg transition-all duration-300 backdrop-blur-sm outline-none"
                >
                  <span class="hidden sm:inline"
                    >Switch to
                    {{ isFullscreen ? "Mobile" : "Full Screen" }}</span
                  >
                  <Icon
                    :name="
                      isFullscreen
                        ? 'material-symbols:smartphone-outline'
                        : 'material-symbols:desktop-windows-outline-rounded'
                    "
                    class="size-5"
                  />
                </button>
              </template>
              <template #item="slotProps">
                <img
                  :src="slotProps.item"
                  :alt="data.name"
                  class="block object-contain w-auto h-auto max-w-[90vw] max-h-[85vh]"
                />
              </template>

              <template #previousitemicon>
                <button
                  class="bg-black/50 hover:bg-emerald-600 flex items-center justify-center p-3 rounded-full transition-colors duration-300 group backdrop-blur-sm outline-none"
                >
                  <Icon
                    name="material-symbols:chevron-left-rounded"
                    class="size-8 text-neutral-100"
                  />
                </button>
              </template>

              <template #nextitemicon>
                <button
                  class="bg-black/50 hover:bg-emerald-600 flex items-center justify-center p-3 rounded-full transition-colors duration-300 backdrop-blur-sm outline-none"
                >
                  <Icon
                    name="material-symbols:chevron-right-rounded"
                    class="size-8 text-neutral-100"
                  />
                </button>
              </template>

              <template #closeicon class="hidden"> </template>
            </Galleria>
          </div>

          <div class="flex flex-col gap-4 w-full sm:pt-2 flex-1">
            <div class="flex flex-wrap items-center gap-2 mx-auto sm:mx-0">
              <Icon
                v-for="(icon, id) in data.icons"
                :key="id"
                :name="icon"
                class="size-6 sm:size-8"
              />
            </div>

            <p class="text-neutral-600 text-justify sm:text-left">
              {{ data.description }}
            </p>

            <div>
              <p class="text-neutral-600 font-semibold mb-1">What I learned:</p>
              <ul class="list-inside list-disc">
                <li
                  v-for="(skill, id) in data.learned"
                  :key="id"
                  class="text-neutral-600"
                >
                  {{ skill }}
                </li>
              </ul>
            </div>

            <div
              class="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-4"
            >
              <NuxtLink
                :to="data.url"
                target="_blank"
                class="w-full sm:w-auto sm:flex-1 px-4 h-10 flex items-center justify-center gap-2 border border-neutral-800 text-neutral-200 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-800 rounded-lg transition-colors duration-300"
              >
                Visit on
                <Icon
                  name="mdi:github"
                  class="size-6 text-neutral-200 transition-colors"
                />
              </NuxtLink>
              <NuxtLink
                v-if="data.url2"
                :to="data.url2"
                target="_blank"
                class="w-full sm:w-auto sm:flex-1 px-4 h-10 flex items-center justify-center gap-2 border border-emerald-600 text-neutral-200 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-700 rounded-lg transition-colors duration-300"
              >
                Open in
                <Icon
                  name="mdi:web"
                  class="size-6 text-neutral-200 transition-colors"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
