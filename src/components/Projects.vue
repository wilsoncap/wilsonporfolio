<template>
  <section id="projects" class="py-20 px-4 md:px-0">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-primary mb-12">Mis Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id"
             class="bg-card rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
          <img :src="project.imageUrl" alt="Vista previa del proyecto" class="w-full h-48 object-cover">
          <div class="p-6 text-white">
            <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
            <p class="mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap items-center mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
                {{ tech }}
              </span>
            </div>
            <a :href="project.videoUrl" target="_blank"
               class="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Ver Demostración
            </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        <div v-for="project in projects" :key="project.id"
             class="bg-card rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
          <img :src="project.imageUrl" alt="Vista previa del proyecto" class="w-full h-48 object-cover">
          <div class="p-6 text-white">
            <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
            <p class="mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap items-center mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
                {{ tech }}
              </span>
            </div>
            <a :href="project.videoUrl" target="_blank"
               class="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Ver Demostración
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Portafolio Personal',
    description: 'Un portafolio personal responsivo creado con Vue.js y Tailwind CSS para mostrar mis proyectos y habilidades.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://raw.githubusercontent.com/Sonwil/ImgSonwil/main/Portafolio.webp',
  },
  {
    id: 2,
    title: 'E-commerce de Tecnología',
    description: 'Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y gestión de productos.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://raw.githubusercontent.com/Sonwil/ImgSonwil/main/E-commerce.webp',
  },
  {
    id: 3,
    title: 'Sistema de Blog',
    description: 'Un sistema de gestión de contenidos (CMS) para un blog, desarrollado con Laravel y MySQL.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://raw.githubusercontent.com/Sonwil/ImgSonwil/main/blog.webp',
  },
]);
</script>