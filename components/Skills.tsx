'use client'

function Skills() {
  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Skills & Tools</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-md hover:border-gray-300 transition-all duration-200 group"
            >
              <p className="font-semibold text-gray-900 text-base mb-1 group-hover:text-gray-700">
                {skill.name}
              </p>
              <p className="text-gray-500 text-xs font-medium">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

        {/* Alternative: Minimalist Style (uncomment to use) */}
        {/* 
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-2 bg-gray-200 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              {skill.name}
            </span>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}

export default Skills;