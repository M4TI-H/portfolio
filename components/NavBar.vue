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

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });

    visibleDrawer.value = false;
  }
};

const currentSection = ref<any>();

let timer: any;
let observer: IntersectionObserver | null = null;

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);

  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  const sectionsIds = [
    "background",
    "projects",
    "achievements",
    "certificates",
    "aboutme",
  ];

  sectionsIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      observer?.observe(element);
    }
  });
});
</script>

<template>
  <div
    class="fixed z-50 w-full sm:backdrop-blur-sm xl:rounded-b-lg lg:px-8 xl:px-24 xl:pt-8"
  >
    <div
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative z-30 w-full h-16 shrink-0 flex items-center bg-white border border-gray-300 xl:rounded-xl p-4 sm:p-8 sm:shadow-sm"
    >
      <TextAnimation :text="`Mateusz Hann`" :active="isHovered" />

      <button
        @click="visibleDrawer = !visibleDrawer"
        class="active:bg-gray-100 flex lg:hidden items-center justify-center p-2 rounded-lg transition-colors ml-auto"
      >
        <Icon
          :name="
            !visibleDrawer ? 'material-symbols:menu' : 'material-symbols:close'
          "
          class="text-neutral-800 text-xl transition-transform duration-300"
          :class="{ 'rotate-180': visibleDrawer }"
        />
      </button>

      <div class="hidden h-full lg:flex items-center gap-8 ml-auto">
        <button
          @click="scrollToSection('background')"
          class="cursor-pointer hover:bg-gray-100 p-1 xl:p-2 rounded-lg select-none transition-colors"
          :class="
            currentSection === 'background'
              ? 'text-emerald-600 font-semibold'
              : 'text-neutral-600'
          "
        >
          My background
        </button>

        <button
          @click="scrollToSection('projects')"
          class="cursor-pointer hover:bg-gray-100 p-1 xl:p-2 rounded-lg select-none transition-colors"
          :class="
            currentSection === 'projects'
              ? 'text-emerald-600 font-semibold'
              : 'text-neutral-600'
          "
        >
          Projects
        </button>

        <button
          @click="scrollToSection('achievements')"
          class="cursor-pointer hover:bg-gray-100 p-1 xl:p-2 rounded-lg select-none transition-colors"
          :class="
            currentSection === 'achievements'
              ? 'text-emerald-600 font-semibold'
              : 'text-neutral-600'
          "
        >
          Achievements
        </button>

        <button
          @click="scrollToSection('certificates')"
          class="cursor-pointer hover:bg-gray-100 p-1 xl:p-2 rounded-lg select-none transition-colors"
          :class="
            currentSection === 'certificates'
              ? 'text-emerald-600 font-semibold'
              : 'text-neutral-600'
          "
        >
          Certificates
        </button>

        <button
          @click="scrollToSection('aboutme')"
          class="cursor-pointer hover:bg-gray-100 p-1 xl:p-2 rounded-lg select-none transition-colors"
          :class="
            currentSection === 'aboutme'
              ? 'text-emerald-600 font-semibold'
              : 'text-neutral-600'
          "
        >
          About me
        </button>

        <button
          @click="selectedClock12 = !selectedClock12"
          class="text-lg xl:text-xl font-semibold ml-auto font-playfair hover:bg-emerald-600 hover:text-neutral-100 px-2 py-1 rounded-xl select-none"
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
        class="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm"
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
        <button
          @click="scrollToSection('background')"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
        >
          My background
        </button>

        <button
          @click="scrollToSection('projects')"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
        >
          Projects
        </button>

        <button
          @click="scrollToSection('achievements')"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
        >
          Achievements
        </button>

        <button
          @click="scrollToSection('certificates')"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
        >
          Certificates
        </button>

        <button
          @click="scrollToSection('aboutme')"
          class="w-full p-4 text-center active:bg-gray-100 hover:bg-gray-50 transition-colors select-none border-b border-gray-100"
        >
          About me
        </button>
      </div>
    </Transition>
  </div>
</template>
