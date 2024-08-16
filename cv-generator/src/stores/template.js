import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('template', {
  state: () => ({
    activeTemplateId: 'modern',
    templates: {
      modern: {
        name: 'Modern',
        styles: {
          fontFamily: 'Arial, sans-serif',
          primaryColor: '#3498db',
          secondaryColor: '#2c3e50',
          backgroundColor: '#ecf0f1'
        }
      },
      classic: {
        name: 'Classic',
        styles: {
          fontFamily: 'Times New Roman, serif',
          primaryColor: '#2c3e50',
          secondaryColor: '#34495e',
          backgroundColor: '#f5f5f5'
        }
      }
    }
  }),
  actions: {
    setActiveTemplate(templateId) {
      this.activeTemplateId = templateId
    },
    updateDesign(designChanges) {
      Object.assign(this.templates[this.activeTemplateId].styles, designChanges)
    },
    renderCV(sections) {
      const template = this.templates[this.activeTemplateId]
      // Implement logic to render CV HTML based on template and sections
      // This is a placeholder and should be replaced with actual rendering logic
      return `
        <div style="font-family: ${template.styles.fontFamily}; background-color: ${template.styles.backgroundColor};">
          ${sections.map(section => `
            <div style="color: ${template.styles.primaryColor};">
              <h2>${section.title}</h2>
              <div>${section.content}</div>
            </div>
          `).join('')}
        </div>
      `
    }
  }
})