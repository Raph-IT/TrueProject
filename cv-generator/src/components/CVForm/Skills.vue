<!-- src/components/CVForm/Skills.vue -->
<script setup>
import { ref, watchEffect } from 'vue'
import { useCVStore } from '../../store/cv'

const cvStore = useCVStore()

const skills = ref(cvStore.skills)
const newSkill = ref('')

const addSkill = () => {
  if (newSkill.value.trim()) {
    cvStore.updateSkills([...skills.value, newSkill.value.trim()])
    newSkill.value = ''
  }
}

const removeSkill = (index) => {
  const updatedSkills = skills.value.filter((_, i) => i !== index)
  cvStore.updateSkills(updatedSkills)
}

watchEffect(() => {
  skills.value = cvStore.skills
})
</script>

<template>
  <div class="mb-6">
    <h3 class="text-xl font-semibold mb-4">Compétences</h3>
    <div class="flex flex-wrap gap-2">
      <div v-for="(skill, index) in skills" :key="index" class="bg-gray-200 px-3 py-1 rounded-full flex items-center">
        {{ skill }}
        <button @click="removeSkill(index)" class="ml-2 text-red-500 hover:text-red-700">
          &times;
        </button>
      </div>
    </div>
    <div class="mt-4 flex">
      <input
        v-model="newSkill"
        @keyup.enter="addSkill"
        class="flex-grow px-3 py-2 border rounded-l"
        type="text"
        placeholder="Ajouter une compétence"
      >
      <button @click="addSkill" class="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
        Ajouter
      </button>
    </div>
  </div>
</template>