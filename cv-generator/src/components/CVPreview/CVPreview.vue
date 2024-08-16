<!-- src/components/CVPreview/CVPreview.vue -->
<template>
  <div class="cv-preview-container">
    <div class="cv-preview" ref="cvContainer">
      <div class="header bg-blue-600 text-white p-4">
        <h1 class="text-3xl font-bold" contenteditable @blur="updatePersonalInfo('fullName', $event)">
          {{ cvStore.personalInfo.firstName }} {{ cvStore.personalInfo.lastName }}
        </h1>
        <p class="text-xl" contenteditable @blur="updatePersonalInfo('contact', $event)">
          {{ cvStore.personalInfo.email }} | {{ cvStore.personalInfo.phone }}
        </p>
      </div>

      <div class="content p-6">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-2">
            <section v-if="cvStore.personalInfo.description" class="mb-6">
              <h3 class="text-xl font-semibold mb-2 text-blue-600">À propos de moi</h3>
              <p class="text-gray-700 whitespace-pre-line" contenteditable @blur="updatePersonalInfo('description', $event)">
                {{ cvStore.personalInfo.description }}
              </p>
            </section>

            <section v-if="cvStore.experience.length" class="mb-6">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Expérience professionnelle</h3>
              <div v-for="(exp, index) in cvStore.experience" :key="index" class="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <h4 class="text-lg font-bold" contenteditable @blur="updateExperience(index, 'jobTitle', $event)">{{ exp.jobTitle }}</h4>
                <p class="text-md text-gray-600" contenteditable @blur="updateExperience(index, 'company', $event)">{{ exp.company }}</p>
                <p class="text-sm text-gray-500 mb-2">
                  <span contenteditable @blur="updateExperience(index, 'startDate', $event)">{{ formatDate(exp.startDate) }}</span> - 
                  <span contenteditable @blur="updateExperience(index, 'endDate', $event)">{{ formatDate(exp.endDate) }}</span>
                </p>
                <p class="text-gray-700 whitespace-pre-line" contenteditable @blur="updateExperience(index, 'description', $event)">{{ exp.description }}</p>
              </div>
            </section>
          </div>

          <div class="col-span-1">
            <section v-if="cvStore.education.length" class="mb-6">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Formation</h3>
              <div v-for="(edu, index) in cvStore.education" :key="index" class="mb-2">
                <h4 class="text-lg font-bold" contenteditable @blur="updateEducation(index, 'degree', $event)">{{ edu.degree }}</h4>
                <p class="text-md text-gray-600" contenteditable @blur="updateEducation(index, 'institution', $event)">{{ edu.institution }}</p>
                <p class="text-sm text-gray-500">
                  <span contenteditable @blur="updateEducation(index, 'startDate', $event)">{{ formatDate(edu.startDate) }}</span> - 
                  <span contenteditable @blur="updateEducation(index, 'endDate', $event)">{{ formatDate(edu.endDate) }}</span>
                </p>
              </div>
            </section>

            <section v-if="cvStore.skills.length">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Compétences</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="(skill, index) in cvStore.skills" 
                      :key="index" 
                      class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      contenteditable
                      @blur="updateSkill(index, $event)">
                  {{ skill }}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useCVStore } from '../../store/cv'

const cvStore = useCVStore()
const cvContainer = ref(null)

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })
}

const updatePersonalInfo = (field, event) => {
  const value = event.target.innerText
  cvStore.updatePersonalInfo({ [field]: value })
}

const updateExperience = (index, field, event) => {
  const value = event.target.innerText
  const updatedExp = { ...cvStore.experience[index], [field]: value }
  cvStore.updateExperience(index, updatedExp)
}

const updateEducation = (index, field, event) => {
  const value = event.target.innerText
  const updatedEdu = { ...cvStore.education[index], [field]: value }
  cvStore.updateEducation(index, updatedEdu)
}

const updateSkill = (index, event) => {
  const value = event.target.innerText
  const updatedSkills = [...cvStore.skills]
  updatedSkills[index] = value
  cvStore.updateSkills(updatedSkills)
}

const checkPageOverflow = () => {
  if (cvContainer.value) {
    const containerHeight = cvContainer.value.scrollHeight
    const pageHeight = 297 * 3.7795275591 // Conversion de mm en pixels (1mm = 3.7795275591 pixels)
    if (containerHeight > pageHeight) {
      console.log('Contenu dépasse une page')
    }
  }
}

onMounted(() => {
  checkPageOverflow()
})

watch(() => cvStore.fullCV, checkPageOverflow, { deep: true })
</script>

<style scoped>
.cv-preview-container {
  width: 100%;
  height: 0;
  padding-bottom: 141.42%; /* Ratio A4 (297mm / 210mm) */
  position: relative;
  overflow: hidden;
}

.cv-preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  overflow: auto;
}

.header {
  margin: 0;
  padding: 1rem;
}

.content {
  padding: 1rem;
}

[contenteditable] {
  outline: none;
  padding: 2px;
  border-radius: 4px;
}

[contenteditable]:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

[contenteditable]:focus {
  background-color: rgba(0, 0, 0, 0.1);
}

@media print {
  .cv-preview-container {
    padding-bottom: 0;
    height: auto;
  }

  .cv-preview {
    position: static;
    width: 210mm;
    height: 297mm;
    overflow: hidden;
  }
}
</style>