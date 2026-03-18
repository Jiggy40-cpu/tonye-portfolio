'use client'

function Hero() {
  return (
    <section id="home" className="bg-white pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm Tonye
          <span className="block text-gray-600 text-3xl md:text-5xl font-light mt-2">
            AMACHREE TAMUNOTONYE OMUBO
          </span>
        </h2>

        {/* Subtitle/Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
          A builder who blends full-stack development and data analytics, creating intelligent systems that feel intuitive, not complex. Specializing in data-driven and AI-powered applications that transform insights into seamless, human-centered experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Let's Work Together ★
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;