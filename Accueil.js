import React from 'react';

const Accueil = () => {
  return (
    <div style={styles.container}>
      <h2>Bienvenue sur la Plateforme de Gestion d'Examens</h2>
      <p>Cette plateforme permet aux enseignants de déposer des sujets d'examen et aux étudiants de soumettre leurs réponses.</p>
      <p>Fonctionnalités :</p>
      <ul>
        <li>Correction automatique par IA</li>
        <li>Détection de plagiat</li>
        <li>Chatbot d'assistance</li>
        <li>Statistiques détaillées</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
};

export default Accueil;