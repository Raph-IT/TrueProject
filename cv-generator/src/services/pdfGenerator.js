// src/services/pdfGenerator.js
import html2pdf from 'html2pdf.js'

const templates = {
  'modern': {
    headerColor: [66, 133, 244], // blue
    textColor: [0, 0, 0], // black
    titleColor: [66, 133, 244], // blue
  },
  'classic': {
    headerColor: [50, 50, 50], // dark gray
    textColor: [0, 0, 0], // black
    titleColor: [100, 100, 100], // gray
  },
  // Add more templates here
}

export const generatePDF = (element, cvData, templateName = 'modern') => {
  const template = templates[templateName] || templates['modern']
  
  // Apply template styles
  applyTemplateStyles(element, template)

  const opt = {
    margin: 10,
    filename: `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  }

  // Generate PDF
  html2pdf().set(opt).from(element).save()
}

const applyTemplateStyles = (element, template) => {
  const header = element.querySelector('.header')
  if (header) {
    header.style.backgroundColor = `rgb(${template.headerColor.join(',')})`
  }

  const titles = element.querySelectorAll('h2, h3')
  titles.forEach(title => {
    title.style.color = `rgb(${template.titleColor.join(',')})`
  })

  element.style.color = `rgb(${template.textColor.join(',')})`
}