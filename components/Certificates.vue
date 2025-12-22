<script setup lang="ts">
const isHovered = ref<boolean>(false);

const certificateData = [
  {
    exam: "C1 Advanced (CAE)",
    score: "199/210",
    date: "June 2024",
    description:
      "Certification that validates the in-depth English skills required to communicate in demanding professional environments.",
  },
  {
    exam: "INF.04 Professional Exam",
    score: "90%",
    date: "June 2023",
    description: "Application design, programming and testing.",
  },
  {
    exam: "INF.03 Professional Exam",
    score: "95%",
    date: "June 2022",
    description:
      "Creating and administering websites, web applications, and databases.",
  },
];
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:certificate-outline" size="24" />
      <TextAnimation :text="`Certificates`" :active="isHovered" />
    </div>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(cert, id) in certificateData"
        :key="id"
        class="flex-1 flex flex-col border border-neutral-300 rounded-lg p-4 gap-2"
      >
        <div class="w-full flex items-center justify-between">
          <h3 class="text-xl font-semibold">{{ cert.exam }}</h3>
          <p class="text-sm text-neutral-500">{{ cert.date }}</p>
        </div>
        <p class="text-lg">{{ cert.description }}</p>
        <p class="text-lg font-semibold">
          Score: <span class="text-emerald-600">{{ cert.score }} </span>
        </p>
      </div>
    </div>
  </section>
</template>
