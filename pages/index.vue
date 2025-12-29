<script setup lang="ts">
import Hero from "~/components/Hero.vue";
</script>

<template>
  <div
    class="relative min-h-fit w-full min-w-fit flex flex-col items-center bg-neutral-200 gap-8 pb-20"
  >
    <NavBar />
    <ScrollToTop />
    <Hero class="mt-16 xl:mt-32" />

    <section
      id="background"
      class="w-full flex flex-col items-center scroll-mt-32 gap-8"
    >
      <div class="flex flex-col items-center gap-1 px-2">
        <h1 class="font-playfair text-2xl md:text-4xl font-bold">
          My background
        </h1>
        <p class="md:text-xl text-neutral-600 text-center">
          Tracing the steps of my professional evolution.
        </p>
      </div>
      <div class="w-full max-w-7xl flex flex-col lg:flex-row lg:gap-8">
        <Education />
        <Experience />
      </div>
    </section>

    <section
      id="projects"
      class="w-full flex flex-col items-center scroll-mt-32 gap-8"
    >
      <div class="flex flex-col items-center gap-1 px-2">
        <h1 class="font-playfair text-2xl md:text-4xl font-bold">
          My projects
        </h1>
        <p class="md:text-xl text-neutral-600 text-center">
          See what I've been working on so far.
        </p>
      </div>
      <Projects />
      <Stack />
    </section>

    <section
      id="achievements"
      class="w-full flex flex-col items-center scroll-mt-32 gap-8"
    >
      <div class="flex flex-col items-center gap-1 px-2">
        <h1 class="font-playfair text-2xl md:text-4xl font-bold">
          Achievements
        </h1>
        <p class="text-sm md:text-xl text-neutral-600">See my successes!</p>
      </div>
      <Achievements />
    </section>

    <section
      id="certificates"
      class="w-full flex flex-col items-center scroll-mt-32 gap-8"
    >
      <div class="flex flex-col items-center gap-1 px-2">
        <h1 class="font-playfair text-2xl md:text-4xl font-bold">
          Certificates
        </h1>
        <p class="text-sm md:text-xl text-neutral-600">My proven skills.</p>
      </div>
      <Certificates />
    </section>

    <section
      id="aboutme"
      class="w-full flex flex-col items-center scroll-mt-32 gap-8"
    >
      <div class="flex flex-col items-center gap-1 px-2">
        <h1 class="font-playfair text-2xl md:text-4xl font-bold">About me</h1>
        <p class="text-sm md:text-xl text-neutral-600">Get to know me!</p>
      </div>
      <AboutMe />
    </section>
  </div>
</template>
