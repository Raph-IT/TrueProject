<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Add New Section</h2>
        <input v-model="newSection.title" placeholder="Section Title" />
        <textarea v-model="newSection.content" placeholder="Section Content"></textarea>
        <button @click="addSection">Add Section</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['close', 'add-section'])
  
  const newSection = ref({ title: '', content: '' })
  
  const addSection = () => {
    emit('add-section', { ...newSection.value, id: Date.now() })
    newSection.value = { title: '', content: '' }
  }
  </script>