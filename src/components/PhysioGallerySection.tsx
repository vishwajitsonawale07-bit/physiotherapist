import React, { useState } from 'react';
import { ShieldCheck, MapPin, Calendar, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PHYSIO_GALLERY_DATA, BUSINESS_INFO } from '../data/physioData';

interface PhysioGallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PhysioGallerySection: React.FC<PhysioGallerySectionProps> = ({ onOpenBooking }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="physio-gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
            Clinical Care at Home
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Physiotherapists in Action Across Pune
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            See how professional rehabilitation is safely and compassionately delivered in patients' homes—eliminating travel, minimizing discomfort, and empowering independence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PHYSIO_GALLERY_DATA.map((item, idx) => (
            <div
              key={item.id}
              id={`physio-gallery-card-${idx + 1}`}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - Physiotherapist home visit in Pune`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {item.category}
                  </div>

                  {/* Highlight Pill */}
                  <div className="absolute bottom-3 right-3 bg-teal-800/90 backdrop-blur-xs text-teal-100 text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-300" />
                    <span>{item.highlight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  id={`gallery-book-btn-${idx + 1}`}
                  onClick={() => onOpenBooking(item.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-teal-800 text-slate-800 hover:text-white border border-slate-200 hover:border-teal-800 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book for this Condition</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reassurance Banner */}
        <div className="mt-12 bg-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-teal-200" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Safe, Hygienic, & Certified In-Home Care
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                All therapy equipment, resistance aids, and mobilization accessories are sanitised and brought directly to your home in Pune.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="gallery-banner-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
