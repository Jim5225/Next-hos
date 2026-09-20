import React, { useState } from 'react';
import { 
  Calendar, 
  PhoneCall, 
  FileText, 
  Menu, 
  X, 
  Sparkles, 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  Download 
} from 'lucide-react';

export default function Navbar({ lang, t, onBookAppointment, onDownloadReport, onEmergencyClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.navHome, href: "#home" },
    { label: t.navCathLab, href: "#cath-lab", badge: lang === 'bn' ? 'CAG ২০k' : 'CAG 20k' },
    { label: t.navAiDoctor, href: "#ai-doctor", isAi: true },
    { label: t.navDoctors, href: "#doctors", count: "৩৮+" },
    { label: t.navServices, href: "#services" },
    { label: t.navFacilities, href: "#facilities" },
    { label: t.navCalculators, href: "#calculators" },
    { label: t.navAbout, href: "#about" },
    { label: t.navContact, href: "#contact" },
  ];

  return (
    <header className="sticky top-[37px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative flex-shrink-0">
            {/* Pulsing ring around cardiac logo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cardiac-600/30 to-nexus-600/30 blur-sm group-hover:blur-md transition-all"></div>
            
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nexus-700 via-nexus-800 to-slate-950 p-2 shadow-md flex items-center justify-center border border-nexus-500/40">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Hospital Cross in vibrant green */}
                <path d="M38 18 h24 v22 h22 v24 h-22 v22 h-24 v-22 h-22 v-24 h22 z" fill="#10b981" />
                {/* Cardiac Heart with EKG pulse overlay */}
                <path d="M50 35 C58 24 74 25 80 37 C87 51 68 67 50 82 C32 67 13 51 20 37 C26 25 42 24 50 35 Z" fill="#e11d48" opacity="0.95" />
                <path d="M30 52 L42 52 L46 44 L52 62 L56 48 L60 52 L70 52" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Hospital Typography */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-nexus-900 group-hover:text-nexus-700 transition-colors">
                NEXUS
              </span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cardiac-600">
                Cardiac Hospital
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 line-clamp-1">
              {lang === 'bn' ? 'নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ • ময়মনসিংহ' : 'Nexus Cardiac Hospital & Research Ltd., Mymensingh'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all relative flex items-center gap-1 ${
                item.isAi
                  ? 'text-purple-700 bg-purple-50 hover:bg-purple-100 font-extrabold'
                  : 'text-slate-700 hover:text-nexus-700 hover:bg-nexus-50/70'
              }`}
            >
              {item.isAi && <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '6s' }} />}
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-cardiac-100 text-cardiac-700 border border-cardiac-300">
                  {item.badge}
                </span>
              )}
              {item.count && (
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {item.count}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Serial, Report, Doctor Schedule PDF & Emergency */}
        <div className="hidden md:flex items-center gap-2">
          
          {/* Online Report Download Button */}
          <button
            onClick={onDownloadReport}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-nexus-800 bg-nexus-50 hover:bg-nexus-100 border border-nexus-300 shadow-sm hover:shadow transition-all active:scale-95"
            title={t.navReportPortal}
          >
            <FileText className="w-3.5 h-3.5 text-nexus-600" />
            <span>{t.navReportPortal}</span>
          </button>

          {/* AI Doctor Finder Button */}
          <a
            href="#ai-doctor"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md shadow-purple-600/25 transition-all active:scale-95 border border-purple-300/40"
            title={lang === 'bn' ? 'লক্ষণ মিলিয়ে বিশেষজ্ঞ ডাক্তার খুঁজুন' : 'Find Doctor with AI'}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="hidden xl:inline">{lang === 'bn' ? 'এআই ডক্টর ম্যাচ' : 'AI Doctor Match'}</span>
            <span className="xl:hidden">{lang === 'bn' ? 'এআই ডক্টর' : 'AI Match'}</span>
          </a>

          {/* Doctor Appointment / Serial Button */}
          <button
            onClick={onBookAppointment}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-nexus-600 to-nexus-700 hover:from-nexus-700 hover:to-nexus-800 shadow-md shadow-nexus-600/30 hover:shadow-lg transition-all active:scale-95 border border-nexus-500/30"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>{t.navAppointment}</span>
          </button>

          {/* Emergency Trigger */}
          <button
            onClick={onEmergencyClick}
            className="flex items-center justify-center p-2 rounded-lg bg-cardiac-50 hover:bg-cardiac-100 text-cardiac-600 border border-cardiac-200 transition-colors"
            title={t.navEmergency}
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onBookAppointment}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-nexus-600 shadow-sm"
          >
            {lang === 'bn' ? 'সিরিয়াল' : 'Serial'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
                item.isAi ? 'bg-purple-50 text-purple-700' : 'text-slate-700 hover:bg-nexus-50 hover:text-nexus-700'
              }`}
            >
              <div className="flex items-center gap-2">
                {item.isAi && <Sparkles className="w-4 h-4 text-purple-600" />}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cardiac-100 text-cardiac-700">
                  {item.badge}
                </span>
              )}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://nexushospitalmymensingh.com/wp-content/uploads/2025/05/Nexus-doctors-schedule.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>{t.navDoctorSchedulePdf}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadReport();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-nexus-900 bg-nexus-100"
            >
              <FileText className="w-4 h-4" />
              <span>{t.navReportPortal}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEmergencyClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-white bg-cardiac-600 shadow-md shadow-cardiac-600/30"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.navEmergency}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
