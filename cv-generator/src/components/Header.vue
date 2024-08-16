<!-- src/components/Header.vue -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight">Générateur de CV</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><RouterLink to="/" class="hover:text-blue-200 transition duration-300 ease-in-out text-lg font-medium">Accueil</RouterLink></li>
            <li><RouterLink to="/create-cv" class="hover:text-blue-200 transition duration-300 ease-in-out text-lg font-medium">Créer un CV</RouterLink></li>
            <li><RouterLink to="/my-cvs" class="hover:text-blue-200 transition duration-300 ease-in-out text-lg font-medium">Mes CVs</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>