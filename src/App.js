import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Characters from './components/Characters';
import Trailer from './components/Trailer';
import Features from './components/Features';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cases />
      <Characters />
      <Features />
      <Trailer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
