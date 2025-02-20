import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddImage from './components/pages/AddImage';
import Support from './components/pages/Support';

import Navbar from './components/ui/Navbar';
import Main from './components/ui/Main';
import './App.css';

// TODO: Adicionar uma landing page

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/add_image" element={<AddImage />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>

      <Main />
    </div>
  );
}

export default App;
