import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Activity, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  HeartPulse,
  Sparkles,
  Building2,
  Calendar,
  Phone
} from 'lucide-react';

export default function AboutSection({ lang, t, onBookAppointment }) {
  const milestones = [
    {
      year: "২০১১-২০১২",
      yearEn: "2011-2012",
      titleBn: "প্রতিষ্ঠা ও পথচলা শুরু",
      titleEn: "Foundation & Inception",
      descBn: "৩০ নভেম্বর ২০১১ ইং তারিখে ১৮.৪০ শতাংশ জমি ক্রয়ের মধ্য দিয়ে যাত্রা শুরু। বৃহত্তর ময়মনসিংহে আন্তর্জাতিক মানের বেসরকারি স্বাস্থ্যসেবা নিশ্চিত করতে ২০১২ সাল থেকে হাসপাতালের কার্যক্রম শুরু।",
      descEn: "Land acquisition Nov 2011 and official healthcare inauguration in 2012 with prime highway campus."
    },
    {
      year: "২০১৭",
      yearEn: "2017",
      titleBn: "ময়মনসিংহের ১ম বেসরকারি CCU",
      titleEn: "1st Private CCU in Mymensingh",
      descBn: "২৬শে মার্চ ২০১৭ থেকে বৃহত্তর ময়মনসিংহ অঞ্চলে বেসরকারি খাতে প্রথমবারের মতো পূর্ণাঙ্গ করোনারি কেয়ার ইউনিট (CCU) ও ২৪ ঘণ্টা ওয়ান-স্টপ কার্ডিয়াক সেবা চালু করে নেক্সাস।",
      descEn: "On March 26, 2017, Nexus pioneered private CCU & emergency cardiac resuscitation in Greater Mymensingh."
    },
    {
      year: "২০২১",
      yearEn: "2021",
      titleBn: "উন্নত এনআইসিইউ (NICU) সংযোজন",
      titleEn: "Modern NICU / SCABU Launch",
      descBn: "১লা ফেব্রুয়ারি ২০২১ হতে অপ্রাপ্তবয়স্ক ও সংকটাপন্ন নবজাতকদের নিবিড় পরিচর্যায় চালু হয় আধুনিক এনআইসিইউ ও স্ক্যাবু, যার নেতৃত্ব দিচ্ছেন শিশু বিভাগের খ্যাতিমান অধ্যাপকরা।",
      descEn: "On Feb 1, 2021, state-of-the-art NICU opened for preterm baby survival under senior pediatric professors."
    },
    {
      year: "বর্তমান",
      yearEn: "Present",
      titleBn: "ক্যাথ ল্যাব ও জার্মান সিমেন্স CT Scan",
      titleEn: "Digital Cath Lab & Siemens CT",
      descBn: "মাত্র ২০,০০০/- টাকায় সম্পূর্ণ করোনারি এনজিওগ্রাম (CAG) প্যাকেজ, হার্টে রিং পরানো (PTCA) এবং জার্মানীর বিশ্ববিখ্যাত SIEMENS CT Scan মেশিনে চলছে ৩০% বিশেষ ছাড়।",
      descEn: "Modern Cath Lab with 20k CAG package, PTCA stenting, and 30% discount on German Siemens multi-slice CT."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hospital Identity & Values Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-tr from-nexus-950 via-slate-900 to-nexus-900 p-6 sm:p-8 text-white shadow-2xl overflow-hidden border border-nexus-700/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cardiac-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/10 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'bn' ? 'নেক্সাসের মূল অঙ্গীকার' : 'Our Core Commitment'}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {lang === 'bn' ? 'সর্বোত্তম সেবা সর্বনিম্ন খরচ' : 'Best Healthcare, Lowest Cost'}
                  </h3>
                  <p className="text-emerald-400 font-extrabold text-sm sm:text-base mt-1">
                    {lang === 'bn' ? '১০০% দালালমুক্ত ও ১০০% কমিশনমুক্ত প্রতিষ্ঠান' : '100% Broker-Free & Commission-Free Hospital'}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {lang === 'bn'
                    ? 'নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিমিটেড বৃহত্তর ময়মনসিংহে কোনো দালাল বা মধ্যস্বত্বভোগী পোষণ করে না। এখানে প্রতিটি রোগী সরাসরি স্বচ্ছ মূল্যে সর্বোচ্চ আন্তর্জাতিক মানের চিকিৎসাসেবা পান।'
                    : 'Nexus Cardiac Hospital operates with complete transparency and zero agent commissions, safeguarding patients from exploitation.'}
                </p>

                {/* Core Pillars */}
                <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{lang === 'bn' ? 'ময়মনসিংহে বেসরকারি খাতে ১ম সিসিইউ (২০১৭ থেকে)' : '1st Private CCU in Greater Mymensingh (since 2017)'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{lang === 'bn' ? 'করোনারি এনজিওগ্রাম (CAG) মাত্র ২০,০০০/- প্যাকেজ' : 'Coronary Angiogram (CAG) only 20,000 BDT'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{lang === 'bn' ? 'বিশ্বখ্যাত জার্মান SIEMENS সিটি স্ক্যানে ৩০% ছাড়' : '30% Discount on German Siemens CT Scan'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{lang === 'bn' ? '৩৮+ ময়মনসিংহ মেডিকেল কলেজের সিনিয়র অধ্যাপক' : '38+ Senior MMC Professors & Consultants'}</span>
                  </div>
                </div>

                {/* Emergency Contact Strip inside Card */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">
                      {lang === 'bn' ? 'সেন্ট্রাল হটলাইন' : 'Central Hotline'}
                    </div>
                    <div className="text-sm font-black text-emerald-400 font-mono">
                      ০৯৬১১৬৭৮৯২২
                    </div>
                  </div>
                  <a
                    href="tel:09611678922"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    {lang === 'bn' ? 'কল দিন' : 'Call'}
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Detailed Story & Milestones Timeline */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black uppercase tracking-wide">
                <Building2 className="w-3.5 h-3.5 text-nexus-700" />
                <span>{lang === 'bn' ? 'আমাদের ইতিহাস ও পরিচিতি' : 'Our Story & Heritage'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                {t.aboutStoryTitle}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.aboutStoryP1}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.aboutStoryP2}
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                {lang === 'bn' ? 'নেক্সাস হাসপাতালের পথচলার মাইলফলক:' : 'Key Milestones of Excellence:'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {milestones.map((m, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-nexus-300 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-xs text-nexus-800">
                        {lang === 'bn' ? m.titleBn : m.titleEn}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-nexus-200/80 text-nexus-950 font-mono font-black text-[10px]">
                        {lang === 'bn' ? m.year : m.yearEn}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {lang === 'bn' ? m.descBn : m.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onBookAppointment}
                className="px-5 py-2.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-xs shadow-md active:scale-95 transition-all"
              >
                {t.btnBookAppointment}
              </button>
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all shadow-xs"
              >
                {lang === 'bn' ? 'হাসপাতালে আসুন' : 'Visit Hospital'}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
