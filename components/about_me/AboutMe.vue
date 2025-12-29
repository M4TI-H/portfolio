<script setup lang="ts">
const isHovered = ref<boolean>(false);
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 lg:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:person-outline" size="24" />
      <TextAnimation :text="`About me`" :active="isHovered" />
    </div>

    <div class="w-full flex flex-col md:flex-row gap-4 sm:gap-8">
      <div class="w-full md:w-1/3 shrink-0">
        <img
          class="w-full h-full object-cover rounded-xl min-h-[300px] md:min-h-0"
          src="/traveller.png"
          alt="Mateusz Hann"
        />
      </div>

      <div class="flex-1 flex flex-col justify-between gap-4">
        <div>
          <h2 class="font-semibold text-xl mb-1">Who am I?</h2>
          <p class="text-base sm:text-lg text-neutral-700">
            I am a passionate developer and a Data Engineering student at the
            Gdańsk University of Technology. My tech roots go back to a
            technical high school where I discovered my flair for Web
            Development. I love the creative process of building web
            applications, which I continue to master as a self-taught developer.
          </p>
        </div>

        <div>
          <h2 class="font-semibold text-xl mb-1">Why Data Engineering?</h2>
          <p class="text-base sm:text-lg text-neutral-700">
            I chose this major to expand my horizons. My goal is to merge the
            precision of data science with the creativity of web development to
            create advanced, data-driven solutions, while actively developing my
            skills in the field of Artificial Intelligence.
          </p>
        </div>

        <div>
          <h2 class="font-semibold text-xl mb-1">Beyond coding</h2>
          <p class="text-base sm:text-lg text-neutral-700">
            I don't handle boredom well, so I try to be active whenever I can. I
            lift weights, swim and cycle when the weather allows it. Recently
            I've started learning to play the guitar, fueled by my love for rock
            and metal music. I'm also an eager reader. Besides late 20th-century
            fiction, I am fond of popular science and self-improvement books. My
            biggest dream is to travel the world; I try to achieve it step by
            step, travelling every chance I get. I believe in continuous growth
            and never standing still. This drive for constant motion translates
            into my hunger for learning and striving to be 1% better every day.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
