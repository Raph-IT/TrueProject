<!-- src/components/CVForm/PersonalInfoForm.vue -->
<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['data'])
const emit = defineEmits(['update'])

const localData = ref({ ...props.data })

watch(localData, (newValue) => {
  emit('update', newValue)
}, { deep: true })
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold mb-4">Informations personnelles</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
        <input id="firstName" v-model="localData.firstName" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
        <input id="lastName" v-model="localData.lastName" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" v-model="localData.email" type="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
        <input id="phone" v-model="localData.phone" type="tel" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
      </div>
    </div>
    <div class="mt-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="description" v-model="localData.description" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
    </div>
  </div>
</template>