<script setup lang="ts">
const isHovered = ref<boolean>(false);

const experienceData = [
  {
    workplace: "Vitalis Gut-Wehlitz",
    start: "Oct 2022",
    end: "",
    profession: "Frontend Web Developer & Designer",
    description:
      "During my internship at a training center in Leipzig, Germany, I worked on website development, design and graphics, while developing communication and organizational skills. The experience gave me insight into the role of a developer and highlighted the importance of collaboration and flexibility.",
  },
  {
    workplace: "Freelance",
    start: "Sep 2025",
    end: "Oct 2025",
    profession: "Full Stack Web Developer",
    description:
      "Designed and deployed a responsive landing page for a local language school. I was responsible for the entire development lifecycle—from gathering client requirements and UI design to implementation and SEO optimization. The project resulted in increased online visibility for the client.",
  },
];
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="flex-1 flex flex-col bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-4 sm:gap-2 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="material-symbols:work-outline" size="24" />
      <TextAnimation :text="`Experience`" :active="isHovered" />
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="(e, id) in experienceData"
        :key="id"
        class="w-full flex gap-4"
      >
        <Icon
          name="material-symbols:expand-circle-right-rounded"
          class="size-6 text-emerald-600 shrink-0 mt-1"
        />
        <div class="flex flex-col gap-2">
          <p class="sm:text-lg">
            <span class="font-semibold">{{ e.profession }}</span>
            <br />
            at {{ e.workplace }}
            <br />
            <span class="text-sm sm:text-base text-neutral-500"
              >{{ e.start }} {{ e.end ? "-" : "" }} {{ e.end }}</span
            >
          </p>
          <p class="indent-4 text-neutral-500">{{ e.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
