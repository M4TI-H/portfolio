<script setup lang="ts">
const isHovered = ref<boolean>(false);
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="flex-1 flex flex-col bg-white border border-gray-300 rounded-xl p-4 sm:p-8 gap-4 sm:gap-2 shadow-sm"
  >
    <div class="flex items-center gap-4">
      <i class="pi pi-graduation-cap text-xl text-neutral-800"></i>
      <h2
        class="text-xl sm:text-2xl text-neutral-800 font-semibold"
        :class="[
          isHovered ? 'underline decoration-8 decoration-emerald-600' : '',
        ]"
      >
        Education
      </h2>
    </div>
    <div class="flex flex-col gap-2">
      <div
        class="flex flex-col-reverse sm:flex-row sm:items-start justify-between"
      >
        <p class="sm:text-lg text-neutral-600">IX 2019 - VI 2024</p>
        <p class="sm:text-lg text-neutral-800 sm:text-end">
          "Elektryk" Technical School
          <br />
          <span class="font-semibold">Programming Technician</span>
        </p>
      </div>
      <p class="text-neutral-600 sm:px-2">
        During my studies, I acquired a solid foundation in software
        engineering. I learned OOP logic in C++ and C#, creating my first
        desktop and mobile applications. Simultaneously, I developed my skills
        in building responsive websites. My education also covered operating
        systems, databases, and computer networks.
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <div
        class="flex flex-col-reverse sm:flex-row sm:items-start justify-between mt-6"
      >
        <p class="sm:text-lg text-neutral-600">X 2024 - Present</p>
        <p class="sm:text-lg text-neutral-800 sm:text-end">
          Gdańsk University of Technology
          <br />
          <span class="font-semibold">Data Engineering</span>
        </p>
      </div>
      <p class="text-neutral-600 sm:px-2">
        Currently in my 3rd semester, I focus on data processing and statistical
        analysis using Python. I am actively expanding the solid programming
        foundation built in technical school. My curriculum also includes
        business-oriented subjects like economics and management, allowing me to
        understand the data context better.
      </p>
    </div>
  </section>
</template>
