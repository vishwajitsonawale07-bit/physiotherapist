import React from 'react';
import {
  Home,
  FileCheck,
  HeartHandshake,
  Target,
  ShieldCheck,
  CalendarCheck,
  Check,
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/physioData';

const getChooseIcon = (icon: string) => {
  switch (icon) {
    case 'Home':
      return <Home className="w-6 h-6 text-teal-700" />;
    case 'FileCheck':
      return <FileCheck className="w-6 h-6 text-teal-700" />;
    case 'HeartHandshake':
      return <HeartHandshake className="w-6 h-6 text-teal-700" />;
    case 'Target':
      return <Target className="w-6 h-6 text-teal-700" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-teal-700" />;
    case 'CalendarCheck':
      return <CalendarCheck className="w-6 h-6 text-teal-700" />;
    default:
      return <Check className="w-6 h-6 text-teal-700" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
            Rehabilitation Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Choose Home Physiotherapy?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Rehabilitation shouldn’t begin with the stress of traffic or painful transit. Discover how personalized home care supports patient comfort and recovery.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={item.title}
              id={`why-choose-card-${index + 1}`}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:bg-teal-50/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-5 text-teal-700">
                  {getChooseIcon(item.icon)}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-teal-800 flex items-center gap-1.5">
                <span>Designed for patient comfort</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
