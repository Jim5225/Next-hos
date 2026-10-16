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
import PrescriptionManager from './components/PrescriptionSoftware/PrescriptionManager';
import { translations } from './data/translations';
import { PhoneCall } from 'lucide-react';

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
  const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);

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
        onOpenPrescription={() => setPrescriptionModalOpen(true)}
      />

      {/* 2. Main Navigation Bar */}
      <Navbar 
        lang={lang} 
        t={t} 
        onBookAppointment={() => handleOpenAppointment(null)}
        onDownloadReport={() => setReportModalOpen(true)}
        onEmergencyClick={() => setEmergencyModalOpen(true)}
        onOpenTestPrice={() => setTestPriceModalOpen(true)}
        onOpenPrescription={() => setPrescriptionModalOpen(true)}
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

      {/* 24/7 Emergency Hotline Floating Button (Only floating action on screen) */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <a
          href="tel:09611678922"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl shadow-emerald-600/40 transition-all hover:scale-110 active:scale-95 group relative border-2 border-white/80"
          title={lang === 'bn' ? 'সেন্ট্রাল ইমার্জেন্সি হটলাইন: ০৯৬১১৬৭৮৯২২' : 'Central Emergency Hotline: 09611678922'}
        >
          <PhoneCall className="w-6 h-6 text-white animate-bounce" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-black whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            {lang === 'bn' ? '২৪/৭ হটলাইন: ০৯৬১১৬৭৮৯২২' : '24/7 Call: 09611678922'}
          </span>
        </a>
      </div>

      {/* 5. Interactive Modals */}
      <PrescriptionManager
        isOpen={prescriptionModalOpen}
        onClose={() => setPrescriptionModalOpen(false)}
        lang={lang}
      />

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
