import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  Calendar, 
  FileText, 
  Truck, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Clock, 
  Phone,
  HeartPulse
} from 'lucide-react';
import { sampleReports } from '../data/reportsData';
import { doctorsData } from '../data/doctorsData';

export default function AdminModal({ isOpen, onClose, lang, t }) {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("appointments");

  // Sample Appointments in admin state
  const [appointments, setAppointments] = useState([
    {
      id: "NEX-APPT-9011",
      serialNo: 12,
      patientName: "Md. Aminul Islam",
      phone: "01711998877",
      doctorName: "Dr. Gobinda Kanti Pal (Cardiology)",
      date: "2026-09-21",
      shift: "Evening (4:00 PM - 8:00 PM)",
      status: "Confirmed"
    },
    {
      id: "NEX-APPT-9012",
      serialNo: 14,
      patientName: "Farzana Yasmin",
      phone: "01819554433",
      doctorName: "Prof. Dr. Jalal Uddin (Neuromedicine)",
      date: "2026-09-21",
      shift: "Evening (4:00 PM - 8:00 PM)",
      status: "Confirmed"
    },
    {
      id: "NEX-APPT-9013",
      serialNo: 15,
      patientName: "Kamrul Hasan",
      phone: "01912445566",
      doctorName: "Dr. Bilkis Begum (Pediatrics/NICU)",
      date: "2026-09-21",
      shift: "Evening (4:00 PM - 8:00 PM)",
      status: "Confirmed"
    }
  ]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === "1234" || pin === "nexus") {
      setIsAuthenticated(true);
    } else {
      alert(lang === 'bn' ? 'ভুল পিন কোড! (ডেমো পিন: 1234)' : 'Incorrect PIN! (Demo PIN: 1234)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-nexus-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-nexus-600/30 flex items-center justify-center text-nexus-400">
              {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black">
                {lang === 'bn' ? 'নেক্সাস হাসপাতাল অ্যাডমিন ও অভ্যর্থনা ডেস্ক' : 'Nexus Admin & Reception Desk'}
              </h3>
              <p className="text-[10px] text-slate-400">
                {lang === 'bn' ? 'দৈনিক সিরিয়াল মনিটরিং ও চেম্বার শিডিউল নিয়ন্ত্রণ' : 'Appointment monitoring & chamber oversight'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="max-w-xs mx-auto py-8 space-y-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-nexus-100 text-nexus-700 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-extrabold text-base text-slate-900">
                  {lang === 'bn' ? 'কর্মকর্তা অ্যাক্সেস পিন কোড' : 'Staff Access PIN'}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'bn' ? 'ডেমো কোড: 1234 প্রদান করুন' : 'Enter demo code: 1234'}
                </p>
              </div>

              <input 
                type="password"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="PIN: 1234"
                className="w-full text-center text-lg font-mono font-bold tracking-widest p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-nexus-600"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-nexus-700 hover:bg-nexus-800 text-white font-extrabold text-xs shadow-md transition-all"
              >
                {lang === 'bn' ? 'লগইন করুন' : 'Unlock Portal'}
              </button>
            </form>
          ) : (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Tab Selector */}
              <div className="flex gap-2 border-b border-slate-200 pb-2">
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    activeTab === 'appointments' ? 'bg-nexus-700 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'bn' ? 'আজকের সিরিয়ালসমূহ' : 'Live Serials'}
                </button>
                <button
                  onClick={() => setActiveTab('doctors')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    activeTab === 'doctors' ? 'bg-nexus-700 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'bn' ? 'ডাক্তার চেম্বার উপস্থিতি' : 'Doctor Chambers'}
                </button>
              </div>

              {/* Tab 1: Live Appointments */}
              {activeTab === 'appointments' && (
                <div className="space-y-2.5">
                  {appointments.map((a) => (
                    <div key={a.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-extrabold text-slate-900 text-sm">
                          {a.patientName} <span className="font-mono text-cardiac-600">(সিরিয়াল #{a.serialNo})</span>
                        </div>
                        <div className="text-slate-500 font-semibold">{a.doctorName}</div>
                        <div className="text-slate-400 font-mono text-[11px]">{a.phone} • {a.shift}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Doctors chamber status */}
              {activeTab === 'doctors' && (
                <div className="space-y-2 max-h-72 overflow-y-auto">
                  {doctorsData.slice(0, 10).map((d) => (
                    <div key={d.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{lang === 'bn' ? d.nameBn : d.name}</div>
                        <div className="text-[11px] text-slate-500">{lang === 'bn' ? d.roomBn : d.room}</div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Active Today
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
