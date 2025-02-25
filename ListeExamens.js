import React, { useState, useEffect } from 'react';

const ListeExamens = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Simuler un appel API pour charger les examens
    setTimeout(() => {
      setExams([
        { id: 1, name: 'Examen de Mathématiques' },
        { id: 2, name: 'Examen de Physique' },
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      <h3>Liste des Examens</h3>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>{exam.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListeExamens;