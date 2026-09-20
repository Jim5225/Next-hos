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
  HeartPulse
} from 'lucide-react';
import { sampleReports } from '../data/reportsData';

export default function ReportDownloadModal({ isOpen, onClose, lang, t }) {
  const [searchTerm, setSearchTerm] = useState("NEX-10021");
  const [activeReport, setActiveReport] = useState(sampleReports[0]);
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    const found = sampleReports.find(r => 
      r.billId.toLowerCase() === term || 
      r.phone === term || 
      r.patientName.toLowerCase().includes(term)
    );

    if (found) {
      setActiveReport(found);
    } else {
      setActiveReport(null);
    }
    setSearched(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-nexus-900 via-slate-900 to-nexus-950 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-nexus-600/30 border border-nexus-400/40 flex items-center justify-center text-nexus-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black">
                {lang === 'bn' ? 'নেক্সাস অনলাইন টেস্ট রিপোর্ট পোর্টাল' : 'Nexus Online Diagnostic Report Portal'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {lang === 'bn' ? 'বিল / ইনভয়েস নম্বর অথবা ফোন নম্বর দিয়ে রিপোর্ট খুঁজুন' : 'Check & download verified laboratory & imaging reports'}
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

        {/* Search Bar (No Print) */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50 no-print">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'bn' ? "ইনভয়েস নং (যেমন: NEX-10021) বা মোবাইল নম্বর..." : "Invoice ID (e.g. NEX-10021) or phone number..."}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-nexus-600 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-nexus-700 hover:bg-nexus-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'খুঁজুন' : 'Search'}</span>
            </button>
          </form>

          {/* Quick Demo Links */}
          <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
            <span>ডেমো রিপোর্ট দেখতে ক্লিক করুন:</span>
            <button
              type="button"
              onClick={() => { setSearchTerm("NEX-10021"); setActiveReport(sampleReports[0]); }}
              className="underline font-mono font-bold text-nexus-700 hover:text-nexus-900"
            >
              NEX-10021 (Angiogram)
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => { setSearchTerm("NEX-10022"); setActiveReport(sampleReports[1]); }}
              className="underline font-mono font-bold text-nexus-700 hover:text-nexus-900"
            >
              NEX-10022 (CT Scan)
            </button>
          </div>
        </div>

        {/* Report Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          
          {activeReport ? (
            <div className="space-y-5" id="printable-report">
              
              {/* Report Header Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <div className="text-base font-black text-nexus-900">
                      নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      শেহড়া বড় বাড়ি, ঢাকা-ময়মনসিংহ রোড, ময়মনসিংহ • ফোন: ০৯৬১১৬৭৮৯২২
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                      ✓ {activeReport.status}
                    </span>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      Bill: {activeReport.billId}
                    </div>
                  </div>
                </div>

                {/* Patient Information Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">রোগীর নাম</span>
                    <strong className="text-slate-800 font-bold">{activeReport.patientNameBn}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">বয়স / লিঙ্গ</span>
                    <strong className="text-slate-800 font-bold">{activeReport.age}, {activeReport.gender}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">তারিখ</span>
                    <strong className="text-slate-800 font-mono font-bold">{activeReport.date}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">বিভাগ</span>
                    <strong className="text-nexus-800 font-bold">{activeReport.departmentBn}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs">
                  <span className="text-slate-500 font-semibold">রেফার্ড বাই: </span>
                  <strong className="text-slate-800">{activeReport.referredByBn}</strong>
                </div>

              </div>

              {/* Test Name Banner */}
              <div className="p-3.5 rounded-2xl bg-nexus-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold block">পরীক্ষার নাম</span>
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
                            f.status === 'Abnormal' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
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

              {/* Print & Download Buttons */}
              <div className="flex gap-2 pt-2 no-print">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'রিপোর্ট প্রিন্ট করুন' : 'Print Report'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-5 py-3 rounded-xl bg-nexus-700 hover:bg-nexus-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'পিডিএফ ডাউনলোড' : 'Download PDF'}</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="text-center py-12 space-y-2">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">
                {lang === 'bn' ? 'রিপোর্ট পাওয়া যায়নি' : 'No Report Found'}
              </h4>
              <p className="text-xs text-slate-500">
                {lang === 'bn' 
                  ? 'অনুগ্রহ করে সঠিক ইনভয়েস নম্বর (যেমন: NEX-10021) অথবা রোগীকে দেওয়া মোবাইল নম্বর দিয়ে পুনরায় চেষ্টা করুন।' 
                  : 'Please check your Invoice ID or contact the hospital reception at 09611678922.'}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
