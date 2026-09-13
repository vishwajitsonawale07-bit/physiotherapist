import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, FileText, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/physioData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledRequirement?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledRequirement = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    requirement: prefilledRequirement || 'General Home Physiotherapy',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    addressArea: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter the patient or contact person’s name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    return `Hello, I would like to request a home physiotherapy visit in Pune.
Patient Name: ${formData.name}
Phone: ${formData.phone}
Requirement/Condition: ${formData.requirement}
Preferred Date: ${formData.preferredDate || 'Earliest available'}
Preferred Time: ${formData.preferredTime}
Area in Pune: ${formData.addressArea || 'Pune'}
Notes: ${formData.notes || 'None'}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      requirement: 'General Home Physiotherapy',
      preferredDate: '',
      preferredTime: 'Morning (9:00 AM - 1:00 PM)',
      addressArea: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        id="booking-modal-card"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white p-6 relative">
          <button
            onClick={onClose}
            id="close-booking-modal-btn"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <span className="inline-block bg-teal-600/60 text-teal-100 text-xs font-semibold px-2.5 py-1 rounded-md mb-2 uppercase tracking-wide">
            Home Visit Booking
          </span>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Request a Physiotherapy Home Visit
          </h2>
          <p className="text-sm text-teal-100 mt-1">
            Personalized rehabilitation in the comfort of your home across Pune.
          </p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div id="booking-success-view" className="text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Home Visit Request Received!
              </h3>
              <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. We will review your requirement and call you at <strong className="text-slate-800">{formData.phone}</strong> shortly to confirm the appointment.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left mb-6 space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold">{formData.requirement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-semibold">{formData.preferredDate || 'Today / Next Available'} ({formData.preferredTime})</span>
                </div>
                {formData.addressArea && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location Area:</span>
                    <span className="font-semibold">{formData.addressArea}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  id="whatsapp-confirm-btn"
                  href={getWhatsAppLink(constructWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl shadow-xs transition-colors text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send to WhatsApp Now
                </a>
                <a
                  id="call-confirm-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-medium py-3 px-4 rounded-xl shadow-xs transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <button
                onClick={handleReset}
                id="close-confirmation-btn"
                className="mt-6 text-sm text-slate-500 hover:text-slate-700 underline"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form id="home-visit-modal-form" onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                  {errorMessage}
                </div>
              )}

              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Patient or Caregiver Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number (for call confirmation) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="modal-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 09487300777 or 98230XXXXX"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-requirement" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Condition / Requirement *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <select
                    id="modal-requirement"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  >
                    <option value="Paralysis Rehabilitation">Paralysis Rehabilitation</option>
                    <option value="Stroke Recovery Rehabilitation">Stroke Rehabilitation</option>
                    <option value="Neurological Physiotherapy">Neurological Physiotherapy</option>
                    <option value="Orthopedic Physiotherapy">Orthopedic Physiotherapy</option>
                    <option value="Back & Neck Pain Management">Back & Neck Pain</option>
                    <option value="Post-Surgery Rehabilitation">Post-Surgery Rehabilitation</option>
                    <option value="Elderly Physiotherapy & Fall Prevention">Elderly Physiotherapy</option>
                    <option value="Home Exercise & Rehabilitation Program">Home Exercise & Rehabilitation</option>
                    <option value="Knee / Hip Joint Stiffness">Knee or Joint Problems</option>
                    <option value="Other / General Assessment">Other Condition</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="modal-date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-time" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="modal-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    >
                      <option value="Morning (9:00 AM - 1:00 PM)">Morning (9 AM - 1 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1 PM - 5 PM)</option>
                      <option value="Evening (5:00 PM - 9:00 PM)">Evening (5 PM - 9 PM)</option>
                      <option value="Late Evening (Up to 10:30 PM)">Late Evening (Up to 10:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="modal-area" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Location Area in Pune
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="modal-area"
                    value={formData.addressArea}
                    onChange={(e) => setFormData({ ...formData, addressArea: e.target.value })}
                    placeholder="e.g. Kothrud, Aundh, Shivaji Nagar, Baner..."
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-modal-enquiry-btn"
                  className="w-full py-3.5 px-6 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-xl shadow-md transition-colors text-base"
                >
                  Request Home Visit
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-xs text-slate-500">
                  Or call directly at{' '}
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-teal-800 hover:underline">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>{' '}
                  • Open Daily till 10:30 PM
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
