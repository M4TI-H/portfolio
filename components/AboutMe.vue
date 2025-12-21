<template>
  <section
    class="w-full max-w-7xl h-auto sm:h-96 shrink-0 flex flex-col items-center sm:items-start justify-between sm:flex-row bg-white border border-gray-300 rounded-xl p-4 sm:p-8 gap-4 sm:gap-0 shadow-sm"
  >
    <div class="w-full sm:w-3/5 h-full flex flex-col justify-between gap-4">
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl lg:text-5xl text-neutral-800 font-bold">
          Mateusz Hann
        </h1>
        <h2
          class="text-2xl lg:text-4xl text-neutral-800 font-semibold underline decoration-8 decoration-emerald-600"
        >
          Full-stack Developer
        </h2>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <i class="pi pi-envelope sm:text-xl text-neutral-800"></i>
          <p class="text-lg sm:text-2xl text-neutral-800">
            hann.mateusz@gmail.com
          </p>
        </div>
        <NuxtLink
          to="https://github.com/M4TI-H"
          class="flex items-center gap-2"
        >
          <i class="pi pi-github sm:text-xl text-neutral-800"></i>
          <p
            class="text-lg sm:text-2xl text-neutral-800 hover:underline decoration-4 decoration-emerald-600"
          >
            M4TI-H
          </p>
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/mateusz-hann-713ba4367/"
          class="flex items-center gap-2"
        >
          <i class="pi pi-linkedin sm:text-xl text-neutral-800"></i>
          <p
            class="text-lg sm:text-2xl text-neutral-800 hover:underline decoration-4 decoration-emerald-600"
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
