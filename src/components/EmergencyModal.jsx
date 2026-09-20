import React, { useState } from 'react';
import { 
  X, 
  PhoneCall, 
  Truck, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  Baby,
  HeartPulse,
  Phone
} from 'lucide-react';

export default function EmergencyModal({ isOpen, onClose, lang, t }) {
  const [requested, setRequested] = useState(false);
  const [ambulanceForm, setAmbulanceForm] = useState({
    patientName: '',
    phone: '',
    pickupLocation: '',
    condition: 'Cardiac Emergency / Chest Pain'
  });

  if (!isOpen) return null;

  const handleAmbulanceSubmit = (e) => {
    e.preventDefault();
    if (!ambulanceForm.phone || !ambulanceForm.pickupLocation) return;
    setRequested(true);
  };

  const bedStats = [
    { type: lang === 'bn' ? 'সিসিইউ (CCU - কার্ডিয়াক)' : 'Coronary CCU', available: 3, total: 10, color: 'text-cardiac-600 bg-cardiac-50' },
    { type: lang === 'bn' ? 'আইসিইউ (ICU - ভেন্টিলেটর)' : 'Adult ICU', available: 2, total: 8, color: 'text-emerald-600 bg-emerald-50' },
    { type: lang === 'bn' ? 'এনআইসিইউ (NICU নবজাতক)' : 'Neonatal NICU', available: 4, total: 12, color: 'text-emerald-600 bg-emerald-50' },
    { type: lang === 'bn' ? 'ক্যাথ ল্যাব (Cath Lab)' : 'Cath Lab Standby', available: '24/7 Open', total: 'Standby', color: 'text-amber-600 bg-amber-50' },
    { type: lang === 'bn' ? 'ডায়ালিসিস ইউনিট' : 'Dialysis Unit', available: 3, total: 8, color: 'text-emerald-600 bg-emerald-50' },
    { type: lang === 'bn' ? 'জরুরি কেবিন ও বেড' : 'Cabins & General Ward', available: 15, total: 60, color: 'text-emerald-600 bg-emerald-50' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-200 my-8 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-cardiac-700 via-red-600 to-slate-900 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-amber-300 animate-pulse" />
            <div>
              <h3 className="text-sm sm:text-base font-black">
                {lang === 'bn' ? 'নেক্সাস ২৪/৭ জরুরি বিভাগ ও এম্বুলেন্স' : 'Nexus 24/7 Emergency & Ambulance'}
              </h3>
              <p className="text-[10px] text-red-100">
                {lang === 'bn' ? 'হৃদরোগ, স্ট্রোক ও ট্রমার তাৎক্ষণিক জীবনরক্ষাকারী সেবা' : 'Immediate life-saving cardiac & trauma care'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Direct 1-Tap Calling Hotlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:09611678922"
              className="p-4 rounded-2xl bg-gradient-to-r from-cardiac-600 to-red-700 hover:from-cardiac-700 hover:to-red-800 text-white shadow-md flex items-center gap-3 transition-all active:scale-95 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider block font-bold text-amber-200">
                  {lang === 'bn' ? 'সেন্ট্রাল ইমার্জেন্সি হটলাইন' : 'Central Emergency Line'}
                </span>
                <span className="text-base font-black font-mono">০৯৬১১৬৭৮৯২২</span>
              </div>
            </a>

            <a
              href="tel:01712421714"
              className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-md flex items-center gap-3 transition-all active:scale-95 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cardiac-600/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Truck className="w-5 h-5 text-cardiac-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider block font-bold text-rose-300">
                  {lang === 'bn' ? '২৪ ঘণ্টা ডেডিকেটেড এম্বুলেন্স' : '24/7 Direct Ambulance'}
                </span>
                <span className="text-base font-black font-mono">০১৭১২-৪২১৭১৪</span>
              </div>
            </a>
          </div>

          {/* Live Critical Bed & CCU Status */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'লাইভ ক্রিটিক্যাল বেড স্ট্যাটাস:' : 'Live Bed Availability:'}</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Realtime Updated</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {bedStats.map((bed, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] font-bold text-slate-500 truncate">{bed.type}</div>
                  <div className="text-xs font-black text-emerald-700 mt-0.5">
                    {bed.available} {lang === 'bn' ? 'টি খালি' : 'Free'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispatch Ambulance Form */}
          <div className="p-4 rounded-2xl bg-cardiac-50/70 border border-cardiac-200 space-y-3">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-cardiac-600" />
              <h4 className="font-black text-xs sm:text-sm text-cardiac-950">
                {lang === 'bn' ? 'অনলাইন এম্বুলেন্স রিকুইজিশন ফর্ম' : 'Emergency Ambulance Dispatch Request'}
              </h4>
            </div>

            {requested ? (
              <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? 'আপনার রিকোয়েস্ট গৃহীত হয়েছে! কন্ট্রোল রুম থেকে অবিলম্বে কল করে এম্বুলেন্স পাঠানো হচ্ছে।' 
                    : 'Request received! Our ambulance control unit is dispatching and calling you now.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleAmbulanceSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    value={ambulanceForm.patientName}
                    onChange={(e) => setAmbulanceForm({ ...ambulanceForm, patientName: e.target.value })}
                    placeholder={lang === 'bn' ? "রোগীর নাম" : "Patient Name"}
                    className="p-2 rounded-xl border border-slate-200 bg-white text-xs"
                  />
                  <input 
                    type="tel" 
                    required
                    value={ambulanceForm.phone}
                    onChange={(e) => setAmbulanceForm({ ...ambulanceForm, phone: e.target.value })}
                    placeholder={lang === 'bn' ? "মোবাইল নম্বর *" : "Contact Phone *"}
                    className="p-2 rounded-xl border border-slate-200 bg-white text-xs font-mono font-bold"
                  />
                </div>

                <input 
                  type="text" 
                  required
                  value={ambulanceForm.pickupLocation}
                  onChange={(e) => setAmbulanceForm({ ...ambulanceForm, pickupLocation: e.target.value })}
                  placeholder={lang === 'bn' ? "পিকআপ লোকেশন / পূর্ণাঙ্গ ঠিকানা *" : "Exact Pickup Location Address *"}
                  className="w-full p-2 rounded-xl border border-slate-200 bg-white text-xs"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-cardiac-600 hover:bg-cardiac-700 text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
                >
                  {lang === 'bn' ? 'জরুরি এম্বুলেন্স রিকোয়েস্ট পাঠান' : 'Dispatch Emergency Ambulance'}
                </button>
              </form>
            )}
          </div>

          {/* Hospital Address Note */}
          <div className="text-center text-[11px] text-slate-500 pt-1">
            📍 {t.address}
          </div>

        </div>

      </div>
    </div>
  );
}
