export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project",
      tech: "React, Node.js, MongoDB",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      tech: "Next.js, TypeScript, Tailwind",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-blue-600 mb-4">{project.tech}</p>
              <a href={project.link} className="text-blue-600 font-semibold hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}