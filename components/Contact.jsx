'use client'

import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

function Contact() {
  const socialLinks = [
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:amachreetonye413@gmail.com',
      label: 'amachreetonye413@gmail.com'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/yourprofile',
      label: '@yourprofile'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/yourprofile',
      label: '@yourprofile'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/yourprofile',
      label: '@yourprofile'
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-12 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-16">
          <a
            href="mailto:amachreetonye413@gmail.com"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Me an Email
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 font-medium">or connect on social</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-300 p-6 rounded-lg text-center hover:border-gray-900 hover:shadow-md transition-all duration-200"
              >
                <Icon className="w-8 h-8 text-gray-900 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-1">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {social.label}
                </p>
              </a>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-20 pt-12 border-t border-gray-300 text-center">
          <p className="text-gray-600 mb-2">
            Available for freelance projects and full-time opportunities
          </p>
          <p className="text-sm text-gray-500">
            © 2026 Tamunotonye Amachree. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;