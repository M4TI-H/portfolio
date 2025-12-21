<script setup lang="ts">
const projectsData = [
  {
    name: "Lazur E-commerce",
    url: "https://github.com/M4TI-H/lazur",
    description:
      "I developed this project to refine my skills in building responsive applications and master advanced Supabase features. It's a full stack app designed with a focus on scalability and modern architecture based on Vue and Nuxt. The project demonstrates advanced global state management and deep Supabase integration (Auth, DB), with the entire environment containerized using Docker.",
    icons: [
      "logos:typescript-icon",
      "logos:nuxt-icon",
      "logos:vue",
      "logos:tailwindcss-icon",
      "logos:nodejs-icon",
      "logos:supabase-icon",
      "logos:docker-icon",
    ],
  },
  {
    name: "JJ English School Website",
    url: "https://github.com/M4TI-H/jjenglishschool",
    description: "",
    icons: [
      "logos:typescript-icon",
      "logos:nuxt-icon",
      "logos:vue",
      "logos:tailwindcss-icon",
      "logos:nodejs-icon",
      "logos:supabase-icon",
      "logos:docker-icon",
    ],
  },
  {
    name: "Penny Tracker",
    url: "https://github.com/M4TI-H/PennyTracker",
    description: "",
    icons: [
      "logos:typescript-icon",
      "logos:nuxt-icon",
      "logos:vue",
      "logos:tailwindcss-icon",
      "logos:fastapi-icon",
      "logos:mysql-icon",
      "logos:figma",
    ],
  },
  {
    name: "Wordle Clone",
    url: "https://github.com/M4TI-H/Wordle-Clone",
    description: "",
    icons: ["logos:javascript", "logos:react", "logos:tailwindcss-icon"],
  },
  {
    name: "PinLink",
    url: "https://github.com/M4TI-H/PinLink",
    description: "",
    icons: ["logos:javascript", "logos:react", "logos:tailwindcss-icon"],
  },
];
</script>

<template>
  <section
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:application-brackets-outline" size="24" />
      <h2 class="font-playfair text-xl sm:text-2xl font-semibold">Projects</h2>
    </div>
    <ProjectCard
      v-for="(project, id) in projectsData"
      :key="id"
      :data="project"
    />
  </section>
</template>
