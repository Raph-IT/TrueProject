import { defineStore } from 'pinia'

export const useCVStore = defineStore('cv', {
  state: () => ({
    sections: [
      { id: 1, title: 'Personal Information', content: '<p>Your personal info here</p>' },
      { id: 2, title: 'Work Experience', content: '<p>Your work experience here</p>' },
      { id: 3, title: 'Education', content: '<p>Your education here</p>' },
      { id: 4, title: 'Skills', content: '<p>Your skills here</p>' }
    ]
  }),
  actions: {
    addSection(section) {
      this.sections.push(section)
    },
    updateSection(index, updatedSection) {
      this.sections[index] = updatedSection
    },
    removeSection(index) {
      this.sections.splice(index, 1)
    },
    reorderSections(newOrder) {
      this.sections = newOrder
    }
  }
})