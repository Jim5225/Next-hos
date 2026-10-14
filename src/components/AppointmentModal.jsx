import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Printer, 
  Download, 
  ShieldCheck, 
  Sparkles,
  HeartPulse,
  QrCode
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

export default function AppointmentModal({ isOpen, onClose, lang, t, selectedDoctorId }) {
  const [step, setStep] = useState(1);
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(() => {
    const tm = new Date();
    tm.setDate(tm.getDate() + 1);
    return tm.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState("Evening Slot (4:00 PM - 6:00 PM)");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("Male");
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    if (selectedDoctorId) {
      setDoctorId(selectedDoctorId);
    } else if (!doctorId && doctorsData.length > 0) {
      setDoctorId(doctorsData[0].id);
    }
  }, [selectedDoctorId, isOpen]);

  if (!isOpen) return null;

  const currentDoctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!appointmentDate) {
        alert(lang === 'bn' ? 'অনুগ্রহ করে অ্যাপয়েন্টমেন্ট তারিখ নির্বাচন করুন।' : 'Please select an appointment date.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!patientName || !patientPhone) {
        alert(lang === 'bn' ? 'অনুগ্রহ করে রোগীর নাম ও মোবাইল নম্বর প্রদান করুন।' : 'Please enter patient name and mobile number.');
        return;
      }

      // Generate random serial token
      const randomTokenNumber = Math.floor(12 + Math.random() * 65);
      const bookingId = `NEX-${Math.floor(100000 + Math.random() * 900000)}`;

      setTokenData({
        bookingId,
        serialNumber: randomTokenNumber,
        doctorName: lang === 'bn' ? currentDoctor.nameBn : currentDoctor.name,
        doctorSpecialty: lang === 'bn' ? currentDoctor.specialtyBn : currentDoctor.specialty,
        room: lang === 'bn' ? currentDoctor.roomBn : currentDoctor.room,
        visitingHours: lang === 'bn' ? currentDoctor.visitingHoursBn : currentDoctor.visitingHours,
        patientName,
        patientPhone,
        patientAge,
        patientGender,
        date: appointmentDate,
        timeSlot,
        fee: currentDoctor.fee
      });

      setStep(3);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetModal = () => {
    setStep(1);
    setPatientName("");
    setPatientPhone("");
    setPatientAge("");
    setTokenData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-nexus-900 via-slate-900 to-nexus-950 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-nexus-600/30 border border-nexus-400/40 flex items-center justify-center text-nexus-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black">
                {lang === 'bn' ? 'নেক্সাস হাসপাতাল সিরিয়াল বুকিং' : 'Nexus Hospital Serial Booking'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {lang === 'bn' ? '১০০% দালালমুক্ত সরাসরি সিরিয়াল ব্যবস্থাপনা' : '100% Broker-Free Direct Appointment'}
              </p>
            </div>
          </div>

          <button
            onClick={resetModal}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          
          {/* Step 1: Doctor & Date Selection */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {lang === 'bn' ? '১. বিশেষজ্ঞ চিকিৎসক নির্বাচন করুন:' : '1. Select Specialist Doctor:'}
                </label>
                <select
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-nexus-600"
                >
                  {doctorsData.map((d) => (
                    <option key={d.id} value={d.id}>
                      {lang === 'bn' ? d.nameBn : d.name} — {lang === 'bn' ? d.specialtyBn : d.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Doctor Summary Card */}
              {currentDoctor && (
                <div className="p-3.5 rounded-2xl bg-nexus-50/70 border border-nexus-200 flex items-center gap-3">
                  <img 
                    src={currentDoctor.image} 
                    alt={currentDoctor.name} 
                    className="w-14 h-14 rounded-xl object-cover border border-nexus-300 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  <div className="text-xs space-y-0.5 min-w-0">
                    <div className="font-black text-slate-900 truncate">
                      {lang === 'bn' ? currentDoctor.nameBn : currentDoctor.name}
                    </div>
                    <div className="text-nexus-800 font-bold truncate">
                      {lang === 'bn' ? currentDoctor.specialtyBn : currentDoctor.specialty}
                    </div>
                    <div className="text-slate-500 font-medium">
                      📍 {lang === 'bn' ? currentDoctor.roomBn : currentDoctor.room} • {lang === 'bn' ? currentDoctor.visitingHoursBn : currentDoctor.visitingHours}
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {lang === 'bn' ? '২. সাক্ষাতের তারিখ:' : '2. Appointment Date:'}
                  </label>
                  <input 
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {lang === 'bn' ? '৩. সম্ভাব্য সময় (শিফট):' : '3. Preferred Shift:'}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                  >
                    <option value="Evening Slot (4:00 PM - 6:00 PM)">বিকাল শিফট (৪:০০ - ৬:০০)</option>
                    <option value="Night Slot (6:00 PM - 8:00 PM)">সন্ধ্যা শিফট (৬:০০ - ৮:০০)</option>
                    <option value="Morning Slot (10:00 AM - 1:00 PM)">সকাল শিফট (১০:০০ - ১:০০)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all"
                >
                  {lang === 'bn' ? 'পরবর্তী ধাপ (রোগীর তথ্য)' : 'Next (Patient Information)'}
                </button>
              </div>

            </form>
          )}

          {/* Step 2: Patient Information */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'রোগীর পূর্ণ নাম *' : 'Patient Full Name *'}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={lang === 'bn' ? "যেমন: মোঃ কামাল হোসেন" : "e.g., Md. Kamal Hossain"}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-nexus-600 font-semibold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'bn' ? 'মোবাইল নম্বর (সিরিয়াল নিশ্চিতকরণ) *' : 'Mobile Number (for SMS) *'}
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="017XXXXXXXX"
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'bn' ? 'বয়স' : 'Age'}
                    </label>
                    <input 
                      type="number" 
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      placeholder={lang === 'bn' ? "বছর" : "Years"}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'লিঙ্গ' : 'Gender'}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['Male', 'Female', 'Child'].map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setPatientGender(g)}
                        className={`p-2 rounded-xl font-bold border transition-colors ${
                          patientGender === g 
                            ? 'bg-nexus-600 text-white border-nexus-600' 
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {g === 'Male' ? (lang === 'bn' ? 'পুরুষ' : 'Male') : g === 'Female' ? (lang === 'bn' ? 'মহিলা' : 'Female') : (lang === 'bn' ? 'শিশু' : 'Child')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  {lang === 'bn' ? 'পূর্ববর্তী' : 'Back'}
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all"
                >
                  {lang === 'bn' ? 'সিরিয়াল কনফার্ম করুন' : 'Confirm Serial'}
                </button>
              </div>

            </form>
          )}

          {/* Step 3: Success Confirmation & Digital Token Slip */}
          {step === 3 && tokenData && (
            <div className="space-y-4 animate-fadeIn">
              
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 no-print">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? 'আপনার সিরিয়াল সফলভাবে সম্পন্ন হয়েছে! নিচে ডিজিটাল স্লিপ দেওয়া হলো।' 
                    : 'Your appointment serial is confirmed! Please preserve this ticket.'}
                </span>
              </div>

              {/* Printable Appointment Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border-2 border-dashed border-nexus-400 space-y-4 text-slate-800" id="printable-ticket">
                
                {/* Hospital Header in Ticket */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <div className="text-base font-black text-nexus-900">
                      নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold">
                      শেহড়া বড় বাড়ি, ঢাকা-ময়মনসিংহ রোড, ময়মনসিংহ • হটলাইন: ০৯৬১১৬৭৮৯২২
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">টোকেন নং</span>
                    <span className="text-2xl font-black text-emerald-600 font-mono">
                      #{tokenData.serialNumber}
                    </span>
                  </div>
                </div>

                {/* Patient & Doctor Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">রোগীর নাম:</span>
                    <span className="font-extrabold text-slate-900">{tokenData.patientName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">মোবাইল নম্বর:</span>
                    <span className="font-mono font-bold text-slate-900">{tokenData.patientPhone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">ডাক্তার:</span>
                    <span className="font-black text-nexus-800">{tokenData.doctorName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">চেম্বার রুম:</span>
                    <span className="font-bold text-slate-800">{tokenData.room}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">সাক্ষাতের তারিখ:</span>
                    <span className="font-mono font-bold text-slate-900">{tokenData.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">সময় / শিফট:</span>
                    <span className="font-semibold text-slate-800">{tokenData.timeSlot}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>বুকিং আইডি: <strong className="font-mono text-slate-800">{tokenData.bookingId}</strong></span>
                  <span className="text-emerald-700 font-bold">১০০% দালালমুক্ত রেট</span>
                </div>

              </div>

              {/* Print & Close Controls */}
              <div className="flex gap-2 no-print">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'স্লিপ প্রিন্ট করুন' : 'Print Slip'}</span>
                </button>
                <button
                  onClick={resetModal}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors"
                >
                  {lang === 'bn' ? 'সম্পন্ন' : 'Done'}
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
