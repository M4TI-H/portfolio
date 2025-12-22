<script setup lang="ts">
const email = "hann.mateusz@gmail.com";
const isCopied = ref<boolean>(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email);
    isCopied.value = true;

    setTimeout(() => {
      isCopied.value = false;
    }, 1000);
  } catch (err) {
    console.error("Failed to copy!", err);
  }
};
</script>

<template>
  <section
    class="w-full max-w-7xl h-auto sm:h-96 shrink-0 flex flex-col items-center sm:items-start justify-between sm:flex-row bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-4 sm:gap-0 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="w-full sm:w-3/5 h-full flex flex-col justify-between gap-4">
      <div class="flex flex-col">
        <p class="text-sm md:text-lg text-gray-500">Hello! My name is</p>
        <h1
          class="font-playfair text-3xl lg:text-5xl font-bold wave-text cursor-default w-fit"
        >
          Mateusz Hann
        </h1>
        <p class="text-sm md:text-lg text-gray-500 mt-2">
          I aspire to become a professional
        </p>
        <h2
          class="text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-emerald-600"
        >
          Full Stack Developer
        </h2>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <Icon name="uil:envelope" style="color: black" size="24" />
          <p class="italic text-lg sm:text-2xl">{{ email }}</p>
          <button
            @click="copyToClipboard"
            class="hover:bg-gray-200 active:bg-gray-200 flex items-center justify-center p-2 rounded-lg transition-colors"
            :class="[isCopied ? 'hidden' : 'flex']"
          >
            <Icon name="mdi:content-copy" size="16" />
          </button>
          <div
            class="px-2 py-1 bg-emerald-600 rounded-lg"
            :class="[isCopied ? 'flex items-center gap-1' : 'hidden']"
          >
            <Icon name="mdi:tick" size="16" style="color: white" />
            <p class="text-neutral-100">Copied</p>
          </div>
        </div>

        <NuxtLink
          to="https://github.com/M4TI-H"
          class="flex items-center gap-2"
        >
          <Icon name="uil:github" style="color: black" size="24" />
          <p
            class="italic text-lg sm:text-2xl hover:underline decoration-4 decoration-emerald-600"
          >
            M4TI-H
          </p>
        </NuxtLink>

        <NuxtLink
          to="https://www.linkedin.com/in/mateusz-hann-713ba4367/"
          class="flex items-center gap-2"
        >
          <Icon name="uil:linkedin" style="color: black" size="24" />
          <p
            class="italic text-lg sm:text-2xl hover:underline decoration-4 decoration-emerald-600"
          >
            Mateusz Hann
          </p>
        </NuxtLink>
      </div>
    </div>

    <div class="w-full max-w-[16rem] sm:w-2/5 h-full">
      <img
        class="w-full h-full rounded-xl"
        src="https://images.unsplash.com/photo-1612983857030-0de0831ff4b7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </section>
</template>
