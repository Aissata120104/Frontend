import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Connexion from './components/Connexion';
import TableauDeBordEnseignant from './components/TableauDeBordEnseignant';
import TableauDeBordEtudiant from './components/TableauDeBordEtudiant';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/enseignant" element={<TableauDeBordEnseignant />} />
        <Route path="/etudiant" element={<TableauDeBordEtudiant />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;