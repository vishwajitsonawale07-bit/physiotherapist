import React from 'react';
import { ShieldCheck, HeartHandshake, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/physioData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with details */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="/images/physio_care_home_1789197111455.jpg"
                alt="Physiotherapy rehabilitation session at patient's home in Pune"
                className="w-full h-[320px] sm:h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Care in Your Safe Environment
                    </h3>
                    <p className="text-xs text-slate-600">
                      Encouraging steady recovery in the comfort of family surroundings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/70 text-teal-900 text-xs font-bold uppercase tracking-wider">
              About Our Home Visit Practice
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Physiotherapy Care Designed Around You
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              When recovering from a stroke, undergoing post-operative joint rehabilitation, or dealing with chronic paralysis and severe back pain, traveling to an outpatient clinic can be physically exhausting, painful, and logistically stressful for both patients and their families.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>Advanced Physiotherapist Home Visit in Pune</strong> brings professional rehabilitation care directly to the patient's residence. By delivering treatment at home, our physiotherapists can evaluate functional obstacles in the patient’s real living space—such as bed transfers, stair navigation, and walking path safety—ensuring that exercises directly translate into improved daily independence.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Unhurried 1-on-1 therapeutic attention
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Family and caregiver guidance included
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Doctor prescription aligned rehabilitation
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Available across Pune neighborhoods daily
                </span>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Home Visit</span>
              </button>

              <a
                id="about-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 text-slate-800 hover:text-teal-800 font-bold text-sm px-4 py-3 rounded-xl hover:bg-slate-200/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
