import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Activity, 
  Zap,
  Clock, 
  ShieldCheck, 
  Send,
  User,
  HeartPulse,
  Brain,
  Baby,
  Bone
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

export default function AiDoctorFinder({ lang, t, onBookDoctor }) {
  const [query, setQuery] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  // 8 Curated Quick Symptoms tailored to Nexus Hospital Doctors
  const quickSymptoms = [
    {
      id: "heart-chest-pain",
      icon: "❤️",
      label: "বুকে ব্যথা, চাপ ধরা, বুক ধড়ফড় ও শ্বাসকষ্ট",
      labelEn: "Chest Pain, Heaviness & Heart Palpitations",
      queryText: "হঠাৎ বুকে তীব্র ব্যথা, বাম হাতে ব্যথা ছড়ানো, শ্বাসকষ্ট ও বুক ধড়ফড় করছে",
      doctorId: "nexus-doc-2", // Dr. Gobinda Kanti Pal
      altDoctorId: "nexus-doc-13", // Dr. T. I. Khan Wasim
      urgency: "Immediate Emergency (CCU / Cath Lab)",
      urgencyBn: "জরুরি কার্ডিয়াক ইমার্জেন্সি (সিসিইউ / ক্যাথ ল্যাব)",
      reason: "Dr. Gobinda Kanti Pal is Associate Professor & Head of Cardiology at MMCH, specializing in coronary angiogram (CAG), heart stenting, and acute myocardial infarction management.",
      reasonBn: "ডাঃ গোবিন্দ কান্তি পাল ময়মনসিংহ মেডিকেল কলেজ হাসপাতালের কার্ডিওলজি বিভাগীয় প্রধান; হার্ট অ্যাটাক, এনজিওগ্রাম ও রিং পরানোর শীর্ষ বিশেষজ্ঞ।",
      tests: ["ECG 12-Lead Stat", "Troponin-I Biomarker", "Color Doppler Echocardiogram", "Coronary Angiogram (CAG Package 20k)"],
      testsBn: ["জরুরি ১২-লিড ইসিজি", "ট্রপোনিন-আই (Troponin-I)", "কালার ডপলার ইকোকার্ডিওগ্রাম", "করোনারি এনজিওগ্রাম (২০,০০০/- প্যাকেজ)"]
    },
    {
      id: "neuro-stroke",
      icon: "🧠",
      label: "মাথা ঘোরা, প্যারালাইসিস, তীব্র মাথাব্যথা ও স্ট্রোক",
      labelEn: "Severe Headache, Stroke & Paralysis",
      queryText: "মাথা তীব্র ঘোরা, এক পাশ দুর্বল লাগা, কথা জড়িয়ে যাওয়া এবং তীব্র মাথাব্যথা",
      doctorId: "nexus-doc-1", // Prof. Dr. Jalal Uddin
      altDoctorId: "nexus-doc-8", // Dr. Farhana Akhter
      urgency: "Immediate Emergency (Golden Hour)",
      urgencyBn: "জরুরি স্নায়ুরোগ ও স্ট্রোক ইমার্জেন্সি",
      reason: "Prof. Dr. Jalal Uddin is former Professor & Head of Neuromedicine at MMCH, a renowned authority in brain stroke, nerve disorders, and epilepsy.",
      reasonBn: "অধ্যাপক ডাঃ জালাল উদ্দীন স্নায়ুরোগ ও নিউরোমেডিসিনের শীর্ষ বিশেষজ্ঞ; ব্রেন স্ট্রোক, প্যারালাইসিস ও মস্তিষ্কের জটিল রোগ নিরাময়ে অভিজ্ঞ।",
      tests: ["German Siemens Multi-Slice CT Scan Brain", "Digital EEG", "Serum Electrolytes"],
      testsBn: ["জার্মান সিমেন্স ব্রেন সিটি স্ক্যান (৩০% ছাড়ে)", "ডিজিটাল ইইজি (EEG)", "সিরাম ইলেক্ট্রোলাইটস"]
    },
    {
      id: "child-nicu",
      icon: "👶",
      label: "নবজাতকের জটিলতা, কম ওজন, জন্ডিস ও শিশুর জ্বর",
      labelEn: "Newborn Jaundice, Preterm Baby & Child Fever",
      queryText: "বাচ্চার তীব্র জ্বর, শ্বাসকষ্ট, নবজাতকের গায়ের রঙ হলুদ ও দুধ টানতে পারছে না",
      doctorId: "nexus-doc-4", // Dr. Bilkis Begum
      altDoctorId: "nexus-doc-23", // Prof. Dr. Azizul Haque
      urgency: "Urgent Pediatric / NICU Care",
      urgencyBn: "জরুরি শিশু ও নবজাতক নিবিড় পরিচর্যা (NICU)",
      reason: "Dr. Bilkis Begum is Associate Professor in Pediatrics with special fellowship in Neonatal Health, managing Nexus Hospital's 24/7 NICU.",
      reasonBn: "ডাঃ বিলকিস বেগম ময়মনসিংহ মেডিকেল কলেজের সহযোগী অধ্যাপক ও নবজাতক স্বাস্থ্য বিশেষজ্ঞ; নেক্সাস এনআইসিইউর তত্ত্বাবধায়ক।",
      tests: ["Serum Bilirubin Total & Direct", "CBC with CRP", "Digital Chest X-Ray"],
      testsBn: ["সিরাম বিলিরুবিন (জন্ডিস টেস্ট)", "সিবিসি ও সিআরপি", "ডিজিটাল চেস্ট এক্স-রে"]
    },
    {
      id: "kidney-dialysis",
      icon: "🩺",
      label: "কিডনির সমস্যা, ক্রিয়েটিনিন বৃদ্ধি ও ডায়ালাইসিস",
      labelEn: "High Creatinine, Kidney Swelling & Dialysis",
      queryText: "পা ও মুখ ফুলে যাওয়া, প্রস্রাবের সমস্যা ও রক্তে ক্রিয়েটিনিন বেশি আসা",
      doctorId: "nexus-doc-11", // Dr. Mahmud Javed Hasan Parag
      altDoctorId: "nexus-doc-21", // Dr. Abu Zafor Salahuddin
      urgency: "Specialist Nephrology Consult",
      urgencyBn: "বিশেষজ্ঞ কিডনি ও ডায়ালাইসিস পরামর্শ",
      reason: "Dr. Mahmud Javed Hasan (Parag) is MD (Nephrology) and FASN (USA), expert in acute kidney injury, chronic kidney disease (CKD), and hemodialysis.",
      reasonBn: "ডাঃ মাহমুদ জাভেদ (পরাগ) এমডি নেফ্রোলজি ও আমেরিকান ফেলো (FASN); কিডনি ফেইলিউর, ডায়ালাইসিস ও হাইপারটেনশনের প্রখ্যাত বিশেষজ্ঞ।",
      tests: ["Serum Creatinine & eGFR", "Blood Urea Nitrogen", "USG of KUB & Prostate", "Urine R/M/E"],
      testsBn: ["সিরাম ক্রিয়েটিনিন ও ইজিএফআর", "ব্লাড ইউরিয়া", "আল্ট্রাসনোগ্রাফি KUB", "ইউরিন রুটিন পরীক্ষা"]
    },
    {
      id: "ortho-bone",
      icon: "🦴",
      label: "কোমর ব্যথা, হাড় ভাঙা, বাতব্যথা ও জয়েন্ট পেইন",
      labelEn: "Severe Back Pain, Disc PLID & Bone Trauma",
      queryText: "কোমরে তীব্র ব্যথা পায়ে নেমে যাওয়া, হাড়ের জয়েন্টে ব্যথা ও হাটাচলায় কষ্ট",
      doctorId: "nexus-doc-20", // Dr. Mamunur Rashid Chowdhury
      altDoctorId: "nexus-doc-9", // Prof. Dr. M. A. K. Azad
      urgency: "Orthopedic & Trauma Care",
      urgencyBn: "অর্থোপেডিক ও ট্রমা কনসালটেশন",
      reason: "Dr. Mamunur Rashid Chowdhury is a renowned trauma and spine surgeon experienced in fracture fixation, arthritis, and sciatica.",
      reasonBn: "ডাঃ মামুনুর রশিদ চৌধুরী হাড়, জোড়া, মেরুদণ্ড, বাতব্যথা ও ট্রমা সার্জারির অভিজ্ঞ সার্জন।",
      tests: ["Digital X-Ray of Affected Joint", "German Siemens 3D CT Bone", "Serum Uric Acid"],
      testsBn: ["ডিজিটাল এক্স-রে (৫০০ mA)", "জার্মান সিমেন্স থ্রি-ডি সিটি বোন", "সিরাম ইউরিক এসিড"]
    },
    {
      id: "surgery-lap",
      icon: "🔬",
      label: "পেটে ব্যথা, পিত্তথলির পাথর, পাইলস ও হার্নিয়া",
      labelEn: "Abdominal Pain, Gallstone, Piles & Hernia",
      queryText: "পেটের ডানপাশে তীব্র ব্যথা, বমি ভাব, পিত্তথলিতে পাথর ধরা পড়েছে বা পাইলসের রক্তপাত",
      doctorId: "nexus-doc-9", // Prof. Dr. M. A. K. Azad
      altDoctorId: "nexus-doc-6", // Dr. Ashek Mahmud Ferdaus
      urgency: "Surgical Consult / Laparoscopy",
      urgencyBn: "ল্যাপারোস্কোপিক ও জেনারেল সার্জারি পরামর্শ",
      reason: "Prof. Dr. M. A. K. Azad is senior professor of surgery at MMCH, specializing in laparoscopic cholecystectomy, laser piles surgery, and hernia repairs.",
      reasonBn: "অধ্যাপক ডাঃ এম এ কে আজাদ ময়মনসিংহ মেডিকেলের প্রখ্যাত সার্জন; ফুটো করে পিত্তথলির পাথর ও লেজার পাইলস অপারেশনে সিদ্ধহস্ত।",
      tests: ["4D USG Whole Abdomen", "Liver Function Test (SGPT/SGOT)", "Pre-Op Surgical Workup"],
      testsBn: ["ফোর-ডি হোল এবডোমেন আল্ট্রাসনোগ্রাফি", "লিভার ফাংশন টেস্ট (LFT)", "প্রি-অপারেটিভ রক্ত পরীক্ষা"]
    },
    {
      id: "gynae-pregnancy",
      icon: "🌸",
      label: "গর্ভকালীন সেবা, নরমাল ডেলিভারি ও গাইনী সমস্যা",
      labelEn: "Pregnancy Care, Normal Delivery & Gynecology",
      queryText: "গর্ভকালীন নিয়মিত চেকআপ, তলপেটে ব্যথা, সাদাস্রাব বা অনিয়মিত মাসিক",
      doctorId: "nexus-doc-10", // Dr. Mushahida Annoor Renu
      altDoctorId: "nexus-doc-3", // Dr. Afroza Islam
      urgency: "Gynecology & Obstetric Consult",
      urgencyBn: "গাইনী ও প্রসূতি কনসালটেশন",
      reason: "Dr. Mushahida Annoor (Renu) is a senior gynecologist and obstetrician providing comprehensive antenatal care, normal delivery, and cesarean section.",
      reasonBn: "ডাঃ মুশাহিদা আননূর (রেনু) গাইনী ও প্রসূতি বিশেষজ্ঞ; গর্ভকালীন নিরাপদ ডেলিভারি ও মহিলাদের জটিল রোগ নিরাময়ে নিবেদিত।",
      tests: ["4D Anomaly Scan USG", "Hemoglobin & Blood Grouping", "Urine Culture"],
      testsBn: ["ফোর-ডি প্রেগনেন্সি এনোমালি স্ক্যান", "হিমোগ্লোবিন ও ব্লাড গ্রুপিং", "ইউরিন কালচার"]
    },
    {
      id: "diabetes-hormone",
      icon: "💉",
      label: "অনিয়ন্ত্রিত ডায়াবেটিস, থাইরয়েড ও হরমোন রোগ",
      labelEn: "Uncontrolled Diabetes, Thyroid & Endocrine",
      queryText: "রক্তে সুগার নিয়ন্ত্রণে নেই, ওজন দ্রুত বাড়ছে বা কমছে, গলা ফোলা ও অতিরিক্ত ক্লান্তি",
      doctorId: "nexus-doc-18", // Dr. Noor-E-Musabbir Punam
      altDoctorId: "nexus-doc-17", // Dr. Rayhan Rotap Khan
      urgency: "Diabetology & Endocrinology",
      urgencyBn: "ডায়াবেটিস ও হরমোন বিশেষজ্ঞ পরামর্শ",
      reason: "Dr. Noor-E-Musabbir (Punam) is specialist in Diabetes, Thyroid, and Endocrine disorders at MMCH.",
      reasonBn: "ডাঃ নূর-এ-মুছাব্বির (পুনম) ডায়াবেটিস, থাইরয়েড ও হরমোন রোগের বিশেষজ্ঞ কনসালট্যান্ট।",
      tests: ["HbA1c Glycated Hemoglobin", "Thyroid Profile (TSH, FT4)", "Fasting Lipid Profile"],
      testsBn: ["এইচবিএ১সি (HbA1c ৩ মাসের গড় সুগার)", "থাইরয়েড প্যানেল (TSH, FT4)", "লিপিড প্রোফাইল"]
    }
  ];

  // Natural language symptom analyzer
  const handleAnalyze = (textToAnalyze) => {
    const q = (textToAnalyze || query).trim().toLowerCase();
    if (!q) return;

    setAnalyzing(true);
    setRecommendation(null);

    setTimeout(() => {
      let matched = null;

      // Check against quickSymptoms query text or label
      matched = quickSymptoms.find(s => 
        q.includes(s.id) || 
        q.includes(s.label.toLowerCase()) || 
        s.queryText.toLowerCase().split(/[,\s]+/).some(w => w.length > 3 && q.includes(w))
      );

      // Fallback keyword rules
      if (!matched) {
        if (q.includes("বুক") || q.includes("হার্ট") || q.includes("heart") || q.includes("chest") || q.includes("ব্যথা") && q.includes("বাম")) {
          matched = quickSymptoms[0]; // Heart
        } else if (q.includes("মাথা") || q.includes("stroke") || q.includes("স্ট্রোক") || q.includes("প্যারালাইসিস") || q.includes("headache")) {
          matched = quickSymptoms[1]; // Neuro
        } else if (q.includes("বাচ্চা") || q.includes("শিশু") || q.includes("নবজাতক") || q.includes("জ্বর") || q.includes("child") || q.includes("baby")) {
          matched = quickSymptoms[2]; // Child
        } else if (q.includes("কিডনি") || q.includes("ডায়ালাইসিস") || q.includes("kidney") || q.includes("প্রস্রাব") || q.includes("পানি")) {
          matched = quickSymptoms[3]; // Kidney
        } else if (q.includes("হাড়") || q.includes("কোমর") || q.includes("বাত") || q.includes("bone") || q.includes("joint")) {
          matched = quickSymptoms[4]; // Ortho
        } else if (q.includes("পেট") || q.includes("পাথর") || q.includes("পাইলস") || q.includes("সার্জারি") || q.includes("surgery")) {
          matched = quickSymptoms[5]; // Surgery
        } else if (q.includes("গর্ভ") || q.includes("মহিলা") || q.includes("মাসিক") || q.includes("delivery") || q.includes("gynae")) {
          matched = quickSymptoms[6]; // Gynae
        } else if (q.includes("ডায়াবেটিস") || q.includes("সুগার") || q.includes("থাইরয়েড") || q.includes("diabetes")) {
          matched = quickSymptoms[7]; // Diabetes
        } else {
          // General fallback to Medicine
          matched = quickSymptoms[7];
        }
      }

      const primaryDoctor = doctorsData.find(d => d.id === matched.doctorId) || doctorsData[1];
      const altDoctor = doctorsData.find(d => d.id === matched.altDoctorId) || doctorsData[6];

      setRecommendation({
        ...matched,
        primaryDoctor,
        altDoctor
      });

      setAnalyzing(false);
    }, 700);
  };

  return (
    <section id="ai-doctor" className="py-16 sm:py-20 bg-gradient-to-b from-nexus-50/30 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-nexus-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'স্মার্ট এআই ডক্টর ফাইন্ডার' : 'Smart AI Doctor Finder'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            {t.aiTitle}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {t.aiSubtitle}
          </p>

        </div>

        {/* Interactive Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative rounded-2xl bg-white shadow-xl shadow-nexus-900/5 border-2 border-slate-200 p-2 flex items-center gap-2 transition-all focus-within:border-nexus-600 focus-within:ring-4 focus-within:ring-nexus-100">
            <Search className="w-5 h-5 text-nexus-600 ml-2 flex-shrink-0" />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder={lang === 'bn' ? "যেমন: বুকে ব্যথা, মাথা ঘোরা, শিশুর জ্বর, কিডনি বা হাড়ের ব্যথা..." : "e.g., chest pain, severe headache, child fever, kidney pain..."}
              className="w-full text-xs sm:text-sm text-slate-900 bg-transparent focus:outline-none placeholder:text-slate-400 py-1.5"
            />
            <button
              onClick={() => handleAnalyze()}
              disabled={analyzing}
              className="px-5 py-2.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-xs shadow-md shadow-[#0f2942]/30 active:scale-95 transition-all flex items-center gap-1.5 flex-shrink-0 disabled:opacity-50"
            >
              {analyzing ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-white" />
                  <span>{lang === 'bn' ? "বিশ্লেষণ হচ্ছে..." : "Matching..."}</span>
                </>
              ) : (
                <>
                  <span>{lang === 'bn' ? "ডাক্তার খুঁজুন" : "Find Doctor"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Symptom Buttons */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            {lang === 'bn' ? "অথবা আপনার লক্ষণটি বেছে নিন:" : "Or select common symptom:"}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {quickSymptoms.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setQuery(s.queryText);
                  handleAnalyze(s.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-nexus-50 border border-slate-200 hover:border-nexus-300 text-slate-700 hover:text-nexus-800 text-xs font-semibold shadow-xs hover:shadow transition-all"
              >
                <span>{s.icon}</span>
                <span>{lang === 'bn' ? s.label : s.labelEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Recommendation Result Card */}
        {recommendation && (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="rounded-3xl bg-white border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'bn' ? "এআই ক্লিনিক্যাল ম্যাচিং সম্পন্ন" : "AI Clinical Match Complete"}</span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nexus-50 text-nexus-800 text-xs font-bold border border-nexus-200">
                  <AlertCircle className="w-3.5 h-3.5 text-nexus-600" />
                  <span>{lang === 'bn' ? recommendation.urgencyBn : recommendation.urgency}</span>
                </span>
              </div>

              {/* Rationale */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  {lang === 'bn' ? "রোগীর লক্ষণ বিশ্লেষণ:" : "Clinical Symptom Analysis:"}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {lang === 'bn' ? recommendation.reasonBn : recommendation.reason}
                </p>
              </div>

              {/* Primary Recommended Doctor */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  
                  {/* Doctor Photo */}
                  <img 
                    src={recommendation.primaryDoctor.image} 
                    alt={recommendation.primaryDoctor.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-nexus-200 shadow-sm flex-shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
                    }}
                  />

                  <div className="space-y-1 text-center sm:text-left flex-1">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-600 text-white shadow-xs">
                      {lang === 'bn' ? "সেরা প্রস্তাবিত বিশেষজ্ঞ" : "Top Recommended Specialist"}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      {lang === 'bn' ? recommendation.primaryDoctor.nameBn : recommendation.primaryDoctor.name}
                    </h3>
                    <p className="text-xs font-bold text-nexus-700">
                      {lang === 'bn' ? recommendation.primaryDoctor.specialtyBn : recommendation.primaryDoctor.specialty}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {lang === 'bn' ? recommendation.primaryDoctor.degreesBn : recommendation.primaryDoctor.degrees}
                    </p>
                    <p className="text-[11px] text-slate-600 font-semibold">
                      {lang === 'bn' ? recommendation.primaryDoctor.designationBn : recommendation.primaryDoctor.designation}
                    </p>
                    <div className="text-[11px] text-emerald-700 font-bold pt-1">
                      📍 {lang === 'bn' ? recommendation.primaryDoctor.roomBn : recommendation.primaryDoctor.room} • {lang === 'bn' ? recommendation.primaryDoctor.visitingHoursBn : recommendation.primaryDoctor.visitingHours}
                    </div>
                  </div>

                </div>

                {/* Direct Action Button */}
                <div className="lg:col-span-4 flex flex-col gap-2.5">
                  <button
                    onClick={() => onBookDoctor(recommendation.primaryDoctor.id)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{lang === 'bn' ? "ডাক্তার সিরিয়াল বুক করুন" : "Book Doctor Serial"}</span>
                  </button>

                  <a
                    href="tel:09611678922"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0a2540] hover:bg-[#123860] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 font-mono shadow-sm transition-all"
                  >
                    <span>হটলাইন: ০৯৬১১৬৭৮৯২২</span>
                  </a>
                </div>

              </div>

              {/* Recommended Diagnostic Tests */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="text-xs font-black text-slate-800 mb-2">
                  {lang === 'bn' ? "প্রস্তাবিত প্রয়োজনীয় ডায়াগনস্টিক টেস্ট:" : "Recommended Preliminary Diagnostic Tests:"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(lang === 'bn' ? recommendation.testsBn : recommendation.tests).map((test, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs"
                    >
                      ✓ {test}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
