'use client'
function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          Let's collaborate on something amazing!
        </p>
        <a
          href="mailto:amachreetonye413@gmail.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;