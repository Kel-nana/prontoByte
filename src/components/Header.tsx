// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BulgeTextHeader from '../animations/BulgeText/BulgeTextHeader';

interface HeaderProps {
  /** true whenever you want the header text to bulge */
  bulge: boolean;
}

const Header: React.FC<HeaderProps> = ({ bulge }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shadow and backdrop on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-[#243c5a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/fb-dp.png"
            alt="ProntoByte Logo"
            className="h-12 w-12 rounded-full animate-pulse"
          />
          <div>
            <h1
              className={`
                text-xl font-bold transition-colors duration-300
                ${isScrolled ? 'text-white' : 'text-[#9BD6C9]/75'}
              `}
            >
              <BulgeTextHeader
                text="PRONTOBYTE"
                className={bulge ? 'animate-bulge' : ''}
              />
            </h1>
            <p
              className={`
                text-sm transition-colors duration-300
                ${isScrolled ? 'text-white' : 'text-[#9BD6C9]/75'}
              `}
            >
              <BulgeTextHeader
                text="We make IT work"
                className={bulge ? 'animate-bulge' : ''}
              />
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={`
                text-sm font-medium transition-all duration-300 hover:scale-105
                ${isScrolled
                  ? 'text-[#9BD6C9] hover:text-blue-600'
                  : 'text-white hover:text-blue-300'}
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="
              inline-flex items-center
              bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25
              border-2 border-solid border-x-[#253874]/125 border-y-[#9BD6C9]/25
              text-white px-6 py-2 rounded-full text-sm font-medium
              hover:shadow-lg hover:scale-105 transition-all duration-300
            "
          >
            <BulgeTextHeader
              text="Get Started"
              className={bulge ? 'animate-bulge' : ''}
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(open => !open)}
          className={`
            md:hidden p-2 rounded-lg transition-colors duration-300
            ${isScrolled ? 'text-[#9BD6C9]' : 'text-white'}
          `}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
