<template>
  <section id="projects" class="py-20">
    <h2 class="text-3xl font-bold mb-4">Proyectos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
        <div class="flex items-center mb-4">
          <span v-for="tech in project.technologies" :key="tech" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm mr-2">{{ tech }}</span>
        </div>
        <a :href="project.videoUrl" target="_blank" class="text-blue-500 hover:underline">Ver video</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    technologies: ['Vue.js', 'Tailwind CSS'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    technologies: ['React', 'Node.js'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    technologies: ['Laravel', 'MySQL'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
]);
</script>
