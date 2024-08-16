<!-- src/components/CVForm/CVForm.vue -->
<script setup>
import { ref, watch } from 'vue'
import { useCVStore } from '../../store/cv'

const props = defineProps(['sections'])
const cvStore = useCVStore()

const localData = ref({
  personalInfo: { ...cvStore.sections.personalInfo },
  experience: [...cvStore.sections.experience],
  education: [...cvStore.sections.education],
  skills: [...cvStore.sections.skills]
})

watch(localData, (newValue) => {
  Object.keys(newValue).forEach(section => {
    cvStore.updateSection(section, newValue[section])
  })
}, { deep: true })

const addExperience = () => {
  localData.value.experience.push({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  })
}

const removeExperience = (index) => {
  localData.value.experience.splice(index, 1)
}

const addEducation = () => {
  localData.value.education.push({
    degree: '',
    institution: '',
    startDate: '',
    endDate: ''
  })
}

const removeEducation = (index) => {
  localData.value.education.splice(index, 1)
}

const addSkill = () => {
  localData.value.skills.push('')
}

const removeSkill = (index) => {
  localData.value.skills.splice(index, 1)
}
</script>

<template>
  <div>
    <template v-for="section in props.sections" :key="section">
      <!-- Personal Info Section -->
      <div v-if="section === 'personalInfo'" class="mb-6">
        <h3 class="text-lg font-semibold mb-4">Informations personnelles</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(value, key) in localData.personalInfo" :key="key">
            <label :for="key" class="block text-sm font-medium text-gray-700">{{ key }}</label>
            <input :id="key" v-model="localData.personalInfo[key]" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div v-if="section === 'experience'" class="mb-6">
        <h3 class="text-lg font-semibold mb-4">Expérience professionnelle</h3>
        <div v-for="(exp, index) in localData.experience" :key="index" class="mb-4 p-4 border rounded">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(value, key) in exp" :key="key">
              <label :for="`exp-${index}-${key}`" class="block text-sm font-medium text-gray-700">{{ key }}</label>
              <input :id="`exp-${index}-${key}`" v-model="exp[key]" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
          </div>
          <button @click="removeExperience(index)" class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
        </div>
        <button @click="addExperience" class="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Ajouter une expérience</button>
      </div>

      <!-- Education Section -->
      <div v-if="section === 'education'" class="mb-6">
        <h3 class="text-lg font-semibold mb-4">Formation</h3>
        <div v-for="(edu, index) in localData.education" :key="index" class="mb-4 p-4 border rounded">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(value, key) in edu" :key="key">
              <label :for="`edu-${index}-${key}`" class="block text-sm font-medium text-gray-700">{{ key }}</label>
              <input :id="`edu-${index}-${key}`" v-model="edu[key]" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
          </div>
          <button @click="removeEducation(index)" class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
        </div>
        <button @click="addEducation" class="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Ajouter une formation</button>
      </div>

      <!-- Skills Section -->
      <div v-if="section === 'skills'" class="mb-6">
        <h3 class="text-lg font-semibold mb-4">Compétences</h3>
        <div v-for="(skill, index) in localData.skills" :key="index" class="mb-2 flex items-center">
          <input v-model="localData.skills[index]" type="text" class="flex-grow border-gray-300 rounded-md shadow-sm">
          <button @click="removeSkill(index)" class="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
        </div>
        <button @click="addSkill" class="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Ajouter une compétence</button>
      </div>
    </template>
  </div>
</template>