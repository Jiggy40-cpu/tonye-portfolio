'use client'

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, User, FileText } from 'lucide-react';

function Publications() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const publications = [
    {
      title: "Machine Learning for Real-Time Data Analytics",
      authors: "Tamunotonye Amachree, Dr. Jane Smith",
      date: "March 2024",
      publication: "Journal of Data Science & AI",
      description: "Exploring advanced machine learning techniques for processing and analyzing large-scale real-time data streams with focus on predictive modeling and pattern recognition.",
      tags: ["Machine Learning", "Data Analytics", "AI", "Real-time Processing"],
      link: "#",
      pdf: "#",
      doi: "10.1234/jdsa.2024.001"
    },
    {
      title: "Building Scalable Full-Stack Applications",
      authors: "Tamunotonye Amachree",
      date: "January 2024",
      publication: "Web Development Quarterly",
      description: "A comprehensive guide to architecting and deploying scalable web applications using modern technologies including React, Node.js, and cloud infrastructure.",
      tags: ["Full-Stack", "Web Development", "Scalability", "Architecture"],
      link: "#",
      pdf: "#",
      doi: "10.1234/wdq.2024.002"
    },
    {
      title: "AI-Powered User Experience Design",
      authors: "Tamunotonye Amachree, Michael Johnson",
      date: "November 2023",
      publication: "International Review of AI in Design",
      description: "Investigating how artificial intelligence can enhance user experience through personalization, predictive interfaces, and intelligent automation in web and mobile applications.",
      tags: ["AI", "UX Design", "Personalization", "User Interface"],
      link: "#",
      pdf: "#",
      doi: "10.1234/irad.2023.045"
    },
    {
      title: "Data Visualization Best Practices for Complex Datasets",
      authors: "Tamunotonye Amachree, Sarah Williams, David Lee",
      date: "August 2023",
      publication: "Information Visualization Magazine",
      description: "Comprehensive analysis of effective data visualization techniques for presenting complex multi-dimensional datasets in ways that facilitate understanding and decision-making.",
      tags: ["Data Visualization", "D3.js", "Analytics", "Information Design"],
      link: "#",
      pdf: "#",
      doi: "10.1234/ivm.2023.089"
    },
    {
      title: "Security Best Practices in Modern Web Development",
      authors: "Tamunotonye Amachree",
      date: "June 2023",
      publication: "Cybersecurity & Development Review",
      description: "Detailed examination of security vulnerabilities in contemporary web applications and practical strategies for implementing robust security measures throughout the development lifecycle.",
      tags: ["Security", "Web Development", "Best Practices", "Cybersecurity"],
      link: "#",
      pdf: "#",
      doi: "10.1234/cdr.2023.034"
    },
    {
      title: "Optimizing Database Performance for High-Traffic Applications",
      authors: "Tamunotonye Amachree, Robert Chen",
      date: "April 2023",
      publication: "Database Systems Quarterly",
      description: "Advanced techniques for database optimization, including indexing strategies, query optimization, and caching mechanisms for applications handling millions of concurrent users.",
      tags: ["Database", "Performance", "Optimization", "SQL"],
      link: "#",
      pdf: "#",
      doi: "10.1234/dsq.2023.012"
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

    const items = sectionRef.current?.querySelectorAll('.publication-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="publications" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Heading */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Publications</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
          <p className="text-lg text-gray-600 mt-4">
            Research papers, articles, and technical publications
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={pub.doi}
              data-index={index}
              className={`publication-item bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 ${
                visibleItems.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: visibleItems.includes(index) ? `${index * 0.1}s` : '0s'
              }}
            >
              {/* Publication Header */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                  {pub.title}
                </h3>

                {/* Metadata */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{pub.authors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span className="italic">{pub.publication}</span>
                  </div>
                </div>

                {/* DOI */}
                <div className="text-xs text-gray-500 mb-3">
                  DOI: <code className="bg-gray-100 px-2 py-1 rounded">{pub.doi}</code>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {pub.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                <a
                  href={pub.link}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors group/link"
                  title="View Publication"
                >
                  View Publication
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
                <a
                  href={pub.pdf}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                  title="Download PDF"
                >
                  Download PDF
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Publications Message (if needed) */}
        {publications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No publications yet. Check back soon!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-600 mb-6">
            Interested in collaboration or research opportunities?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Publications;