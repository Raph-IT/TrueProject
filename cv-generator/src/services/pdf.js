// src/services/pdf.js
import html2pdf from 'html2pdf.js'

export const pdfService = {
  exportToPDF(element, filename) {
    const opt = {
      margin: 1,
      filename: filename || 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    return html2pdf().set(opt).from(element).save()
  }
}