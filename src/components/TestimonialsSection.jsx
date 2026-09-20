import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, HeartPulse, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection({ lang, t }) {
  const reviews = [
    {
      name: lang === 'bn' ? 'আলহাজ্ব মোকাররম হোসেন' : 'Alhaj Mokarram Hossain',
      location: lang === 'bn' ? 'নকলা, শেরপুর' : 'Nakla, Sherpur',
      type: lang === 'bn' ? 'ক্যাথ ল্যাব ও এনজিওগ্রাম রোগী' : 'Cath Lab & CAG Patient',
      rating: 5,
      comment: lang === 'bn' 
        ? 'হৃদরোগে আক্রান্ত হওয়ার পর নেক্সাস কার্ডিয়াক হাসপাতালে আসি। মাত্র ২০,০০০/- টাকায় সম্পূর্ণ এনজিওগ্রাম (CAG) ও পরবর্তীতে রিং পরানো হয়। সবচেয়ে বড় শান্তি ছিল কোনো প্রকার দালালের ঝামেলা নেই, শতভাগ স্বচ্ছ ও সাশ্রয়ী চিকিৎসাসেবা পেয়েছি।' 
        : 'After suffering heart distress, I was admitted to Nexus. The entire CAG Angiogram package cost only 20,000 BDT. The fact that it is 100% broker-free gave my family complete peace of mind.'
    },
    {
      name: lang === 'bn' ? 'মোঃ রফিকুল ইসলাম' : 'Md. Rafiqul Islam',
      location: lang === 'bn' ? 'মুক্তাগাছা, ময়মনসিংহ' : 'Muktagacha, Mymensingh',
      type: lang === 'bn' ? 'সিসিইউ ও জরুরি কার্ডিয়াক কেয়ার' : '24/7 CCU Critical Care',
      rating: 5,
      comment: lang === 'bn' 
        ? 'মাঝরাতে বাবার হঠাৎ তীব্র বুকে ব্যথা ও শ্বাসকষ্ট শুরু হলে নেক্সাসের হটলাইনে কল দিয়ে দ্রুত নিয়ে আসি। তাদের ২৪ ঘণ্টা সিসিইউ সেবা ও অভিজ্ঞ ডাক্তারদের তাৎক্ষণিক চিকিৎসায় বাবা নতুন জীবন পেয়েছেন।' 
        : 'My father had sudden midnight chest pain. Nexus hotline coordinated immediately and their 24/7 CCU team stabilized him with extraordinary care and professionalism.'
    },
    {
      name: lang === 'bn' ? 'মোছাঃ ফাতেমা আক্তার' : 'Mosammat Fatema Akhter',
      location: lang === 'bn' ? 'নেত্রকোণা সদর' : 'Netrokona Sadar',
      type: lang === 'bn' ? 'এনআইসিইউ (NICU) নবজাতক সেবা' : 'NICU Preterm Baby Care',
      rating: 5,
      comment: lang === 'bn' 
        ? 'আমার সন্তান নির্ধারিত সময়ের আগে কম ওজনে ভূমিষ্ঠ হয়েছিল। নেক্সাস হাসপাতালের আধুনিক এনআইসিইউ ইনকিউবেটর ও শিশু বিশেষজ্ঞ ডাক্তারদের সার্বক্ষণিক মমতাময়ী সেবায় বাচ্চা আজ পুরোপুরি সুস্থ।' 
        : 'Our baby was born premature and underweight. The modern NICU incubators and round-the-clock pediatric care at Nexus Hospital nursed our child back to full health.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-cardiac-600" />
            <span>{lang === 'bn' ? 'রোগীদের বাস্তব অভিজ্ঞতা' : 'Patient Stories & Trust'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.testimonialsHeading}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            {t.testimonialsSubheading}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4 relative group hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-nexus-50 text-nexus-800 border border-nexus-200">
                    {rev.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-xs text-slate-900">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-nexus-600" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
