import React from 'react';
import ListeExamens from './ListeExamens';
import Statistiques from './Statistiques';

const TableauDeBordEnseignant = () => {
  return (
    <div style={styles.container}>
      <h2>Tableau de Bord Enseignant</h2>
      <ListeExamens />
      <Statistiques />
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
};

export default TableauDeBordEnseignant;