<!-- src/views/CreateCV.vue -->
<script setup>
import { ref } from 'vue'
import { useCVStore } from '../store/cv'
import CVForm from '../components/CVForm/CVForm.vue'
import CVPreview from '../components/CVPreview/CVPreview.vue'
import html2pdf from 'html2pdf.js'

const cvStore = useCVStore()
const cvPreviewRef = ref(null)

const fillTestData = () => {
  // Informations personnelles
  cvStore.updatePersonalInfo({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    phone: '06 12 34 56 78',
    description: "Développeur full-stack passionné avec 5 ans d'expérience dans la création d'applications web innovantes. Spécialisé en JavaScript, avec une forte expertise en Vue.js et Node.js. Toujours à la recherche de nouveaux défis techniques et d'opportunités pour apprendre et grandir professionnellement."
  })

  // Expériences professionnelles
  cvStore.updateExperience([
    {
      jobTitle: 'Développeur Full-Stack Senior',
      company: 'Tech Innovations SA',
      startDate: '2021-03-01',
      endDate: '2024-08-16',
      description: "- Développement et maintenance d'applications web à grande échelle\n- Lead technique sur plusieurs projets clés utilisant Vue.js et Node.js\n- Mise en place de pratiques DevOps et d'intégration continue\n- Mentorat de développeurs juniors et participation active au processus de recrutement"
    },
    {
      jobTitle: 'Développeur Front-End',
      company: 'WebSolutions Inc.',
      startDate: '2019-06-01',
      endDate: '2021-02-28',
      description: "- Création d'interfaces utilisateur réactives et performantes avec Vue.js\n- Collaboration étroite avec les designers UX pour implémenter des designs pixel-perfect\n- Optimisation des performances front-end et amélioration de l'expérience utilisateur"
    }
  ])

  // Formation
  cvStore.updateEducation([
    {
      degree: "Master en Informatique",
      institution: "Université de Technologie",
      startDate: "2017-09-01",
      endDate: "2019-06-30"
    },
    {
      degree: "Licence en Informatique",
      institution: "Université de Sciences",
      startDate: "2014-09-01",
      endDate: "2017-06-30"
    }
  ])

  // Compétences
  cvStore.updateSkills([
    'JavaScript', 'Vue.js', 'Node.js', 'React', 'Express.js', 
    'MongoDB', 'SQL', 'Git', 'Docker', 'AWS', 
    'Méthodologies Agiles', 'Test Driven Development'
  ])
}

const exportToPDF = () => {
  const element = cvPreviewRef.value
  const opt = {
    margin: 0,
    filename: `${cvStore.personalInfo.firstName}_${cvStore.personalInfo.lastName}_CV.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait'
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  }

  // Créer une copie du contenu pour la manipulation
  const tempElement = element.cloneNode(true)
  document.body.appendChild(tempElement)
  tempElement.style.width = '210mm'
  tempElement.style.height = 'auto'
  tempElement.style.overflow = 'visible'

  // Fonction pour diviser le contenu en pages A4
  const splitContentIntoPages = (element) => {
    const pageHeight = 297 // hauteur A4 en mm
    let currentHeight = 0
    let currentPage = document.createElement('div')
    currentPage.className = 'pdf-page'
    const pages = [currentPage]

    Array.from(element.children).forEach((child) => {
      const childHeight = child.offsetHeight
      if (currentHeight + childHeight > pageHeight) {
        currentPage = document.createElement('div')
        currentPage.className = 'pdf-page'
        pages.push(currentPage)
        currentHeight = 0
      }
      currentPage.appendChild(child.cloneNode(true))
      currentHeight += childHeight
    })

    return pages
  }

  const pages = splitContentIntoPages(tempElement)
  const pagesContainer = document.createElement('div')
  pages.forEach(page => pagesContainer.appendChild(page))

  // Générer le PDF
  html2pdf().set(opt).from(pagesContainer).save().then(() => {
    document.body.removeChild(tempElement)
  })
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Créer votre CV</h1>
    
    <button @click="fillTestData" class="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
      Remplir avec des données de test
    </button>

    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full md:w-1/2">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Informations du CV</h2>
          <CVForm />
        </div>
        <div class="mt-8">
          <button @click="exportToPDF" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Exporter en PDF
          </button>
        </div>
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 class="text-2xl font-semibold mb-4">Aperçu du CV</h2>
        <div ref="cvPreviewRef" class="sticky top-8">
          <CVPreview />
        </div>
      </div>
    </div>
  </div>
</template>