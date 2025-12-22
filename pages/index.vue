<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div
    class="relative min-h-fit w-full min-w-fit flex flex-col items-center bg-neutral-200 sm:gap-8 sm:p-4"
  >
    <NavBar />

    <Header />

    <div
      id="background"
      class="flex flex-col items-center gap-1 my-4 sm:my-0 px-2"
    >
      <h1 class="font-playfair text-2xl md:text-4xl font-bold">
        My background
      </h1>
      <p class="md:text-xl text-neutral-600 text-center">
        Tracing the steps of my professional evolution.
      </p>
    </div>
    <div class="w-full max-w-7xl flex flex-col lg:flex-row sm:gap-8">
      <Education />
      <Experience />
    </div>
    <div
      id="projects"
      class="flex flex-col items-center gap-1 my-4 sm:my-0 px-2"
    >
      <h1 class="font-playfair text-2xl md:text-4xl font-bold">My projects</h1>
      <p class="md:text-xl text-neutral-600 text-center">
        See what I've been working on so far.
      </p>
    </div>
    <Projects />
    <Stack />
    <div
      id="achievements"
      class="flex flex-col items-center gap-1 mt-20 mb-4 sm:my-0 px-2"
    >
      <h1 class="font-playfair text-xl md:text-4xl font-bold">Achievements</h1>
      <p class="text-sm md:text-xl text-neutral-600">See my successes!</p>
    </div>
    <Achievements />
    <div class="flex flex-col items-center gap-1 mt-20 mb-4 sm:my-0 px-2">
      <h1 class="font-playfair text-xl md:text-4xl font-bold">Certificates</h1>
      <p class="text-sm md:text-xl text-neutral-600">My proven skills.</p>
    </div>
    <Certificates />
    <div
      id="aboutme"
      class="flex flex-col items-center gap-1 mt-20 mb-4 sm:my-0 px-2"
    >
      <h1 class="font-playfair text-xl md:text-4xl font-bold">About me</h1>
      <p class="text-sm md:text-xl text-neutral-600">Get to know me!</p>
    </div>
  </div>
</template>
