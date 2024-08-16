<!-- src/components/JobDescription.vue -->
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  initialDescription: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update'])

const description = ref(props.initialDescription)

watch(description, (newValue) => {
  emit('update', newValue)
})
</script>

<template>
  <div class="mb-6">
    <h3 class="text-xl font-semibold mb-4">Description du poste</h3>
    <textarea
      v-model="description"
      class="w-full px-3 py-2 border rounded"
      rows="6"
      placeholder="Collez ici la description du poste pour lequel vous postulez..."
    ></textarea>
  </div>
</template>