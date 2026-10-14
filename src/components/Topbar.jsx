import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Sparkles, UserCheck, HeartPulse, Truck } from 'lucide-react';

export default function Topbar({ lang, setLang, t, onEmergencyClick, onAdminClick }) {
  return (
    <aside aria-label="Announcement & Hotlines" className="relative z-40 bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Cath Lab & CAG Package / Broker-free Announcement */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-black text-[11px] uppercase tracking-wider shadow-sm">
            <HeartPulse className="w-3 h-3 text-white animate-pulse" />
            {lang === 'bn' ? 'ক্যাথ ল্যাব • CAG ২০,০০০/-' : 'Cath Lab • CAG 20k'}
          </span>
          <span className="hidden md:inline text-slate-300 font-medium">
            {t.cagBannerText}
          </span>
        </div>

        {/* Right: Hotline, Ambulance, Location, Admin & Language Toggle */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 ml-auto">
          
          {/* Central Hotline */}
          <a 
            href="tel:09611678922" 
            className="flex items-center gap-1 text-emerald-300 hover:text-white font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'bn' ? 'হটলাইন:' : 'Hotline:'}</span>
            <span className="text-white underline decoration-emerald-500 font-mono tracking-wide">০৯৬১১৬৭৮৯২২</span>
          </a>

          {/* 24/7 Dedicated Ambulance */}
          <a 
            href="tel:01712421714" 
            className="hidden sm:flex items-center gap-1 text-sky-300 hover:text-white font-bold transition-colors"
            title={lang === 'bn' ? '২৪ ঘণ্টা এম্বুলেন্স সার্ভিস' : '24/7 Ambulance'}
          >
            <Truck className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-white font-mono">০১৭১২-৪২১৭১৪</span>
          </a>

          {/* Location link */}
          <a 
            href="#contact" 
            className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'bn' ? 'শেহড়া বড় বাড়ি, ময়মনসিংহ' : 'Shehora, Mymensingh'}</span>
          </a>

          {/* 100% Broker-Free Badge */}
          <div className="hidden xl:flex items-center gap-1 text-emerald-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'bn' ? '১০০% দালালমুক্ত' : '100% Broker-Free'}</span>
          </div>

          {/* Admin Notice Board */}
          <button
            onClick={onAdminClick}
            className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-all text-[11px]"
            title={t.navAdmin}
          >
            <UserCheck className="w-3 h-3 text-emerald-300" />
            <span className="hidden sm:inline">{lang === 'bn' ? 'ডেস্ক' : 'Desk'}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-black/40 rounded-full p-0.5 border border-white/20">
            <button
              onClick={() => setLang('bn')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                lang === 'bn' ? 'bg-nexus-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                lang === 'en' ? 'bg-nexus-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

        </div>

      </div>
    </aside>
  );
}
