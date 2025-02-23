// Hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import AddCard from './components/pages/AddCard';
import Support from './components/pages/Support';

// Components
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/add_card" element={<AddCard />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
