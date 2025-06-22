import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Header />
          <Hero />
          <About />
          <VisionMission />
          <Products />
          <Contact />
          <Footer />
        </div>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;