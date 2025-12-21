<script setup lang="ts">
const visibleDrawer = ref<boolean>(false);
const time12h = ref<string>("");
const time24h = ref<string>("");
const selectedClock12 = ref<boolean>(false);

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
      class="relative z-20 w-full h-16 shrink-0 flex items-center bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 sm:shadow-sm"
    >
      <p
        class="font-playfair sm:text-xl text-neutral-800 font-bold whitespace-nowrap select-none"
      >
        Mateusz Hann
      </p>

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
          class="text-neutral-800 text-xl"
        />
      </button>

      <div class="hidden h-full md:flex items-center gap-8 ml-auto">
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >About me</a
        >
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >Projects</a
        >
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >Achievements</a
        >
        <a
          class="text-neutral-800 cursor-pointer hover:underline underline-offset-2 decoration-4 decoration-emerald-600 select-none"
          >Contact</a
        >
        <button
          @click="selectedClock12 = !selectedClock12"
          class="w-30 text-xl font-semibold ml-auto mr-2 font-playfair hover:bg-emerald-600 hover:text-neutral-100 px-2 py-1 rounded-xl select-none"
        >
          {{ selectedClock12 ? time12h : time24h }}
        </button>
      </div>
    </div>

    <div
      v-if="visibleDrawer"
      class="fixed w-full h-screen z-10 bg-black/50"
    ></div>
    <div
      v-if="visibleDrawer"
      class="absolute left-0 w-full z-20 bg-white border sm:border-gray-300 sm:rounded-xl shadow-lg flex flex-col sm:mt-2 *:md:hidden"
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
