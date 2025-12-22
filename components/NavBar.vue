<script setup lang="ts">
const visibleDrawer = ref<boolean>(false);
const time12h = ref<string>("");
const time24h = ref<string>("");
const selectedClock12 = ref<boolean>(false);
const isHovered = ref<boolean>(false);

const updateTime = () => {
  const now = new Date();

  time12h.value = now.toLocaleString("en-US", {
    timeZone: "Europe/Warsaw",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  time24h.value = now.toLocaleString("en-GB", {
    timeZone: "Europe/Warsaw",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

let timer: any;

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});
</script>

<template>
  <div class="fixed sm:relative z-20 w-full max-w-7xl">
    <div
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative z-30 w-full h-16 shrink-0 flex items-center bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 sm:shadow-sm"
    >
      <TextAnimation :text="`Mateusz Hann`" :active="isHovered" />

      <button
        @click="selectedClock12 = !selectedClock12"
        class="w-22 flex sm:hidden text-xl font-semibold ml-auto mr-2 font-playfair select-none"
      >
        {{ selectedClock12 ? time12h : time24h }}
      </button>

      <button
        @click="visibleDrawer = !visibleDrawer"
        class="active:bg-gray-100 flex md:hidden items-center justify-center p-2 rounded-lg transition-colors"
      >
        <Icon
          :name="
            !visibleDrawer ? 'material-symbols:menu' : 'material-symbols:close'
          "
          class="text-neutral-800 text-xl transition-transform duration-300"
          :class="{ 'rotate-180': visibleDrawer }"
        />
      </button>

      <div class="hidden h-full md:flex items-center gap-8 ml-auto">
        <NuxtLink
          to="/#background"
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >Background</NuxtLink
        >

        <NuxtLink
          to="/#projects"
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/#achievements"
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >Achievements</NuxtLink
        >
        <NuxtLink
          to="/#aboutme"
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >About me</NuxtLink
        >

        <button
          @click="selectedClock12 = !selectedClock12"
          class="w-32 text-xl font-semibold ml-auto mr-2 font-playfair hover:bg-emerald-600 hover:text-neutral-100 px-2 py-1 rounded-xl select-none transition-colors"
        >
          {{ selectedClock12 ? time12h : time24h }}
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visibleDrawer"
        @click="visibleDrawer = false"
        class="fixed inset-0 w-full h-screen z-10 bg-black/40 backdrop-blur-sm"
      ></div>
    </Transition>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="visibleDrawer"
        class="absolute left-0 w-full z-20 bg-white border-x border-b border-gray-300 shadow-lg flex flex-col sm:mt-2 rounded-b-xl overflow-hidden"
      >
        <NuxtLink
          to="/#background"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
          @click="visibleDrawer = false"
          >Background</NuxtLink
        >
        <NuxtLink
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
          @click="visibleDrawer = false"
          >Projects</NuxtLink
        >
        <NuxtLink
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
          @click="visibleDrawer = false"
          >Achievements</NuxtLink
        >
        <NuxtLink
          to="/#aboutme"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
          @click="visibleDrawer = false"
          >About me</NuxtLink
        >
      </div>
    </Transition>
  </div>
</template>
