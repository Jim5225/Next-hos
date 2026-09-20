import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  Tag, 
  CheckCircle2, 
  HeartPulse, 
  Scan, 
  Activity, 
  Microscope, 
  Calendar, 
  Phone, 
  Sparkles,
  ShieldCheck,
  BadgePercent
} from 'lucide-react';

export const testPriceList = [
  // Cardiac & Cath Lab
  {
    id: "cag-pkg",
    nameBn: "করোনারি এনজিওগ্রাম (CAG) সম্পূর্ণ প্যাকেজ",
    nameEn: "Coronary Angiogram (CAG) Full Package",
    deptBn: "ক্যাথ ল্যাব ও হৃদরোগ",
    deptEn: "Cath Lab & Cardiology",
    category: "cardiac",
    price: "২০,০০০/-",
    priceEn: "20,000 BDT",
    regularPrice: "২৫,০০০/-",
    badgeBn: "সর্বোত্তম সাশ্রয়ী প্যাকেজ",
    badgeEn: "Flagship Package",
    deliveryTimeBn: "একই দিনে ডে-কেয়ার রিলিজ",
    deliveryTimeEn: "Same Day Release",
    fastingBn: "৪-৬ ঘণ্টা খালি পেট",
    fastingEn: "4-6 Hours Fasting"
  },
  {
    id: "echo",
    nameBn: "কালার ডপলার ইকোকার্ডিওগ্রাম (2D/4D Echo)",
    nameEn: "Color Doppler Echocardiogram",
    deptBn: "কার্ডিওলজি",
    deptEn: "Cardiology",
    category: "cardiac",
    price: "২,০০০/-",
    priceEn: "2,000 BDT",
    regularPrice: "২,৫০০/-",
    badgeBn: "কনসালট্যান্ট সুপারভাইজড",
    badgeEn: "Consultant Supervised",
    deliveryTimeBn: "তাৎক্ষণিক রিপোর্ট",
    deliveryTimeEn: "Instant Delivery"
  },
  {
    id: "ett",
    nameBn: "ইটিটি টেস্ট (Exercise Tolerance Test - TMT)",
    nameEn: "ETT / TMT (Exercise Tolerance Test)",
    deptBn: "কার্ডিওলজি",
    deptEn: "Cardiology",
    category: "cardiac",
    price: "২,৫০০/-",
    priceEn: "2,500 BDT",
    regularPrice: "৩,০০০/-",
    badgeBn: "হৃদরোগ ব্লক টেস্ট",
    badgeEn: "Heart Block Screening",
    deliveryTimeBn: "২ ঘণ্টার মধ্যে",
    deliveryTimeEn: "Within 2 Hours"
  },
  {
    id: "ecg",
    nameBn: "১২-লিড ডিজিটাল ইসিজি (12-Lead ECG)",
    nameEn: "12-Lead Digital ECG",
    deptBn: "কার্ডিওলজি",
    deptEn: "Cardiology",
    category: "cardiac",
    price: "৩০০/-",
    priceEn: "300 BDT",
    regularPrice: "৪০০/-",
    badgeBn: "২৪ ঘণ্টা খোলা",
    badgeEn: "24/7 Available",
    deliveryTimeBn: "১০ মিনিট",
    deliveryTimeEn: "10 Mins"
  },
  {
    id: "trop-i",
    nameBn: "ট্রপোনিন-আই (Troponin-I Quantitative - Stat)",
    nameEn: "Troponin-I (Cardiac Biomarker)",
    deptBn: "কার্ডিয়াক ল্যাব",
    deptEn: "Cardiac Lab",
    category: "cardiac",
    price: "১,২০০/-",
    priceEn: "1,200 BDT",
    regularPrice: "১,৫০০/-",
    badgeBn: "হার্ট অ্যাটাক নির্ণয়",
    badgeEn: "Heart Attack Stat",
    deliveryTimeBn: "৩০ মিনিট",
    deliveryTimeEn: "30 Mins"
  },

  // CT Scan & Radiology (30% Discount)
  {
    id: "ct-brain",
    nameBn: "জার্মান সিমেন্স সিটি স্ক্যান ব্রেইন (Plain)",
    nameEn: "Siemens CT Scan Brain (Plain)",
    deptBn: "সিটি স্ক্যান বিভাগ",
    deptEn: "CT Scan & Radiology",
    category: "imaging",
    price: "৪,২০০/-",
    priceEn: "4,200 BDT",
    regularPrice: "৬,০০০/-",
    badgeBn: "চলছে ৩০% ছাড়!",
    badgeEn: "30% OFF Offer",
    deliveryTimeBn: "১ ঘণ্টার মধ্যে",
    deliveryTimeEn: "Within 1 Hour"
  },
  {
    id: "ct-chest",
    nameBn: "এইচআরসিটি চেস্ট / ফুসফুস (HRCT Chest Siemens)",
    nameEn: "HRCT Chest Lungs (Siemens CT)",
    deptBn: "সিটি স্ক্যান বিভাগ",
    deptEn: "CT Scan & Radiology",
    category: "imaging",
    price: "৫,৬০০/-",
    priceEn: "5,600 BDT",
    regularPrice: "৮,০০০/-",
    badgeBn: "চলছে ৩০% ছাড়!",
    badgeEn: "30% OFF Offer",
    deliveryTimeBn: "একই দিন",
    deliveryTimeEn: "Same Day"
  },
  {
    id: "ct-abdomen",
    nameBn: "হোল এবডোমেন সিটি স্ক্যান (Contrast Siemens)",
    nameEn: "CT Scan Whole Abdomen (Contrast)",
    deptBn: "সিটি স্ক্যান বিভাগ",
    deptEn: "CT Scan & Radiology",
    category: "imaging",
    price: "৭,০০০/-",
    priceEn: "7,000 BDT",
    regularPrice: "১০,০০০/-",
    badgeBn: "চলছে ৩০% ছাড়!",
    badgeEn: "30% OFF Offer",
    deliveryTimeBn: "একই দিন",
    deliveryTimeEn: "Same Day"
  },
  {
    id: "xray",
    nameBn: "ডিজিটাল হাই-ফ্রিকোয়েন্সি এক্স-রে (Chest P/A 500mA)",
    nameEn: "Digital X-Ray Chest P/A",
    deptBn: "রেডিওলজি",
    deptEn: "Radiology",
    category: "imaging",
    price: "৪০০/-",
    priceEn: "400 BDT",
    regularPrice: "৫০০/-",
    badgeBn: "ডিজিটাল প্রিন্ট",
    badgeEn: "Digital Film",
    deliveryTimeBn: "১৫ মিনিট",
    deliveryTimeEn: "15 Mins"
  },
  {
    id: "usg-4d",
    nameBn: "৪ডি কালার ডপলার আল্ট্রাসনোগ্রাফি (হোল এবডোমেন)",
    nameEn: "4D Color Doppler USG (Whole Abdomen)",
    deptBn: "আল্ট্রাসনোগ্রাফি",
    deptEn: "Ultrasonography",
    category: "imaging",
    price: "১,২০০/-",
    priceEn: "1,200 BDT",
    regularPrice: "১,৫০০/-",
    badgeBn: "অভিজ্ঞ সনোলজিস্ট",
    badgeEn: "Senior Sonologist",
    deliveryTimeBn: "৩০ মিনিট",
    deliveryTimeEn: "30 Mins"
  },
  {
    id: "usg-pregnancy",
    nameBn: "গর্ভকালীন ফোর-ডি এনোমালি স্ক্যান (Anomaly USG)",
    nameEn: "Pregnancy 4D Anomaly Scan",
    deptBn: "আল্ট্রাসনোগ্রাফি",
    deptEn: "Ultrasonography",
    category: "imaging",
    price: "১,৫০০/-",
    priceEn: "1,500 BDT",
    regularPrice: "১,৮০০/-",
    badgeBn: "বাচ্চার পূর্ণাঙ্গ স্ক্রিনিং",
    badgeEn: "Full Fetal Screening",
    deliveryTimeBn: "একই দিন",
    deliveryTimeEn: "Same Day"
  },

  // Pathology & Automated Lab
  {
    id: "cbc",
    nameBn: "সিবিসি উইথ ইএসআর (CBC 5-Part Differential)",
    nameEn: "Complete Blood Count (CBC with ESR)",
    deptBn: "ক্লিনিক্যাল প্যাথলজি",
    deptEn: "Pathology",
    category: "lab",
    price: "৪০০/-",
    priceEn: "400 BDT",
    regularPrice: "৫০০/-",
    badgeBn: "জাপানি অটো-অ্যানালাইজার",
    badgeEn: "Automated Sysmex",
    deliveryTimeBn: "১ ঘণ্টা",
    deliveryTimeEn: "1 Hour"
  },
  {
    id: "hba1c",
    nameBn: "এইচবিএ১সি (HbA1c ৩ মাসের গড় সুগার)",
    nameEn: "HbA1c (Glycated Hemoglobin)",
    deptBn: "বায়োকেমিস্ট্রি",
    deptEn: "Biochemistry",
    category: "lab",
    price: "৮০০/-",
    priceEn: "800 BDT",
    regularPrice: "১,০০০/-",
    badgeBn: "ডায়াবেটিস গোল্ড স্ট্যান্ডার্ড",
    badgeEn: "Diabetes Standard",
    deliveryTimeBn: "২ ঘণ্টা",
    deliveryTimeEn: "2 Hours"
  },
  {
    id: "lipid",
    nameBn: "লিপিড প্রোফাইল (রক্তের চর্বি ও কোলেস্টেরল প্যানেল)",
    nameEn: "Fasting Lipid Profile",
    deptBn: "বায়োকেমিস্ট্রি",
    deptEn: "Biochemistry",
    category: "lab",
    price: "১,০০০/-",
    priceEn: "1,000 BDT",
    regularPrice: "১,২০০/-",
    badgeBn: "১২ ঘণ্টা খালি পেট",
    badgeEn: "12 Hours Fasting",
    deliveryTimeBn: "একই দিন",
    deliveryTimeEn: "Same Day"
  },
  {
    id: "creatinine",
    nameBn: "সিরাম ক্রিয়েটিনিন (কিডনি ফাংশন টেস্ট)",
    nameEn: "Serum Creatinine with eGFR",
    deptBn: "বায়োকেমিস্ট্রি",
    deptEn: "Biochemistry",
    category: "lab",
    price: "৩৫০/-",
    priceEn: "350 BDT",
    regularPrice: "৪৫০/-",
    badgeBn: "কিডনি স্বাস্থ্য",
    badgeEn: "Kidney Function",
    deliveryTimeBn: "১ ঘণ্টা",
    deliveryTimeEn: "1 Hour"
  },
  {
    id: "thyroid",
    nameBn: "থাইরয়েড হরমোন প্যানেল (TSH, FT4)",
    nameEn: "Thyroid Panel (TSH, FT4)",
    deptBn: "হরমোন ল্যাব",
    deptEn: "Hormone Lab",
    category: "lab",
    price: "১,০০০/-",
    priceEn: "1,000 BDT",
    regularPrice: "১,৩০০/-",
    badgeBn: "অটো কেমিলুমিনেসেন্স",
    badgeEn: "Chemiluminescence",
    deliveryTimeBn: "একই দিন",
    deliveryTimeEn: "Same Day"
  },
  {
    id: "urine",
    nameBn: "ইউরিন রুটিন পরীক্ষা (Urine R/M/E)",
    nameEn: "Urine Routine Examination (R/M/E)",
    deptBn: "প্যাথলজি",
    deptEn: "Pathology",
    category: "lab",
    price: "২০০/-",
    priceEn: "200 BDT",
    regularPrice: "২৫০/-",
    badgeBn: "রুটিন স্ক্রিনিং",
    badgeEn: "Routine",
    deliveryTimeBn: "৩০ মিনিট",
    deliveryTimeEn: "30 Mins"
  },

  // Critical Care & Specialized Procedures
  {
    id: "dialysis-pkg",
    nameBn: "হেমোডায়ালিসিস (সিঙ্গেল সেশন - RO ওয়াটারসহ)",
    nameEn: "Hemodialysis Single Session",
    deptBn: "ডায়ালাইসিস সেন্টার",
    deptEn: "Dialysis Center",
    category: "critical",
    price: "২,৫০০/-",
    priceEn: "2,500 BDT",
    regularPrice: "৩,২০০/-",
    badgeBn: "২৪ ঘণ্টা জরুরি ডায়ালাইসিস",
    badgeEn: "24/7 Dialysis",
    deliveryTimeBn: "৪ ঘণ্টার সেশন",
    deliveryTimeEn: "4 Hour Session"
  },
  {
    id: "endoscopy",
    nameBn: "ভিডিও এন্ডোস্কোপি (Video Endoscopy Upper GI)",
    nameEn: "Video Endoscopy (Upper GI)",
    deptBn: "গ্যাস্ট্রোএন্টারোলজি",
    deptEn: "Gastroenterology",
    category: "critical",
    price: "২,২০০/-",
    priceEn: "2,200 BDT",
    regularPrice: "২,৮০০/-",
    badgeBn: "এইচডি ক্যামেরা",
    badgeEn: "HD Video Scope",
    deliveryTimeBn: "তাৎক্ষণিক রিপোর্ট",
    deliveryTimeEn: "Instant Delivery"
  },
  {
    id: "eeg",
    nameBn: "ডিজিটাল ইইজি (Digital EEG - ব্রেন পরীক্ষা)",
    nameEn: "Digital EEG (Brain Wave Recording)",
    deptBn: "নিউরোমেডিসিন",
    deptEn: "Neurology",
    category: "critical",
    price: "২,০০০/-",
    priceEn: "2,000 BDT",
    regularPrice: "২,৫০০/-",
    badgeBn: "মৃগীরোগ ও স্ট্রোক",
    badgeEn: "Epilepsy & Brain",
    deliveryTimeBn: "একই দিন",
    deliveryTimeEn: "Same Day"
  }
];

export default function TestPriceModal({ isOpen, onClose, lang, t, onBookAppointment }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", labelBn: "সকল টেস্ট", labelEn: "All Tests" },
    { id: "cardiac", labelBn: "কার্ডিয়াক ও ক্যাথ ল্যাব", labelEn: "Cardiac & Cath Lab" },
    { id: "imaging", labelBn: "সিটি স্ক্যান (৩০% ছাড়) ও ইমেজিং", labelEn: "CT Scan (30% OFF) & USG" },
    { id: "lab", labelBn: "প্যাথলজি ও ব্লাড টেস্ট", labelEn: "Pathology & Blood" },
    { id: "critical", labelBn: "ডায়ালাইসিস ও এন্ডোস্কোপি", labelEn: "Dialysis & Procedures" }
  ];

  const filteredTests = useMemo(() => {
    return testPriceList.filter((item) => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCat;

      const matchName = item.nameBn.toLowerCase().includes(q) || item.nameEn.toLowerCase().includes(q);
      const matchDept = item.deptBn.toLowerCase().includes(q) || item.deptEn.toLowerCase().includes(q);

      return matchCat && (matchName || matchDept);
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-nexus-900 via-slate-900 to-nexus-950 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <BadgePercent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black">
                {lang === 'bn' ? 'নেক্সাস হাসপাতাল টেস্ট প্রাইজ ও ডায়াগনস্টিক ফি' : 'Nexus Hospital Diagnostic Test Prices'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {lang === 'bn' ? '১০০% দালালমুক্ত ও স্বচ্ছ হাসপাতাল রেট • কোনো লুকানো চার্জ নেই' : '100% Broker-Free & Transparent Hospital Rates'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3 no-print">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? "টেস্টের নাম লিখে খুঁজুন (যেমন: এনজিওগ্রাম, সিটি স্ক্যান, ইকো, সিবিসি, ডায়ালাইসিস)..." : "Search test by name (e.g. Angiogram, CT Scan, Echo, CBC)..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-nexus-600 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-nexus-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {lang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Test Items Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
            <span>
              {lang === 'bn' ? `মোট ${filteredTests.length} টি টেস্ট ও প্যাকেজ পাওয়া গেছে` : `Found ${filteredTests.length} tests and packages`}
            </span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {lang === 'bn' ? '১০০% কমিশনমুক্ত মূল্য' : 'Zero Commission'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredTests.map((test) => (
              <div 
                key={test.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-nexus-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {lang === 'bn' ? test.deptBn : test.deptEn}
                    </span>
                    {test.badgeBn && (
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        test.badgeBn.includes('৩০%') || test.badgeBn.includes('প্যাকেজ')
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {lang === 'bn' ? test.badgeBn : test.badgeEn}
                      </span>
                    )}
                  </div>

                  <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-nexus-800 transition-colors leading-snug">
                    {lang === 'bn' ? test.nameBn : test.nameEn}
                  </h4>

                  <div className="text-[11px] text-slate-500 space-y-0.5">
                    <div>⏱ ডেলিভারি: <strong>{lang === 'bn' ? test.deliveryTimeBn : test.deliveryTimeEn}</strong></div>
                    {test.fastingBn && (
                      <div className="text-amber-700 font-semibold">⚠️ {lang === 'bn' ? test.fastingBn : test.fastingEn}</div>
                    )}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-slate-900 font-mono">
                        {lang === 'bn' ? test.price : test.priceEn}
                      </span>
                      {test.regularPrice && (
                        <span className="text-xs text-slate-400 line-through font-mono">
                          {test.regularPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onBookAppointment();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-nexus-600 hover:bg-nexus-700 text-white font-extrabold text-xs shadow-2xs transition-all active:scale-95"
                  >
                    {lang === 'bn' ? 'বুক করুন' : 'Book Test'}
                  </button>
                </div>

              </div>
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div className="text-center py-10 space-y-2">
              <Tag className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-xs text-slate-500">
                {lang === 'bn' ? 'কোনো টেস্ট পাওয়া যায়নি। হটলাইনে সরাসরি কল করে মূল্য জানতে পারেন: ০৯৬১১৬৭৮৯২২' : 'No tests found. Call our hotline for price: 09611678922'}
              </p>
            </div>
          )}

        </div>

        {/* Footer info note */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-[11px] text-slate-600 flex items-center justify-center gap-2">
          <span>হটলাইন: <strong className="font-mono text-slate-900">০৯৬১১৬৭৮৯২২</strong></span>
          <span>•</span>
          <span>শেহড়া বড় বাড়ি, ঢাকা-ময়মনসিংহ রোড, ময়মনসিংহ</span>
        </div>

      </div>
    </div>
  );
}
