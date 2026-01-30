import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/training', label: 'Training' },
    { path: '/drills', label: 'Drills' },
    { path: '/training-gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Success' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A1628] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Branding */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-full flex items-center justify-center">
            <span className="text-[#0A1628] font-extrabold text-lg">CS</span>
          </div>
          <div>
            <h1 className="text-white text-base font-bold leading-tight">Coach Steve</h1>
            <p className="text-[#4FC3F7] text-xs font-semibold tracking-wide -mt-1">Baseball</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`transition hover:text-[#C9A961] ${
                location.pathname === path ? 'text-[#C9A961]' : 'text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#4FC3F7] hover:bg-[#34b6eb] text-[#0A1628] font-bold py-2 px-4 rounded-lg uppercase tracking-wide text-xs transition"
          >
            Book Assessment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#C9A961]/20 px-4 pb-4">
          <nav className="flex flex-col gap-4 text-sm">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={`hover:text-[#C9A961] ${
                  location.pathname === path ? 'text-[#C9A961]' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-white bg-[#4FC3F7] hover:bg-[#34b6eb] font-bold py-2 px-4 rounded-lg uppercase tracking-wide text-xs text-center"
            >
              Book Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
