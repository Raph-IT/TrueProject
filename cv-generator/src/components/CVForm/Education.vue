<!-- src/components/CVForm/Education.vue -->
<script setup>
import { ref, watchEffect } from 'vue'
import { useCVStore } from '../../store/cv'

const cvStore = useCVStore()

const education = ref(cvStore.education)

const addEducation = () => {
  cvStore.addEducation({
    degree: '',
    institution: '',
    startDate: '',
    endDate: ''
  })
}

const removeEducation = (index) => {
  cvStore.removeEducation(index)
}

watchEffect(() => {
  education.value = cvStore.education
})
</script>

<template>
  <div class="mb-6">
    <h3 class="text-xl font-semibold mb-4">Formation</h3>
    <div v-for="(edu, index) in education" :key="index" class="mb-4 p-4 border rounded">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label :for="'degree' + index" class="block mb-2">Diplôme</label>
          <input
            :id="'degree' + index"
            v-model="edu.degree"
            @input="cvStore.updateEducation(index, edu)"
            class="w-full px-3 py-2 border rounded"
            type="text"
          >
        </div>
        <div>
          <label :for="'institution' + index" class="block mb-2">Établissement</label>
          <input
            :id="'institution' + index"
            v-model="edu.institution"
            @input="cvStore.updateEducation(index, edu)"
            class="w-full px-3 py-2 border rounded"
            type="text"
          >
        </div>
        <div>
          <label :for="'startDate' + index" class="block mb-2">Date de début</label>
          <input
            :id="'startDate' + index"
            v-model="edu.startDate"
            @input="cvStore.updateEducation(index, edu)"
            class="w-full px-3 py-2 border rounded"
            type="date"
          >
        </div>
        <div>
          <label :for="'endDate' + index" class="block mb-2">Date de fin</label>
          <input
            :id="'endDate' + index"
            v-model="edu.endDate"
            @input="cvStore.updateEducation(index, edu)"
            class="w-full px-3 py-2 border rounded"
            type="date"
          >
        </div>
      </div>
      <button @click="removeEducation(index)" class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Supprimer
      </button>
    </div>
    <button @click="addEducation" class="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
      Ajouter une formation
    </button>
  </div>
</template>