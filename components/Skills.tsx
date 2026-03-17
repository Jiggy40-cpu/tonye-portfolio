'use client'
function Skills() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-blue-100 p-4 rounded-lg text-center font-semibold text-gray-800">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default  Skills;