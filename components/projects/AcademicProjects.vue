<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const isHovered = ref<boolean>(false);
const projectsData = [
  {
    name: "Snake Game",
    url: "https://github.com/M4TI-21/Snake",
    description:
      "A classic video game implementation focusing on snake movement, growth, and collision detection. The project utilizes the SDL2 library for raster graphics and requires manual implementation of data structures without using the C++ Standard Template Library (STL).",
    icons: ["logos:cpp"],
    learned: [
      "Low-level graphics with SDL2 library",
      "Game state persistence",
      "Manual Data Structure Implementation",
    ],
    imagesFull: ["/projects/unavailable.jpg"],
    cover: "/projects/unavailable.jpg",
    instruction: "/instructions/snake.pdf",
  },
  {
    name: "World Simulation",
    url: "https://github.com/M4TI-21/world_simulation",
    url_git2: "https://github.com/M4TI-21/world_simulation_py",
    description:
      "A turn-based system simulating the life cycles, collisions, and reproduction of various animal and plant species on an N * M grid. It features unique species behaviors, a player-controlled human with special abilities, and initiative-based action ordering. Project was realised in three versions, each in different language.",
    icons: ["logos:cpp", "logos:java", "logos:python"],
    learned: [
      "Object-Oriented design patterns",
      "Cross-language implementation",
    ],
    imagesFull: ["/projects/world_simulation/1.png"],
    cover: "/projects/world_simulation/1.png",
    instruction: "/instructions/world_simulation.pdf",
  },
  {
    name: "Jumping Frog Game",
    url: "https://github.com/M4TI-21/JumpingFrog",
    description:
      "Project influenced by popular retro arcade. An event-driven real-time game where the player navigates a frog through moving traffic to reach a destination. It focuses on text-based graphics, timing mechanisms, and file operations for game configuration",
    icons: ["logos:cpp"],
    learned: ["Event-driven programming", "File I/O & configuration"],
    imagesFull: [
      "/projects/frog/1.png",
      "/projects/frog/2.png",
      "/projects/frog/3.png",
    ],
    cover: "/projects/frog/1.png",
    instruction: "/instructions/frog.pdf",
  },
  {
    name: "Stack Processor",
    url: "https://github.com/M4TI-21/procesor_stosowy",
    description:
      "A simulation of a stack-based processor where operations are performed on character lists. The project requires implementing complex logic and instruction sets using deep recursion, with a strict prohibition on loops and the STL library.",
    icons: ["logos:cpp"],
    learned: ["Advanced Functional Programming", "Custom Memory Management"],
    imagesFull: ["/projects/stack_processor/1.png"],
    cover: "/projects/stack_processor/1.png",
    instruction: "/instructions/stack_processor.pdf",
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
      <TextAnimation :text="`Academic projects`" :active="isHovered" />
    </div>
    <ProjectCard
      v-for="(project, id) in projectsData"
      :key="id"
      :data="project"
    />
  </section>
</template>
