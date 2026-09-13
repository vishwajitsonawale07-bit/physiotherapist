import React from 'react';
import { PhoneCall, ClipboardList, Home, ArrowRight, MessageSquare } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';

export const HowItWorks: React.FC = () => {
  const icons = [
    <PhoneCall className="w-6 h-6 text-teal-700" />,
    <ClipboardList className="w-6 h-6 text-teal-700" />,
    <Home className="w-6 h-6 text-teal-700" />,
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-md">
            Simple & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Booking professional physiotherapy at your home in Pune takes just 3 simple steps.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              id={`how-it-works-step-${stepItem.step}`}
              className="relative bg-white rounded-2xl p-7 shadow-xs border border-slate-200/80 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-teal-200 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {stepItem.description}
                </p>
              </div>

              {idx === 0 && (
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              )}

              {idx === 1 && (
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Doctor prescription and symptom discussion.
                </div>
              )}

              {idx === 2 && (
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Safe doorstep care anywhere in Pune.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
