import React from 'react';
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
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ lang, t, onBookAppointment }) {
  const categories = servicesData.categories;

  const iconMap = {
    HeartPulse: HeartPulse,
    Activity: Activity,
    Scan: Scan,
    Microscope: Microscope,
    Stethoscope: Stethoscope,
    Truck: Truck
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? 'আন্তর্জাতিক মানের ক্লিনিক্যাল সার্ভিস' : 'Specialized Clinical Services'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {t.servicesHeading}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {t.servicesSubheading}
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || HeartPulse;
            const isCardiac = cat.color === 'cardiac';

            return (
              <div
                key={cat.id}
                className="rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-nexus-400 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  isCardiac ? 'bg-cardiac-500' : 'bg-nexus-600'
                }`} />

                <div className="space-y-4">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                      isCardiac 
                        ? 'bg-cardiac-100 text-cardiac-600' 
                        : 'bg-nexus-100 text-nexus-700'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-nexus-700 transition-colors">
                        {lang === 'bn' ? cat.titleBn : cat.title}
                      </h3>
                      <span className="text-[11px] font-bold text-slate-500">
                        {cat.services.length} {lang === 'bn' ? 'টি সেবা অন্তর্ভুক্ত' : 'Services included'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'bn' ? cat.descriptionBn : cat.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    {cat.services.map((s, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 text-xs text-slate-700"
                      >
                        <div className="flex items-center gap-1.5 min-w-0 pr-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                            isCardiac ? 'text-cardiac-500' : 'text-nexus-600'
                          }`} />
                          <span className="font-semibold truncate">
                            {lang === 'bn' ? s.nameBn : s.name}
                          </span>
                        </div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full flex-shrink-0 ${
                          s.price.includes('20,000') || s.price.includes('30%')
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {s.price}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {lang === 'bn' ? '১০০% স্বচ্ছ বিলিং' : 'Transparent Pricing'}
                  </span>
                  <button
                    onClick={onBookAppointment}
                    className="flex items-center gap-1 text-xs font-bold text-nexus-700 hover:text-nexus-800 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{lang === 'bn' ? 'বুকিং দিন' : 'Book Service'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
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
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cardiac-600 to-rose-600 hover:from-cardiac-500 hover:to-rose-500 text-white font-extrabold text-xs shadow-md whitespace-nowrap active:scale-95 transition-all"
          >
            {lang === 'bn' ? 'সরাসরি হটলাইনে যোগাযোগ' : 'Call Direct Hotline'}
          </a>
        </div>

      </div>
    </section>
  );
}
