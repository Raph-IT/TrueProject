<!-- src/components/CVForm/Experience.vue -->
<script setup>
import { ref, watchEffect } from 'vue'
import { useCVStore } from '../../store/cv'

const cvStore = useCVStore()

const experiences = ref(cvStore.experience)

const addExperience = () => {
  cvStore.addExperience({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  })
}

const removeExperience = (index) => {
  cvStore.removeExperience(index)
}

const updateExperience = (index, field, value) => {
  const updatedExperience = { ...experiences.value[index], [field]: value }
  cvStore.updateExperience(index, updatedExperience)
}

watchEffect(() => {
  experiences.value = cvStore.experience
})
</script>

<template>
  <div class="mb-6">
    <h3 class="text-xl font-semibold mb-4">Expériences professionnelles</h3>
    <div v-for="(exp, index) in experiences" :key="index" class="mb-4 p-4 border rounded">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label :for="'jobTitle' + index" class="block mb-2">Poste</label>
          <input
            :id="'jobTitle' + index"
            v-model="exp.jobTitle"
            @input="updateExperience(index, 'jobTitle', $event.target.value)"
            class="w-full px-3 py-2 border rounded"
            type="text"
          >
        </div>
        <div>
          <label :for="'company' + index" class="block mb-2">Entreprise</label>
          <input
            :id="'company' + index"
            v-model="exp.company"
            @input="updateExperience(index, 'company', $event.target.value)"
            class="w-full px-3 py-2 border rounded"
            type="text"
          >
        </div>
        <div>
          <label :for="'startDate' + index" class="block mb-2">Date de début</label>
          <input
            :id="'startDate' + index"
            v-model="exp.startDate"
            @input="updateExperience(index, 'startDate', $event.target.value)"
            class="w-full px-3 py-2 border rounded"
            type="date"
          >
        </div>
        <div>
          <label :for="'endDate' + index" class="block mb-2">Date de fin</label>
          <input
            :id="'endDate' + index"
            v-model="exp.endDate"
            @input="updateExperience(index, 'endDate', $event.target.value)"
            class="w-full px-3 py-2 border rounded"
            type="date"
          >
        </div>
      </div>
      <div class="mt-4">
        <label :for="'description' + index" class="block mb-2">Description</label>
        <textarea
          :id="'description' + index"
          v-model="exp.description"
          @input="updateExperience(index, 'description', $event.target.value)"
          class="w-full px-3 py-2 border rounded"
          rows="5"
          placeholder="Décrivez vos responsabilités et réalisations..."
        ></textarea>
      </div>
      <button @click="removeExperience(index)" class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Supprimer
      </button>
    </div>
    <button @click="addExperience" class="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
      Ajouter une expérience
    </button>
  </div>
</template>