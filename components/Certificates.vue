<template>
  <section
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-4 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="mdi:certificate-outline" size="24" />
      <h2 class="font-playfair text-xl sm:text-2xl font-semibold">
        Certificates
      </h2>
    </div>
    <div class="w-full grid grid-cols-3 gap-8">
      <div
        class="flex-1 flex flex-col border border-neutral-300 rounded-lg p-4 gap-2"
      >
        <div class="w-full flex items-center justify-between">
          <h3 class="text-xl font-semibold">C1 Advanced (CAE)</h3>
          <p class="text-sm text-neutral-500">June 2024</p>
        </div>
        <p class="text-lg">
          Certification that validates the in-depth English skills required to
          communicate in demanding professional environments.
        </p>
        <p class="text-lg font-semibold">
          Score: <span class="text-emerald-600">199/210</span>
        </p>
      </div>
      <div
        class="flex-1 flex flex-col border border-neutral-300 rounded-lg p-4 gap-2"
      >
        <div class="w-full flex items-center justify-between">
          <h3 class="text-xl font-semibold">INF.04</h3>
          <p class="text-sm text-neutral-500">June 2023</p>
        </div>
        <p class="text-lg">Application design, programming and testing.</p>
        <p class="text-lg font-semibold">
          Score: <span class="text-emerald-600">90%</span>
        </p>
      </div>
      <div
        class="flex-1 flex flex-col border border-neutral-300 rounded-lg p-4 gap-2"
      >
        <div class="w-full flex items-center justify-between">
          <h3 class="text-xl font-semibold">INF.03</h3>
          <p class="text-sm text-neutral-500">June 2022</p>
        </div>
        <p class="text-lg">
          Creating and administering websites, web applications, and databases.
        </p>
        <p class="text-lg font-semibold">
          Score: <span class="text-emerald-600">95%</span>
        </p>
      </div>
    </div>
  </section>
</template>
