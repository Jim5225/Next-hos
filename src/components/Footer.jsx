import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Heart, 
  FileText, 
  Calendar, 
  Sparkles, 
  UserCheck, 
  HeartPulse,
  Clock,
  Download,
  Truck
} from 'lucide-react';

export default function Footer({ lang, t, onBookAppointment, onDownloadReport, onAdminClick }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Principle (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-nexus-600 to-cardiac-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[9px] flex items-center justify-center p-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M38 18 h24 v22 h22 v24 h-22 v22 h-24 v-22 h-22 v-24 h22 z" fill="#10b981" />
                    <path d="M50 35 C58 24 74 25 80 37 C87 51 68 67 50 82 C32 67 13 51 20 37 C26 25 42 24 50 35 Z" fill="#e11d48" />
                  </svg>
                </div>
              </div>

              <div>
                <div className="text-lg font-black tracking-tight text-white">NEXUS</div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-cardiac-400">Cardiac Hospital & Research Ltd.</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {t.footerDesc}
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-emerald-300 font-semibold">
              "{t.slogan}"
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{lang === 'bn' ? '১০০% দালালমুক্ত ও কমিশনমুক্ত স্বাস্থ্যসেবা' : '100% Broker-Free & Commission-Free'}</span>
            </div>

          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-emerald-400">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">{t.navHome}</a>
              </li>
              <li>
                <a href="#cath-lab" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>{t.navCathLab}</span>
                  <span className="px-1.5 py-0.2 rounded bg-cardiac-900 text-cardiac-300 text-[10px] font-bold">CAG 20k</span>
                </a>
              </li>
              <li>
                <a href="#ai-doctor" className="hover:text-white transition-colors text-purple-300 font-semibold">{t.navAiDoctor}</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">{t.navDoctors}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.navServices}</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">{t.navFacilities}</a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-white transition-colors">{t.navCalculators}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">{t.navAbout}</a>
              </li>
              <li>
                <a 
                  href="https://nexushospitalmymensingh.com/wp-content/uploads/2025/05/Nexus-doctors-schedule.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 font-bold text-slate-300"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.navDoctorSchedulePdf}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-cardiac-400">
              {t.footerDepartments}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>{lang === 'bn' ? 'কার্ডিওলজি ও ক্যাথ ল্যাব' : 'Cardiology & Cath Lab'}</li>
              <li>{lang === 'bn' ? '২৪/৭ সিসিইউ ও আইসিইউ' : '24/7 CCU & ICU'}</li>
              <li>{lang === 'bn' ? 'এনআইসিইউ (নবজাতক)' : 'NICU / SCABU'}</li>
              <li>{lang === 'bn' ? 'সিমেন্স সিটি স্ক্যান (৩০% ছাড়)' : 'Siemens CT (30% OFF)'}</li>
              <li>{lang === 'bn' ? 'কিডনি ও ডায়ালাইসিস' : 'Nephrology & Dialysis'}</li>
              <li>{lang === 'bn' ? 'ল্যাপারোস্কোপিক সার্জারি' : 'Laparoscopic Surgery'}</li>
              <li>{lang === 'bn' ? 'স্নায়ুরোগ ও ব্রেন' : 'Neuromedicine'}</li>
              <li>{lang === 'bn' ? 'অর্থোপেডিক ও ট্রমা' : 'Orthopedics & Spine'}</li>
            </ul>
          </div>

          {/* Col 4: Emergency Contacts & Hotlines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-amber-400">
              {t.footerEmergencyDesk}
            </h4>

            <div className="space-y-2.5 text-xs">
              <a 
                href="tel:09611678922"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 animate-bounce" />
                <div>
                  <div className="text-[10px] text-slate-300">{lang === 'bn' ? 'সেন্ট্রাল হটলাইন' : 'Central Hotline'}</div>
                  <div className="font-black text-white font-mono text-sm">০৯৬১১৬৭৮৯২২</div>
                </div>
              </a>

              <a 
                href="tel:01712421714"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-cardiac-950/60 hover:bg-cardiac-900/60 border border-cardiac-500/30 transition-colors"
              >
                <Truck className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-rose-300">{lang === 'bn' ? '২৪ ঘণ্টা এম্বুলেন্স' : '24/7 Ambulance'}</div>
                  <div className="font-black text-white font-mono text-xs">০১৭১২-৪২১৭১৪</div>
                </div>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {t.address}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onAdminClick}
                className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
              >
                {t.navAdmin}
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Strip: Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium">
          <div className="text-center sm:text-left">
            © 2012-2026 Nexus Cardiac Hospital & Research Ltd. - All Right Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{lang === 'bn' ? 'সর্বোত্তম সেবা সর্বনিম্ন খরচ' : 'Best Care, Lowest Cost'}</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">{lang === 'bn' ? '১০০% দালালমুক্ত' : '100% Broker-Free'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
