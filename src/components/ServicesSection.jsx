import React, { useState } from 'react';
import { 
  HeartPulse, 
  Activity, 
  Scan, 
  Microscope, 
  Stethoscope, 
  Truck, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  X,
  Phone,
  Info
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ lang, t, onBookAppointment }) {
  const categories = servicesData.categories;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const iconMap = {
    HeartPulse: HeartPulse,
    Activity: Activity,
    Scan: Scan,
    Microscope: Microscope,
    Stethoscope: Stethoscope,
    Truck: Truck
  };

  const handleOpenDetails = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? 'আন্তর্জাতিক মানের ক্লিনিক্যাল সার্ভিস' : 'Specialized Clinical Services'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {t.servicesHeading}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {lang === 'bn'
              ? 'নিচের যেকোনো সেবার বিস্তারিত তথ্য ও বুকিং জানতে "বিস্তারিত" বা "বুক করুন" বাটনে ক্লিক করুন।'
              : 'Click on "Details" or "Book Now" on any service card below to view complete information and pricing.'}
          </p>

        </div>

        {/* Compact Services Grid: Small Cards with only Heading + 2 Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || HeartPulse;
            const isCardiac = cat.color === 'cardiac';

            // Top highlight badge for quick insight
            let highlightBadge = `${cat.services.length}টি সেবা`;
            if (cat.id === 'cardiac') highlightBadge = lang === 'bn' ? 'CAG ২০,০০০/-' : 'CAG 20k';
            if (cat.id === 'imaging') highlightBadge = lang === 'bn' ? '৩০% বিশেষ ছাড়' : '30% Discount';
            if (cat.id === 'critical') highlightBadge = lang === 'bn' ? '২৪/৭ সিসিইউ ও আইসিইউ' : '24/7 CCU/ICU';

            return (
              <div
                key={cat.id}
                className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  isCardiac ? 'bg-cardiac-500' : 'bg-emerald-600'
                }`} />

                {/* Only Heading, Icon & Badge */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${
                      isCardiac 
                        ? 'bg-cardiac-100 text-cardiac-600' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-xs">
                      {highlightBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {lang === 'bn' ? cat.titleBn : cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {lang === 'bn' ? cat.descriptionBn : cat.description}
                    </p>
                  </div>
                </div>

                {/* The 2 Compact Buttons: "বিস্তারিত" and "বুক করুন" */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-2">
                  
                  {/* 1. বিস্তারিত (Details) Button */}
                  <button
                    onClick={() => handleOpenDetails(cat)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-all active:scale-95 shadow-xs"
                    title={lang === 'bn' ? 'বিস্তারিত তথ্য দেখুন' : 'View Details'}
                  >
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lang === 'bn' ? 'বিস্তারিত' : 'Details'}</span>
                  </button>

                  {/* 2. বুক করুন (Book Now) Button */}
                  <button
                    onClick={() => handleOpenDetails(cat)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-xs shadow-md shadow-[#0f2942]/20 transition-all active:scale-95"
                    title={lang === 'bn' ? 'বুকিং ও সেবা সংক্রান্ত তথ্য' : 'Book Service'}
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'bn' ? 'বুক করুন' : 'Book Now'}</span>
                  </button>

                </div>

              </div>
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
      {/* SERVICE DETAILS MODAL (Opens on clicking Details OR Book Now) */}
      {/* ============================================================== */}
      {selectedCategory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedCategory(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#0f2942] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  {React.createElement(iconMap[selectedCategory.icon] || HeartPulse, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-white leading-tight">
                    {lang === 'bn' ? selectedCategory.titleBn : selectedCategory.title}
                  </h3>
                  <p className="text-xs text-emerald-300 font-semibold">
                    {selectedCategory.services.length} {lang === 'bn' ? 'টি বিশেষায়িত সেবা ও টেস্ট অন্তর্ভুক্ত' : 'Specialized services included'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              
              {/* Category Description */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {lang === 'bn' ? selectedCategory.descriptionBn : selectedCategory.description}
              </div>

              {/* Service Items Breakdown with Prices */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'সেবাসমূহ ও স্বচ্ছ মূল্য তালিকা:' : 'Included Services & Transparent Rates:'}</span>
                </h4>

                <div className="space-y-2">
                  {selectedCategory.services.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {lang === 'bn' ? item.nameBn : item.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {lang === 'bn' ? item.descBn : item.desc}
                        </p>
                      </div>

                      <span className={`text-[11px] font-black px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                        item.price.includes('20,000') || item.price.includes('30%') || item.price.includes('10%')
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparency Notice */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>
                  {lang === 'bn'
                    ? '১০০% দালালমুক্ত ও কমিশনমুক্ত নিশ্চয়তা। নির্ধারিত স্বচ্ছ মূল্যে সকল সেবা ও টেস্ট প্রদান করা হয়।'
                    : '100% Broker-Free & Commission-Free Guarantee with direct hospital billing.'}
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
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    const catName = lang === 'bn' ? selectedCategory.titleBn : selectedCategory.title;
                    setSelectedCategory(null);
                    onBookAppointment(catName);
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
