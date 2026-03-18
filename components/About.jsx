'use client'

function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">About Me</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
        </div>

        {/* About Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a Full-Stack Developer with a strong interest in Data Science and Artificial Intelligence. 
            I build responsive, scalable web applications and enjoy integrating AI-powered solutions to solve real-world problems.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm passionate about creating human-centric technology and continuously improving my skills with modern tools. 
            My approach combines technical expertise with creative problem-solving to deliver solutions that are both 
            powerful and intuitive.
          </p>

          {/* Optional: Key Stats or Highlights */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</p>
              <p className="text-gray-600 text-sm font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5+</p>
              <p className="text-gray-600 text-sm font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</p>
              <p className="text-gray-600 text-sm font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;