import React, { useState } from 'react';

const SoumissionCopie = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fichier soumis :', file);
  };

  return (
    <div>
      <h3>Soumettre une Copie</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default SoumissionCopie;