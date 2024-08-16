<!-- src/components/CVForm/PersonalInfo.vue -->
<script setup>
import { reactive, watch } from 'vue'
import { useCVStore } from '../../store/cv'

const cvStore = useCVStore()

const personalInfo = reactive({ ...cvStore.personalInfo })

watch(personalInfo, (newValue) => {
  cvStore.updatePersonalInfo(newValue)
}, { deep: true })
</script>

<template>
  <div class="mb-6">
    <h3 class="text-xl font-semibold mb-4">Informations personnelles</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="firstName" class="block mb-2">Prénom</label>
        <input
          id="firstName"
          v-model="personalInfo.firstName"
          class="w-full px-3 py-2 border rounded"
          type="text"
        >
      </div>
      <div>
        <label for="lastName" class="block mb-2">Nom</label>
        <input
          id="lastName"
          v-model="personalInfo.lastName"
          class="w-full px-3 py-2 border rounded"
          type="text"
        >
      </div>
      <div>
        <label for="email" class="block mb-2">Email</label>
        <input
          id="email"
          v-model="personalInfo.email"
          class="w-full px-3 py-2 border rounded"
          type="email"
        >
      </div>
      <div>
        <label for="phone" class="block mb-2">Téléphone</label>
        <input
          id="phone"
          v-model="personalInfo.phone"
          class="w-full px-3 py-2 border rounded"
          type="tel"
        >
      </div>
    </div>
    <div class="mt-4">
      <label for="description" class="block mb-2">Description personnelle</label>
      <textarea
        id="description"
        v-model="personalInfo.description"
        class="w-full px-3 py-2 border rounded"
        rows="5"
        placeholder="Présentez-vous en quelques lignes..."
      ></textarea>
    </div>
  </div>
</template>