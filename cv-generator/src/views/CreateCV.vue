<!-- src/views/CreateCV.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar for tools and options -->
    <div class="w-64 bg-white shadow-md p-4">
      <h2 class="text-xl font-bold mb-4">Outils</h2>
      <button @click="addSection" class="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2">
        Ajouter une section
      </button>
      <button @click="changeTemplate" class="w-full bg-green-500 text-white py-2 px-4 rounded mb-2">
        Changer de template
      </button>
      <button @click="customizeDesign" class="w-full bg-purple-500 text-white py-2 px-4 rounded mb-2">
        Personnaliser le design
      </button>
      <button @click="exportCV" class="w-full bg-red-500 text-white py-2 px-4 rounded">
        Exporter le CV
      </button>
    </div>

    <!-- Main editing area -->
    <div class="flex-1 p-8">
      <div class="bg-white shadow-lg rounded-lg p-6" ref="cvContainer">
        <draggable v-model="cvSections" group="sections" @start="drag=true" @end="drag=false">
          <template #item="{element}">
            <div class="mb-4 p-4 border rounded cursor-move">
              <h3 class="text-lg font-semibold mb-2">{{ element.title }}</h3>
              <div v-html="element.content"></div>
              <div class="mt-2">
                <button @click="editSection(element)" class="text-blue-500 mr-2">Éditer</button>
                <button @click="removeSection(element)" class="text-red-500">Supprimer</button>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>

    <!-- Preview panel -->
    <div class="w-1/3 bg-white shadow-md p-4">
      <h2 class="text-xl font-bold mb-4">Aperçu</h2>
      <div class="border rounded p-4" v-html="previewHTML"></div>
    </div>
  </div>

  <!-- Modals for adding/editing sections, changing templates, etc. -->
  <ModalAddSection v-if="showAddSectionModal" @close="showAddSectionModal = false" @add-section="handleAddSection" />
  <ModalEditSection v-if="editingSectionIndex !== null" 
    :section="cvSections[editingSectionIndex]"
    @close="editingSectionIndex = null"
    @update-section="handleUpdateSection"
  />
  <ModalChangeTemplate v-if="showChangeTemplateModal" @close="showChangeTemplateModal = false" @select-template="handleSelectTemplate" />
  <ModalCustomizeDesign v-if="showCustomizeDesignModal" @close="showCustomizeDesignModal = false" @update-design="handleUpdateDesign" />
</template>

<script setup>
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import ModalAddSection from '../components/ModalAddSection.vue'
import ModalEditSection from '../components/ModalEditSection.vue'
import ModalChangeTemplate from '../components/ModalChangeTemplate.vue'
import ModalCustomizeDesign from '../components/ModalCustomizeDesign.vue'
import { useTemplateStore } from '../stores/template'
import { useCVStore } from '../stores/cv'

const templateStore = useTemplateStore()
const cvStore = useCVStore()

const cvSections = ref(cvStore.sections)
const showAddSectionModal = ref(false)
const showChangeTemplateModal = ref(false)
const showCustomizeDesignModal = ref(false)
const editingSectionIndex = ref(null)

const previewHTML = computed(() => {
  // Generate preview HTML based on current template and CV data
  return templateStore.renderCV(cvSections.value)
})

const addSection = () => {
  showAddSectionModal.value = true
}

const changeTemplate = () => {
  showChangeTemplateModal.value = true
}

const customizeDesign = () => {
  showCustomizeDesignModal.value = true
}

const exportCV = () => {
  // Implementation for CV export (PDF, HTML, etc.)
}

const editSection = (section) => {
  editingSectionIndex.value = cvSections.value.indexOf(section)
}

const removeSection = (section) => {
  const index = cvSections.value.indexOf(section)
  cvSections.value.splice(index, 1)
}

const handleAddSection = (newSection) => {
  cvSections.value.push(newSection)
  showAddSectionModal.value = false
}

const handleUpdateSection = (updatedSection) => {
  cvSections.value[editingSectionIndex.value] = updatedSection
  editingSectionIndex.value = null
}

const handleSelectTemplate = (templateId) => {
  templateStore.setActiveTemplate(templateId)
  showChangeTemplateModal.value = false
}

const handleUpdateDesign = (designChanges) => {
  templateStore.updateDesign(designChanges)
  showCustomizeDesignModal.value = false
}
</script>
