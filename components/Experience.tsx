'use client'

import { useEffect, useRef, useState } from 'react';

function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Lab",
      period: "2023 - Present",
      description: "Led development of AI-powered analytics platform, managed team of 5 developers, and implemented data-driven solutions.",
      skills: ["React", "Node.js", "Python", "AWS"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Inc",
      period: "2021 - 2023",
      description: "Built scalable web applications, developed REST APIs, and integrated machine learning models into production systems.",
      skills: ["Next.js", "PostgreSQL", "TensorFlow", "Docker"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2020 - 2021",
      description: "Developed responsive web interfaces, wrote clean code, and collaborated with cross-functional teams.",
      skills: ["React", "JavaScript", "CSS", "MongoDB"]
    }
  ];

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const index = parseInt(entry.target.dataset.index || "0"); // safe fallback
          setVisibleItems((prev) => [...new Set([...prev, index])]);
        }
      });
    },
    { threshold: 0.1 }
  );

  const items = sectionRef.current?.querySelectorAll<HTMLElement>('.experience-item');
  items?.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Heading */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Experience</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className={`experience-item border-l-4 border-gray-300 pl-8 py-4 ${
                visibleItems.includes(index) ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{
                animationDelay: visibleItems.includes(index) ? `${index * 0.2}s` : '0s'
              }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gray-900 rounded-full mt-1"></div>

              <div className="mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-full hover:border-gray-900 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;