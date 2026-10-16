import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Stethoscope, 
  X, 
  PhoneCall, 
  CreditCard, 
  BadgePercent, 
  Lock,
  ChevronRight,
  Clock,
  Printer,
  FileCheck
} from 'lucide-react';

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Doctor Starter',
    nameBn: 'ডক্টর স্টার্টার',
    tagline: 'ব্যক্তিগত চেম্বার ও নতুন প্র্যাকটিশনারদের জন্য',
    popular: false,
    priceMonthly: 799,
    priceYearly: 7990,
    features: [
      '১ জন ডাক্তারের জন্য আনলিমিটেড প্রেসক্রিপশন',
      'সম্পূর্ণ বাংলাদেশ ড্রাগ ও জেনেরিক ডেটাবেজ',
      'প্রফেশনাল ডিজিটাল প্রেসক্রিপশন প্রিন্ট (A4 & Pad)',
      'কমন চিফ কমপ্লেইন্টস ও ডায়াগনসিস টেমপ্লেট',
      'পেশেন্ট হিস্ট্রি ও আগের প্রেসক্রিপশন সার্চ',
      'অফলাইন ফার্স্ট মোড (নেট ছাড়াও কাজ করবে)',
      'WhatsApp ও ফোন সাপোর্ট'
    ]
  },
  {
    id: 'pro',
    name: 'Doctor Pro',
    nameBn: 'ডক্টর প্রো (জনপ্রিয়)',
    tagline: 'ব্যস্ত কনসালট্যান্ট ও মাল্টি-চেম্বার স্পেশালিস্টদের জন্য',
    popular: true,
    priceMonthly: 1499,
    priceYearly: 13990,
    badge: 'সবচেয়ে জনপ্রিয়',
    features: [
      'স্টার্টার প্ল্যানের সকল ফিচার অন্তর্ভুক্ত',
      'মাল্টিপল চেম্বার ও প্যাড ডিজাইন কাস্টমাইজেশন',
      'রোগীর মোবাইলে প্রেসক্রিপশন SMS ও ডিজিটাল লিংক পাঠানো',
      'অ্যাসিস্ট্যান্ট / কম্পাউন্ডার অ্যাকাউন্ট (সিরিয়াল ও ভাইটালস এন্ট্রি)',
      'ড্রাগ ইন্টারেকশন ও অ্যালার্জি ওয়ার্নিং অ্যালার্ট',
      'ক্লাউড অটো-ব্যাকআপ (কোনো ডেটা কখনোই হারাবে না)',
      'ডিজিটাল সিগনেচার ও কিউআর কোড ভেরিফিকেশন',
      '২৪/৭ ডেডিকেটেড প্রায়োরিটি সাপোর্ট'
    ]
  },
  {
    id: 'hospital',
    name: 'Hospital / OPD Suite',
    nameBn: 'হাসপাতাল / পলিক্লিনিক',
    tagline: 'ডায়াগনস্টিক সেন্টার, পলিক্লিনিক ও হাসপাতালের বহির্বিভাগের জন্য',
    popular: false,
    priceMonthly: 4999,
    priceYearly: 47990,
    badge: 'কর্পোরেট',
    features: [
      '১০ জন ডাক্তারের লাইসেন্স ও সেন্ট্রাল ড্যাশবোর্ড',
      'রিসেপশন সেন্ট্রাল সিরিয়াল ও টোকেন ম্যানেজমেন্ট',
      'ফার্মেসি ও ল্যাবরেটরি বিলিং সফটওয়্যারের সাথে সিঙ্ক',
      'ক্লিনিক ব্র্যান্ডেড লোগো, ওয়াটারমার্ক ও হেডার-ফুটার',
      'অ্যাডভান্সড অ্যানালিটিক্স ও ডেইলি পেশেন্ট ভলিউম রিপোর্ট',
      'অন-সাইট স্টাফ ট্রেনিং ও ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার'
    ]
  }
];

export default function SaaSPricingModal({ isOpen, onClose, lang = 'bn', onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [checkoutStep, setCheckoutStep] = useState('plans'); // 'plans' | 'payment' | 'success'
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [doctorPhone, setDoctorPhone] = useState('');
  const [generatedLicense, setGeneratedLicense] = useState('');

  if (!isOpen) return null;

  const currentPlanObj = pricingPlans.find(p => p.id === selectedPlan) || pricingPlans[1];
  const payableAmount = billingCycle === 'yearly' ? currentPlanObj.priceYearly : currentPlanObj.priceMonthly;

  const handleProceedToPayment = (planId) => {
    setSelectedPlan(planId);
    setCheckoutStep('payment');
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    if (!doctorPhone || doctorPhone.length < 11) {
      alert('অনুগ্রহ করে সঠিক মোবাইল নম্বর প্রদান করুন');
      return;
    }
    const fakeKey = `NEXUS-RX-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    setGeneratedLicense(fakeKey);
    localStorage.setItem('nexus_rx_license', fakeKey);
    localStorage.setItem('nexus_rx_plan', selectedPlan);
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-nexus-800 via-nexus-900 to-slate-950 text-white p-6 sm:p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SaaS সাবস্ক্রিপশন ও কমার্শিয়াল লাইসেন্সিং</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            ডাক্তার ও হাসপাতালদের জন্য সাবস্ক্রিপশন প্ল্যান
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            মাসে মাত্র কয়েক শত টাকায় ডাক্তাররা ডিজিটালাইজ করতে পারবেন তাদের চেম্বার। মাত্র ১ মিনিটে সম্পূর্ণ প্রেসক্রিপশন প্রিন্ট ও পেশেন্ট হিস্ট্রি ম্যানেজ করুন।
          </p>

          {/* Billing Cycle Toggle */}
          {checkoutStep === 'plans' && (
            <div className="mt-6 inline-flex items-center p-1 bg-slate-900/80 rounded-full border border-slate-700">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${
                  billingCycle === 'monthly' ? 'bg-[#0f2942] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                মাসিক সাবস্ক্রিপশন
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  billingCycle === 'yearly' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>বাৎসরিক (২ মাস ফ্রি)</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-400 text-slate-950 font-black">২০% ছাড়</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 bg-slate-50">
          
          {/* STEP 1: PLANS OVERVIEW */}
          {checkoutStep === 'plans' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan) => {
                  const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
                  const isCurrent = plan.id === selectedPlan;

                  return (
                    <div 
                      key={plan.id}
                      className={`relative flex flex-col justify-between rounded-2xl p-6 bg-white transition-all border-2 ${
                        plan.popular 
                          ? 'border-nexus-600 shadow-xl shadow-nexus-600/10 ring-2 ring-nexus-500/30' 
                          : 'border-slate-200 hover:border-slate-300 shadow-md'
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-nexus-600 to-emerald-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                          {plan.badge}
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-black text-slate-900">{plan.nameBn}</h3>
                          {plan.id === 'hospital' ? <Building2 className="w-5 h-5 text-purple-600" /> : <Stethoscope className="w-5 h-5 text-nexus-600" />}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.tagline}</p>

                        <div className="mt-4 mb-6">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900">৳{price.toLocaleString()}</span>
                            <span className="text-xs font-semibold text-slate-500">
                              /{billingCycle === 'yearly' ? 'বছর' : 'মাস'}
                            </span>
                          </div>
                          {billingCycle === 'yearly' && (
                            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                              মাসিক হিসেবে মাত্র ৳{Math.round(price / 12)}/মাস
                            </p>
                          )}
                        </div>

                        <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                          {plan.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-4">
                        <button
                          type="button"
                          onClick={() => handleProceedToPayment(plan.id)}
                          className={`w-full py-2.5 px-4 rounded-xl text-xs font-black transition-all shadow-md flex items-center justify-center gap-1.5 ${
                            plan.popular
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                              : 'bg-[#0f2942] hover:bg-[#1a3b5c] text-white'
                          }`}
                        >
                          <span>এই প্ল্যানটি শুরু করুন</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Doctor Value Proposition / Trust Banner */}
              <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">১৪ দিনের সম্পূর্ণ ঝুঁকিমুক্ত ট্রায়াল</h4>
                    <p className="text-xs text-slate-600">পছন্দ না হলে কোনো প্রশ্ন ছাড়াই পুরো টাকা রিফান্ড পাবেন। কোনো হিডেন চার্জ নেই।</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/8801712421714" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>সেলস টিমের সাথে কথা বলুন</span>
                </a>
              </div>
            </div>
          )}

          {/* STEP 2: CHECKOUT & PAYMENT */}
          {checkoutStep === 'payment' && (
            <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              <button 
                onClick={() => setCheckoutStep('plans')}
                className="text-xs text-nexus-600 font-bold hover:underline mb-4 inline-flex items-center gap-1"
              >
                ← প্যাকেজ পরিবর্তনে ফিরে যান
              </button>

              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-xs text-slate-500 font-medium">নির্বাচিত প্যাকেজ:</span>
                  <h3 className="text-lg font-black text-slate-900">{currentPlanObj.nameBn} ({billingCycle === 'yearly' ? 'বাৎসরিক' : 'মাসিক'})</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-medium">মোট প্রদেয়:</span>
                  <div className="text-xl font-black text-emerald-700">৳{payableAmount.toLocaleString()}</div>
                </div>
              </div>

              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ডাক্তার / প্রতিষ্ঠানের মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    value={doctorPhone}
                    onChange={(e) => setDoctorPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-nexus-500 focus:outline-none"
                  />
                  <span className="text-[11px] text-slate-500">এই নম্বরে লাইসেন্স কি ও লগইন ওটিপি পাঠানো হবে।</span>
                </div>

                {/* Payment Gateway Options */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    পেমেন্ট মেথড সিলেক্ট করুন
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bkash')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        paymentMethod === 'bkash' ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-500/30' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <span className="block text-xs font-black text-pink-700">bKash</span>
                      <span className="text-[10px] text-slate-500">বিকাশ পেমেন্ট</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('nagad')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        paymentMethod === 'nagad' ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-500/30' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <span className="block text-xs font-black text-amber-700">Nagad</span>
                      <span className="text-[10px] text-slate-500">নগদ পেমেন্ট</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        paymentMethod === 'card' ? 'border-nexus-500 bg-nexus-50 ring-2 ring-nexus-500/30' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <span className="block text-xs font-black text-nexus-700">Card / Net</span>
                      <span className="text-[10px] text-slate-500">কার্ড বা ব্যাংক</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>SSL 256-bit এনক্রিপ্টেড পেমেন্ট গেটওয়ে</span>
                  </div>
                  <p className="text-[11px]">পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই আপনার লাইসেন্স কি জেনারেট হয়ে সফটওয়্যার আনলক হয়ে যাবে।</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-nexus-700 to-emerald-700 hover:from-nexus-800 hover:to-emerald-800 text-white font-bold text-sm shadow-lg transition-all"
                >
                  ৳{payableAmount.toLocaleString()} পে করুন ও সফটওয়্যার আনলক করুন
                </button>
              </form>
            </div>
          )}

          {/* STEP 3: SUCCESS & ACTIVATION KEY */}
          {checkoutStep === 'success' && (
            <div className="max-w-md mx-auto text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">অভিনন্দন! সাবস্ক্রিপশন সফল হয়েছে</h3>
              <p className="text-xs text-slate-600 mt-1">
                আপনার প্রেসক্রিপশন সফটওয়্যারের কমার্শিয়াল লাইসেন্স অ্যাক্টিভ করা হয়েছে।
              </p>

              <div className="my-6 p-4 rounded-2xl bg-slate-900 text-white font-mono">
                <span className="text-xs text-slate-400 block mb-1">অ্যাক্টিভেশন লাইসেন্স কি:</span>
                <span className="text-lg font-bold tracking-widest text-emerald-400 select-all">{generatedLicense}</span>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white text-xs font-black shadow-md transition-all"
                >
                  প্রেসক্রিপশন লেখা শুরু করুন
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
