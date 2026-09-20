import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Stethoscope, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Award, 
  ChevronRight, 
  UserCheck, 
  Filter, 
  Sparkles,
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Download,
  ShieldCheck
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

export default function DoctorsSection({ lang, t, onBookDoctor }) {
  const [selectedDept, setSelectedDept] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = [
    { id: "all", labelBn: "সকল বিভাগ", labelEn: "All Departments", count: doctorsData.length },
    { id: "cardiology", labelBn: "হৃদরোগ ও কার্ডিওলজি", labelEn: "Cardiology & Heart", count: doctorsData.filter(d => d.department === 'cardiology').length },
    { id: "neurology", labelBn: "স্নায়ুরোগ ও ব্রেন", labelEn: "Neuromedicine", count: doctorsData.filter(d => d.department === 'neurology').length },
    { id: "pediatrics", labelBn: "শিশু ও নবজাতক (NICU)", labelEn: "Pediatrics & NICU", count: doctorsData.filter(d => d.department === 'pediatrics').length },
    { id: "nephrology", labelBn: "কিডনি ও ডায়ালাইসিস", labelEn: "Nephrology & Dialysis", count: doctorsData.filter(d => d.department === 'nephrology').length },
    { id: "surgery", labelBn: "সার্জারি ও ল্যাপারোস্কোপিক", labelEn: "General & Lap Surgery", count: doctorsData.filter(d => d.department === 'surgery').length },
    { id: "orthopedics", labelBn: "হাড়, জোড়া ও ট্রমা", labelEn: "Orthopedics & Spine", count: doctorsData.filter(d => d.department === 'orthopedics').length },
    { id: "gynecology", labelBn: "গাইনী ও প্রসূতি", labelEn: "Gynecology & Obs", count: doctorsData.filter(d => d.department === 'gynecology').length },
    { id: "medicine", labelBn: "মেডিসিন ও হরমোন", labelEn: "Medicine & Diabetes", count: doctorsData.filter(d => d.department === 'medicine').length },
    { id: "dermatology", labelBn: "চর্ম ও যৌন রোগ", labelEn: "Dermatology & Laser", count: doctorsData.filter(d => d.department === 'dermatology').length },
    { id: "ent", labelBn: "নাক, কান ও গলা", labelEn: "ENT & Head Neck", count: doctorsData.filter(d => d.department === 'ent').length },
    { id: "urology", labelBn: "ইউরোলজি", labelEn: "Urology", count: doctorsData.filter(d => d.department === 'urology').length },
    { id: "ophthalmology", labelBn: "চক্ষু রোগ", labelEn: "Ophthalmology (Eye)", count: doctorsData.filter(d => d.department === 'ophthalmology').length },
    { id: "dental", labelBn: "দন্ত ও মুখ রোগ", labelEn: "Dental & Oral", count: doctorsData.filter(d => d.department === 'dental').length }
  ];

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doc => {
      const matchDept = selectedDept === "all" || doc.department === selectedDept;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchDept;

      const matchName = doc.name.toLowerCase().includes(q) || doc.nameBn.toLowerCase().includes(q);
      const matchSpecialty = doc.specialty.toLowerCase().includes(q) || doc.specialtyBn.toLowerCase().includes(q);
      const matchDegrees = doc.degrees.toLowerCase().includes(q) || doc.degreesBn.toLowerCase().includes(q);
      const matchDeptName = doc.department.toLowerCase().includes(q);

      return matchDept && (matchName || matchSpecialty || matchDegrees || matchDeptName);
    });
  }, [selectedDept, searchQuery]);

  return (
    <section id="doctors" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <UserCheck className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? '৩৮+ শীর্ষ কনসালট্যান্ট ও সার্জন' : '38+ Distinguished Consultants'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {t.doctorsHeading}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {t.doctorsSubheading}
          </p>

          {/* Download Official Schedule PDF Banner */}
          <div className="pt-2">
            <a
              href="https://nexushospitalmymensingh.com/wp-content/uploads/2025/05/Nexus-doctors-schedule.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold shadow-xs hover:shadow transition-all group"
            >
              <Download className="w-4 h-4 text-nexus-600 group-hover:scale-110 transition-transform" />
              <span>{lang === 'bn' ? 'নেক্সাস ডাক্তার শিডিউল সম্পূর্ণ তালিকা (PDF)' : 'Download Complete Doctor Schedule (PDF)'}</span>
            </a>
          </div>

        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-8">
          
          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchDoctorPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-nexus-600 focus:ring-4 focus:ring-nexus-100 shadow-sm transition-all"
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

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedDept === dept.id
                    ? 'bg-nexus-700 text-white shadow-md shadow-nexus-700/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{lang === 'bn' ? dept.labelBn : dept.labelEn}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedDept === dept.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Doctor Count Status */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>
            {lang === 'bn' ? `মোট ${filteredDoctors.length} জন বিশেষজ্ঞ চিকিৎসক প্রদর্শিত` : `Showing ${filteredDoctors.length} specialist doctors`}
          </span>
          {searchQuery && (
            <span>
              {lang === 'bn' ? `অনুসন্ধান: "${searchQuery}"` : `Search: "${searchQuery}"`}
            </span>
          )}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-nexus-400 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top color strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                doc.department === 'cardiology' ? 'bg-cardiac-500' : 'bg-nexus-600'
              }`} />

              <div className="space-y-3.5">
                
                {/* Doctor Avatar & Department Header */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={doc.image} 
                      alt={doc.name}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-slate-100 shadow-xs group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
                      }}
                    />
                    {doc.department === 'cardiology' && (
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cardiac-600 text-white flex items-center justify-center text-[10px] shadow">
                        ❤️
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-1 ${
                      doc.department === 'cardiology'
                        ? 'bg-cardiac-50 text-cardiac-700 border border-cardiac-200'
                        : 'bg-nexus-50 text-nexus-800 border border-nexus-200'
                    }`}>
                      {lang === 'bn' ? doc.specialtyBn.split(' ')[0] : doc.department}
                    </span>

                    <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-nexus-700 transition-colors">
                      {lang === 'bn' ? doc.nameBn : doc.name}
                    </h3>

                    <p className="text-xs font-bold text-nexus-700 line-clamp-1 mt-0.5">
                      {lang === 'bn' ? doc.specialtyBn : doc.specialty}
                    </p>
                  </div>
                </div>

                {/* Degrees & Qualifications */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <div className="font-semibold text-slate-800 line-clamp-2">
                    {lang === 'bn' ? doc.degreesBn : doc.degrees}
                  </div>
                  <div className="text-[11px] text-slate-600 line-clamp-1 font-medium">
                    {lang === 'bn' ? doc.designationBn : doc.designation}
                  </div>
                </div>

                {/* Chamber Room & Visiting Schedule */}
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <MapPin className="w-3.5 h-3.5 text-nexus-700 flex-shrink-0" />
                    <span>{lang === 'bn' ? doc.roomBn : doc.room}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                    <span>{lang === 'bn' ? doc.visitingHoursBn : doc.visitingHours}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Book Serial & Hotline Call */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onBookDoctor(doc.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-nexus-700 to-nexus-800 hover:from-nexus-800 hover:to-nexus-900 text-white font-extrabold text-xs shadow-md shadow-nexus-700/20 active:scale-95 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'সিরিয়াল বুকিং' : 'Book Serial'}</span>
                </button>

                <a
                  href="tel:09611678922"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title="Call Serial Hotline"
                >
                  <Phone className="w-4 h-4 text-nexus-700" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* If no doctors found */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <UserCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">
              {lang === 'bn' ? 'কোনো ডাক্তার পাওয়া যায়নি' : 'No doctors found'}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'bn' ? 'অন্য কোনো নাম বা বিভাগ দিয়ে অনুসন্ধান করুন' : 'Try searching with another keyword or department'}
            </p>
            <button
              onClick={() => { setSelectedDept('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-nexus-600 text-white text-xs font-bold"
            >
              {lang === 'bn' ? 'সকল ডাক্তার প্রদর্শন করুন' : 'Reset Filter'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
