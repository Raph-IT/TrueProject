<!-- src/views/MyCVs.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cvs = ref([
  { id: 1, title: 'CV Développeur Web', lastModified: '15 août 2024' },
  { id: 2, title: 'CV Chef de Projet', lastModified: '10 juillet 2024' },
  { id: 3, title: 'CV Designer UX/UI', lastModified: '5 juin 2024' },
])

const editCV = (id) => {
  console.log(`Éditer le CV avec l'ID ${id}`)
  // Ici, vous pourriez naviguer vers une page d'édition
  // router.push({ name: 'EditCV', params: { id } })
}

const downloadCV = (id) => {
  console.log(`Télécharger le CV avec l'ID ${id}`)
  // Implémentez la logique de téléchargement ici
}

const createNewCV = () => {
  router.push({ name: 'CreateCV' })
}
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">Mes CVs</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- CV cards -->
      <div v-for="cv in cvs" :key="cv.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ cv.title }}</h3>
          <p class="text-gray-600 mb-4">Dernière modification : {{ cv.lastModified }}</p>
          <div class="flex justify-between">
            <button @click="editCV(cv.id)" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
              Éditer
            </button>
            <button @click="downloadCV(cv.id)" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
              Télécharger
            </button>
          </div>
        </div>
      </div>

      <!-- Create new CV card -->
      <div @click="createNewCV" class="bg-gray-100 rounded-lg shadow-md overflow-hidden flex items-center justify-center cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out">
        <div class="text-center p-6">
          <div class="text-4xl mb-2">➕</div>
          <p class="text-xl font-semibold text-gray-700">Créer un nouveau CV</p>
        </div>
      </div>
    </div>
  </div>
</template>