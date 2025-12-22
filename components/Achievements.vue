<script setup lang="ts">
const isHovered = ref<boolean>(false);
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:trophy-outline" size="24" />
      <TextAnimation :text="`Achievements`" :active="isHovered" />
    </div>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div
        class="flex-1 flex flex-col gap-4 py-2 sm:py-4 px-4 sm:px-8 bg-neutral-200 rounded-xl border border-gray-400 mx-auto sm:mx-0"
      >
        <h2 class="font-playfair text-lg sm:text-2xl font-semibold text-center">
          Winner of BEST Hackathon - AI category
        </h2>
        <img
          class="w-auto h-42 sm:h-64 mx-auto"
          src="https://images.unsplash.com/photo-1766086892325-74a61d0465f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p class="sm:text-lg">
          Our 4-person team developed an automated system for detecting and
          categorizing defects on PCB boards. As the team's
          <span class="font-semibold text-emerald-600">frontend developer</span
          >, I focused on bridging complex AI data with user accessibility. In a
          category dominated by raw scripts and command-line tools, our team
          delivered a fully functional MVP with a user-friendly interface. The
          judges' enthusiastic reaction to the smooth UX confirmed that
          high-quality Frontend was the key differentiator that secured our 1st
          place.
        </p>
      </div>
    </div>
  </section>
</template>
