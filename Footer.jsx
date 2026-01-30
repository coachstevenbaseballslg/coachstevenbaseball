import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] pt-14 pb-8 border-t border-[#C9A961]/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-full flex items-center justify-center">
                <span className="text-[#0A1628] font-extrabold text-xl">CS</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Coach Steve</h2>
                <p className="text-[#4FC3F7] text-xs tracking-wide font-semibold">Baseball Training</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Private hitting instruction in Westbury, NY for all ages. Building powerful, confident players through proven coaching and mechanics.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#C9A961]"><Instagram size={20} /></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-[#C9A961]"><Twitter size={20} /></a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#C9A961]"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 border-b border-[#4FC3F7]/20 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-[#C9A961]">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#C9A961]">About</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-[#C9A961]">Programs</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-[#C9A961]">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-[#C9A961]">Success Stories</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#C9A961]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 border-b border-[#4FC3F7]/20 pb-2">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#4FC3F7]" />
                <a href="mailto:coach@coachstevebaseball.com" className="hover:text-white">coach@coachstevebaseball.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#4FC3F7]" />
                <a href="tel:5164288081" className="hover:text-white">516.428.8081</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block w-full text-center bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-[#0A1628] font-semibold py-3 px-4 rounded-lg text-sm uppercase tracking-wider transition-all duration-300"
              >
                Book Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#C9A961]/10 pt-6 text-center text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Coach Steve Baseball. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
