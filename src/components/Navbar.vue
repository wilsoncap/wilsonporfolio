<template>
  <nav class="flex items-center justify-between py-4">
    <h1 class="text-2xl font-bold">Mi Portafolio</h1>
    <div>
      <a href="#about" class="ml-4">Sobre mí</a>
      <a href="#projects" class="ml-4">Proyectos</a>
      <a href="#contact" class="ml-4">Contacto</a>
      <button @click="toggleDarkMode" class="ml-4 px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700">
        {{ darkMode ? 'Modo Claro' : 'Modo Oscuro' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>
