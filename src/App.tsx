// src/App.tsx
import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCurrentSection } from './Hooks/useCurrentSection';

function App() {
  const currentSection = useCurrentSection([
    'home', 'about', 'services', 'portfolio', 'contact'
  ]);

  const [bulge, setBulge] = useState(false);
  const prev = useRef<string | null>(null);

  useEffect(() => {
    if (currentSection !== prev.current) {
      setBulge(true);
      const t = setTimeout(() => setBulge(false), 700);
      return () => clearTimeout(t);
    }
    prev.current = currentSection;
  }, [currentSection]);

  return (
    <>
      <Header bulge={bulge} />

      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
