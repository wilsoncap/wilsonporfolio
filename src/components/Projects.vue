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
            <div class="h-40">
              <p class="mb-4">{{ project.description }}</p>
            </div>
            <div class="flex flex-wrap items-center mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-primary/20 text-white text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
                {{ tech }}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-1xl">
              <a :href="project.videoUrl" target="_blank"
                 class="flex justify-center items-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                  Ver Demo
              </a>
              <a :href="project.repo" target="_blank"
                 class="flex justify-center items-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M20 10.25q0 3.351-1.908 6.027t-4.928 3.703q-.352.068-.514-.093a.54.54 0 0 1-.163-.4V16.67q0-1.295-.677-1.895a9 9 0 0 0 1.335-.24q.591-.16 1.223-.52a3.7 3.7 0 0 0 1.055-.888q.423-.528.69-1.402t.267-2.008q0-1.616-1.028-2.75q.48-1.214-.105-2.723q-.364-.12-1.054.147a7 7 0 0 0-1.198.587l-.495.32a9 9 0 0 0-2.5-.346a9 9 0 0 0-2.5.347a12 12 0 0 0-.553-.36q-.345-.214-1.088-.514q-.741-.3-1.12-.18q-.572 1.507-.09 2.722q-1.03 1.134-1.03 2.75q0 1.134.268 2.002q.267.867.683 1.401a3.5 3.5 0 0 0 1.048.894q.632.36 1.224.52q.593.162 1.335.241q-.52.48-.638 1.375a2.5 2.5 0 0 1-.586.2a3.6 3.6 0 0 1-.742.067q-.43 0-.853-.287q-.423-.288-.723-.834a2.1 2.1 0 0 0-.631-.694q-.384-.267-.645-.32l-.26-.04q-.273 0-.378.06t-.065.153a.7.7 0 0 0 .117.187a1 1 0 0 0 .17.16l.09.066q.287.135.567.508q.28.374.41.68l.13.307q.17.507.574.821q.404.315.872.4q.468.087.905.094q.436.006.723-.047l.299-.053q0 .507.007 1.188l.006.72q0 .24-.17.4q-.168.162-.52.094q-3.021-1.028-4.928-3.703Q0 13.6 0 10.25q0-2.79 1.341-5.145a10.1 10.1 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.1 10.1 0 0 1 3.639 3.73Q20 7.461 20 10.25"/></svg>
                  Ver Repo
              </a>
            </div>
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
    title: 'Quien es ese pokemon',
    description: 'Un Juego donde el participante debe ver la siluta negra del pokemon y escribir el el nombre correcto del pokemon. donde en cada juego le va dando una puntuacion y un score',
    technologies: ['React.js', 'Typescript', 'Tailwind CSS'],
    videoUrl: 'https://quien-es-ese-pokemon-wilson.netlify.app/',
    imageUrl: '/pokemon.png',
    repo: 'https://github.com/wilsoncap/poke-proyect.git'
  },
  {
    id: 2,
    title: 'E-commerce de Guitarras',
    description: 'Tienda de guitarras electricas donde simulamos la data de una base de datos en la pagina, pintamos la informacion y simulamos el carrito de compras con otras funcionalidades ',
    technologies: ['Vue.js', 'Tailwind CSS', 'Javascript'],
    videoUrl: 'https://jade-cascaron-a20bc0.netlify.app/',
    imageUrl: '/guitarra.png',
    repo: 'https://github.com/wilsoncap/poke-proyect.git'
  },
  {
    id: 3,
    title: 'Cotizador Criptomonedas',
    description: 'Sitio web donde se consume una api de criptomonendas y le vamos dando una cotizacion de el valor del mercado actual al usuario de esa criptomoneda',
    technologies: ['Vue.js', 'Tailwind CSS', 'Javascript'],
    videoUrl: 'https://effulgent-brioche-74f5b1.netlify.app/',
    imageUrl: '/cripto.png',
    repo: 'https://github.com/wilsoncap/poke-proyect.git'
  },
  {
    id: 4,
    title: 'Seguimeinto Veterinaria',
    description: 'Sitio para llevar para llevar el control veterinario de los pacientes que ingresan por diferentes factores, trabajamos con persistencia de datos para simular el backend ',
    technologies: ['Vue.js', 'Tailwind CSS', 'Javascript'],
    videoUrl: 'https://moonlit-biscotti-bbb077.netlify.app/',
    imageUrl: '/veterinaria.png',
    repo: 'https://github.com/wilsoncap/poke-proyect.git'
  },
  {
    id: 5,
    title: 'Dasboard en Next.js',
    description: 'Proyecto intermedio de Nextjs Con Typescript y Tailwind, donde hacemos consumos de apis, persistencia de datos, manejos de estados, carga de imagenes, menejo Server components, Entre otros ',
    technologies: ['React', 'Next.js', 'Tailwin', 'Typescript'],
    videoUrl: 'https://dashboard-items-git-main-wilson-s-projects.vercel.app/dashboard/pokemons',
    imageUrl: '/dashboard.png',
    repo: 'https://github.com/wilsoncap/dashboard-items'
  },
  {
    id: 6,
    title: 'Gestion Contable',
    description: 'Un sistema de gestión de contabilidad y recaudos multicompañia, está diseñado para ser multicompañía y con un sistema de roles que adapta dinámicamente los menús y accesos según el perfil de cada usuario, nota: repositorio privado',
    technologies: ['Laravel', 'Inertia', 'Postgres', 'Vue.js'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: '/contabilidad.png',
    repo: 'https://www.linkedin.com/posts/wilson-capacho-carmona-a593a1125_as%C3%AD-va-tomando-forma-mi-proyecto-personal-activity-7354201711273472000-aWGn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7Y6qUBHRWtNVNsbdsQB4S1knAw_w33v4M'
  },
]);
</script>