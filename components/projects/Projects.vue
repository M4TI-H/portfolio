<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const isHovered = ref<boolean>(false);
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
    learned: [
      "Responsive design",
      "Supabase's advanced features",
      "Global state management using Pinia stores",
    ],
    imagesMobile: ["/projects/unavailable.jpg"],
    cover: "/projects/unavailable.jpg",
  },
  {
    name: "JJ English School Website",
    url: "https://github.com/M4TI-H/jjenglishschool",
    url2: "https://jjenglishschool.pl",
    description:
      "Delivered a comprehensive digital solution for a language school to streamline their operations. I built a custom CMS on top of Supabase, empowering the client to update content independently. To improve user experience, I integrated external scheduling systems, allowing students to view the class calendar and book sessions directly through the platform.",
    icons: [
      "logos:typescript-icon",
      "logos:nuxt-icon",
      "logos:vue",
      "logos:tailwindcss-icon",
      "logos:nodejs-icon",
      "logos:supabase-icon",
      "logos:docker-icon",
    ],
    learned: [
      "First time working directly with a client",
      "Integration with external systems (Bookero, EmailJS)",
      "Creating user friendly interface",
    ],
    imagesMobile: [
      "/projects/jjenglish/mobile/1.png",
      "/projects/jjenglish/mobile/2.png",
      "/projects/jjenglish/mobile/3.png",
    ],
    imagesFull: [
      "/projects/jjenglish/full/1.png",
      "/projects/jjenglish/full/2.png",
      "/projects/jjenglish/full/3.png",
    ],
    cover: "/projects/jjenglish/full/1.png",
  },
  {
    name: "Penny Tracker",
    url: "https://github.com/M4TI-H/PennyTracker",
    description:
      "A key challenge I faced was working with backend development in Python for the first time. This required learning how to structure a scalable and maintainable application architecture, manage data flow between the frontend and backend, and implement reliable endpoints for storing and retrieving user financial data. The project is still in development, and I plan to expand its capabilities by introducing new features and applying my Python data analysis skills.",
    icons: [
      "logos:typescript-icon",
      "logos:nuxt-icon",
      "logos:vue",
      "logos:tailwindcss-icon",
      "logos:fastapi-icon",
      "logos:mysql-icon",
      "logos:figma",
    ],
    learned: [
      "Mastering TailwindCSS",
      "Soon to be reworked - global state management",
      "Soon to be reworked - FastAPI integration",
      "Responsive design based on Figma project prepared beforehand",
    ],
    imagesFull: ["/projects/unavailable.jpg"],
    cover: "/projects/unavailable.jpg",
  },
  {
    name: "Wordle Clone",
    url: "https://github.com/M4TI-H/Wordle-Clone",
    description:
      "A practice project created to learn the basics of Tailwind CSS. I recreated the core mechanics of Wordle to understand the utility-first workflow and grid system.",
    icons: ["logos:javascript", "logos:react", "logos:tailwindcss-icon"],
    learned: [
      "TailwindCSS flexbox and grid layout",
      "React fundamentals",
      "Code refactoring - good decomposition practices",
    ],
    imagesMobile: [
      "/projects/wordle/mobile/1.png",
      "/projects/wordle/mobile/2.png",
      "/projects/wordle/mobile/3.png",
    ],
    imagesFull: [
      "/projects/wordle/full/1.png",
      "/projects/wordle/full/2.png",
      "/projects/wordle/full/3.png",
    ],
    cover: "/projects/wordle/cover.png",
  },
  {
    name: "Hackathon Project",
    url: "https://github.com/MikolajZamojski/ai-menciarze---pcb-defects",
    description: "",
    icons: [
      "logos:typescript-icon",
      "logos:nuxt-icon",
      "logos:vue",
      "logos:tailwindcss-icon",
      "logos:primevue-icon",
    ],
    learned: ["Responsive design", "Program rework still in progress..."],
    imagesFull: ["/projects/unavailable.jpg"],
    cover: "/projects/unavailable.jpg",
  },
];
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 lg:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:application-brackets-outline" size="24" />
      <TextAnimation :text="`Projects`" :active="isHovered" />
    </div>
    <ProjectCard
      v-for="(project, id) in projectsData"
      :key="id"
      :data="project"
    />
  </section>
</template>
