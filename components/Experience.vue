<script setup lang="ts">
const isHovered = ref<boolean>(false);

const experienceData = [
  {
    workplace: "Intel Technology Gdańsk",
    start: "since May 2026",
    end: "",
    profession: "Web Developer",
    description: [
      "Developing the frontend interface for a secure, internal system serving Intel clients using Angular, focusing on scalability and high-performance rendering",
      "Leveraging RxJS to handle complex asynchronous data streams, ensuring smooth data flow and efficient state management across the client portal",
      "Building modular, reusable UI components designed to handle dense information architecture and streamline client workflows",
      "Collaborated in regular team meetings and strategic planning sessions, ensuring frontend development goals remained aligned with overall project objectives and client needs",
    ],
  },
  {
    workplace: "Freelance",
    start: "Sep 2025",
    end: "Feb 2026",
    profession: "Web Developer",
    description: [
      "Developed a custom Content Management System (CMS) powered by Supabase, enabling the client to independently manage dynamic photo portfolios and service offerings",
      "Integrated an external calendar system for consultation scheduling and a mailing service to manage incoming client inquiries",
      "Built a fully responsive frontend tailored to high-end visual design, utilizing Supabase Storage to securely and efficiently deliver heavy image assets across all device types",
      "Managed the complete development lifecycle, bridging the gap between a visual client-facing interface and a robust backend",
    ],
  },
  {
    workplace: "Vitalis Gut-Wehlitz",
    start: "Oct 2022",
    end: "",
    profession: "Web Developer & Designer",
    description: [
      "Developed a personal website, focusing on responsive layouts and intuitive user experiences",
      "Designed custom graphics and visual 3D assets using Blender",
      "Practiced strong organizational and communication skills in a fast-paced environment, prioritizing flexibility and effective teamwork",
    ],
  },
];
</script>

<template>
  <section
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="flex-1 flex flex-col bg-white border border-gray-300 lg:rounded-xl p-4 sm:p-8 gap-4 sm:gap-2 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
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
            {{ e.workplace }}
            <br />
            <span class="text-sm sm:text-base text-neutral-500"
              >{{ e.start }} {{ e.end ? "-" : "" }} {{ e.end }}</span
            >
          </p>
          <ul v-for="desc in e.description" class="list-disc">
            <li class="indent-2 text-neutral-500">{{ desc }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
