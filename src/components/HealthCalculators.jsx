import React, { useState } from 'react';
import { 
  Calculator, 
  Heart, 
  Baby, 
  Activity, 
  Droplets, 
  Sparkles, 
  ArrowRight, 
  Calendar,
  AlertCircle,
  CheckCircle2,
  HeartPulse
} from 'lucide-react';

export default function HealthCalculators({ lang, t, onBookAppointment }) {
  const [activeCalc, setActiveCalc] = useState('heartRisk');

  // Heart Attack Risk Calculator State
  const [age, setAge] = useState(48);
  const [gender, setGender] = useState('male');
  const [smoker, setSmoker] = useState('no');
  const [diabetic, setDiabetic] = useState('no');
  const [bpKnown, setBpKnown] = useState('elevated');
  const [chestPain, setChestPain] = useState('occasional');
  const [heartRiskResult, setHeartRiskResult] = useState(null);

  // BMI State
  const [weight, setWeight] = useState(68);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(6);
  const [bmiResult, setBmiResult] = useState(null);

  // BP State
  const [systolic, setSystolic] = useState(130);
  const [diastolic, setDiastolic] = useState(85);
  const [bpResult, setBpResult] = useState(null);

  // Pregnancy Due Date State
  const [lmpDate, setLmpDate] = useState("");
  const [eddResult, setEddResult] = useState(null);

  // Calculate Heart Attack Risk
  const handleCalculateHeartRisk = () => {
    let score = 0;
    if (age > 45) score += 2;
    if (age > 55) score += 2;
    if (gender === 'male') score += 1;
    if (smoker === 'yes') score += 3;
    if (diabetic === 'yes') score += 3;
    if (bpKnown === 'high') score += 3;
    if (bpKnown === 'elevated') score += 1;
    if (chestPain === 'frequent') score += 4;
    if (chestPain === 'occasional') score += 2;

    let level = "";
    let levelBn = "";
    let color = "";
    let advice = "";
    let adviceBn = "";

    if (score <= 3) {
      level = "Low Cardiovascular Risk (স্বল্প ঝুঁকি)";
      levelBn = "স্বল্প হৃদরোগ ঝুঁকি (Low Risk)";
      color = "text-emerald-600 bg-emerald-50 border-emerald-200";
      advice = "Your current heart risk profile is within acceptable limits. Maintain regular exercise and a balanced diet.";
      adviceBn = "আপনার বর্তমান হার্ট অ্যাটাক ঝুঁকি সাধারণ মাত্রায় রয়েছে। নিয়মিত ব্যায়াম ও স্বাস্থ্যকর খাদ্যাভ্যাস বজায় রাখুন।";
    } else if (score <= 7) {
      level = "Moderate Cardiac Risk (মাঝারি ঝুঁকি)";
      levelBn = "মাঝারি হৃদরোগ ঝুঁকি (Moderate Risk)";
      color = "text-amber-700 bg-amber-50 border-amber-300";
      advice = "You have noticeable cardiac risk factors. We recommend a baseline ECG, Lipid Profile, and consulting a cardiologist.";
      adviceBn = "আপনার মধ্যে উল্লেখযোগ্য হৃদঝুঁকি রয়েছে। অবিলম্বে একটি ইসিজি, লিপিড প্রোফাইল পরীক্ষা এবং কার্ডিওলজিস্টের পরামর্শ নেওয়া উচিত।";
    } else {
      level = "High Cardiovascular Risk (উচ্চ ঝুঁকি - সতর্কতা)";
      levelBn = "উচ্চ হৃদরোগ ঝুঁকি (High Cardiac Risk)";
      color = "text-cardiac-700 bg-cardiac-50 border-cardiac-300";
      advice = "High probability of coronary artery disease. Please consult a Nexus interventional cardiologist immediately for an Echocardiogram, ETT, or Coronary Angiogram.";
      adviceBn = "হৃদরোগ বা ব্লকের উচ্চ সম্ভাবনা। অবিলম্বে নেক্সাস হাসপাতালের কার্ডিওলজিস্টের সাথে পরামর্শ করে ইকো, ইটিটি বা এনজিওগ্রাম করানোর পরামর্শ দেওয়া হচ্ছে।";
    }

    setHeartRiskResult({ score, level, levelBn, color, advice, adviceBn });
  };

  // Calculate BMI
  const handleCalculateBmi = () => {
    const totalInches = (Number(heightFeet) * 12) + Number(heightInches);
    const heightMeters = totalInches * 0.0254;
    if (heightMeters <= 0 || weight <= 0) return;

    const bmiVal = (Number(weight) / (heightMeters * heightMeters)).toFixed(1);
    let category = "";
    let categoryBn = "";
    let color = "";

    if (bmiVal < 18.5) {
      category = "Underweight";
      categoryBn = "কম ওজন (Underweight)";
      color = "text-amber-600 bg-amber-50 border-amber-200";
    } else if (bmiVal < 24.9) {
      category = "Healthy Weight";
      categoryBn = "আদর্শ ও সুস্থ ওজন (Healthy)";
      color = "text-emerald-600 bg-emerald-50 border-emerald-200";
    } else if (bmiVal < 29.9) {
      category = "Overweight";
      categoryBn = "অতিরিক্ত ওজন (Overweight)";
      color = "text-orange-600 bg-orange-50 border-orange-200";
    } else {
      category = "Obese";
      categoryBn = "স্থূলতা (Obese - হার্টঝুঁকি বেশি)";
      color = "text-cardiac-700 bg-cardiac-50 border-cardiac-200";
    }

    setBmiResult({ bmi: bmiVal, category, categoryBn, color });
  };

  // Calculate Blood Pressure Category
  const handleCalculateBp = () => {
    const sys = Number(systolic);
    const dia = Number(diastolic);
    let cat = "";
    let catBn = "";
    let color = "";

    if (sys < 120 && dia < 80) {
      cat = "Normal Blood Pressure";
      catBn = "স্বাভাবিক রক্তচাপ (Normal)";
      color = "text-emerald-600 bg-emerald-50 border-emerald-200";
    } else if (sys <= 129 && dia < 80) {
      cat = "Elevated Blood Pressure";
      catBn = "উন্নত রক্তচাপ (Elevated)";
      color = "text-amber-600 bg-amber-50 border-amber-200";
    } else if (sys <= 139 || dia <= 89) {
      cat = "Stage 1 Hypertension (উচ্চ রক্তচাপ)";
      catBn = "হাইপারটেনশন স্টেজ-১ (Stage 1)";
      color = "text-orange-600 bg-orange-50 border-orange-200";
    } else {
      cat = "Stage 2 Hypertension / Crisis (তীব্র উচ্চ রক্তচাপ)";
      catBn = "হাইপারটেনশন স্টেজ-২ (জরুরি ডাক্তারের পরামর্শ নিন)";
      color = "text-cardiac-700 bg-cardiac-50 border-cardiac-200";
    }

    setBpResult({ sys, dia, cat, catBn, color });
  };

  // Calculate Pregnancy Due Date (Naegele's rule)
  const handleCalculateEdd = () => {
    if (!lmpDate) return;
    const lmp = new Date(lmpDate);
    const edd = new Date(lmp);
    edd.setDate(edd.getDate() + 280);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const eddString = edd.toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', options);

    setEddResult({
      eddDate: eddString,
      weeks: Math.floor((new Date() - lmp) / (1000 * 60 * 60 * 24 * 7))
    });
  };

  return (
    <section id="calculators" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? 'ইন্টারঅ্যাক্টিভ ডিজিটাল হেলথ টুলস' : 'Interactive Health Calculators'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {t.calcHeading}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {t.calcSubheading}
          </p>

          {/* Calculator Selector Tabs */}
          <div className="pt-3 flex flex-wrap justify-center gap-2">
            
            <button
              onClick={() => setActiveCalc('heartRisk')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCalc === 'heartRisk'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <HeartPulse className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'হৃদরোগ ঝুঁকি যাচাই' : 'Heart Attack Risk'}</span>
            </button>

            <button
              onClick={() => setActiveCalc('bp')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCalc === 'bp'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'রক্তচাপ (BP) স্টেজ' : 'Blood Pressure (BP)'}</span>
            </button>

            <button
              onClick={() => setActiveCalc('bmi')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCalc === 'bmi'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'বিএমআই (BMI) ক্যালকুলেটর' : 'BMI Calculator'}</span>
            </button>

            <button
              onClick={() => setActiveCalc('edd')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCalc === 'edd'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Baby className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'গর্ভকালীন সম্ভাব্য তারিখ (EDD)' : 'Pregnancy Due Date'}</span>
            </button>

          </div>

        </div>

        {/* 1. Heart Attack Risk Calculator */}
        {activeCalc === 'heartRisk' && (
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-cardiac-200 p-6 sm:p-8 shadow-xl animate-fadeIn space-y-6">
            
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-cardiac-100 text-cardiac-600 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 animate-heartbeat" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {lang === 'bn' ? 'কার্ডিওভাসকুলার হার্ট অ্যাটাক ঝুঁকি নিরূপণ' : '10-Year Heart Attack & Stroke Risk Estimator'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'বয়স, ধূমপান, ডায়াবেটিস ও লক্ষণের ভিত্তিতে তাৎক্ষণিক ঝুঁকি মূল্যায়ন' : 'Clinical evaluation based on age, habits, and symptoms'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'বয়স (Age):' : 'Your Age:'} {age} {lang === 'bn' ? 'বছর' : 'Yrs'}
                </label>
                <input 
                  type="range" 
                  min="20" 
                  max="85" 
                  value={age} 
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-cardiac-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'লিঙ্গ (Gender):' : 'Gender:'}
                </label>
                <select 
                  value={gender} 
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  <option value="male">{lang === 'bn' ? 'পুরুষ (Male)' : 'Male'}</option>
                  <option value="female">{lang === 'bn' ? 'মহিলা (Female)' : 'Female'}</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ধূমপানের অভ্যাস (Smoker):' : 'Smoking Status:'}
                </label>
                <select 
                  value={smoker} 
                  onChange={(e) => setSmoker(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  <option value="no">{lang === 'bn' ? 'না / অধূমপায়ী (Non-Smoker)' : 'Non-Smoker'}</option>
                  <option value="yes">{lang === 'bn' ? 'হ্যাঁ / নিয়মিত ধূমপায়ী (Smoker)' : 'Current Smoker'}</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ডায়াবেটিস আছে কি না (Diabetes):' : 'Diabetic Condition:'}
                </label>
                <select 
                  value={diabetic} 
                  onChange={(e) => setDiabetic(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  <option value="no">{lang === 'bn' ? 'না (No Diabetes)' : 'No'}</option>
                  <option value="yes">{lang === 'bn' ? 'হ্যাঁ (Diabetic Patient)' : 'Yes'}</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'রক্তচাপের অবস্থা (Blood Pressure):' : 'BP Status:'}
                </label>
                <select 
                  value={bpKnown} 
                  onChange={(e) => setBpKnown(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  <option value="normal">{lang === 'bn' ? 'স্বাভাবিক (Normal <120/80)' : 'Normal (<120/80)'}</option>
                  <option value="elevated">{lang === 'bn' ? 'কিছুটা বেশি (120-139)' : 'Elevated (120-139)'}</option>
                  <option value="high">{lang === 'bn' ? 'উচ্চ রক্তচাপ (High 140+)' : 'High (>140)'}</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'বুকে চাপ বা ব্যথা (Chest Discomfort):' : 'Chest Discomfort:'}
                </label>
                <select 
                  value={chestPain} 
                  onChange={(e) => setChestPain(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  <option value="none">{lang === 'bn' ? 'কোনো সমস্যা নেই (None)' : 'None'}</option>
                  <option value="occasional">{lang === 'bn' ? 'কখনো কখনো ভারী ভাব (Occasional)' : 'Occasional heaviness'}</option>
                  <option value="frequent">{lang === 'bn' ? 'ঘন ঘন বা পরিশ্রমকালে ব্যথা (Frequent)' : 'Frequent / On exertion'}</option>
                </select>
              </div>

            </div>

            <button
              onClick={handleCalculateHeartRisk}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <HeartPulse className="w-4 h-4 text-white" />
              <span>{lang === 'bn' ? 'হার্ট রিস্ক হিসাব করুন' : 'Calculate Heart Risk'}</span>
            </button>

            {/* Heart Risk Result */}
            {heartRiskResult && (
              <div className={`p-4 rounded-2xl border ${heartRiskResult.color} space-y-2 animate-fadeIn`}>
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm">
                    {lang === 'bn' ? heartRiskResult.levelBn : heartRiskResult.level}
                  </span>
                  <span className="text-xs font-mono font-bold">
                    Risk Score: {heartRiskResult.score}/15
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-700">
                  {lang === 'bn' ? heartRiskResult.adviceBn : heartRiskResult.advice}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600 font-semibold">
                    নেক্সাস ক্যাথ ল্যাব • CAG মাত্র ২০,০০০/- প্যাকেজ
                  </span>
                  <button
                    onClick={onBookAppointment}
                    className="px-3 py-1.5 rounded-lg bg-[#0f2942] hover:bg-[#1a3b5c] text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    {lang === 'bn' ? 'কার্ডিওলজিস্টের সিরিয়াল নিন' : 'Book Cardiologist'}
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* 2. Blood Pressure Category Analyzer */}
        {activeCalc === 'bp' && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl animate-fadeIn space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-nexus-100 text-nexus-700 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {lang === 'bn' ? 'রক্তচাপ (BP) ক্যাটাগরি অ্যানালাইজার' : 'Blood Pressure Classification'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'সিস্টোলিক ও ডায়াস্টোলিক মান বসিয়ে হাইপারটেনশন স্টেজ জানুন' : 'Input systolic & diastolic readings (mmHg)'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'সিস্টোলিক (উপরের সংখ্যা):' : 'Systolic (Top):'} {systolic} mmHg
                </label>
                <input 
                  type="number" 
                  value={systolic} 
                  onChange={(e) => setSystolic(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-mono font-bold text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ডায়াস্টোলিক (নিচের সংখ্যা):' : 'Diastolic (Bottom):'} {diastolic} mmHg
                </label>
                <input 
                  type="number" 
                  value={diastolic} 
                  onChange={(e) => setDiastolic(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-mono font-bold text-sm"
                />
              </div>
            </div>

            <button
              onClick={handleCalculateBp}
              className="w-full py-3 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'রক্তচাপ স্টেজ নির্ণয় করুন' : 'Evaluate Blood Pressure'}</span>
            </button>

            {bpResult && (
              <div className={`p-4 rounded-2xl border ${bpResult.color} space-y-1 animate-fadeIn`}>
                <div className="font-black text-sm">
                  {lang === 'bn' ? bpResult.catBn : bpResult.cat}
                </div>
                <div className="text-xs text-slate-600 font-mono">
                  {bpResult.sys}/{bpResult.dia} mmHg
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. BMI Calculator */}
        {activeCalc === 'bmi' && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl animate-fadeIn space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {lang === 'bn' ? 'বডি মাস ইনডেক্স (BMI) ক্যালকুলেটর' : 'Body Mass Index (BMI) Calculator'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'উচ্চতা ও ওজনের অনুপাত যাচাই করে সুস্বাস্থ্য নিশ্চিত করুন' : 'Calculate your healthy body weight ratio'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ওজন (কেজি):' : 'Weight (kg):'}
                </label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'উচ্চতা (ফুট):' : 'Height (Feet):'}
                </label>
                <input 
                  type="number" 
                  value={heightFeet} 
                  onChange={(e) => setHeightFeet(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'উচ্চতা (ইঞ্চি):' : 'Height (Inches):'}
                </label>
                <input 
                  type="number" 
                  value={heightInches} 
                  onChange={(e) => setHeightInches(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-bold"
                />
              </div>
            </div>

            <button
              onClick={handleCalculateBmi}
              className="w-full py-3 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'বিএমআই হিসাব করুন' : 'Calculate BMI'}</span>
            </button>

            {bmiResult && (
              <div className={`p-4 rounded-2xl border ${bmiResult.color} space-y-1 animate-fadeIn`}>
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm">
                    {lang === 'bn' ? bmiResult.categoryBn : bmiResult.category}
                  </span>
                  <span className="text-xl font-black font-mono">
                    BMI: {bmiResult.bmi}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. Pregnancy Due Date */}
        {activeCalc === 'edd' && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl animate-fadeIn space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
                <Baby className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {lang === 'bn' ? 'গর্ভকালীন সম্ভাব্য প্রসব তারিখ (EDD) ক্যালকুলেটর' : 'Estimated Delivery Date (EDD)'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'সর্বশেষ মাসিকের প্রথম দিন (LMP) নির্ধারণ করুন' : 'Based on Last Menstrual Period'}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'bn' ? 'সর্বশেষ মাসিকের তারিখ (LMP Date):' : 'LMP Date:'}
              </label>
              <input 
                type="date" 
                value={lmpDate}
                onChange={(e) => setLmpDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 font-medium text-xs sm:text-sm"
              />
            </div>

            <button
              onClick={handleCalculateEdd}
              className="w-full py-3 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Baby className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'সম্ভাব্য তারিখ হিসাব করুন' : 'Calculate Due Date'}</span>
            </button>

            {eddResult && (
              <div className="p-4 rounded-2xl border border-pink-200 bg-pink-50 text-pink-900 space-y-1 animate-fadeIn">
                <div className="text-xs font-bold">
                  {lang === 'bn' ? 'সম্ভাব্য প্রসবের তারিখ (EDD):' : 'Estimated Delivery Date:'}
                </div>
                <div className="text-lg font-black text-pink-700 font-mono">
                  {eddResult.eddDate}
                </div>
                <p className="text-xs text-slate-600 pt-1">
                  নেক্সাস হসপিটালে রয়েছে আধুনিক এনআইসিইউ (NICU) ও অভিজ্ঞ গাইনী বিশেষজ্ঞদের তত্ত্বাবধানে ২৪ ঘণ্টা নিরাপদ নরমাল ও সিজার ডেলিভারি সুবিধা।
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
