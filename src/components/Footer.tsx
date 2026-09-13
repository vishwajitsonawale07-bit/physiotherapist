import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Shield } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Business Identity & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-teal-200 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-base leading-tight tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Doorstep physiotherapy and rehabilitation care delivered across Pune. Dedicated one-on-one sessions for paralysis recovery, stroke rehabilitation, orthopedic therapy, and elderly mobility support.
            </p>
            <div className="text-xs text-teal-400 font-medium">
              Open daily · Closes at 10:30 PM
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-teal-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#conditions" className="hover:text-teal-300 transition-colors">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-teal-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-300 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Conditions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Rehabilitation Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Paralysis Rehabilitation</li>
              <li>Stroke Recovery Physiotherapy</li>
              <li>Neurological Balance Therapy</li>
              <li>Orthopedic Joint & Spine Care</li>
              <li>Post-Surgery Rehabilitation</li>
              <li>Elderly Mobility & Fall Prevention</li>
              <li>Home Exercise Protocols</li>
            </ul>
          </div>

          {/* Col 4: Contact & Appointments */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Booking
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-bold text-white hover:text-teal-300 text-sm"
                >
                  Phone: {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                id="footer-book-visit-btn"
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl transition-colors text-center"
              >
                Book Home Visit
              </button>
              <a
                id="footer-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Disclaimer Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-slate-500">
              Disclaimer: Home physiotherapy services are structured physical rehabilitation treatments and are not a substitute for emergency acute medical care.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
