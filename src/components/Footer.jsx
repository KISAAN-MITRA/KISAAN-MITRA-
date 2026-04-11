import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Specifications', 'Pricing', 'Demo'],
    Company: ['Home', 'Product', 'About Us', 'Contact'],
    Resources: ['Blog', 'Case Studies', 'FAQs', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
  };

  const internalLinks = {
    'Home': '/',
    'Product': '/product',
    'About Us': '/about',
    'Contact': '/contact' // adjust this if Contact is an anchor link instead
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src="/HVEV_1-removebg-preview.png"
                alt="HVEV Brand Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-xl"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Empowering India's small farmers with affordable, sustainable mechanisation solutions.
              </p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/hv-electric-vehicle/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@kisaanmittra?si=oUoZCLMjQAHzPHIn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      {internalLinks[link] ? (
                        <Link to={internalLinks[link]} className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                          {link}
                        </Link>
                      ) : (
                        <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                          {link}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-green-400 transition-colors duration-200">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Phone / WhatsApp</div>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-green-400 transition-colors duration-200">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} HVEV. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
