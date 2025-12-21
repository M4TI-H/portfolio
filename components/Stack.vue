<template>
  <section
    class="w-full max-w-7xl h-auto shrink-0 flex flex-col bg-white border border-gray-300 sm:rounded-xl p-4 sm:p-8 gap-8 shadow-sm transition-all duration-500 hover:ring-2 hover:ring-emerald-600 hover:border-emerald-600"
  >
    <div class="flex items-center gap-2">
      <Icon name="material-symbols:stack-hexagon-outline-rounded" size="24" />
      <h2 class="font-playfair text-xl sm:text-2xl font-semibold">
        Technologies I use
      </h2>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 pb-2 border-b border-gray-300">
          <Icon name="material-symbols:web" class="text-neutral-500 size-6" />
          <h3 class="text-xl text-neutral-500 font-semibold">Frontend</h3>
        </div>

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
        <div class="flex items-center gap-2 pb-2 border-b border-gray-300">
          <Icon
            name="material-symbols:settings-outline-rounded"
            class="text-neutral-500 size-6"
          />
          <h3 class="text-xl text-neutral-500 font-semibold">Backend</h3>
        </div>
        <div class="flex flex-wrap gap-4">
          <StackIcon icon="logos:nodejs-icon" title="Node.js" />
          <StackIcon icon="logos:fastapi-icon" title="FastAPI" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 pb-2 border-b border-gray-300">
          <Icon
            name="material-symbols:database-outline"
            class="text-neutral-500 size-6"
          />
          <h3 class="text-xl text-neutral-500 font-semibold">Data</h3>
        </div>
        <div class="flex flex-wrap gap-4">
          <StackIcon icon="logos:supabase-icon" title="Supabase" />
          <StackIcon icon="logos:mysql-icon" title="MySQL" />
          <StackIcon icon="devicon:microsoftsqlserver" title="SQL Server" />
          <StackIcon icon="logos:postgresql" title="PostgreSQL" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 pb-2 border-b border-gray-300">
          <Icon
            name="material-symbols:build-outline-rounded"
            class="text-neutral-500 size-6"
          />
          <h3 class="text-xl text-neutral-500 font-semibold">Tools</h3>
        </div>
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
