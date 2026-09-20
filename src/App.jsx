import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CathLabShowcase from './components/CathLabShowcase';
import AiDoctorFinder from './components/AiDoctorFinder';
import DoctorsSection from './components/DoctorsSection';
import ServicesSection from './components/ServicesSection';
import FacilitiesSection from './components/FacilitiesSection';
import HealthCalculators from './components/HealthCalculators';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ReportDownloadModal from './components/ReportDownloadModal';
import EmergencyModal from './components/EmergencyModal';
import AdminModal from './components/AdminModal';
import TestPriceModal from './components/TestPriceModal';
import { translations } from './data/translations';
import { PhoneCall, Calendar, FileText, Sparkles, HeartPulse, Tag } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('nexus_lang') || 'bn';
  });

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [testPriceModalOpen, setTestPriceModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('nexus_lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.bn;

  const handleOpenAppointment = (doctorId = null) => {
    setSelectedDoctorId(doctorId);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-nexus-600 selection:text-white">
      
      {/* 1. Top Emergency Bar with Broker-Free Badge & Language Switcher */}
      <Topbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onEmergencyClick={() => setEmergencyModalOpen(true)} 
        onAdminClick={() => setAdminModalOpen(true)}
      />

      {/* 2. Main Navigation Bar */}
      <Navbar 
        lang={lang} 
        t={t} 
        onBookAppointment={() => handleOpenAppointment(null)}
        onDownloadReport={() => setReportModalOpen(true)}
        onEmergencyClick={() => setEmergencyModalOpen(true)}
        onOpenTestPrice={() => setTestPriceModalOpen(true)}
      />

      {/* 3. Main Page Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection 
          lang={lang} 
          t={t} 
          onBookAppointment={() => handleOpenAppointment(null)}
          onDownloadReport={() => setReportModalOpen(true)}
          onEmergencyClick={() => setEmergencyModalOpen(true)}
          onOpenTestPrice={() => setTestPriceModalOpen(true)}
        />

        {/* Advanced Cardiac Cath Lab & German Siemens CT Scan Spotlight */}
        <CathLabShowcase 
          lang={lang} 
          t={t} 
          onBookAppointment={(docId) => handleOpenAppointment(docId)}
        />

        {/* AI Doctor Finder & Symptom Matcher (38 Doctors) */}
        <AiDoctorFinder 
          lang={lang} 
          t={t} 
          onBookDoctor={(docId) => handleOpenAppointment(docId)}
        />

        {/* 38+ Specialist Doctors Directory */}
        <DoctorsSection 
          lang={lang} 
          t={t} 
          onBookDoctor={(docId) => handleOpenAppointment(docId)}
        />

        {/* Hospital Specialties & Diagnostic Services */}
        <ServicesSection 
          lang={lang} 
          t={t} 
          onBookAppointment={() => handleOpenAppointment(null)}
        />

        {/* Facilities: 24/7 CCU, ICU, NICU, Dialysis, Ambulance & OT */}
        <FacilitiesSection 
          lang={lang} 
          t={t} 
          onEmergencyClick={() => setEmergencyModalOpen(true)}
        />

        {/* Interactive Digital Health Calculators (Heart Risk, BP, BMI, EDD) */}
        <HealthCalculators 
          lang={lang} 
          t={t} 
          onBookAppointment={() => handleOpenAppointment(null)}
        />

        {/* About Nexus Hospital History, Milestones & Broker-Free Pledge */}
        <AboutSection 
          lang={lang} 
          t={t} 
          onBookAppointment={() => handleOpenAppointment(null)}
        />

        {/* Patient Recovery Stories & Testimonials */}
        <TestimonialsSection 
          lang={lang} 
          t={t} 
        />

        {/* Location Map & Contacts */}
        <ContactSection 
          lang={lang} 
          t={t} 
        />

      </main>

      {/* 4. Footer */}
      <Footer 
        lang={lang} 
        t={t} 
        onBookAppointment={() => handleOpenAppointment(null)}
        onDownloadReport={() => setReportModalOpen(true)}
        onAdminClick={() => setAdminModalOpen(true)}
      />

      {/* Floating Action Buttons for Quick Access (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end no-print">
        
        {/* 1. Quick AI Doctor Finder Floating Pill */}
        <a
          href="#ai-doctor"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-black shadow-xl shadow-purple-600/40 transition-all hover:scale-105 active:scale-95 border border-purple-300 ring-2 ring-purple-400/60 animate-pulse-slow"
          title={t.btnAiDoctorSelect}
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{t.btnAiDoctorSelect}</span>
        </a>

        {/* 2. Quick Test Price Floating Pill */}
        <button
          type="button"
          onClick={() => setTestPriceModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 text-xs font-black shadow-xl shadow-amber-500/35 transition-all hover:scale-105 active:scale-95 border border-amber-300 ring-2 ring-amber-300/50"
          title={t.btnTestPrice}
        >
          <span className="w-2 h-2 rounded-full bg-cardiac-600 animate-ping" />
          <span>{t.btnTestPrice}</span>
        </button>

        {/* 3. Quick Doctor Appointment Floating Pill */}
        <button
          type="button"
          onClick={() => handleOpenAppointment(null)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-nexus-600 to-nexus-700 hover:from-nexus-700 hover:to-nexus-800 text-white text-xs font-extrabold shadow-xl shadow-nexus-600/35 transition-all hover:scale-105 active:scale-95 border border-nexus-400/40"
          title={t.btnBookAppointment}
        >
          <Calendar className="w-4 h-4" />
          <span>{t.btnBookAppointment}</span>
        </button>

        {/* Quick Report Download Floating Pill */}
        <button
          type="button"
          onClick={() => setReportModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-lg shadow-slate-900/30 transition-all hover:scale-105 active:scale-95 border border-slate-700"
          title={t.navReportPortal}
        >
          <FileText className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">{t.navReportPortal}</span>
        </button>

        {/* 24/7 Emergency Hotline Floating Circle */}
        <a
          href="tel:09611678922"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-cardiac-600 hover:bg-cardiac-700 text-white shadow-xl shadow-cardiac-600/40 transition-all hover:scale-110 active:scale-95 animate-heartbeat"
          title={lang === 'bn' ? 'জরুরি হটলাইন কল' : 'Emergency Hotline Call'}
        >
          <PhoneCall className="w-5 h-5" />
        </a>

      </div>

      {/* 5. Interactive Modals */}
      <AppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
        lang={lang} 
        t={t} 
        selectedDoctorId={selectedDoctorId}
      />

      <TestPriceModal
        isOpen={testPriceModalOpen}
        onClose={() => setTestPriceModalOpen(false)}
        lang={lang}
        t={t}
        onBookAppointment={(dept) => handleOpenAppointment(null)}
      />

      <ReportDownloadModal 
        isOpen={reportModalOpen} 
        onClose={() => setReportModalOpen(false)} 
        lang={lang} 
        t={t} 
      />

      <EmergencyModal 
        isOpen={emergencyModalOpen} 
        onClose={() => setEmergencyModalOpen(false)} 
        lang={lang} 
        t={t} 
      />

      <AdminModal 
        isOpen={adminModalOpen} 
        onClose={() => setAdminModalOpen(false)} 
        lang={lang} 
        t={t} 
      />

    </div>
  );
}
