import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Examples from './pages/Examples';
import DesignPortfolio from './pages/DesignPortfolio';
import About from './pages/About';
import ProductDetailPage from './pages/ProductDetailPage'
import ContactUs from './pages/ContactUs'
import './i18n';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/design-portfolio" element={<DesignPortfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/examples/productdetailpage" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;