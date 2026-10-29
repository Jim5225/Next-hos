import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Phone, 
  Calendar, 
  UserCheck, 
  HeartPulse, 
  Download,
  Building,
  Sparkles,
  Stethoscope,
  Baby,
  Activity,
  Eye,
  X,
  ChevronRight
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

export default function DoctorsSection({ lang, t, onBookDoctor }) {
  // By default, null so that 46 doctors are NOT dumped all at once
  const [selectedDept, setSelectedDept] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const departments = [
    { id: "cardiology", icon: "🫀", labelBn: "হৃদরোগ ও কার্ডিওলজি", labelEn: "Cardiology & Heart", count: doctorsData.filter(d => d.department === 'cardiology').length },
    { id: "medicine", icon: "🩺", labelBn: "মেডিসিন ও বাতজ্বর", labelEn: "Internal Medicine", count: doctorsData.filter(d => d.department === 'medicine').length },
    { id: "pediatrics", icon: "👶", labelBn: "শিশু ও নবজাতক (NICU)", labelEn: "Pediatrics & NICU", count: doctorsData.filter(d => d.department === 'pediatrics').length },
    { id: "surgery", icon: "🔪", labelBn: "সার্জারি ও ল্যাপারোস্কোপিক", labelEn: "General & Lap Surgery", count: doctorsData.filter(d => d.department === 'surgery').length },
    { id: "neurology", icon: "🧠", labelBn: "স্নায়ুরোগ ও ব্রেন", labelEn: "Neuromedicine", count: doctorsData.filter(d => d.department === 'neurology').length },
    { id: "orthopedics", icon: "🦴", labelBn: "হাড়, জোড়া ও বাতব্যথা", labelEn: "Orthopedics & Spine", count: doctorsData.filter(d => d.department === 'orthopedics').length },
    { id: "gynecology", icon: "🤰", labelBn: "গাইনী ও প্রসূতি", labelEn: "Gynecology & Obs", count: doctorsData.filter(d => d.department === 'gynecology').length },
    { id: "pulmonology", icon: "🫁", labelBn: "বক্ষব্যাধি ও অ্যাজমা", labelEn: "Chest & Asthma", count: doctorsData.filter(d => d.department === 'pulmonology').length },
    { id: "nephrology", icon: "🧪", labelBn: "কিডনি ও হাইপারটেনশন", labelEn: "Nephrology & Kidney", count: doctorsData.filter(d => d.department === 'nephrology').length },
    { id: "urology", icon: "🚻", labelBn: "ইউরোলজি", labelEn: "Urology", count: doctorsData.filter(d => d.department === 'urology').length },
    { id: "ophthalmology", icon: "👁️", labelBn: "চক্ষু রোগ ও ফ্যাকো", labelEn: "Ophthalmology (Eye)", count: doctorsData.filter(d => d.department === 'ophthalmology').length },
    { id: "ent", icon: "👂", labelBn: "নাক, কান ও গলা", labelEn: "ENT & Head Neck", count: doctorsData.filter(d => d.department === 'ent').length },
    { id: "dermatology", icon: "🧴", labelBn: "চর্ম, যৌন ও লেজার", labelEn: "Dermatology & Skin", count: doctorsData.filter(d => d.department === 'dermatology').length },
    { id: "endocrinology", icon: "🩸", labelBn: "ডায়াবেটিস ও হরমোন", labelEn: "Endocrinology", count: doctorsData.filter(d => d.department === 'endocrinology').length },
    { id: "dental", icon: "🦷", labelBn: "দন্ত ও মুখ রোগ", labelEn: "Dental & Oral", count: doctorsData.filter(d => d.department === 'dental').length },
    { id: "psychiatry", icon: "🧘", labelBn: "মনোরোগ", labelEn: "Psychiatry", count: doctorsData.filter(d => d.department === 'psychiatry').length },
    { id: "nutrition", icon: "🥗", labelBn: "পুষ্টি ও ডায়েট", labelEn: "Nutrition & Diet", count: doctorsData.filter(d => d.department === 'nutrition').length }
  ];

  // Active department details
  const activeDeptObj = departments.find(d => d.id === selectedDept);

  // Filter doctors only if category is selected OR search query is present
  const filteredDoctors = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    
    // If nothing selected and no search, return empty array to keep page compact!
    if (!selectedDept && !q) {
      return [];
    }

    return doctorsData.filter(doc => {
      const matchDept = selectedDept ? doc.department === selectedDept : true;
      if (!q) return matchDept;

      const matchName = doc.name.toLowerCase().includes(q) || doc.nameBn.toLowerCase().includes(q);
      const matchSpecialty = doc.specialty.toLowerCase().includes(q) || doc.specialtyBn.toLowerCase().includes(q);
      const matchDegrees = doc.degrees.toLowerCase().includes(q) || doc.degreesBn.toLowerCase().includes(q);
      const matchDeptName = doc.department.toLowerCase().includes(q);
      const matchRoom = (doc.room || "").toLowerCase().includes(q) || (doc.roomBn || "").toLowerCase().includes(q);

      return (selectedDept ? matchDept : true) && (matchName || matchSpecialty || matchDegrees || matchDeptName || matchRoom);
    });
  }, [selectedDept, searchQuery]);

  const hasActiveSelection = Boolean(selectedDept || searchQuery.trim());

  return (
    <section id="doctors" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nexus-100 text-nexus-900 text-xs font-black tracking-wide uppercase border border-nexus-200 shadow-xs">
            <UserCheck className="w-3.5 h-3.5 text-nexus-700" />
            <span>{lang === 'bn' ? '৪৬+ বিশেষজ্ঞ চিকিৎসক ও কনসালট্যান্ট' : '46+ Specialist Consultants'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {lang === 'bn' ? 'ডাক্তার নির্বাচন ও শিডিউল' : 'Select Specialist Doctor'}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            {lang === 'bn' 
              ? 'নিচের তালিকা থেকে আপনার কাঙ্ক্ষিত বিভাগ বেছে নিন অথবা ডাক্তারের নাম লিখে সহজেই সিরিয়াল নিশ্চিত করুন।'
              : 'Choose your desired department below or search by doctor name to view chamber schedules and book serial.'}
          </p>

          {/* Download Official Schedule PDF Banner */}
          <div className="pt-1">
            <a
              href="https://nexushospitalmymensingh.com/wp-content/uploads/2025/05/Nexus-doctors-schedule.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white text-xs font-bold shadow-sm transition-all group"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{lang === 'bn' ? 'সম্পূর্ণ ডাক্তার শিডিউল (PDF)' : 'Complete Schedule (PDF)'}</span>
            </a>
          </div>

        </div>

        {/* Compact Search & Category Selector Panel */}
        <div className="max-w-4xl mx-auto space-y-5 mb-8">
          
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? 'ডাক্তারের নাম, পদবী, বা রোগ লিখে সার্চ করুন...' : 'Search doctor by name, disease or specialty...'}
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white border-2 border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Compact Category Grid */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
              <span>{lang === 'bn' ? 'বিভাগ নির্বাচন করুন (ক্লিক করুন):' : 'Select Department (Click):'}</span>
              {hasActiveSelection && (
                <button
                  onClick={() => {
                    setSelectedDept(null);
                    setSearchQuery("");
                  }}
                  className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 font-bold"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'রিসেট করুন' : 'Reset'}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {departments.map((dept) => {
                const isSelected = selectedDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => {
                      if (selectedDept === dept.id) {
                        setSelectedDept(null);
                      } else {
                        setSelectedDept(dept.id);
                      }
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between space-y-1 ${
                      isSelected
                        ? 'bg-[#0f2942] border-[#0f2942] text-white shadow-md scale-[1.02]'
                        : 'bg-white border-slate-200/90 hover:border-emerald-400 hover:bg-emerald-50/40 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base">{dept.icon}</span>
                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {dept.count}
                      </span>
                    </div>
                    <span className="text-xs font-bold line-clamp-1 leading-snug">
                      {lang === 'bn' ? dept.labelBn : dept.labelEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* CASE 1: NO CATEGORY SELECTED & NO SEARCH (COMPACT STATE) */}
        {/* ============================================================== */}
        {!hasActiveSelection && (
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-sm animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
              👨‍⚕️
            </div>
            
            <div className="space-y-1">
              <h3 className="font-black text-lg text-slate-900">
                {lang === 'bn' ? 'আপনার কাঙ্ক্ষিত বিভাগটি সিলেক্ট করুন' : 'Select a Department Above'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                {lang === 'bn'
                  ? 'উপরের যেকোনো বিভাগে ক্লিক করলে শুধুমাত্র সেই বিভাগের বিশেষজ্ঞ ডাক্তারদের তালিকা এখানে প্রদর্শিত হবে।'
                  : 'Click on any department above or type a name to instantly view the assigned specialist doctors.'}
              </p>
            </div>

            {/* Quick Popular Category Shortcuts */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedDept('cardiology')}
                className="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm transition-all"
              >
                🫀 {lang === 'bn' ? 'হৃদরোগ ডাক্তার (৪ জন)' : 'Cardiologists (4)'}
              </button>
              <button
                onClick={() => setSelectedDept('medicine')}
                className="px-3.5 py-1.5 rounded-full bg-[#0f2942] text-white text-xs font-bold hover:bg-[#1a3b5c] shadow-sm transition-all"
              >
                🩺 {lang === 'bn' ? 'মেডিসিন বিশেষজ্ঞ (৮ জন)' : 'Medicine (8)'}
              </button>
              <button
                onClick={() => setSelectedDept('pediatrics')}
                className="px-3.5 py-1.5 rounded-full bg-slate-800 text-white text-xs font-bold hover:bg-slate-900 shadow-sm transition-all"
              >
                👶 {lang === 'bn' ? 'শিশু ও নবজাতক (৪ জন)' : 'Pediatrics (4)'}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 2: RESULTS DISPLAYED FOR SELECTED CATEGORY OR SEARCH */}
        {/* ============================================================== */}
        {hasActiveSelection && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {selectedDept && activeDeptObj ? (
                    <>
                      {activeDeptObj.icon} {lang === 'bn' ? activeDeptObj.labelBn : activeDeptObj.labelEn}
                      <span className="text-slate-500 font-semibold ml-1.5">
                        ({filteredDoctors.length} {lang === 'bn' ? 'জন চিকিৎসক' : 'doctors'})
                      </span>
                    </>
                  ) : (
                    <span>
                      {lang === 'bn' ? `অনুসন্ধানের ফলাফল: "${searchQuery}"` : `Search results for: "${searchQuery}"`}
                      <span className="text-slate-500 font-semibold ml-1.5">
                        ({filteredDoctors.length} {lang === 'bn' ? 'জন পাওয়া গেছে' : 'found'})
                      </span>
                    </span>
                  )}
                </span>
              </div>

              <button
                onClick={() => {
                  setSelectedDept(null);
                  setSearchQuery("");
                }}
                className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'অন্য বিভাগ দেখুন' : 'Change Department'}</span>
              </button>
            </div>

            {/* Doctors Grid (Only the 2-5 doctors of that department!) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
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
                        <div className="flex items-center gap-1.5 flex-wrap mb-1">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            doc.department === 'cardiology'
                              ? 'bg-cardiac-50 text-cardiac-700 border border-cardiac-200'
                              : 'bg-nexus-50 text-nexus-800 border border-nexus-200'
                          }`}>
                            {lang === 'bn' ? doc.specialtyBn.split(' ')[0] : doc.department}
                          </span>

                          {/* Prominent Room Badge */}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-900 text-white">
                            <Building className="w-2.5 h-2.5 text-emerald-400" />
                            <span>{lang === 'bn' ? doc.roomBn : doc.room}</span>
                          </span>
                        </div>

                        <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                          {lang === 'bn' ? doc.nameBn : doc.name}
                        </h3>

                        <p className="text-xs font-bold text-slate-600 line-clamp-1 mt-0.5">
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
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{lang === 'bn' ? doc.roomBn : doc.room}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        <span>{lang === 'bn' ? doc.visitingHoursBn : doc.visitingHours}</span>
                      </div>
                    </div>

                    {/* Consultation Fee Display (New vs Old Patient) */}
                    <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-emerald-800 font-bold block">
                          {lang === 'bn' ? 'পরামর্শ ফি (চেম্বারে প্রদেয়):' : 'Consultation Fee (Chamber):'}
                        </span>
                        <div className="font-black text-slate-900 text-xs">
                          {doc.feeOld && doc.feeOld !== doc.feeNew ? (
                            <span>
                              নতুন: <strong className="text-emerald-700">{doc.feeNew}</strong> | পুরাতন: <strong className="text-slate-700">{doc.feeOld}</strong>
                            </span>
                          ) : (
                            <span>ফি: <strong className="text-emerald-700">{doc.feeNew || doc.fee}</strong></span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                        {lang === 'bn' ? 'চেম্বারে দিন' : 'Pay at Chamber'}
                      </span>
                    </div>

                  </div>

                  {/* Action Buttons: Book Serial & Hotline Call */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onBookDoctor(doc.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/25 active:scale-95 transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>{lang === 'bn' ? 'সিরিয়াল বুকিং' : 'Book Serial'}</span>
                    </button>

                    <a
                      href="tel:09611678922"
                      className="p-2.5 rounded-xl bg-[#0a2540] hover:bg-[#123860] text-white transition-colors"
                      title="Call Serial Hotline"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* If no doctors found in search */}
            {filteredDoctors.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
                <UserCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-800">
                  {lang === 'bn' ? 'কোনো ডাক্তার পাওয়া যায়নি' : 'No doctors found'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'bn' ? 'অন্য কোনো নাম বা বিভাগ দিয়ে অনুসন্ধান করুন' : 'Try searching with another keyword or department'}
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
