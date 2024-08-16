<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Customize Design</h2>
        <div v-for="(value, key) in currentStyles" :key="key">
          <label>{{ key }}</label>
          <input v-if="key.includes('Color')" type="color" v-model="designChanges[key]">
          <input v-else type="text" v-model="designChanges[key]">
        </div>
        <button @click="applyChanges">Apply Changes</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useTemplateStore } from '../stores/template'
  
  const templateStore = useTemplateStore()
  const emit = defineEmits(['close', 'update-design'])
  
  const currentStyles = computed(() => templateStore.templates[templateStore.activeTemplateId].styles)
  const designChanges = ref({...currentStyles.value})
  
  const applyChanges = () => {
    emit('update-design', designChanges.value)
  }
  </script>