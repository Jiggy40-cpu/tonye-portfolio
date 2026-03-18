'use client'

import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">TAMUNOTONYE</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">About</a></li>
          <li><a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">Skills</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">Projects</a></li>
          <li><a href="#publications" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">Publications</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <ul className="px-4 py-4 space-y-4">
            <li><a href="#home" className="text-gray-700 hover:text-gray-900 text-sm font-medium block">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-gray-900 text-sm font-medium block">About</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-gray-900 text-sm font-medium block">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-gray-900 text-sm font-medium block">Projects</a></li>
            <li><a href="#publications" className="text-gray-700 hover:text-gray-900 text-sm font-medium block">Publications</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium block">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;