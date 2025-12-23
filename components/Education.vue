<script setup lang="ts">
const isHovered = ref<boolean>(false);

const educationData = [
  {
    school: `"Elektryk" Technical School`,
    start: "Sep 2019",
    end: "June 2024",
    profession: "Programming Technician",
    description:
      "During my studies, I acquired a solid foundation in software engineering. I learned OOP logic in C++ and C#, creating my first desktop and mobile applications. Simultaneously, I developed my skills in building responsive websites. My education also covered operating systems, databases, and computer networks.",
  },
  {
    school: "Gdańsk University of Technology",
    start: "Oct 2024",
    end: "current (III sem.)",
    profession: "Data Engineering (B. Eng.)",
    description:
      "Currently in my 3rd semester, I focus on data processing and statistical analysis using Python. I am actively expanding the solid programming foundation built in technical school. My curriculum also includes business-oriented subjects like economics and management, allowing me to understand the data context better.",
  },
];
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="flex-1 flex flex-col bg-white border border-gray-300 lg:rounded-xl p-4 sm:p-8 gap-4 sm:gap-2 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="material-symbols:school-outline-rounded" size="24" />
      <TextAnimation :text="`Education`" :active="isHovered" />
    </div>
    <div class="flex flex-col gap-4">
      <div v-for="(e, id) in educationData" :key="id" class="w-full flex gap-4">
        <Icon
          name="material-symbols:expand-circle-right-rounded"
          class="size-6 text-emerald-600 shrink-0 mt-1"
        />
        <div class="flex flex-col gap-2">
          <p class="sm:text-lg">
            <span class="font-semibold">{{ e.profession }}</span>
            <br />
            at {{ e.school }}
            <br />
            <span class="text-sm sm:text-base text-neutral-500"
              >{{ e.start }} - {{ e.end }}</span
            >
          </p>
          <p class="indent-4 text-neutral-500">{{ e.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
