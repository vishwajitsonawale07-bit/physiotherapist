import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  FileText,
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  onOpenBookingModal: (requirement?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBookingModal }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    requirement: 'Paralysis Rehabilitation',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    addressArea: '',
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please provide the patient or contact person name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const getWhatsAppSubmissionMessage = () => {
    return `Hello, I would like to request a home physiotherapy visit in Pune.
Patient Name: ${formData.name}
Phone: ${formData.phone}
Requirement/Condition: ${formData.requirement}
Preferred Date: ${formData.preferredDate || 'Earliest available'}
Preferred Time: ${formData.preferredTime}
Area in Pune: ${formData.addressArea || 'Pune'}
Notes: ${formData.notes || 'None'}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-md">
            Direct Doorstep Scheduling
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Book a Physiotherapy Home Visit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Fill out the quick request form below or connect directly via phone or WhatsApp. We schedule home visits across Pune daily until 10:30 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
                  Physiotherapy Service
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Address / Headquarters</strong>
                    <p className="text-slate-600 leading-relaxed">{BUSINESS_INFO.address}</p>
                    <span className="inline-block mt-1 text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      Doorstep visits provided across Pune
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Phone Call Support</strong>
                    <a
                      id="contact-details-phone-link"
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-base font-bold text-teal-800 hover:underline block"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500">Click to call directly</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Operating Hours</strong>
                    <p className="text-slate-600 font-medium">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Now, WhatsApp Us, Book Home Visit */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <a
                  id="contact-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-whatsapp-btn"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  id="contact-book-visit-btn"
                  onClick={() => onOpenBookingModal()}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-700" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" />
                  <span>Pune Location Reference</span>
                </span>
                <span className="text-[11px] text-slate-500">Krishna Path, Pune</span>
              </div>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title="Advanced Physiotherapist Home Visit Location in Pune"
                  src="https://maps.google.com/maps?q=Shyamli,+119/6,+Krishna+Path,+Pune,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Simple Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200">
              
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Request a Home Visit Appointment
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Share the patient’s details below. We will call you promptly to confirm availability and schedule the therapist.
                </p>
              </div>

              {formSubmitted ? (
                <div id="contact-form-success" className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your home visit request for <strong className="text-slate-800">{formData.requirement}</strong> has been logged. Our physiotherapy coordinator will reach out to <strong className="text-slate-800">{formData.phone}</strong> shortly.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Preferred Slot:</span>
                      <span className="font-semibold">{formData.preferredDate || 'Earliest available'} ({formData.preferredTime})</span>
                    </div>
                    {formData.addressArea && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Pune Neighborhood:</span>
                        <span className="font-semibold">{formData.addressArea}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3 max-w-md mx-auto">
                    <a
                      id="form-success-whatsapp-btn"
                      href={getWhatsAppLink(getWhatsAppSubmissionMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-xl text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send Details on WhatsApp
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center justify-center py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-enquiry-form" onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Patient / Contact Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="enquiry-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Joshi"
                          className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="enquiry-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 09487300777"
                          className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Patient Requirement */}
                  <div>
                    <label htmlFor="enquiry-requirement" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Requirement / Condition *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <select
                        id="enquiry-requirement"
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      >
                        <option value="Paralysis Rehabilitation">Paralysis Rehabilitation</option>
                        <option value="Stroke Recovery Rehabilitation">Stroke Rehabilitation</option>
                        <option value="Neurological Physiotherapy">Neurological Physiotherapy</option>
                        <option value="Orthopedic Physiotherapy">Orthopedic Physiotherapy</option>
                        <option value="Back & Neck Pain">Back & Neck Pain</option>
                        <option value="Post-Surgery Rehabilitation">Post-Surgery Rehabilitation</option>
                        <option value="Elderly Physiotherapy">Elderly Physiotherapy (Fall Prevention & Mobility)</option>
                        <option value="Home Exercise & Rehabilitation Programs">Home Exercise & Rehabilitation Programs</option>
                        <option value="Knee / Hip Joint Stiffness">Knee / Hip Joint Stiffness</option>
                        <option value="General Physical Assessment">General Physical Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          id="enquiry-date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enquiry-time" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          id="enquiry-time"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        >
                          <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                          <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                          <option value="Late Evening (Up to 10:30 PM)">Late Evening (Up to 10:30 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Area in Pune */}
                  <div>
                    <label htmlFor="enquiry-area" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Area in Pune (e.g. Kothrud, Aundh, Baner, Camp)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="enquiry-area"
                        value={formData.addressArea}
                        onChange={(e) => setFormData({ ...formData, addressArea: e.target.value })}
                        placeholder="Enter your Pune neighborhood / landmark"
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      id="submit-enquiry-form-btn"
                      className="w-full py-3.5 px-6 bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-bold rounded-xl shadow-md transition-colors text-base flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Home Visit</span>
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-500 pt-1">
                    Your details remain private and are only used to schedule your physiotherapy visit.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
