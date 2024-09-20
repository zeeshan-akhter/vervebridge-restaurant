import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularCategories from './components/PopularCategories';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PopularCategories />
      <MenuSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
