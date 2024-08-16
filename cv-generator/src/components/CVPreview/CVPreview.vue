<!-- src/components/CVPreview/CVPreview.vue -->
<script setup>
import { computed } from 'vue'
import { useCVStore } from '../../store/cv'

const props = defineProps(['template', 'sections'])
const cvStore = useCVStore()

const templateStyles = computed(() => {
  const templates = {
    'modern': {
      headerBg: 'bg-blue-600',
      titleColor: 'text-blue-600',
    },
    'classic': {
      headerBg: 'bg-gray-800',
      titleColor: 'text-gray-600',
    },
  }
  return templates[props.template] || templates['modern']
})

const visibleSections = computed(() => {
  return props.sections.filter(section => cvStore.getSection(section))
})
</script>

<template>
  <div class="cv-preview bg-white shadow-lg">
    <div :class="['header', 'text-white', 'p-6', templateStyles.headerBg]">
      <h1 class="text-3xl font-bold">{{ cvStore.sections.personalInfo.firstName }} {{ cvStore.sections.personalInfo.lastName }}</h1>
      <p class="text-xl">{{ cvStore.sections.personalInfo.email }} | {{ cvStore.sections.personalInfo.phone }}</p>
    </div>

    <div class="content p-6">
      <template v-for="(section, index) in visibleSections" :key="section">
        <component :is="`${section}-preview`" 
                   :data="cvStore.getSection(section)"
                   :class="templateStyles" />
        <hr v-if="index < visibleSections.length - 1" class="my-6">
      </template>
    </div>
  </div>
</template>