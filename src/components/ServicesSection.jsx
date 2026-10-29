import React, { useState } from 'react';
import { 
  HeartPulse, 
  Activity, 
  Scan, 
  Microscope, 
  Stethoscope, 
  Truck, 
  Baby, 
  Scissors, 
  Building, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Droplet,
  ChevronRight,
  X,
  Calendar,
  Phone,
  Image as ImageIcon,
  CheckCircle2,
  Video
} from 'lucide-react';
import { nexusAllServices } from '../data/nexusAllServicesData';

export default function ServicesSection({ lang, t, onBookAppointment }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCabinCat, setSelectedCabinCat] = useState('cat-1'); // for cabin modal
  const [searchFilter, setSearchFilter] = useState('');

  // Icon mapping
  const iconMap = {
    HeartPulse,
    Activity,
    Scan,
    Microscope,
    Stethoscope,
    Truck,
    Baby,
    Scissors,
    Building,
    Sparkles,
    ShieldCheck,
    Eye,
    Droplet
  };

  const filteredServices = nexusAllServices.filter(s => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return s.titleBn.toLowerCase().includes(q) || s.titleEn.toLowerCase().includes(q);
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
    if (service.isCabin) {
      setSelectedCabinCat('cat-1');
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black tracking-wide uppercase border border-emerald-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'bn' ? 'নেক্সাস হাসপাতাল সেবা সমূহ' : 'Nexus Hospital Services'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {lang === 'bn' ? 'আমাদের বিশেষায়িত সেবা সমূহ' : 'Our Specialized Hospital Services'}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {lang === 'bn'
              ? 'নিচের যেকোনো সেবার বাটনে ক্লিক করে সংশ্লিষ্ট সেবার সুযোগ-সুবিধা, ছবি এবং তাৎক্ষণিক বুকিং নিশ্চিত করুন।'
              : 'Click on any service button below to view detailed facilities, photos, and book appointments directly.'}
          </p>

        </div>

        {/* 28 Interactive Service Buttons Grid (Like nexushospitalmymensingh.com/service/) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
          {filteredServices.map((service) => {
            const IconComp = iconMap[service.icon] || HeartPulse;
            const isCabin = Boolean(service.isCabin);

            return (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group shadow-xs hover:shadow-md active:scale-[0.98] ${
                  isCabin
                    ? 'bg-gradient-to-r from-emerald-50 to-white border-emerald-300 hover:border-emerald-500'
                    : 'bg-white border-slate-200 hover:border-nexus-500 hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                    isCabin
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-800 group-hover:bg-[#0f2942] group-hover:text-white'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                      {lang === 'bn' ? service.titleBn : service.titleEn}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-500 block truncate">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-emerald-100 text-slate-400 group-hover:text-emerald-700 flex items-center justify-center flex-shrink-0 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* 100% Broker-Free Banner Strip */}
        <div className="mt-12 p-5 rounded-3xl bg-gradient-to-r from-nexus-900 via-slate-900 to-nexus-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-white">
                {lang === 'bn' ? 'নেক্সাস হাসপাতাল ১০০% দালালমুক্ত ও ১০০% কমিশনমুক্ত প্রতিষ্ঠান' : '100% Broker-Free & Ethical Hospital Pricing'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'bn' ? '"সর্বোত্তম সেবা সর্বনিম্ন খরচ" নীতিতে পরিচালিত আন্তর্জাতিক মানের স্বাস্থ্যসেবা কেন্দ্র।' : 'Operating on the principle of Best Care, Lowest Cost for everyone in Greater Mymensingh.'}
              </p>
            </div>
          </div>

          <a
            href="tel:09611678922"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md whitespace-nowrap active:scale-95 transition-all"
          >
            {lang === 'bn' ? 'সরাসরি হটলাইনে যোগাযোগ' : 'Call Direct Hotline'}
          </a>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 🏨 CABIN SPECIAL MODAL (Reveals Category 1, Category 2, Category 3) */}
      {/* ============================================================== */}
      {selectedService && selectedService.isCabin && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#0f2942] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-white leading-tight">
                    {lang === 'bn' ? 'নেক্সাস কেবিন ক্যাটাগরি ও সুযোগ-সুবিধা' : 'Nexus Cabin Categories & Facilities'}
                  </h3>
                  <p className="text-xs text-emerald-300 font-semibold">
                    {lang === 'bn' ? 'রোগী ও সহকারীদের জন্য প্রশান্তিদায়ক পরিবেশ' : 'Peaceful, hygienic healing environment'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              
              {/* Category Selector Buttons (Category 1, Category 2, Category 3) */}
              <div className="space-y-2">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                  {lang === 'bn' ? 'কেবিন ক্যাটাগরি নির্বাচন করুন:' : 'Select Cabin Category:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {selectedService.categories.map((cat) => {
                    const isCurrent = selectedCabinCat === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCabinCat(cat.id)}
                        className={`p-3 rounded-xl border text-center transition-all font-black text-xs ${
                          isCurrent
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-sm mb-0.5">
                          {cat.id === 'cat-1' ? '🌟' : cat.id === 'cat-2' ? '❄️' : '🍃'}
                        </span>
                        <span>{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Cabin Category Details Card */}
              {(() => {
                const activeCat = selectedService.categories.find(c => c.id === selectedCabinCat) || selectedService.categories[0];
                return (
                  <div className="space-y-4 rounded-2xl bg-slate-50 p-4 border border-slate-200 animate-fadeIn">
                    
                    {/* Cabin Photo Showcase / Placeholder */}
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video max-h-56">
                      <img 
                        src={activeCat.image} 
                        alt={activeCat.nameBn}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://nexushospitalmymensingh.com/wp-content/uploads/2025/05/nexus-hospital-cabin.jpeg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      
                      {/* Photo/Video Slot Placeholder Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="font-black bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{activeCat.nameBn}</span>
                        </span>
                        <span className="text-[10px] text-emerald-300 font-bold bg-[#0f2942]/80 px-2 py-0.5 rounded-md border border-emerald-400/30">
                          {lang === 'bn' ? 'ছবি ও ভিডিও আপডেট স্লট' : 'Media Ready'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-black text-sm sm:text-base text-slate-900">
                        {lang === 'bn' ? activeCat.nameBn : activeCat.nameEn}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {lang === 'bn' ? activeCat.descBn : activeCat.descBn}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                      {activeCat.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold bg-white p-2 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })()}

            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <a
                href="tel:09611678922"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'কেবিন ইনকোয়ারি: ০৯৬১১৬৭৮৯২২' : 'Cabin Hotline: 09611678922'}</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onBookAppointment('কেবিন ভর্তি ও বুকিং');
                  }}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>{lang === 'bn' ? 'কেবিন বুকিং / সিরিয়াল নিন' : 'Book This Cabin'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 🔬 REGULAR SERVICE DETAILS MODAL (With Image/Video Placeholder) */}
      {/* ============================================================== */}
      {selectedService && !selectedService.isCabin && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#0f2942] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  {React.createElement(iconMap[selectedService.icon] || HeartPulse, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-white leading-tight">
                    {lang === 'bn' ? selectedService.titleBn : selectedService.titleEn}
                  </h3>
                  <span className="text-xs text-emerald-300 font-semibold">
                    {selectedService.badge}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              
              {/* Photo Showcase / Placeholder (Ready for new photos/videos later) */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video max-h-60 border border-slate-200">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.titleBn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-black bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'bn' ? selectedService.titleBn : selectedService.titleEn}</span>
                  </span>
                  <span className="text-[10px] text-emerald-300 font-bold bg-[#0f2942]/80 px-2.5 py-1 rounded-md border border-emerald-400/30 flex items-center gap-1">
                    <Video className="w-3 h-3 text-emerald-400" />
                    <span>{lang === 'bn' ? 'ছবি ও ভিডিও যুক্ত করার প্রস্তুত স্লট' : 'Media Ready'}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {lang === 'bn' ? selectedService.descBn : selectedService.descBn}
              </div>

              {/* Service Features / Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'প্রধান সুযোগ-সুবিধা ও সেবা অন্তর্ভুক্ত:' : 'Key Facilities & Inclusions:'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-xs text-slate-800 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 100% Broker-Free Guarantee */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>
                  {lang === 'bn'
                    ? '১০০% দালালমুক্ত ও কমিশনমুক্ত প্রতিষ্ঠান। রোগী সরাসরি হাসপাতাল নির্ধারিত স্বচ্ছ মূল্যে সেবা গ্রহণ করতে পারেন।'
                    : '100% Broker-Free & Commission-Free Guarantee with direct transparent hospital rates.'}
                </span>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <a
                href="tel:09611678922"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'হটলাইন: ০৯৬১১৬৭৮৯২২' : 'Hotline: 09611678922'}</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    const svcName = lang === 'bn' ? selectedService.titleBn : selectedService.titleEn;
                    setSelectedService(null);
                    onBookAppointment(svcName);
                  }}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>{lang === 'bn' ? 'এই সেবার সিরিয়াল বুক করুন' : 'Book This Service'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
