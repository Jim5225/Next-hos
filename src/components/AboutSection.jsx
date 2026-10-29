import React, { useState } from 'react';
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
  Phone,
  MessageSquare,
  FileText,
  UserCheck
} from 'lucide-react';
import { aboutData } from '../data/aboutData';

export default function AboutSection({ lang, t, onBookAppointment }) {
  const [activeTab, setActiveTab] = useState('atAGlance'); // 'atAGlance' | 'chairman' | 'md' | 'board'

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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Nexus'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {lang === 'bn' ? 'নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ' : 'Nexus Cardiac Hospital & Research Ltd.'}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            {lang === 'bn' 
              ? 'ময়মনসিংহে সেবার মৌলিক নীতি ও নৈতিকতা বজায় রেখে আন্তর্জাতিক মানের চিকিৎসাসেবা প্রদানের বিশ্বস্ত প্রতিষ্ঠান।'
              : 'Delivering ethical, patient-centric, and international standard healthcare in Greater Mymensingh.'}
          </p>

          {/* Sub Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-4">
            <button
              onClick={() => setActiveTab('atAGlance')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'atAGlance'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'এক নজরে নেক্সাস' : 'At a Glance'}</span>
            </button>

            <button
              onClick={() => setActiveTab('chairman')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'chairman'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'চেয়ারম্যানের বাণী' : "Chairman's Speech"}</span>
            </button>

            <button
              onClick={() => setActiveTab('md')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'md'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'ব্যবস্থাপনা পরিচালকের বক্তব্য' : "MD's Speech"}</span>
            </button>

            <button
              onClick={() => setActiveTab('board')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'board'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-4 h-4 text-white" />
              <span>{lang === 'bn' ? 'পরিচালনা পর্ষদ' : 'Board of Directors'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                ৪৮
              </span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: AT A GLANCE & MILESTONES */}
        {/* ============================================================== */}
        {activeTab === 'atAGlance' && (
          <div className="space-y-12">
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
                        ? aboutData.atAGlance.storyBn
                        : aboutData.atAGlance.storyEn}
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
                        <span>{lang === 'bn' ? 'নেক্সাস মডেল ফার্মেসীতে সকল ঔষধে ১০% সার্বক্ষণিক ছাড়' : 'Flat 10% Discount at Nexus Model Pharmacy'}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column: Key Stats & Milestones Timeline */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 6 Key Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {aboutData.atAGlance.stats.map((s, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
                      <div className="text-base sm:text-lg font-black text-[#0f2942] tracking-tight">
                        {lang === 'bn' ? s.count : s.countEn}
                      </div>
                      <p className="text-[11px] font-bold text-slate-600 leading-tight">
                        {lang === 'bn' ? s.labelBn : s.labelEn}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'bn' ? 'নেক্সাসের ঐতিহাসিক মাইলফলক' : 'Historic Milestones'}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {milestones.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5 hover:border-emerald-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {lang === 'bn' ? m.year : m.yearEn}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <h5 className="font-extrabold text-sm text-slate-900">
                          {lang === 'bn' ? m.titleBn : m.titleEn}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {lang === 'bn' ? m.descBn : m.descEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: CHAIRMAN'S MESSAGE */}
        {/* ============================================================== */}
        {activeTab === 'chairman' && (
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-200 pb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#0f2942] to-slate-800 text-white flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-emerald-400 text-3xl font-black">
                AR
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {lang === 'bn' ? aboutData.chairman.designationBn : aboutData.chairman.designationEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'bn' ? aboutData.chairman.nameBn : aboutData.chairman.nameEn}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-500">
                  {lang === 'bn' ? aboutData.chairman.hospitalBn : aboutData.chairman.hospitalEn}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-2xl bg-emerald-100/60 border border-emerald-200 text-emerald-950 font-bold text-sm sm:text-base italic">
              {lang === 'bn' ? aboutData.chairman.quoteBn : aboutData.chairman.quoteEn}
            </div>

            {/* Speech Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {(lang === 'bn' ? aboutData.chairman.speechBn : aboutData.chairman.speechEn).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: MANAGING DIRECTOR'S MESSAGE */}
        {/* ============================================================== */}
        {activeTab === 'md' && (
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-200 pb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-emerald-800 to-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-emerald-400 text-3xl font-black">
                SS
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {lang === 'bn' ? aboutData.managingDirector.designationBn : aboutData.managingDirector.designationEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'bn' ? aboutData.managingDirector.nameBn : aboutData.managingDirector.nameEn}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-500">
                  {lang === 'bn' ? aboutData.managingDirector.hospitalBn : aboutData.managingDirector.hospitalEn}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-2xl bg-emerald-100/60 border border-emerald-200 text-emerald-950 font-bold text-sm sm:text-base italic">
              {lang === 'bn' ? aboutData.managingDirector.quoteBn : aboutData.managingDirector.quoteEn}
            </div>

            {/* Speech Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {(lang === 'bn' ? aboutData.managingDirector.speechBn : aboutData.managingDirector.speechEn).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: BOARD OF DIRECTORS */}
        {/* ============================================================== */}
        {activeTab === 'board' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1 mb-6">
              <h4 className="text-lg sm:text-xl font-black text-slate-900">
                {lang === 'bn' ? 'সম্মানিত পরিচালনা পর্ষদ ও ডিরেক্টরবৃন্দ' : 'Honorable Board of Directors'}
              </h4>
              <p className="text-xs text-slate-500">
                {lang === 'bn' 
                  ? 'নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিমিটেডের পরিচালনা পর্ষদের সদস্যবৃন্দ।'
                  : 'Board members guiding the ethical vision and development of Nexus Hospital.'}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {aboutData.boardMembers.map((member, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-all flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0f2942] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                      {lang === 'bn' ? member.nameBn : member.nameEn}
                    </h5>
                    <span className="text-[10px] font-bold text-emerald-700">
                      {lang === 'bn' ? member.roleBn : member.roleEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
