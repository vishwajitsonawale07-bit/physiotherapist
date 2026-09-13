import React, { useState } from 'react';
import { ShieldCheck, ArrowUpRight, HelpCircle } from 'lucide-react';
import { CONDITIONS_DATA } from '../data/physioData';

interface ConditionsSectionProps {
  onOpenBooking: (conditionName?: string) => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Neurological', 'Orthopedic', 'Pain Management', 'Elderly & Mobility'];

  const filteredConditions = selectedCategory === 'All'
    ? CONDITIONS_DATA
    : CONDITIONS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="conditions" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
            Rehabilitation Scope
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Conditions We Help With
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Our home visit physiotherapists assist patients with neurological, orthopedic, post-surgical, and geriatric mobility challenges throughout Pune.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredConditions.map((condition, idx) => (
            <div
              key={condition.name}
              id={`condition-card-${idx}`}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-teal-50/40 border border-slate-200/90 hover:border-teal-300 transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => onOpenBooking(condition.name)}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded">
                    {condition.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-900 transition-colors">
                  {condition.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {condition.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-teal-800 font-semibold">
                <span>Request Home Visit</span>
                <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto text-center justify-center">
          <HelpCircle className="w-4 h-4 text-teal-700 shrink-0" />
          <span>
            Have a condition not listed above? Contact us at <strong>09487300777</strong> to check home visit feasibility for your specific doctor prescription.
          </span>
        </div>

      </div>
    </section>
  );
};
