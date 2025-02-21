import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import AddImage from './components/pages/AddImage';
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
        <Route path="/add_image" element={<AddImage />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
