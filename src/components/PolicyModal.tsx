import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/physioData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-teal-400" />
            ) : (
              <FileText className="w-5 h-5 text-teal-400" />
            )}
            <h3 className="text-lg font-bold">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
            aria-label="Close policy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-sm text-slate-600 space-y-4 max-h-[70vh] overflow-y-auto leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last Updated: September 2026</strong>
              </p>
              <p>
                At <strong>{BUSINESS_INFO.name}</strong>, we respect the confidentiality and privacy of our patients and their families. This Privacy Policy summarizes how information collected through telephone enquiries, WhatsApp messaging, and website appointment booking forms is utilized.
              </p>
              <h4 className="font-bold text-slate-800">1. Information We Collect</h4>
              <p>
                We only collect information voluntarily provided by the patient, caregiver, or family member, including patient name, contact phone number, general location area in Pune, and description of physiotherapy requirements (e.g. stroke rehabilitation, back pain, or orthopedic care).
              </p>
              <h4 className="font-bold text-slate-800">2. How We Use Your Information</h4>
              <p>
                Information is collected exclusively to evaluate clinical service feasibility, confirm home visit schedules, and provide direct physiotherapy rehabilitation at the patient’s home. We never sell, rent, or trade personal data to third parties.
              </p>
              <h4 className="font-bold text-slate-800">3. Contact for Inquiries</h4>
              <p>
                If you have questions regarding your data privacy, contact us at {BUSINESS_INFO.phoneDisplay} or visit our location at {BUSINESS_INFO.address}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: September 2026</strong>
              </p>
              <h4 className="font-bold text-slate-800">1. Home Physiotherapy Services</h4>
              <p>
                <strong>{BUSINESS_INFO.name}</strong> offers doorstep physical rehabilitation visits across Pune, Maharashtra. Services are scheduled based on physiotherapist availability, geographical feasibility, and medical assessment.
              </p>
              <h4 className="font-bold text-slate-800">2. Medical Prescriptions & Assessment</h4>
              <p>
                Patients are encouraged to share prior doctor prescriptions, surgical discharge summaries, and medical imaging before or during the initial assessment. Physiotherapy is a collaborative rehabilitation process; results vary depending on the severity of the condition, patient adherence, and individual healing rates. No 100% cure or immediate recovery is guaranteed.
              </p>
              <h4 className="font-bold text-slate-800">3. Appointment Rescheduling & Safety</h4>
              <p>
                Please notify us at least 3 hours in advance via phone or WhatsApp at {BUSINESS_INFO.phoneDisplay} if a session needs to be rescheduled. Our physiotherapists maintain professional safety, clinical hygiene, and patient dignity at all times.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
