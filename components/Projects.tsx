'use client'

function Projects() {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform that leverages machine learning to provide real-time insights and predictive analytics for data-driven decision making.",
      tech: ["React", "Node.js", "MongoDB", "TensorFlow"],
      link: "#",
      image: "/projects/project-1.jpg"
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description: "A scalable e-commerce solution built with modern technologies, featuring real-time inventory management, secure payments, and personalized user experiences.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "#",
      image: "/projects/project-2.jpg"
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive data visualization platform that transforms complex datasets into intuitive, actionable insights with custom charts and real-time updates.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      link: "#",
      image: "/projects/project-3.jpg"
    },
    {
      title: "Machine Learning Model API",
      description: "A production-ready API service that serves pre-trained ML models with high performance, scalability, and comprehensive monitoring for enterprise applications.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      link: "#",
      image: "/projects/project-4.jpg"
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image (Optional) */}
              {project.image && (
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors duration-200"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;