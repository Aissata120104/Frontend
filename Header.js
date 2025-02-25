import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Plateforme de Gestion d'Examens</h1>
      <nav>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/connexion" style={styles.link}>Connexion</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    margin: '0 1rem',
    textDecoration: 'none',
  },
};

export default Header;