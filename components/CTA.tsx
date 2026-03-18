'use client'

import { useEffect, useState } from 'react';

function CTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.currentScript?.parentElement || document.body);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on your next project. Whether you have a specific idea or just want to explore possibilities, I'm ready to help.
          </p>
        </div>

        {/* CTA Button */}
        <div
          style={{ animationDelay: '0.2s' }}
          className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;