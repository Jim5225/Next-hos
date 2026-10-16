import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  FileText, 
  PhoneCall, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  HeartPulse, 
  Scan,
  Users,
  Download,
  Award,
  Zap,
  Phone
} from 'lucide-react';

export default function HeroSection({ lang, t, onBookAppointment, onDownloadReport, onEmergencyClick, onOpenTestPrice }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-nexus-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-nexus-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cardiac-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Announcement */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-100/90 border border-nexus-300 text-nexus-900 text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.heroBadge}</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.badgeBrokerFree}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-nexus-600" />
            <span>{t.heroTimeBadge}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-cardiac-600 bg-cardiac-50 px-3 py-1 rounded-md border border-cardiac-200">
                <Activity className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ময়মনসিংহের প্রথম পূর্ণাঙ্গ ক্যাথ ল্যাব' : 'First Full-Fledged Cath Lab in Mymensingh'}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
                {t.heroTitle}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed pt-1">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Quick Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{lang === 'bn' ? 'মাত্র ২০,০০০ টাকায় করোনারি এনজিওগ্রাম (CAG)' : 'Coronary Angiogram at only 20,000 BDT'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{lang === 'bn' ? 'জার্মান সিমেন্স ১২৮ স্লাইস আল্ট্রা সিটি স্ক্যান' : 'Siemens 128-Slice Ultra CT Scan'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{lang === 'bn' ? 'দালালমুক্ত শতভাগ স্বচ্ছ স্বাস্থ্যসেবা' : '100% Broker-Free Transparent Hospital'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{lang === 'bn' ? '৩৮+ ময়মনসিংহ মেডিকেলের শীর্ষ ডাক্তার' : '38+ Senior Doctors & Consultants'}</span>
              </div>
            </div>

            {/* CTA Buttons: Ordered strictly per user requirement:
                1. এআই দিয়ে ডাক্তার সিলেক্ট করুন (AI Doctor Select)
                2. টেস্ট প্রাইজ (Test Price)
                3. ডাক্তার সিরিয়াল দিন (Doctor Serial) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* 1. AI Doctor Select Button - Solid Navy Blue */}
              <a
                href="#ai-doctor"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-sm shadow-lg shadow-[#0f2942]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '6s' }} />
                <span>{t.btnAiDoctorSelect}</span>
              </a>

              {/* 2. Test Price Button - Solid Green */}
              <button
                type="button"
                onClick={onOpenTestPrice}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>{t.btnTestPrice}</span>
              </button>

              {/* 3. Book Doctor Serial Button - Solid Navy Blue */}
              <button
                type="button"
                onClick={onBookAppointment}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a2540] hover:bg-[#123860] text-white font-black text-sm shadow-lg shadow-[#0a2540]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{t.btnBookAppointment}</span>
              </button>

              {/* 4. Online Report Download Button - Solid Green */}
              <button
                type="button"
                onClick={onDownloadReport}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>{t.btnDownloadReport || (lang === 'bn' ? 'অনলাইন রিপোর্ট ডাউনলোড' : 'Download Online Report')}</span>
              </button>

              {/* Cath Lab Package Explore - Solid Navy Blue */}
              <a
                href="#cath-lab"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-bold text-sm shadow-md transition-all"
              >
                <HeartPulse className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? 'ক্যাথ ল্যাব প্যাকেজ' : 'Cath Lab Packages'}</span>
              </a>

              {/* Call Hotline - Solid Navy Blue */}
              <a
                href="tel:09611678922"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#0a2540] hover:bg-[#123860] text-white font-bold text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-white">০৯৬১১৬৭৮৯২২</span>
              </a>

              {/* Download Official Doctor Schedule PDF */}
              <a
                href="https://nexushospitalmymensingh.com/wp-content/uploads/2025/05/Nexus-doctors-schedule.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-3.5 text-xs font-semibold text-slate-600 hover:text-nexus-700 transition-colors"
                title="Download Official Doctor Chamber Schedule PDF"
              >
                <Download className="w-4 h-4 text-nexus-600" />
                <span className="underline decoration-slate-300">{t.btnDownloadPdf}</span>
              </a>

            </div>

            {/* Live Stats Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200/80">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="text-xl sm:text-2xl font-black text-nexus-800 tracking-tight">{t.heroStatPatients}</div>
                <div className="text-[11px] text-slate-700 font-bold leading-tight">{t.heroStatPatientsLabel}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="text-xl sm:text-2xl font-black text-cardiac-600 tracking-tight">{t.heroStatDoctors}</div>
                <div className="text-[11px] text-slate-700 font-bold leading-tight">{t.heroStatDoctorsLabel}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{t.heroStatCcuBeds}</div>
                <div className="text-[11px] text-slate-700 font-bold leading-tight">{t.heroStatCcuBedsLabel}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="text-xl sm:text-2xl font-black text-emerald-700 tracking-tight">{t.heroStatBrokerFree}</div>
                <div className="text-[11px] text-slate-700 font-bold leading-tight">{t.heroStatBrokerFreeLabel}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Cardiac Showcase & Status Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-nexus-500/15 via-emerald-500/15 to-sky-500/15 rounded-3xl blur-xl -z-10" />

              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xl space-y-4">
                
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <HeartPulse className="w-6 h-6 animate-heartbeat" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-slate-950 leading-tight">
                        {lang === 'bn' ? 'নেক্সাস হার্ট সেন্টার ও ক্যাথ ল্যাব' : 'Nexus Heart Center & Cath Lab'}
                      </h3>
                      <p className="text-[11px] text-slate-600 font-medium">
                        {lang === 'bn' ? '২৪ ঘণ্টা জরুরি কার্ডিয়াক কেয়ার' : '24/7 Emergency Cardiac Care'}
                      </p>
                    </div>
                  </div>
                  
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-black border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* CAG Package Spotlight Card */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-nexus-950 to-slate-900 p-4 text-white space-y-2.5 shadow-md relative overflow-hidden border border-nexus-700/50">
                  <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-emerald-500/15 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-white/20 text-white font-black text-[10px] uppercase tracking-wider">
                      Flagship Package
                    </span>
                    <span className="text-emerald-300 font-black text-xs">
                      {lang === 'bn' ? 'সর্বনিম্ন খরচে' : 'Lowest Cost'}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-lg text-white">
                      {lang === 'bn' ? 'করোনারি এনজিওগ্রাম (CAG) প্যাকেজ' : 'Coronary Angiogram (CAG) Package'}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                        ২০,০০০/-
                      </span>
                      <span className="text-xs text-slate-200">
                        {lang === 'bn' ? 'টাকা (সম্পূর্ণ প্যাকেজ)' : 'BDT (Full Package)'}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-200 leading-normal">
                    {lang === 'bn' 
                      ? 'অত্যাধুনিক ক্যাথ ল্যাবে অভিজ্ঞ ইন্টারভেনশনাল কার্ডিওলজিস্টদের দ্বারা হৃদপিণ্ডের রক্তনালীর ব্লক নির্ণয়।' 
                      : 'Comprehensive catheterization with interventional cardiologists to diagnose coronary artery blocks.'}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-xs border-t border-white/10">
                    <span className="text-emerald-300 text-[11px] font-bold">
                      ✓ {lang === 'bn' ? 'ডে-কেয়ারেই রিলিজ সম্ভব' : 'Same-day daycare release'}
                    </span>
                    <button
                      type="button"
                      onClick={onBookAppointment}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-all shadow-md"
                    >
                      {lang === 'bn' ? 'বুক করুন' : 'Book Now'}
                    </button>
                  </div>
                </div>

                {/* German Siemens CT Scan Mini Banner */}
                <div className="p-3 rounded-2xl bg-sky-50/90 border border-sky-200 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                      CT
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900">
                        {lang === 'bn' ? 'জার্মান সিমেন্স CT Scan মেশিনে' : 'German Siemens CT Scan'}
                      </div>
                      <div className="text-[11px] text-emerald-700 font-extrabold">
                        {lang === 'bn' ? 'সকল টেস্টে চলছে ৩০% ছাড়!' : 'Flat 30% OFF on all scans!'}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#cath-lab"
                    className="px-2.5 py-1 rounded-lg bg-[#0f2942] hover:bg-[#1a3b5c] text-white text-[11px] font-black transition-colors shadow-sm"
                  >
                    {lang === 'bn' ? 'অফার দেখুন' : 'View Offer'}
                  </a>
                </div>

                {/* 24/7 Hotlines Direct Action */}
                <div className="pt-1 space-y-2">
                  <div className="text-xs font-black text-slate-700 uppercase tracking-wider">
                    {lang === 'bn' ? 'জরুরি সিরিয়াল ও যোগাযোগ' : 'Direct Contacts'}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:09611678922"
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-nexus-50 border border-slate-200/90 text-center transition-colors group"
                    >
                      <div className="text-[11px] text-slate-600 font-semibold group-hover:text-nexus-700">
                        {lang === 'bn' ? 'সেন্ট্রাল হটলাইন' : 'Central Hotline'}
                      </div>
                      <div className="text-xs font-black text-slate-950 font-mono">
                        ০৯৬১১৬৭৮৯২২
                      </div>
                    </a>
                    <a
                      href="tel:01712421714"
                      className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center transition-colors group"
                    >
                      <div className="text-[11px] text-emerald-800 font-semibold">
                        {lang === 'bn' ? '২৪ ঘণ্টা এম্বুলেন্স' : '24/7 Ambulance'}
                      </div>
                      <div className="text-xs font-black text-emerald-900 font-mono">
                        ০১৭১২-৪২১৭১৪
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4 Quick Action Cards at Bottom of Hero */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: 24/7 Emergency */}
          <div 
            onClick={onEmergencyClick}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-950 group-hover:text-emerald-700 transition-colors">
              {t.card1Title}
            </h4>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-normal">
              {t.card1Desc}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-700">
              <span>{t.card1Action}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Cath Lab & CAG Package */}
          <a 
            href="#cath-lab"
            className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-nexus-300 shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-nexus-50 text-nexus-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-950 group-hover:text-nexus-700 transition-colors">
              {t.card2Title}
            </h4>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-normal">
              {t.card2Desc}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-nexus-700">
              <span>{t.card2Action}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: 38+ Specialist Doctors */}
          <a 
            href="#doctors"
            className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-nexus-400 shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-nexus-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-950 group-hover:text-nexus-700 transition-colors">
              {t.card3Title}
            </h4>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-normal">
              {t.card3Desc}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-nexus-700">
              <span>{t.card3Action}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 4: Online Report Portal */}
          <div 
            onClick={onDownloadReport}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-950 group-hover:text-emerald-700 transition-colors">
              {t.card4Title}
            </h4>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-normal">
              {t.card4Desc}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-700">
              <span>{t.card4Action}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
