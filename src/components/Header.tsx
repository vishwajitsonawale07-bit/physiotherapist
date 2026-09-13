import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MessageSquare, Shield } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';

interface HeaderProps {
  onOpenBooking: (requirement?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar for emergency phone & hours */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-teal-300 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.hours}</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden sm:inline-block text-slate-300">
              Personalized Doorstep Rehabilitation in Pune
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="top-bar-phone"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              id="top-bar-whatsapp"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Business name */}
          <a href="#home" id="header-logo" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-700 transition-colors shrink-0">
              <Shield className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <span className="block text-sm sm:text-base lg:text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                ADVANCED PHYSIOTHERAPIST
              </span>
              <span className="block text-xs font-semibold text-teal-700 uppercase tracking-wide">
                Home Visit in Pune
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side CTAs */}
          <div className="flex items-center gap-3">
            <a
              id="header-phone-cta"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-2 text-slate-800 hover:text-teal-800 font-bold text-sm px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              id="header-book-home-visit-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Home Visit</span>
            </button>

            {/* Mobile menu hamburger button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl transition-all"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <a
                id="mobile-menu-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-teal-800 text-white font-bold rounded-xl text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                id="mobile-menu-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
