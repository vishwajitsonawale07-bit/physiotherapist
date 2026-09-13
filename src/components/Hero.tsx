import React from 'react';
import { Phone, Calendar, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/physioData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-8 pb-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small trust line pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span>{BUSINESS_INFO.trustLine}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Professional Physiotherapy at Your Home in Pune
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {BUSINESS_INFO.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-book-home-visit-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Book a Home Visit</span>
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 border-2 border-teal-800 text-teal-900 font-bold text-base px-7 py-3.5 rounded-xl shadow-xs transition-all"
              >
                <Phone className="w-5 h-5 text-teal-700" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Reassurance bullet points */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>No clinic commute</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>One-on-one attention</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Open till 10:30 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Healthcare Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img
                src="/images/physio_home_hero_1789197089921.jpg"
                alt="Professional physiotherapist providing home rehabilitation to an elderly patient in Pune"
                className="w-full h-[320px] sm:h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay on bottom of image for readability */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="text-xs font-semibold text-teal-200 tracking-wide uppercase">
                    Serving Homes Across Pune
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-100">
                  Dignified recovery care for paralysis, stroke, orthopedic & elderly needs.
                </p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-lg border border-slate-100 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-extrabold text-sm">
                1:1
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Dedicated Home Care</p>
                <p className="text-[11px] text-slate-500">Caregiver guidance included</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-4 bg-teal-800 text-white px-3.5 py-2 rounded-lg shadow-md items-center gap-2 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available Daily in Pune</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
