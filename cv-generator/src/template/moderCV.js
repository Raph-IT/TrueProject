// src/templates/modernCV.js

export const modernCVTemplate = {
    id: 'modern-cv',
    name: 'Modern CV',
    sections: [
      {
        type: 'Header',
        config: {
          backgroundColor: [66, 133, 244],
          textColor: [255, 255, 255],
          fontSize: 24
        }
      },
      {
        type: 'Text',
        field: 'personalInfo.description',
        config: {
          title: 'À propos de moi',
          titleColor: [66, 133, 244],
          fontSize: 12
        }
      },
      {
        type: 'List',
        field: 'experience',
        config: {
          title: 'Expérience professionnelle',
          titleColor: [66, 133, 244],
          itemTitleFontSize: 14,
          itemDescriptionFontSize: 10
        }
      },
      // Ajoutez d'autres sections selon les besoins
    ]
  }