import React from 'react';
import ListeExamens from './ListeExamens';
import SoumissionCopie from './SoumissionCopie';

const TableauDeBordEtudiant = () => {
  return (
    <div style={styles.container}>
      <h2>Tableau de Bord Étudiant</h2>
      <ListeExamens />
      <SoumissionCopie />
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
};

export default TableauDeBordEtudiant;