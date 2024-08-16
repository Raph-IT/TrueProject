<!-- src/components/Footer.vue -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">À propos</h3>
          <p class="text-gray-400">Générateur de CV est votre outil ultime pour créer des CV professionnels et percutants avec l'aide de l'IA.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Liens rapides</h3>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Accueil</RouterLink></li>
            <li><RouterLink to="/create-cv" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Créer un CV</RouterLink></li>
            <li><RouterLink to="/my-cvs" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Mes CVs</RouterLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Contact</h3>
          <p class="text-gray-400">Email: contact@generateurdecv.com</p>
          <p class="text-gray-400">Téléphone: +33 1 23 45 67 89</p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© {{ new Date().getFullYear() }} Générateur de CV. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>