import React from 'react';
import { Quote, Info, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/physioData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-md">
            Patient Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Patient Experiences & Care Reflections
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Read representative feedback illustrating how home physiotherapy supports patient comfort and family peace of mind across Pune.
          </p>
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="mb-10 max-w-3xl mx-auto bg-amber-50/90 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Note for Clinic Management & Patients:</strong> The testimonials below are clearly marked sample feedback templates formatted to demonstrate real patient recovery journeys. In compliance with medical ethics, these are ready to be updated with verified patient feedback provided by the clinic administrator.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((review, idx) => (
            <div
              key={review.id}
              id={`review-card-${idx + 1}`}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
                    {review.patientInitials}
                  </div>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                    [Sample Template]
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-teal-800 block">
                    {review.condition}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {review.locationArea}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic relative">
                  "{review.feedbackText}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{review.sessionCount}</span>
                <span className="text-teal-700 font-medium">Home Visits</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
