<script setup lang="ts">
const hoveredSection = ref<string | null>(null);
</script>

<template>
  <div
    class="relative min-h-fit w-full min-w-fit flex flex-col items-center bg-neutral-200 gap-8 p-4"
  >
    <NavBar />
    <div class="flex flex-col items-center gap-1">
      <h1 class="text-2xl md:text-4xl text-neutral-800 font-bold">About me</h1>
      <p class="md:text-xl text-neutral-600">Get to know me!</p>
    </div>
    <AboutMe />
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
      <Education />
      <Experience />
    </div>
    <div class="flex flex-col items-center gap-1">
      <h1 class="text-2xl md:text-4xl text-neutral-800 font-bold">
        My projects
      </h1>
      <p class="md:text-xl text-neutral-600 text-center">
        See what I've been working on so far.
      </p>
    </div>
    <Stack />
    <section
      class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 rounded-xl p-4 sm:p-8 gap-8 shadow-sm"
    >
      <div class="flex items-center gap-4">
        <i class="pi pi-box text-xl text-neutral-800"></i>
        <h2 class="text-xl sm:text-2xl text-neutral-800 font-semibold">
          Projects
        </h2>
      </div>
    </section>
  </div>
</template>
