import React from 'react';
import { 
  Building2, 
  HeartPulse, 
  Baby, 
  Activity, 
  Pill, 
  Truck, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles,
  Clock,
  CheckCircle2,
  Wind
} from 'lucide-react';

export default function FacilitiesSection({ lang, t, onEmergencyClick }) {
  const facilities = [
    {
      id: "ccu",
      icon: HeartPulse,
      color: "cardiac",
      titleBn: "২৪/৭ পূর্ণাঙ্গ করোনারি কেয়ার ইউনিট (CCU)",
      titleEn: "24/7 Coronary Care Unit (CCU)",
      descBn: "২৬শে মার্চ ২০১৭ থেকে বৃহত্তর ময়মনসিংহে বেসরকারি খাতে প্রথম চালু হওয়া পূর্ণাঙ্গ সিসিইউ। সার্বক্ষণিক সেন্ট্রাল মনিটরিং, ভেন্টিলেটর ও ডিফিব্রিলেটর সুবিধাসহ হৃদরোগীদের নিবিড় পরিচর্যা।",
      descEn: "Greater Mymensingh's very first private sector full-fledged CCU operational since 2017 with central cardiac monitoring.",
      badgeBn: "পাইওনিয়ার সিসিইউ (২০১৭ থেকে)",
      badgeEn: "1st CCU in Mymensingh"
    },
    {
      id: "nicu",
      icon: Baby,
      color: "nexus",
      titleBn: "আধুনিক এনআইসিইউ ও স্ক্যাবু (NICU & SCABU)",
      titleEn: "Modern NICU & SCABU for Newborns",
      descBn: "১লা ফেব্রুয়ারি ২০২১ থেকে চালু হওয়া বিশেষায়িত নবজাতক নিবিড় পরিচর্যা কেন্দ্র। অপরিপক্ক ও কম ওজনের শিশুদের জন্য আধুনিক ইনকিউবেটর, ফটোথেরাপি ও নিওনেটাল ভেন্টিলেটর।",
      descEn: "State-of-the-art Neonatal ICU established Feb 1, 2021 for preterm and low-birth-weight infants with specialized incubators.",
      badgeBn: "১লা ফেব্রুয়ারি ২০২১ থেকে",
      badgeEn: "Active since 2021"
    },
    {
      id: "cathlab",
      icon: Activity,
      color: "cardiac",
      titleBn: "ডিজিটাল কার্ডিয়াক ক্যাথ ল্যাব",
      titleEn: "Digital Interventional Cath Lab",
      descBn: "হৃদরোগীদের জীবন বাঁচাতে আধুনিক ডিজিটাল ক্যাথ ল্যাবে করোনারি এনজিওগ্রাম (CAG ২০,০০০/- প্যাকেজ), হার্টে রিং পরানো (PTCA) ও পেসমেকার সফলতার সাথে সম্পন্ন হয়।",
      descEn: "Full coronary interventions including 20k CAG package, stent angioplasty and pacemaker implantations.",
      badgeBn: "CAG প্যাকেজ ২০,০০০/-",
      badgeEn: "CAG Package 20k"
    },
    {
      id: "dialysis",
      icon: Activity,
      color: "nexus",
      titleBn: "আধুনিক হেমোডায়ালিসিস ইউনিট",
      titleEn: "Modern Hemodialysis Unit",
      descBn: "কিডনি রোগীদের জন্য আন্তর্জাতিক মানের ডায়ালাইসিস মেশিন, নিজস্ব আরও (RO) ওয়াটার ট্রিটমেন্ট প্ল্যান্ট এবং কঠোর ইনফেকশন কন্ট্রোল প্রটোকল।",
      descEn: "High-flux hemodialysis machines with dedicated RO water filtration plant and strict hygiene monitoring.",
      badgeBn: "২৪/৭ ডায়ালাইসিস",
      badgeEn: "24/7 Dialysis"
    },
    {
      id: "ot",
      icon: Building2,
      color: "nexus",
      titleBn: "মডুলার অপারেশন থিয়েটার (OT)",
      titleEn: "Modular Infection-Free OTs",
      descBn: "ল্যামিনার এয়ারফ্লোযুক্ত আন্তর্জাতিক মানের জীবাণুমুক্ত মডুলার ওটি স্যুট। কার্ডিয়াক, ল্যাপারোস্কোপিক, ট্রমা, অর্থোপেডিক ও গাইনী সার্জারির সম্পূর্ণ সুবিধা।",
      descEn: "Positive pressure laminar airflow surgical suites for cardiac, laparoscopic, ortho-trauma, and general operations.",
      badgeBn: "ল্যামিনার এয়ারফ্লো",
      badgeEn: "Laminar Airflow"
    },
    {
      id: "ambulance",
      icon: Truck,
      color: "cardiac",
      titleBn: "২৪ ঘণ্টা ডেডিকেটেড এম্বুলেন্স সার্ভিস",
      titleEn: "24/7 Dedicated Cardiac Ambulance",
      descBn: "জরুরি রোগী আনা-নেওয়ায় অক্সিজেন ও লাইফ সাপোর্টযুক্ত নিজস্ব এম্বুলেন্স বহর। ময়মনসিংহ ও যেকোনো দূরপাল্লার রোগী পরিবহনে সার্বক্ষণিক প্রস্তুত।",
      descEn: "Round-the-clock patient transfer fleet with continuous oxygen and emergency resuscitation equipment.",
      badgeBn: "হটলাইন: ০১৭১২-৪২১৭১৪",
      badgeEn: "Call 01712-421714"
    },
    {
      id: "pharmacy",
      icon: Pill,
      color: "nexus",
      titleBn: "২৪ ঘণ্টা ইন-হাউস মডেল ফার্মেসি",
      titleEn: "24/7 In-House Model Pharmacy",
      descBn: "হাসপাতাল প্রাঙ্গণেই সার্বক্ষণিক খোলা আসল ও মানসম্মত জরুরি জীবনরক্ষাকারী ওষুধের মডেল ফার্মেসি। কোনো প্রকার কালোবাজারি বা নকল মুক্ত।",
      descEn: "Full-range 24/7 hospital dispensary with temperature-controlled authentic lifesaving pharmaceuticals.",
      badgeBn: "১০০% খাঁটি ওষুধ",
      badgeEn: "100% Authentic"
    },
    {
      id: "gas",
      icon: Wind,
      color: "nexus",
      titleBn: "সেন্ট্রাল মেডিকেল গ্যাস ও জেনারেটর ব্যাকআপ",
      titleEn: "Central Medical Gas & Power Backup",
      descBn: "হাসপাতালের প্রতিটি বেড ও কেবিনে পাইপলাইনের মাধ্যমে নিরবচ্ছিন্ন সেন্ট্রাল অক্সিজেন ও ভ্যাকুয়াম। ১০০% হেভি ডিউটি অটো জেনারেটর ব্যাকআপ।",
      descEn: "Piped uninterrupted central medical oxygen to every inpatient bed with 100% heavy duty automatic generator backup.",
      badgeBn: "১০০% নিরবচ্ছিন্ন",
      badgeEn: "100% Continuous"
    }
  ];

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? 'হাসপাতাল অবকাঠামো ও বিশেষ সুবিধাসমূহ' : 'Hospital Facilities & Infrastructure'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {t.facilitiesHeading}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {t.facilitiesSubheading}
          </p>

        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac) => {
            const IconComp = fac.icon;
            const isCardiac = fac.color === 'cardiac';

            return (
              <div
                key={fac.id}
                className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-nexus-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                      isCardiac ? 'bg-cardiac-100 text-cardiac-600' : 'bg-nexus-100 text-nexus-700'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                      isCardiac ? 'bg-cardiac-50 text-cardiac-700 border border-cardiac-200' : 'bg-nexus-50 text-nexus-800 border border-nexus-200'
                    }`}>
                      {lang === 'bn' ? fac.badgeBn : fac.badgeEn}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-nexus-700 transition-colors">
                    {lang === 'bn' ? fac.titleBn : fac.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'bn' ? fac.descBn : fac.descEn}
                  </p>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {lang === 'bn' ? 'সার্বক্ষণিক চালু' : 'Operational'}
                  </span>

                  {fac.id === 'ambulance' ? (
                    <a
                      href="tel:01712421714"
                      className="px-2.5 py-1 rounded-lg bg-cardiac-600 hover:bg-cardiac-700 text-white text-[11px] font-bold shadow-xs transition-colors"
                    >
                      {lang === 'bn' ? 'কল দিন' : 'Call'}
                    </a>
                  ) : (
                    <button
                      onClick={onEmergencyClick}
                      className="text-[11px] font-bold text-slate-600 hover:text-nexus-700 transition-colors"
                    >
                      {lang === 'bn' ? 'তথ্য জানুন →' : 'Inquire →'}
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
