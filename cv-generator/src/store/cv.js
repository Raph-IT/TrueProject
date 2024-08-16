// src/store/cv.js
import { defineStore } from 'pinia'

export const useCVStore = defineStore('cv', {
  state: () => ({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: ''
    },
    experience: [],
    education: [],
    skills: []
  }),
  actions: {
    updatePersonalInfo(info) {
      this.personalInfo = { ...this.personalInfo, ...info }
    },
    updateExperience(experiences) {
      this.experience = [...experiences]
    },
    addExperience(exp) {
      this.experience.push(exp)
    },
    updateEducation(educations) {
      this.education = [...educations]
    },
    addEducation(edu) {
      this.education.push(edu)
    },
    updateSkills(skills) {
      this.skills = [...skills]
    },
    resetCV() {
      this.$reset()
    }
  },
  getters: {
    fullCV: (state) => {
      return {
        personalInfo: state.personalInfo,
        experience: state.experience,
        education: state.education,
        skills: state.skills
      }
    }
  }
})