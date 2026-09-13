import React from 'react';
import { Phone, MessageSquare, Clock } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';

export const QuickContactBar: React.FC = () => {
  return (
    <section id="quick-contact-bar" className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-4 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-teal-700/80 flex items-center justify-center shrink-0 border border-teal-500/30">
            <Phone className="w-5 h-5 text-teal-200 animate-pulse" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Need Physiotherapy at Home?
            </h2>
            <p className="text-xs sm:text-sm text-teal-200 flex items-center gap-1.5 justify-center md:justify-start">
              <Clock className="w-3.5 h-3.5" />
              <span>Call: <strong className="text-white font-bold">{BUSINESS_INFO.phoneDisplay}</strong> • {BUSINESS_INFO.hours}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-center">
          <a
            id="quick-bar-call-btn"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-teal-950 font-bold text-sm px-6 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-800" />
            <span>Call Now</span>
          </a>

          <a
            id="quick-bar-whatsapp-btn"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
