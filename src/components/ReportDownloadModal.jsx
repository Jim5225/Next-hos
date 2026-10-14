import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Search, 
  Download, 
  Printer, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  FileCheck2,
  HeartPulse,
  Lock,
  User,
  Phone,
  RefreshCw,
  BellRing
} from 'lucide-react';
import { sampleReports } from '../data/reportsData';

export default function ReportDownloadModal({ isOpen, onClose, lang, t }) {
  const [uid, setUid] = useState("NEX-10021");
  const [phone, setPhone] = useState("01711234567");
  const [activeReport, setActiveReport] = useState(sampleReports[0]);
  const [searched, setSearched] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const cleanUid = uid.trim().toUpperCase();
    const cleanPhone = phone.trim();

    if (!cleanUid || !cleanPhone) {
      setErrorMessage(lang === 'bn' 
        ? "অনুগ্রহ করে ইউআইডি (UID) এবং মোবাইল নম্বর উভয়ই প্রদান করুন।" 
        : "Please enter both your Billing UID and Mobile Number.");
      setActiveReport(null);
      setSearched(true);
      return;
    }

    // Match billId and phone
    const found = sampleReports.find(r => 
      r.billId.toUpperCase() === cleanUid && 
      (r.phone === cleanPhone || cleanPhone === "01711234567") // fallback for demo ease
    );

    if (found) {
      setActiveReport(found);
      setErrorMessage("");
    } else {
      setActiveReport(null);
      setErrorMessage(lang === 'bn'
        ? "ইনভয়েস ইউআইডি (UID) অথবা পাসওয়ার্ড (মোবাইল নম্বর) মেলেনি। বিল স্লিপ দেখে পুনরায় চেষ্টা করুন।"
        : "Billing UID or Password (Phone) did not match. Please verify your receipt.");
    }
    setSearched(true);
  };

  const handleSelectDemo = (report) => {
    setUid(report.billId);
    setPhone(report.phone);
    setActiveReport(report);
    setErrorMessage("");
    setSearched(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-6 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                {lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট পোর্টাল' : 'Nexus Online Diagnostic Report Portal'}
              </h3>
              <p className="text-[11px] text-blue-200">
                {lang === 'bn' 
                  ? 'বিলিং ইউআইডি (UID) ও মোবাইল নম্বর পাসওয়ার্ড দিয়ে রিপোর্ট ডাউনলোড করুন' 
                  : 'Enter your Billing UID & Registered Phone Number to access reports'}
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

        {/* Login & Verification Box */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 no-print">
          <form onSubmit={handleSearch} className="space-y-3">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* 1. User ID (UID from Billing) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span>{lang === 'bn' ? 'ইউজার আইডি / বিলিং UID (স্লিপে দেখুন):' : 'User ID / Billing UID:'}</span>
                </label>
                <input 
                  type="text"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  placeholder="যেমন: NEX-10021"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-900 uppercase font-mono tracking-wider focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* 2. Password (Phone Number used during billing) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'bn' ? 'পাসওয়ার্ড (বিলিং মোবাইল নম্বর):' : 'Password (Billing Mobile):'}</span>
                </label>
                <input 
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="যেমন: 01711234567"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-900 font-mono tracking-wider focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>{lang === 'bn' ? 'রিপোর্ট ও স্ট্যাটাস যাচাই করুন' : 'Verify & View Report'}</span>
              </button>

              {/* Status Indicator Legend */}
              <div className="flex items-center gap-2 text-[11px] font-bold">
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" /> Ready
                </span>
                <span className="flex items-center gap-1 text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Processing
                </span>
                <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Pending
                </span>
              </div>
            </div>
          </form>

          {/* Quick Demo Pre-fill Pills */}
          <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[11px] font-semibold text-slate-500 mr-1">
              {lang === 'bn' ? 'টেস্ট করতে ক্লিক করুন:' : 'Quick Demo Tests:'}
            </span>
            <button
              type="button"
              onClick={() => handleSelectDemo(sampleReports[0])}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center gap-1"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>NEX-10021 (Ready)</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectDemo(sampleReports[1])}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-300 transition-colors flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
              <span>NEX-10022 (Processing)</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectDemo(sampleReports[2])}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition-colors flex items-center gap-1"
            >
              <Clock className="w-3 h-3 text-amber-600" />
              <span>NEX-10023 (Pending)</span>
            </button>
          </div>
        </div>

        {/* Report Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {activeReport ? (
            <div className="space-y-4" id="printable-report">
              
              {/* STATUS BAR: READY vs PROCESSING vs PENDING */}
              {activeReport.status === 'Ready' && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between no-print">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-emerald-950 flex items-center gap-1.5">
                        <span>{lang === 'bn' ? 'রিপোর্ট প্রস্তুত (Ready)' : 'Report Ready for Download'}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold">
                          অনুমোদিত
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-800">
                        {lang === 'bn' 
                          ? 'কনসালটেন্ট ডাক্তার কর্তৃক স্বাক্ষরিত ও ভেরিফাইড। নিচে সম্পূর্ণ রিপোর্ট দেখুন ও ডাউনলোড করুন।' 
                          : 'Signed and verified by consultant. You can print or download the PDF below.'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ডাউনলোড PDF</span>
                  </button>
                </div>
              )}

              {activeReport.status === 'Processing' && (
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-300 space-y-3 no-print">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                        <RefreshCw className="w-5 h-5 animate-spin" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-black text-blue-950 flex items-center gap-1.5">
                          <span>{lang === 'bn' ? 'ল্যাবে প্রসেসিং চলছে (Processing)' : 'Lab Analysis in Progress'}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold">
                            ৮০% সম্পন্ন
                          </span>
                        </div>
                        <p className="text-[11px] text-blue-800">
                          {activeReport.statusNote || (lang === 'bn' ? 'কনসালটেন্ট চিকিৎসকের চূড়ান্ত নিরীক্ষা চলছে।' : 'Consultant review in progress.')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs">
                      <span className="text-[10px] text-slate-500 font-semibold block">সম্ভাব্য ডেলিভারি</span>
                      <strong className="text-blue-900 font-bold">{activeReport.expectedDelivery || "আজ রাত ৮:০০ টা"}</strong>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-blue-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-600 h-2.5 rounded-full w-4/5 animate-pulse" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                    <BellRing className="w-3.5 h-3.5" />
                    <span>রিপোর্ট প্রস্তুত হওয়ামাত্র আপনার নম্বরে ({activeReport.phone}) কনফার্মেশন এসএমএস পাঠানো হবে।</span>
                  </div>
                </div>
              )}

              {activeReport.status === 'Pending' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-3 no-print">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-black text-amber-950 flex items-center gap-1.5">
                          <span>{lang === 'bn' ? 'নমুনা প্রক্রিয়াধীন (Pending)' : 'Sample in Queue'}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-600 text-white font-bold">
                            পেন্ডিং
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-800">
                          {activeReport.statusNote || (lang === 'bn' ? 'স্যাম্পল সংগ্রহ করা হয়েছে। ল্যাবরেটরি টেস্ট কিউ-তে রয়েছে।' : 'Sample received, waiting in queue.')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs">
                      <span className="text-[10px] text-slate-500 font-semibold block">সম্ভাব্য ডেলিভারি</span>
                      <strong className="text-amber-900 font-bold">{activeReport.expectedDelivery || "আগামীকাল দুপুর ১২:০০ টা"}</strong>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-amber-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-amber-500 h-2.5 rounded-full w-1/4" />
                  </div>
                </div>
              )}

              {/* Printable Official Medical Report Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                
                {/* Official Hospital Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <div className="text-base font-black text-blue-950">
                      নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      শেহড়া বড় বাড়ি, ঢাকা-ময়মনসিংহ রোড, ময়মনসিংহ • ফোন: ০৯৬১১৬৭৮৯২২
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${
                      activeReport.status === 'Ready' 
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                        : activeReport.status === 'Processing'
                        ? 'bg-blue-100 text-blue-800 border-blue-300'
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                    }`}>
                      ● {activeReport.statusBn || activeReport.status}
                    </span>
                    <div className="text-[10px] font-mono text-slate-500 font-bold mt-0.5">
                      UID: {activeReport.billId}
                    </div>
                  </div>
                </div>

                {/* Patient Information Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs bg-white p-3.5 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">রোগীর নাম</span>
                    <strong className="text-slate-800 font-bold">{activeReport.patientNameBn}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">বয়স / লিঙ্গ</span>
                    <strong className="text-slate-800 font-bold">{activeReport.age}, {activeReport.gender}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">টেস্টের তারিখ</span>
                    <strong className="text-slate-800 font-mono font-bold">{activeReport.date}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">বিভাগ</span>
                    <strong className="text-blue-900 font-bold">{activeReport.departmentBn}</strong>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-slate-500 font-semibold">রেফার্ড বাই: </span>
                  <strong className="text-slate-800">{activeReport.referredByBn}</strong>
                </div>

              </div>

              {/* Test Name Banner */}
              <div className="p-3.5 rounded-2xl bg-blue-950 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">পরীক্ষার নাম (Test Name)</span>
                  <h4 className="font-extrabold text-sm sm:text-base text-white">
                    {activeReport.testNameBn}
                  </h4>
                </div>
                <HeartPulse className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              </div>

              {/* Findings Table */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-600 uppercase text-[10px]">
                    <tr>
                      <th className="py-2.5 px-3">প্যারামিটার / ভেসেল</th>
                      <th className="py-2.5 px-3">ফলাফল (Result)</th>
                      <th className="py-2.5 px-3">স্ট্যাটাস</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeReport.findings.map((f, i) => (
                      <tr key={i} className="hover:bg-slate-50 font-medium">
                        <td className="py-2.5 px-3 font-semibold text-slate-800">{f.param}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-700">{f.result}</td>
                        <td className="py-2.5 px-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            f.status === 'Abnormal' 
                              ? 'bg-rose-100 text-rose-700' 
                              : f.status === 'Processing'
                              ? 'bg-blue-100 text-blue-700'
                              : f.status === 'Pending'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {f.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary / Clinical Impression */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div className="font-black text-slate-900 uppercase text-[11px]">
                  ক্লিনিক্যাল সামারি ও মতামত:
                </div>
                <p className="text-slate-700 leading-relaxed font-mono text-[11px]">
                  {activeReport.summary}
                </p>
                <div className="pt-2 text-[10px] text-slate-500 font-bold">
                  রিপোর্ট ভেরিফাইড বাই: {activeReport.consultantBn}
                </div>
              </div>

              {/* Print & Download Action Buttons */}
              <div className="flex gap-2 pt-2 no-print">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'রিপোর্ট প্রিন্ট করুন' : 'Print Report'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  disabled={activeReport.status !== 'Ready'}
                  className={`px-6 py-3 rounded-xl text-white font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
                    activeReport.status === 'Ready'
                      ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30 cursor-pointer'
                      : 'bg-slate-400 cursor-not-allowed opacity-70'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {activeReport.status === 'Ready' 
                      ? (lang === 'bn' ? 'পিডিএফ ডাউনলোড' : 'Download PDF') 
                      : (lang === 'bn' ? 'রিপোর্ট প্রস্তুত হলে ডাউনলোড হবে' : 'Download Available When Ready')}
                  </span>
                </button>
              </div>

            </div>
          ) : (
            <div className="text-center py-10 space-y-2">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">
                {lang === 'bn' ? 'রিপোর্ট তথ্য পাওয়া যায়নি' : 'No Report Found'}
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {errorMessage || (lang === 'bn' 
                  ? 'অনুগ্রহ করে সঠিক ইনভয়েস ইউআইডি (যেমন: NEX-10021) এবং বিলিং করার সময় দেওয়া মোবাইল নম্বরটি দিয়ে পুনরায় চেষ্টা করুন।' 
                  : 'Please enter a valid Billing UID and the mobile phone number provided during billing.')}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
