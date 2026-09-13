import React from 'react';
import { ArrowRight, ClipboardCheck, FileText, Activity, BookOpen, TrendingUp } from 'lucide-react';
import { PATIENT_JOURNEY_STEPS } from '../data/physioData';

export const PatientJourney: React.FC = () => {
  const stepIcons = [
    <ClipboardCheck className="w-5 h-5 text-teal-700" />,
    <FileText className="w-5 h-5 text-teal-700" />,
    <Activity className="w-5 h-5 text-teal-700" />,
    <BookOpen className="w-5 h-5 text-teal-700" />,
    <TrendingUp className="w-5 h-5 text-teal-700" />,
  ];

  return (
    <section id="patient-journey" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
            Roadmap to Recovery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Your Patient Rehabilitation Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every recovery is unique. Our structured 5-stage home physiotherapy process ensures clear milestones and continuous progress.
          </p>
        </div>

        {/* 5-Step Process Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PATIENT_JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.title}
              id={`journey-step-${idx + 1}`}
              className="relative p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:bg-teal-50/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    Step 0{step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              {idx < PATIENT_JOURNEY_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-teal-400 bg-white rounded-full p-1 border border-slate-200 shadow-xs">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
