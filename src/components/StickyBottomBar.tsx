import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Mobile-only Sticky Bottom Conversion Bar */}
      <div
        id="sticky-mobile-conversion-bar"
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)] flex items-center gap-2"
      >
        <a
          id="sticky-mobile-call-btn"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-teal-800 text-white font-bold text-sm shadow-xs active:bg-teal-950 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-200" />
          <span>Call Now</span>
        </a>

        <a
          id="sticky-mobile-whatsapp-btn"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-xs active:bg-emerald-700 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          id="sticky-mobile-book-btn"
          onClick={onOpenBooking}
          className="p-3 rounded-xl bg-slate-100 text-slate-800 font-bold active:bg-slate-200 transition-colors"
          aria-label="Book appointment modal"
        >
          <Calendar className="w-5 h-5 text-teal-800" />
        </button>
      </div>

      {/* Desktop / Tablet Floating Quick Action Button in bottom-right corner */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        <a
          id="desktop-floating-whatsapp-btn"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            WhatsApp Enquiry
          </span>
        </a>

        <a
          id="desktop-floating-call-btn"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 border border-teal-700"
          aria-label="Call for home physiotherapy"
        >
          <Phone className="w-4 h-4 text-teal-200 animate-pulse" />
          <span>{BUSINESS_INFO.phoneDisplay}</span>
        </a>
      </div>
    </>
  );
};
