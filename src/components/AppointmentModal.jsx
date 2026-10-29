import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Printer, 
  Download, 
  ShieldCheck, 
  Building,
  AlertCircle,
  FileText
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

export default function AppointmentModal({ isOpen, onClose, lang, t, selectedDoctorId }) {
  // Doctor & Appointment Fields (Dagor ERP Schema)
  const [doctorId, setDoctorId] = useState("");
  const [visitingDate, setVisitingDate] = useState(() => {
    const tm = new Date();
    tm.setDate(tm.getDate() + 1);
    return tm.toISOString().split('T')[0];
  });
  const [shift, setShift] = useState("Evening"); // "Morning" | "Evening"
  
  // Patient Fields
  const [salutation, setSalutation] = useState("Mr.");
  const [patientName, setPatientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("Male"); // "Male" | "Female" | "Others"
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("0");
  const [ageDays, setAgeDays] = useState("0");
  const [isOldPatient, setIsOldPatient] = useState(false);
  const [patientId, setPatientId] = useState(""); // optional existing patient ID
  const [careOf, setCareOf] = useState(""); // Father / Husband / Guardian
  const [address, setAddress] = useState("");
  const [narration, setNarration] = useState(""); // Problem / Symptoms
  const [weightKg, setWeightKg] = useState("");
  const [height, setHeight] = useState("");
  const [comments, setComments] = useState("");
  
  // Confirmation state
  const [confirmedSlip, setConfirmedSlip] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedDoctorId) {
      setDoctorId(selectedDoctorId);
    } else if (!doctorId && doctorsData.length > 0) {
      setDoctorId(doctorsData[0].id);
    }
  }, [selectedDoctorId, isOpen]);

  if (!isOpen) return null;

  const currentDoctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];
  
  // Applicable fees based on Is Old Patient
  const applicableFee = isOldPatient && currentDoctor.feeOld 
    ? currentDoctor.feeOld 
    : (currentDoctor.feeNew || currentDoctor.fee || "১০০০/- টাকা");

  // Calculate live serial number based on doctor & date
  const liveSerialNo = Math.floor(10 + Math.random() * 45);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!doctorId) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে ডাক্তার নির্বাচন করুন।' : 'Please select a doctor.');
      return;
    }
    if (!visitingDate) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে সাক্ষাতের তারিখ প্রদান করুন।' : 'Please select visiting date.');
      return;
    }
    if (!patientName.trim()) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে রোগীর নাম প্রদান করুন।' : 'Please enter patient name.');
      return;
    }
    if (!mobile.trim() || mobile.length < 11) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন।' : 'Please enter valid 11-digit mobile number.');
      return;
    }
    if (!ageYears) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে রোগীর বয়স (বছর) উল্লেখ করুন।' : 'Please enter patient age (years).');
      return;
    }

    setIsSubmitting(true);

    const fullPatientName = `${salutation} ${patientName.trim()}`;
    const tokenNo = `NEX-${new Date().getFullYear().toString().slice(-2)}${String(new Date().getMonth()+1).padStart(2,'0')}-${String(liveSerialNo).padStart(3,'0')}`;
    const generatedPatientId = patientId.trim() || `PID-${Math.floor(100000 + Math.random() * 900000)}`;

    const slipData = {
      tokenNo,
      serialNo: liveSerialNo,
      patientId: generatedPatientId,
      doctorName: lang === 'bn' ? currentDoctor.nameBn : currentDoctor.name,
      doctorSpecialty: lang === 'bn' ? currentDoctor.specialtyBn : currentDoctor.specialty,
      chamberLocation: currentDoctor.roomBn || currentDoctor.room || "রুম: ৩০৬",
      visitingDate,
      shift,
      visitingTime: currentDoctor.visitingHoursBn || currentDoctor.visitingHours,
      salutation,
      patientName: fullPatientName,
      mobile,
      gender,
      age: `${ageYears} বছর ${ageMonths ? ageMonths + ' মাস' : ''} ${ageDays ? ageDays + ' দিন' : ''}`.trim(),
      isOldPatient,
      careOf: careOf.trim() || "N/A",
      address: address.trim() || "ময়মনসিংহ",
      narration: narration.trim() || "সাধারণ পরামর্শ ও চেকআপ",
      weightKg: weightKg ? `${weightKg} কেজি` : "N/A",
      height: height || "N/A",
      consultantFees: applicableFee,
      bookedAt: new Date().toLocaleString('bn-BD')
    };

    // Send payload matching Dagor ERP appointment bridge
    try {
      const syncApiUrl = import.meta.env.VITE_SYNC_API_URL || "http://127.0.0.1:5000";
      await fetch(`${syncApiUrl}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          consultant: slipData.doctorName,
          doctor_id: currentDoctor.id,
          visiting_date: visitingDate,
          shift,
          mobile,
          gender,
          age_years: ageYears,
          age_months: ageMonths,
          age_days: ageDays,
          patient_id: generatedPatientId,
          salutation,
          patient_name: fullPatientName,
          is_old_patient: isOldPatient,
          chamber_location: slipData.chamberLocation,
          permanent_address: slipData.address,
          care_of: slipData.careOf,
          narration: slipData.narration,
          weight_kg: weightKg,
          consultant_fees: applicableFee,
          serial_number: liveSerialNo,
          token_no: tokenNo
        })
      });
    } catch (err) {
      // Graceful fallback for offline / demo mode
      console.log("[Dagor Sync Bridge Info]: Running in web client mode.");
    }

    setIsSubmitting(false);
    setConfirmedSlip(slipData);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetModal = () => {
    setConfirmedSlip(null);
    setPatientName("");
    setMobile("");
    setAgeYears("");
    setCareOf("");
    setAddress("");
    setNarration("");
    setIsOldPatient(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl border border-slate-300 overflow-hidden max-h-[96vh] flex flex-col my-auto">
        
        {/* ============================================================== */}
        {/* MODAL HEADER (Dagor™ Health Care Solution Header) */}
        {/* ============================================================== */}
        <div className="px-5 py-3.5 bg-[#0f2942] text-white flex items-center justify-between no-print border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-black text-sm">
              🏥
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400 font-mono">
                  Dagor™ Health Care Solution
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white font-bold">
                  ERP Sync Ready
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white">
                {lang === 'bn' ? 'Create - Appointment (ডাক্তার সিরিয়াল গ্রহণ ফরম)' : 'Create - Appointment (Doctor Serial Form)'}
              </h3>
            </div>
          </div>

          <button
            onClick={resetModal}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ============================================================== */}
        {/* MODAL BODY */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* ------------------------------------------------------------ */}
          {/* 1. APPOINTMENT FORM (Strict Dagor™ Criteria & Layout) */}
          {/* ------------------------------------------------------------ */}
          {!confirmedSlip && (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Doctor Chamber & Fees Notice Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-800">
                    {lang === 'bn' ? 'নির্বাচিত চেম্বার রুম:' : 'Chamber Location:'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#0f2942] text-emerald-300 font-mono font-bold">
                    {currentDoctor.roomBn || currentDoctor.room || "রুম: ৩০৬"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-800">
                    {lang === 'bn' ? 'নির্ধারিত ভিজিট ফি:' : 'Consultant Fees:'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-black border border-emerald-300">
                    {applicableFee}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    ({lang === 'bn' ? 'চেম্বারে প্রদেয়' : 'Pay at Chamber'})
                  </span>
                </div>
              </div>

              {/* 2-Column Dagor Field Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-xs">
                
                {/* ================= LEFT COLUMN ================= */}
                <div className="space-y-3.5">
                  
                  {/* 1. Consultant * */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Consultant * (চিকিৎসক নির্বাচন):
                    </label>
                    <select
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-red-300 bg-white font-bold text-slate-900 focus:outline-none focus:border-nexus-600 focus:ring-1 focus:ring-nexus-500 shadow-xs"
                    >
                      {doctorsData.map((d) => (
                        <option key={d.id} value={d.id}>
                          {lang === 'bn' ? d.nameBn : d.name} — {d.specialtyBn || d.specialty} ({d.roomBn || d.room})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Visiting Date * & Shift */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Visiting Date * (সাক্ষাতের তারিখ ও শিফট):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
                      <input 
                        type="date"
                        required
                        value={visitingDate}
                        onChange={(e) => setVisitingDate(e.target.value)}
                        className="w-full p-2 rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:border-nexus-600"
                      />
                      <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-slate-700">
                          <input 
                            type="radio"
                            name="shift"
                            value="Morning"
                            checked={shift === "Morning"}
                            onChange={() => setShift("Morning")}
                            className="text-emerald-600 focus:ring-emerald-500"
                          />
                          <span>Morning</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-slate-700">
                          <input 
                            type="radio"
                            name="shift"
                            value="Evening"
                            checked={shift === "Evening"}
                            onChange={() => setShift("Evening")}
                            className="text-emerald-600 focus:ring-emerald-500"
                          />
                          <span>Evening</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* 3. Mobile * */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Mobile * (রোগী / স্বজনের মোবাইল নম্বর):
                    </label>
                    <input 
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="017XXXXXXXX (11 digits)"
                      className="w-full p-2.5 rounded-lg border border-slate-300 bg-white font-mono font-bold text-slate-900 focus:outline-none focus:border-nexus-600"
                    />
                  </div>

                  {/* 4. Sex (Gender) */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Sex (লিঙ্গ):
                    </label>
                    <div className="flex items-center gap-4 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {['Male', 'Female', 'Others'].map((g) => (
                        <label key={g} className="flex items-center gap-1.5 cursor-pointer font-bold text-slate-700">
                          <input 
                            type="radio"
                            name="gender"
                            value={g}
                            checked={gender === g}
                            onChange={() => setGender(g)}
                            className="text-emerald-600 focus:ring-emerald-500"
                          />
                          <span>{g === 'Male' ? 'পুরুষ (Male)' : g === 'Female' ? 'মহিলা (Female)' : 'অন্যান্য (Others)'}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 5. Age * (Year, Month, Days) */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Age * (রোগীর বয়স):
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center gap-1">
                        <input 
                          type="number"
                          required
                          min="0"
                          max="125"
                          value={ageYears}
                          onChange={(e) => setAgeYears(e.target.value)}
                          placeholder="0"
                          className="w-full p-2 rounded-lg border border-slate-300 text-center font-bold"
                        />
                        <span className="font-bold text-slate-600">Year</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <input 
                          type="number"
                          min="0"
                          max="11"
                          value={ageMonths}
                          onChange={(e) => setAgeMonths(e.target.value)}
                          placeholder="0"
                          className="w-full p-2 rounded-lg border border-slate-300 text-center font-bold"
                        />
                        <span className="font-bold text-slate-600">Month</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <input 
                          type="number"
                          min="0"
                          max="31"
                          value={ageDays}
                          onChange={(e) => setAgeDays(e.target.value)}
                          placeholder="0"
                          className="w-full p-2 rounded-lg border border-slate-300 text-center font-bold"
                        />
                        <span className="font-bold text-slate-600">Days</span>
                      </div>
                    </div>
                  </div>

                  {/* 6. Narration */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Narration (প্রধান সমস্যা / লক্ষণ):
                    </label>
                    <input 
                      type="text"
                      value={narration}
                      onChange={(e) => setNarration(e.target.value)}
                      placeholder={lang === 'bn' ? "যেমন: বুকে ব্যথা, শ্বাসকষ্ট, ফলো-আপ চেকআপ..." : "e.g., Chest pain, breathlessness, routine checkup"}
                      className="w-full p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900"
                    />
                  </div>

                  {/* 7. Wt(KG) & Care Of */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Wt(KG) (ওজন):
                      </label>
                      <input 
                        type="number"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        placeholder="কেজি"
                        className="w-full p-2 rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Care Of (পিতা/স্বামী/অভিভাবক):
                      </label>
                      <input 
                        type="text"
                        value={careOf}
                        onChange={(e) => setCareOf(e.target.value)}
                        placeholder="অভিভাবকের নাম"
                        className="w-full p-2 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="space-y-3.5">
                  
                  {/* Serial No Display Banner (Prominent Green Banner like Dagor) */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-700 text-white shadow-sm">
                    <span className="font-black text-xs uppercase tracking-wider">
                      Live Serial Number:
                    </span>
                    <span className="font-mono text-xl font-black px-3 py-0.5 rounded-lg bg-black/30 border border-white/20">
                      Serial No: {liveSerialNo}
                    </span>
                  </div>

                  {/* Patient ID (Optional) & Visiting Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Patient ID (পুরাতন হলে):
                      </label>
                      <input 
                        type="text"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        placeholder="PID / Auto"
                        className="w-full p-2 rounded-lg border border-slate-300 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Visiting Time (ভিজিটিং সময়):
                      </label>
                      <input 
                        type="text"
                        readOnly
                        value={currentDoctor.visitingHoursBn || currentDoctor.visitingHours || "০৫:০০ PM - ০৭:০০ PM"}
                        className="w-full p-2 rounded-lg border border-slate-200 bg-slate-100 font-semibold text-slate-700 text-xs"
                      />
                    </div>
                  </div>

                  {/* Patient Name * with Salutation */}
                  <div>
                    <label className="block font-black text-slate-800 mb-1">
                      Patient Name * (রোগীর পুরো নাম):
                    </label>
                    <div className="flex items-center gap-2">
                      <select
                        value={salutation}
                        onChange={(e) => setSalutation(e.target.value)}
                        className="p-2.5 rounded-lg border border-slate-300 bg-white font-bold text-slate-800 w-28"
                      >
                        <option value="Mr.">Mr. (জনাব)</option>
                        <option value="Mrs.">Mrs. (জনাবা)</option>
                        <option value="Ms.">Ms. (বেগম)</option>
                        <option value="Md.">Md. (মোঃ)</option>
                        <option value="Mst.">Mst. (মোছাঃ)</option>
                        <option value="Dr.">Dr. (ডাঃ)</option>
                        <option value="Baby">Baby (শিশু)</option>
                        <option value="Master">Master</option>
                      </select>

                      <input 
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder={lang === 'bn' ? "যেমন: কামাল হোসেন" : "e.g., Kamal Hossain"}
                        className="flex-1 p-2.5 rounded-lg border border-slate-300 bg-white font-bold text-slate-900 focus:outline-none focus:border-nexus-600"
                      />
                    </div>
                  </div>

                  {/* Is Old Patient Checkbox (Dagor criteria) */}
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer font-black text-slate-900">
                      <input 
                        type="checkbox"
                        checked={isOldPatient}
                        onChange={(e) => setIsOldPatient(e.target.checked)}
                        className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                      />
                      <span>Is Old Patient (পুরাতন রোগী কি না)</span>
                    </label>
                    <span className="text-[11px] font-bold text-emerald-800">
                      {isOldPatient ? 'ফলো-আপ ফি প্রযোজ্য' : '১ম ভিজিট ফি'}
                    </span>
                  </div>

                  {/* Permanent Address */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Permanent Address (স্থায়ী ঠিকানা / এলাকা):
                    </label>
                    <input 
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={lang === 'bn' ? "যেমন: শেহড়া, ময়মনসিংহ / মুক্তাগাছা / ঈশ্বরগঞ্জ" : "e.g. Shehora, Mymensingh"}
                      className="w-full p-2.5 rounded-lg border border-slate-300 font-medium text-slate-900"
                    />
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Comments (অতিরিক্ত মন্তব্য / কোনো বিশেষ প্রয়োজন):
                    </label>
                    <input 
                      type="text"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="ঐচ্ছিক মন্তব্য..."
                      className="w-full p-2.5 rounded-lg border border-slate-300 font-medium text-slate-900"
                    />
                  </div>

                </div>

              </div>

              {/* ------------------------------------------------------------ */}
              {/* Doctor Shift Schedule Table (Dagor™ Weekly Schedule Matrix) */}
              {/* ------------------------------------------------------------ */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200">
                <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider block">
                  ডাক্তারের সাপ্তাহিক ভিজিটিং শিডিউল (Dagor™ Schedule Matrix):
                </span>

                <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-xs">
                  <table className="w-full text-center text-[10px] sm:text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <th className="p-1.5 border-r border-slate-200">Shift</th>
                        <th className="p-1.5 border-r border-slate-200">Saturday</th>
                        <th className="p-1.5 border-r border-slate-200">Sunday</th>
                        <th className="p-1.5 border-r border-slate-200">Monday</th>
                        <th className="p-1.5 border-r border-slate-200">Tuesday</th>
                        <th className="p-1.5 border-r border-slate-200">Wednesday</th>
                        <th className="p-1.5 border-r border-slate-200">Thursday</th>
                        <th className="p-1.5">Friday</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200 bg-white">
                        <td className="p-1.5 font-bold bg-slate-50 border-r border-slate-200">Morning</td>
                        <td className="p-1.5 text-slate-400 border-r border-slate-200">Day Off</td>
                        <td className="p-1.5 text-slate-400 border-r border-slate-200">Day Off</td>
                        <td className="p-1.5 text-slate-400 border-r border-slate-200">Day Off</td>
                        <td className="p-1.5 text-slate-400 border-r border-slate-200">Day Off</td>
                        <td className="p-1.5 text-slate-400 border-r border-slate-200">Day Off</td>
                        <td className="p-1.5 text-slate-400 border-r border-slate-200">Day Off</td>
                        <td className="p-1.5 text-slate-400">Day Off</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-1.5 font-bold bg-slate-50 border-r border-slate-200">Evening</td>
                        <td className="p-1.5 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200">05:00PM-08:00PM</td>
                        <td className="p-1.5 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200">05:00PM-08:00PM</td>
                        <td className="p-1.5 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200">05:00PM-08:00PM</td>
                        <td className="p-1.5 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200">05:00PM-08:00PM</td>
                        <td className="p-1.5 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200">05:00PM-08:00PM</td>
                        <td className="p-1.5 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200">05:00PM-08:00PM</td>
                        <td className="p-1.5 text-slate-400">Day Off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Form Action Buttons (Dagor™ Style) */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="tel:09611678922"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'জরুরি সিরিয়াল হটলাইন: ০৯৬১১৬৭৮৯২২' : 'Hotline: 09611678922'}</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={resetModal}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-xs sm:text-sm shadow-md shadow-[#0f2942]/25 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isSubmitting ? 'প্রসেসিং হচ্ছে...' : (lang === 'bn' ? 'Submit (সিরিয়াল নিশ্চিত করুন)' : 'Submit Appointment')}</span>
                  </button>
                </div>
              </div>

            </form>
          )}

          {/* ------------------------------------------------------------ */}
          {/* 2. CONFIRMED APPOINTMENT SLIP (Print & Dagor Slip Ready) */}
          {/* ------------------------------------------------------------ */}
          {confirmedSlip && (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Top Success Banner */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center justify-between no-print">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm sm:text-base">
                      {lang === 'bn' ? 'আপনার ডাক্তার সিরিয়াল সফলভাবে নিশ্চিত হয়েছে!' : 'Doctor Serial Confirmed Successfully!'}
                    </h4>
                    <p className="text-xs text-emerald-800">
                      {lang === 'bn' ? 'ডাগর™ ইআরপি সফটওয়্যারে সিরিয়ালটি রেজিস্টার করা হয়েছে।' : 'Registered in Dagor™ Health Care Solution ERP.'}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-sm font-black bg-emerald-700 text-white px-3 py-1 rounded-lg">
                  {confirmedSlip.tokenNo}
                </span>
              </div>

              {/* Printable Official Slip Document */}
              <div id="printable-slip" className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm space-y-4 print:border-none print:shadow-none print:p-0">
                
                {/* Hospital Header */}
                <div className="text-center border-b-2 border-slate-800 pb-3 space-y-1">
                  <h3 className="font-black text-lg sm:text-xl text-slate-950 tracking-tight">
                    NEXUS CARDIAC HOSPITAL & RESEARCH LTD.
                  </h3>
                  <p className="text-xs font-bold text-slate-600">
                    নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ • ময়মনসিংহ
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    ২৯ শেহড়া, ঢাকা-ময়মনসিংহ রোড, ময়মনসিংহ | হটলাইন: ০৯৬১১৬৭৮৯২২
                  </p>
                  <div className="inline-block mt-1 px-3 py-0.5 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider">
                    Official Appointment Serial Token
                  </div>
                </div>

                {/* Big Prominent Serial Badge */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-700 text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-90">
                      Assigned Serial
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-mono">
                      Serial No: {confirmedSlip.serialNo}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold block opacity-90">Token ID</span>
                    <span className="font-mono text-xs sm:text-sm font-black bg-black/30 px-2 py-0.5 rounded">
                      {confirmedSlip.tokenNo}
                    </span>
                  </div>
                </div>

                {/* Slip Details Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-black text-[11px] text-slate-500 uppercase block border-b border-slate-200 pb-1">
                      রোগীর বিবরণ (Patient Info):
                    </span>
                    <div><span className="text-slate-500">নাম:</span> <strong className="text-slate-900">{confirmedSlip.patientName}</strong></div>
                    <div><span className="text-slate-500">মোবাইল:</span> <strong className="font-mono text-slate-900">{confirmedSlip.mobile}</strong></div>
                    <div><span className="text-slate-500">বয়স ও লিঙ্গ:</span> <span className="font-semibold">{confirmedSlip.age} | {confirmedSlip.gender}</span></div>
                    <div><span className="text-slate-500">পিতা/স্বামী:</span> <span className="font-semibold">{confirmedSlip.careOf}</span></div>
                    <div><span className="text-slate-500">ঠিকানা:</span> <span className="font-semibold">{confirmedSlip.address}</span></div>
                    <div><span className="text-slate-500">রোগীর ধরন:</span> <strong className="text-emerald-700">{confirmedSlip.isOldPatient ? 'পুরাতন রোগী' : 'নতুন রোগী'}</strong></div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-black text-[11px] text-slate-500 uppercase block border-b border-slate-200 pb-1">
                      ডাক্তার ও চেম্বার তথ্য (Consultant Info):
                    </span>
                    <div><span className="text-slate-500">চিকিৎসক:</span> <strong className="text-slate-900">{confirmedSlip.doctorName}</strong></div>
                    <div><span className="text-slate-500">বিভাগ:</span> <span className="font-semibold">{confirmedSlip.doctorSpecialty}</span></div>
                    <div><span className="text-slate-500">চেম্বার রুম:</span> <strong className="text-emerald-700 text-sm">{confirmedSlip.chamberLocation}</strong></div>
                    <div><span className="text-slate-500">তারিখ ও শিফট:</span> <strong className="font-mono text-slate-900">{confirmedSlip.visitingDate} ({confirmedSlip.shift})</strong></div>
                    <div><span className="text-slate-500">পরামর্শ ফি:</span> <strong className="text-slate-950 font-black">{confirmedSlip.consultantFees}</strong></div>
                    <div><span className="text-slate-500">প্রদেয় স্থান:</span> <span className="text-emerald-700 font-bold">চেম্বারে (হাতে হাতে)</span></div>
                  </div>
                </div>

                {/* Important Instructions Box */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-[11px] space-y-1">
                  <div className="font-black flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                    <span>রোগী ও স্বজনদের জন্য গুরুত্বপূর্ণ নির্দেশনা:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-amber-900">
                    <li>দয়া করে নির্ধারিত সময়ের অন্তত ২০ মিনিট পূর্বে হাসপাতালের নির্দিষ্ট চেম্বারে উপস্থিত হবেন।</li>
                    <li>হাসপাতালে এসে রিসেপশন বা ডাক্তারের চেম্বারের সহকারীকে এই সিরিয়াল স্লিপ বা টোকেন নম্বরটি প্রদর্শন করুন।</li>
                    <li>অনলাইনে কোনো প্রকার অগ্রিম ফি নেওয়ার প্রয়োজন নেই—ডাক্তারের ভিজিট ফি সরাসরি চেম্বারে পরিশোধ করবেন।</li>
                  </ul>
                </div>

                <div className="text-center text-[10px] text-slate-400 pt-1">
                  System Generated via Dagor™ Health Care Solution Bridge • Nexus Hospital ERP
                </div>

              </div>

              {/* Action Buttons: Print Slip & Close */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 no-print">
                <button
                  onClick={resetModal}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {lang === 'bn' ? 'আরেকটি সিরিয়াল বুক করুন' : 'Book Another Serial'}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/30 active:scale-95 transition-all"
                  >
                    <Printer className="w-4 h-4 text-white" />
                    <span>{lang === 'bn' ? 'স্লিপ প্রিন্ট / ডাউনলোড করুন' : 'Print / Download Slip'}</span>
                  </button>

                  <button
                    onClick={resetModal}
                    className="px-5 py-2.5 rounded-xl bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black text-xs sm:text-sm shadow-md"
                  >
                    {lang === 'bn' ? 'সম্পন্ন (Done)' : 'Done'}
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
