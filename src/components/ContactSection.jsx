import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  AlertCircle,
  Truck,
  Building,
  HeartPulse,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection({ lang, t }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'Cardiology',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', department: 'Cardiology', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? 'অবস্থান ও যোগাযোগ' : 'Location & Contacts'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {t.contactHeading}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            {t.contactSubheading}
          </p>
        </div>

        {/* 2-Column Contact Info + Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Addresses */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-nexus-100 text-nexus-700 flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    {t.contactAddressTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn' ? 'ময়মনসিংহ মেডিকেল কলেজ সংলগ্ন' : 'Adjacent to MMCH'}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold pl-1">
                {t.address}
              </p>
            </div>

            {/* Central Hotline & Serial Phones */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cardiac-100 text-cardiac-600 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    {t.contactPhonesTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn' ? 'সিরিয়াল ও তথ্যের জন্য কল করুন' : 'For Appointments & Queries'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <a 
                  href="tel:09611678922"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs hover:border-nexus-400 transition-colors font-mono font-bold text-slate-900"
                >
                  <span className="text-slate-600 font-sans font-semibold">
                    {lang === 'bn' ? 'সেন্ট্রাল হটলাইন:' : 'Central Hotline:'}
                  </span>
                  <span className="text-cardiac-600 text-sm">০৯৬১১৬৭৮৯২২</span>
                </a>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold text-slate-800">
                  <a 
                    href="tel:01796586561"
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-nexus-400 text-center transition-colors"
                  >
                    ০১৭৯৬-৫৮৬৫৬১
                  </a>
                  <a 
                    href="tel:01796586562"
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-nexus-400 text-center transition-colors"
                  >
                    ০১৭৯৬-৫৮৬৫৬২
                  </a>
                  <a 
                    href="tel:01708884888"
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-nexus-400 text-center transition-colors"
                  >
                    ০১৭০৮-৮৮৪৮৮৮
                  </a>
                  <a 
                    href="tel:01322859970"
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-nexus-400 text-center transition-colors"
                  >
                    ০১৩২২-৮৫৯৯৭০
                  </a>
                </div>
              </div>
            </div>

            {/* 24/7 Dedicated Ambulance & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:01712421714"
                className="p-4 rounded-2xl bg-cardiac-50 border border-cardiac-200 hover:bg-cardiac-100 transition-colors block group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-cardiac-600 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-extrabold text-cardiac-800">
                    {lang === 'bn' ? '২৪ ঘণ্টা এম্বুলেন্স' : '24/7 Ambulance'}
                  </span>
                </div>
                <div className="text-sm font-black text-cardiac-700 font-mono">
                  ০১৭১২-৪২১৭১৪
                </div>
              </a>

              <a
                href="mailto:nexushospitals@gmail.com"
                className="p-4 rounded-2xl bg-nexus-50 border border-nexus-200 hover:bg-nexus-100 transition-colors block group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-nexus-700 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-extrabold text-nexus-900">
                    {lang === 'bn' ? 'ইমেইল যোগাযোগ' : 'Official Email'}
                  </span>
                </div>
                <div className="text-[11px] font-bold text-nexus-800 truncate">
                  nexushospitals@gmail.com
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Google Map Embed & Quick Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-64 sm:h-72 relative bg-slate-100">
              <iframe
                title="Nexus Hospital Mymensingh Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5786576856417!2d90.4124976!3d24.7413693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564fed5240212f%3A0xe962886f4a8cb253!2sNexus%20Hospital!5e0!3m2!1sen!2sbd!4v1716000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Online Inquiry Form */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    {lang === 'bn' ? 'অনলাইন বার্তা বা সিরিয়াল অনুসন্ধান' : 'Send an Inquiry / Message'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn' ? 'আমাদের প্রতিনিধি দ্রুত আপনার সাথে যোগাযোগ করবেন' : 'We will respond promptly'}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600">
                  ✓ Instant Support
                </span>
              </div>

              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    {lang === 'bn' ? 'আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে। ধন্যবাদ!' : 'Your message has been sent successfully. Thank you!'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'bn' ? "আপনার নাম *" : "Your Name *"}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-nexus-600"
                    />
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lang === 'bn' ? "মোবাইল নম্বর *" : "Mobile Number *"}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-nexus-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 font-semibold"
                    >
                      <option value="Cardiology">{lang === 'bn' ? 'কার্ডিওলজি ও ক্যাথ ল্যাব (CAG)' : 'Cardiology & Cath Lab'}</option>
                      <option value="CT Scan">{lang === 'bn' ? 'জার্মান সিমেন্স CT Scan (৩০% ছাড়)' : 'Siemens CT Scan (30% OFF)'}</option>
                      <option value="NICU">{lang === 'bn' ? 'এনআইসিইউ ও শিশু বিভাগ' : 'NICU & Child Care'}</option>
                      <option value="General">{lang === 'bn' ? 'সাধারণ চিকিৎসা ও ওটি' : 'General & Surgery'}</option>
                    </select>

                    <input 
                      type="text" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'bn' ? "আপনার জিজ্ঞাসা / মেসেজ" : "Your query / notes"}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-nexus-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'বার্তা পাঠান' : 'Submit Message'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
