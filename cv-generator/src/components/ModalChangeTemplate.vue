<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Change Template</h2>
        <div v-for="(template, id) in templates" :key="id" class="template-option">
          <button @click="selectTemplate(id)">{{ template.name }}</button>
        </div>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useTemplateStore } from '../stores/template'
  
  const templateStore = useTemplateStore()
  const emit = defineEmits(['close', 'select-template'])
  
  const { templates } = templateStore
  
  const selectTemplate = (templateId) => {
    emit('select-template', templateId)
  }
  </script>
  