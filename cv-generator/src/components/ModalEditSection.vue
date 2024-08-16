<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Edit Section</h2>
        <input v-model="editedSection.title" placeholder="Section Title" />
        <textarea v-model="editedSection.content" placeholder="Section Content"></textarea>
        <button @click="updateSection">Update Section</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps(['section'])
  const emit = defineEmits(['close', 'update-section'])
  
  const editedSection = ref({ ...props.section })
  
  const updateSection = () => {
    emit('update-section', editedSection.value)
  }
  </script>