<template>
  <section
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 rounded-xl p-4 sm:p-8 gap-8 shadow-sm"
  >
    <div class="flex items-center gap-4">
      <i class="pi pi-box text-xl text-neutral-800"></i>
      <h2 class="text-xl sm:text-2xl text-neutral-800 font-semibold">
        Technologies I use
      </h2>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="flex flex-col gap-4">
        <h3
          class="text-xl text-neutral-500 font-semibold border-b border-gray-100 pb-2"
        >
          Frontend
        </h3>
        <div class="flex flex-wrap gap-4">
          <StackIcon icon="logos:nuxt-icon" title="Nuxt" />
          <StackIcon icon="logos:vue" title="Vue.js" />
          <StackIcon icon="logos:typescript-icon" title="TypeScript" />
          <StackIcon icon="logos:javascript" title="JavaScript" />
          <StackIcon icon="logos:tailwindcss-icon" title="Tailwind CSS" />
          <StackIcon icon="logos:react" title="React" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h3
          class="text-xl text-neutral-500 font-semibold border-b border-gray-100 pb-2"
        >
          Backend
        </h3>
        <div class="flex flex-wrap gap-4">
          <StackIcon icon="logos:nodejs-icon" title="Node.js" />
          <StackIcon icon="logos:fastapi-icon" title="FastAPI" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h3
          class="text-xl text-neutral-500 font-semibold border-b border-gray-100 pb-2"
        >
          Data
        </h3>
        <div class="flex flex-wrap gap-4">
          <StackIcon icon="logos:supabase-icon" title="Supabase" />
          <StackIcon icon="logos:mysql-icon" title="MySQL" />
          <StackIcon icon="devicon:microsoftsqlserver" title="MS SQL" />
          <StackIcon icon="logos:postgresql" title="PostgreSQL" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h3
          class="text-xl text-neutral-500 font-semibold border-b border-gray-100 pb-2"
        >
          Tools
        </h3>
        <div class="flex flex-wrap gap-4">
          <StackIcon icon="logos:github-icon" title="GitHub" />
          <StackIcon icon="logos:docker-icon" title="Docker" />
          <StackIcon icon="logos:visual-studio-code" title="VS Code" />
          <StackIcon icon="logos:figma" title="Figma" />
          <StackIcon icon="logos:adobe-xd" title="Adobe Xd" />
          <StackIcon icon="logos:adobe-photoshop" title="Photoshop" />
        </div>
      </div>
    </div>
  </section>
</template>
