import React from 'react';
import {
  Activity,
  HeartPulse,
  Brain,
  Bone,
  ShieldAlert,
  Stethoscope,
  UserCheck,
  Dumbbell,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/physioData';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Activity':
      return <Activity className="w-6 h-6 text-teal-700" />;
    case 'HeartPulse':
      return <HeartPulse className="w-6 h-6 text-teal-700" />;
    case 'Brain':
      return <Brain className="w-6 h-6 text-teal-700" />;
    case 'Bone':
      return <Bone className="w-6 h-6 text-teal-700" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-6 h-6 text-teal-700" />;
    case 'Stethoscope':
      return <Stethoscope className="w-6 h-6 text-teal-700" />;
    case 'UserCheck':
      return <UserCheck className="w-6 h-6 text-teal-700" />;
    case 'Dumbbell':
      return <Dumbbell className="w-6 h-6 text-teal-700" />;
    default:
      return <Activity className="w-6 h-6 text-teal-700" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-md">
            Specialized Care at Your Doorstep
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Physiotherapy Home Visit Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Focused, one-on-one rehabilitation delivered by experienced physiotherapy professionals in Pune. We bring treatment to you, so recovery begins safely at home.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index + 1}`}
              className="bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Service Image Thumbnail */}
                {service.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.imageUrl}
                      alt={`${service.title} physiotherapist home visit`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200 flex items-center justify-center text-teal-800">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                    {index + 1}. {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-slate-100">
                    {service.points.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-1">
                <button
                  id={`book-service-${service.id}-btn`}
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-teal-800 text-slate-800 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Book Home Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA After Major Service Section (Conversion Requirement) */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-teal-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-1">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Not sure which home physiotherapy program is right for the patient?
            </h4>
            <p className="text-sm text-slate-600">
              Speak directly with our team in Pune to discuss symptoms and plan a personalized assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              id="services-cta-book-btn"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Home Visit</span>
            </button>

            <a
              id="services-cta-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
