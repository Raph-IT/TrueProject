<!-- src/views/Home.vue -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mx-auto px-4">
    <section class="text-center py-20">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">Créez votre CV parfait avec l'IA</h1>
      <p class="text-xl text-gray-600 mb-8">Générez un CV professionnel en quelques minutes grâce à notre technologie d'intelligence artificielle</p>
      <RouterLink to="/create-cv" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out">
        Commencer maintenant
      </RouterLink>
    </section>

    <section class="grid md:grid-cols-3 gap-8 py-12">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-3xl mb-4">🚀</div>
        <h3 class="text-xl font-semibold mb-2">Rapide et facile</h3>
        <p class="text-gray-600">Créez votre CV en quelques minutes grâce à notre interface intuitive</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-3xl mb-4">🤖</div>
        <h3 class="text-xl font-semibold mb-2">Optimisé par l'IA</h3>
        <p class="text-gray-600">Notre IA analyse votre profil pour mettre en avant vos points forts</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-3xl mb-4">🎨</div>
        <h3 class="text-xl font-semibold mb-2">Designs professionnels</h3>
        <p class="text-gray-600">Choisissez parmi une variété de modèles élégants et modernes</p>
      </div>
    </section>

    <section class="text-center py-20">
      <h2 class="text-3xl font-bold mb-6">Prêt à booster votre carrière ?</h2>
      <RouterLink to="/create-cv" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out">
        Créer mon CV maintenant
      </RouterLink>
    </section>
  </div>
</template>