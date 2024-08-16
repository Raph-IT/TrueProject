// src/services/ai.js
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const aiService = {
  async generateCV(cvData, jobDescription) {
    // Simuler un délai de traitement
    await delay(2000);

    // Simuler une amélioration du CV basée sur la description du poste
    const improvedCV = {
      ...cvData,
      experience: cvData.experience.map(exp => ({
        ...exp,
        description: exp.description + " (Optimisé pour le poste)"
      })),
      skills: [...cvData.skills, "Compétence suggérée 1", "Compétence suggérée 2"]
    };

    return improvedCV;
  }
};