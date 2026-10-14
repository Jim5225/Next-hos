import React, { useState } from 'react';
import { 
  HeartPulse, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Activity, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ArrowRight, 
  ChevronRight,
  Scan,
  Check,
  X,
  Stethoscope,
  BadgePercent
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function CathLabShowcase({ lang, t, onBookAppointment }) {
  const cathLab = servicesData.flagshipCathLab;
  const ct = servicesData.flagshipCt;
  const [activeTab, setActiveTab] = useState('cathlab');

  const comparisons = [
    {
      feature: lang === 'bn' ? 'করোনারি এনজিওগ্রাম (CAG) খরচ' : 'CAG Angiogram Package Cost',
      nexus: lang === 'bn' ? 'মাত্র ২০,০০০/- টাকা (পূর্ণাঙ্গ সাশ্রয়ী প্যাকেজ)' : 'Fixed 20,000 BDT Package',
      others: lang === 'bn' ? '২৫,০০০ - ৩৫,০০০+ টাকা (অতিরিক্ত হিডেন চার্জ)' : '25,000 - 35,000+ BDT (Hidden costs)',
      isWinner: true
    },
    {
      feature: lang === 'bn' ? 'দালাল ও কমিশন নীতি' : 'Broker & Commission Policy',
      nexus: lang === 'bn' ? '১০০% দালালমুক্ত ও কমিশনমুক্ত স্বচ্ছ বিলিং' : '100% Broker-Free & Transparent',
      others: lang === 'bn' ? 'কমিশন নির্ভর দালালের দৌরাত্ম্য ও রোগীর ভোগান্তি' : 'Broker & agent commission markups',
      isWinner: true
    },
    {
      feature: lang === 'bn' ? 'সিসিইউ (CCU) সার্বক্ষণিক ব্যাকআপ' : '24/7 CCU Critical Care',
      nexus: lang === 'bn' ? 'ময়মনসিংহের ১ম প্রাইভেট সিসিইউ (২০১৭ থেকে)' : '1st Private CCU in Mymensingh',
      others: lang === 'bn' ? 'অনেক প্রতিষ্ঠানে পূর্ণাঙ্গ সিসিইউ নেই' : 'Often outsourced or inadequate',
      isWinner: true
    },
    {
      feature: lang === 'bn' ? 'জার্মান সিমেন্স CT Scan সুবিধা' : 'German Siemens Multi-Slice CT',
      nexus: lang === 'bn' ? 'চলছে ৩০% বিশেষ ছাড় ও সাব-সেকেন্ড রেজোলিউশন' : 'Special 30% OFF • German Precision',
      others: lang === 'bn' ? 'পুরনো প্রযুক্তির মেশিন ও ফুল চার্জ' : 'Older generation machines, full fee',
      isWinner: true
    },
    {
      feature: lang === 'bn' ? 'হৃদরোগ বিশেষজ্ঞ টিম' : 'Cardiology Specialist Team',
      nexus: lang === 'bn' ? 'ময়মনসিংহ মেডিকেলের ৮+ অভিজ্ঞ কার্ডিওলজিস্ট' : '8+ MMC Cardiology Professors',
      others: lang === 'bn' ? 'অন-কল বহিরাগত অনভিজ্ঞ ডাক্তার' : 'Irregular on-call consultants',
      isWinner: true
    }
  ];

  return (
    <section id="cath-lab" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Decorative Rings & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cardiac-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-black uppercase tracking-wider shadow-sm">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-400 animate-heartbeat" />
            <span>{lang === 'bn' ? 'ময়মনসিংহের পাইওনিয়ার কার্ডিয়াক কেয়ার' : 'Pioneer Cardiac Care in Mymensingh'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            {cathLab.titleBn && lang === 'bn' ? cathLab.titleBn : cathLab.title}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-normal">
            {lang === 'bn' ? cathLab.subtitleBn : cathLab.subtitle}
          </p>

          {/* Interactive Switch Tabs */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-800/90 border border-slate-700/80 shadow-inner">
              <button
                onClick={() => setActiveTab('cathlab')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'cathlab'
                    ? 'bg-nexus-600 text-white shadow-md'
                    : 'text-slate-200 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <HeartPulse className="w-4 h-4 text-emerald-300" />
                <span>{lang === 'bn' ? 'ক্যাথ ল্যাব ও CAG (২০k)' : 'Cath Lab & CAG Package'}</span>
              </button>

              <button
                onClick={() => setActiveTab('ctscan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'ctscan'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-200 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <BadgePercent className="w-4 h-4" />
                <span>{lang === 'bn' ? 'জার্মান CT Scan (৩০% ছাড়)' : 'German CT Scan (30% OFF)'}</span>
              </button>

              <button
                onClick={() => setActiveTab('why-nexus')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'why-nexus'
                    ? 'bg-nexus-700 text-white shadow-md'
                    : 'text-slate-200 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? '১০০% দালালমুক্ত সুবিধা' : '100% Broker-Free'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Tab 1: Cath Lab & Coronary Angiogram (CAG) Package */}
        {activeTab === 'cathlab' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            
            {/* Left Box: Visual & Key Metric Cards */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-nexus-950 border border-nexus-600/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-nexus-500/20 text-nexus-300 text-xs font-extrabold border border-nexus-500/30">
                    24/7 Digital Cath Lab
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {lang === 'bn' ? '১০০% দালালমুক্ত রেট' : '100% Broker Free'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {lang === 'bn' ? 'করোনারি এনজিওগ্রাম (CAG) সম্পূর্ণ প্যাকেজ' : 'Complete Coronary Angiogram (CAG) Package'}
                </h3>

                {/* Price Display */}
                <div className="my-4 p-4 rounded-2xl bg-black/40 border border-slate-700/60 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">
                      {lang === 'bn' ? 'প্যাকেজ মূল্য (কোনো গোপন খরচ নেই)' : 'Full Package Fee (No Hidden Costs)'}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                      ২০,০০০/-
                    </span>
                    <span className="text-xs text-slate-300 ml-2 font-semibold">
                      {lang === 'bn' ? 'টাকা মাত্র' : 'BDT Only'}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-500/30">
                    Best Value
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'bn' ? cathLab.descriptionBn : cathLab.description}
                </p>

                {/* Specs Grid */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-slate-700/60 pt-4">
                  {cathLab.specs.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="text-[11px] text-slate-400">{lang === 'bn' ? s.labelBn : s.label}</div>
                      <div className="text-xs sm:text-sm font-black text-emerald-300">{lang === 'bn' ? s.valueBn : s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => onBookAppointment(null)}
                    className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-nexus-600 hover:bg-nexus-500 text-white font-black text-xs shadow-lg shadow-nexus-600/30 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'ক্যাথ ল্যাব অ্যাপয়েন্টমেন্ট' : 'Book Cath Lab Serial'}</span>
                  </button>
                  <a
                    href="tel:09611678922"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors font-mono"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>০৯৬১১৬৭৮৯২২</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Box: Key Cath Lab Procedures */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {cathLab.features.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-cardiac-500/50 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cardiac-500/15 border border-cardiac-500/30 flex items-center justify-center text-cardiac-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-sm sm:text-base text-white group-hover:text-cardiac-300 transition-colors">
                        {lang === 'bn' ? item.titleBn : item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {lang === 'bn' ? item.descBn : item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* 24/7 CCU Critical Care Notice */}
              <div className="p-4 rounded-2xl bg-nexus-950/80 border border-nexus-500/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-emerald-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <h5 className="font-black text-xs text-emerald-200">
                      {lang === 'bn' ? '২৪ ঘণ্টা পূর্ণাঙ্গ সিসিইউ (CCU) ও আইসিইউ' : '24/7 Full CCU & ICU Backup'}
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      {lang === 'bn' ? 'ময়মনসিংহে বেসরকারি খাতে প্রথম CCU যাত্রা (২৬শে মার্চ ২০১৭ থেকে)' : 'First Private CCU in Greater Mymensingh since 2017'}
                    </p>
                  </div>
                </div>
                <a
                  href="#facilities"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold whitespace-nowrap transition-colors"
                >
                  {lang === 'bn' ? 'সিসিইউ দেখুন' : 'View CCU'}
                </a>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: German Siemens Multi-Slice CT Scanner (30% Discount) */}
        {activeTab === 'ctscan' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-nexus-950 border border-nexus-600/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-nexus-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-500/40">
                    German SIEMENS Technology
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black animate-pulse">
                    {lang === 'bn' ? '৩০% বিশেষ ছাড়!' : 'Flat 30% OFF!'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {lang === 'bn' ? ct.titleBn : ct.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  {lang === 'bn' ? ct.descriptionBn : ct.description}
                </p>

                <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-nexus-500/30">
                  <div className="text-xs font-bold text-emerald-300 mb-1">
                    {lang === 'bn' ? '★ কেন নেক্সাসের সিমেন্স সিটি স্ক্যান আলাদা?' : '★ Why Siemens CT Scan at Nexus?'}
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'bn' ? 'ব্রেন স্ট্রোকের দ্রুত ও নিখুঁত নির্ণয় (গোল্ডেন আওয়ার সেভিং)' : 'Rapid stroke imaging within golden hour'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'bn' ? 'থ্রি-ডি বোন ও জটিল ফ্র্যাকচার রিকনস্ট্রাকশন' : 'High-definition 3D volume reconstruction'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'bn' ? 'সর্বনিম্ন রেডিয়েশন ডোজ ও রোগীর শতভাগ নিরাপত্তা' : 'Low radiation dose with maximum image clarity'}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => onBookAppointment(null)}
                    className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-nexus-600 to-emerald-600 hover:from-nexus-500 hover:to-emerald-500 text-white font-black text-xs shadow-lg transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'সিটি স্ক্যান বুক করুন' : 'Book CT Scan'}</span>
                  </button>
                  <a
                    href="tel:09611678922"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 font-mono"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>০৯৬১১৬৭৮৯২২</span>
                  </a>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              {ct.features.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-nexus-500/50 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-nexus-500/15 border border-nexus-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Scan className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                        {lang === 'bn' ? item.titleBn : item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {lang === 'bn' ? item.descBn : item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 3: Comparison & Broker-Free Commitment */}
        {activeTab === 'why-nexus' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="rounded-3xl bg-slate-800/90 border border-slate-700 p-5 sm:p-8 shadow-2xl overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-200 uppercase text-[11px] tracking-wider font-bold">
                    <th className="py-3 px-3">সুবিধা ও সেবার মান</th>
                    <th className="py-3 px-3 text-emerald-400 font-extrabold bg-emerald-950/40 rounded-t-xl border-t border-x border-emerald-500/30">
                      নেক্সাস কার্ডিয়াক হসপিটাল
                    </th>
                    <th className="py-3 px-3 text-slate-300">অন্যান্য হাসপাতাল / ক্লিনিক</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {comparisons.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-3 font-semibold text-white">
                         {c.feature}
                      </td>
                      <td className="py-3 px-3 font-bold text-emerald-300 bg-emerald-950/20 border-x border-emerald-500/20">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{c.nexus}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                          <span>{c.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Broker-Free Declaration Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-nexus-900 via-slate-900 to-nexus-950 border border-nexus-500/40 text-center space-y-2">
              <h4 className="text-base font-black text-emerald-300">
                {lang === 'bn' ? '১০০% দালালমুক্ত ও কমিশনমুক্ত স্বাস্থ্যসেবার অঙ্গীকার' : '100% Broker-Free & Ethical Care Pledge'}
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl mx-auto">
                {lang === 'bn' 
                  ? 'নেক্সাস হাসপাতাল কোনো মধ্যস্বত্বভোগী বা দালাল পোষণ করে না। সরাসরি হাসপাতালে এসে ভর্তি বা সেবা গ্রহণ করলে রোগী পান সর্বোত্তম চিকিৎসা সর্বনিম্ন খরচে।' 
                  : 'Nexus Hospital operates strictly on zero-commission direct transparent hospital rates.'}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
