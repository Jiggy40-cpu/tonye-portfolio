'use client'

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Jane Smith",
      role: "Product Manager at TechCorp",
      content: "Tonye delivered exceptional results on our AI-powered dashboard. Professional, responsive, and incredibly talented.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane"
    },
    {
      name: "Michael Johnson",
      role: "Founder at DataViz",
      content: "Outstanding full-stack developer. Turned our vision into reality with clean code and innovative solutions.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
    },
    {
      name: "Sarah Williams",
      role: "CTO at Innovation Labs",
      content: "Reliable, skilled, and always willing to go the extra mile. Highly recommend for any technical project.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.testimonial-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Testimonials</h2>
          <div className="w-12 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">What clients and colleagues say about working with me</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`testimonial-item border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 ${
                visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: visibleItems.includes(index) ? `${index * 0.2}s` : '0s'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;