import React from 'react';

export default function PrescriptionPrintView({
  doctor,
  patient,
  vitals,
  complaints,
  history,
  diagnosis,
  medicines,
  investigations,
  advices,
  nextFollowUp,
  customNotes,
  padMode = 'full', // 'full' (software prints header & footer) | 'offset' (only prints content for doctor's pre-printed pad)
  qrUrl = 'https://nexushospitalmymensingh.com/verify-rx'
}) {
  return (
    <div className="prescription-print-container bg-white text-slate-900 font-sans p-6 sm:p-10 max-w-[210mm] mx-auto min-h-[297mm] flex flex-col justify-between border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0 print:m-0 print:w-full print:max-w-none">
      
      {/* 1. DOCTOR & CHAMBER HEADER (Hidden if Offset/Blank Pad mode selected) */}
      <div className={padMode === 'offset' ? 'h-36 print:opacity-0' : 'border-b-2 border-slate-800 pb-4 mb-4'}>
        <div className="flex justify-between items-start gap-4">
          
          {/* Doctor Info (Left) */}
          <div className="max-w-[58%]">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              {doctor.nameBn || doctor.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">
              {doctor.degreesBn || doctor.degrees}
            </p>
            <p className="text-xs text-slate-600 mt-0.5 leading-snug">
              {doctor.designationBn || doctor.designation}
            </p>
            <div className="mt-1 flex items-center gap-2 text-[11px] font-semibold text-nexus-800">
              <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300">
                BMDC Reg: {doctor.bmdcNo || 'A-45892'}
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-bold">{doctor.specialtyBn || doctor.specialty}</span>
            </div>
          </div>

          {/* Chamber Info (Right) */}
          <div className="text-right max-w-[40%] text-xs text-slate-600 space-y-0.5">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">
              {doctor.chamberName || 'নেক্সাস কার্ডিয়াক হাসপাতাল'}
            </h3>
            <p>{doctor.chamberAddress || 'শেহড়া বড় বাড়ি, ময়মনসিংহ'}</p>
            <p className="font-semibold text-slate-800">
              রুম: {doctor.roomBn || doctor.room || 'রুম ১০১ (১ম তলা)'}
            </p>
            <p className="text-[11px] text-slate-500">
              সময়: {doctor.visitingHoursBn || doctor.visitingHours || 'বিকাল ৪:০০ - রাত ৮:০০'}
            </p>
            <p className="font-mono text-emerald-800 font-bold text-[11px]">
              সিরিয়াল: {doctor.serialPhone || '০৯৬১১৬৭৮৯২২'}
            </p>
          </div>

        </div>
      </div>

      {/* 2. PATIENT DEMOGRAPHICS & VITALS BANNER */}
      <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5 mb-4 text-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-slate-200 pb-2">
          <div>
            <span className="text-slate-500 font-medium">রোগীর নাম: </span>
            <span className="font-bold text-slate-900">{patient.name || 'নাম উল্লেখ নেই'}</span>
          </div>
          <div>
            <span className="text-slate-500 font-medium">বয়স: </span>
            <span className="font-bold text-slate-900">{patient.age ? `${patient.age} বছর` : '—'}</span>
            <span className="text-slate-400 mx-1">|</span>
            <span className="text-slate-500 font-medium">লিঙ্গ: </span>
            <span className="font-bold text-slate-900">{patient.gender === 'male' ? 'পুরুষ' : patient.gender === 'female' ? 'মহিলা' : patient.gender || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 font-medium">তারিখ: </span>
            <span className="font-bold text-slate-900">{patient.date || new Date().toLocaleDateString('bn-BD')}</span>
          </div>
          <div className="text-right">
            <span className="text-slate-500 font-medium">আইডি/সিরিয়াল: </span>
            <span className="font-bold font-mono text-slate-900">{patient.id || `NX-${Math.floor(1000 + Math.random() * 9000)}`}</span>
          </div>
        </div>

        {/* Vitals Ribbon */}
        <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-700">
          {vitals.bp && (
            <div>
              <span className="text-slate-500">BP:</span> <strong className="text-slate-900 font-mono">{vitals.bp} mmHg</strong>
            </div>
          )}
          {vitals.pulse && (
            <div>
              <span className="text-slate-500">Pulse:</span> <strong className="text-slate-900 font-mono">{vitals.pulse} bpm</strong>
            </div>
          )}
          {vitals.weight && (
            <div>
              <span className="text-slate-500">Weight:</span> <strong className="text-slate-900 font-mono">{vitals.weight} kg</strong>
            </div>
          )}
          {vitals.height && (
            <div>
              <span className="text-slate-500">Height:</span> <strong className="text-slate-900 font-mono">{vitals.height} cm</strong>
            </div>
          )}
          {vitals.spo2 && (
            <div>
              <span className="text-slate-500">SpO2:</span> <strong className="text-slate-900 font-mono">{vitals.spo2}%</strong>
            </div>
          )}
          {vitals.temp && (
            <div>
              <span className="text-slate-500">Temp:</span> <strong className="text-slate-900 font-mono">{vitals.temp} °F</strong>
            </div>
          )}
          {vitals.rbs && (
            <div>
              <span className="text-slate-500">RBS:</span> <strong className="text-slate-900 font-mono">{vitals.rbs} mmol/L</strong>
            </div>
          )}
          {!vitals.bp && !vitals.pulse && !vitals.weight && (
            <span className="text-slate-400 italic">ভাইটালস রেকর্ড করা হয়নি</span>
          )}
        </div>
      </div>

      {/* 3. PRESCRIPTION BODY: TWO COLUMN LAYOUT */}
      <div className="flex-1 flex gap-6 border-b border-slate-300 pb-6">
        
        {/* LEFT COLUMN: Clinical Findings, Complaints, History & Investigations (Width: 32%) */}
        <div className="w-[32%] border-r border-slate-200 pr-4 space-y-4 text-xs">
          
          {/* Chief Complaints (C/C) */}
          {complaints && complaints.length > 0 && (
            <div>
              <h4 className="font-black text-slate-900 border-b border-slate-300 pb-1 mb-1.5 uppercase tracking-wider text-[11px] text-slate-800">
                Chief Complaints (C/C)
              </h4>
              <ul className="space-y-1 list-disc list-inside text-slate-700">
                {complaints.map((item, idx) => (
                  <li key={idx} className="leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Past History & Risk Factors */}
          {history && history.length > 0 && (
            <div>
              <h4 className="font-black text-slate-900 border-b border-slate-300 pb-1 mb-1.5 uppercase tracking-wider text-[11px] text-slate-800">
                Past History (P/H)
              </h4>
              <ul className="space-y-1 list-disc list-inside text-slate-700">
                {history.map((item, idx) => (
                  <li key={idx} className="leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Provisional Diagnosis */}
          {diagnosis && (
            <div>
              <h4 className="font-black text-slate-900 border-b border-slate-300 pb-1 mb-1.5 uppercase tracking-wider text-[11px] text-slate-800">
                Diagnosis (Dx)
              </h4>
              <p className="font-bold text-slate-900">{diagnosis}</p>
            </div>
          )}

          {/* Investigations Advised (Inv) */}
          {investigations && investigations.length > 0 && (
            <div>
              <h4 className="font-black text-slate-900 border-b border-slate-300 pb-1 mb-1.5 uppercase tracking-wider text-[11px] text-slate-800">
                Investigations (Inv)
              </h4>
              <ol className="space-y-1 list-decimal list-inside text-slate-700">
                {investigations.map((test, idx) => (
                  <li key={idx} className="leading-snug font-medium">{test}</li>
                ))}
              </ol>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: ℞ Prescription Engine (Width: 68%) */}
        <div className="w-[68%] pl-2">
          
          {/* Iconic Rx Symbol */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif text-3xl font-black italic text-nexus-900 tracking-tighter">
              ℞
            </span>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-nexus-900 via-slate-300 to-transparent"></div>
          </div>

          {/* Medicine List */}
          <div className="space-y-4">
            {medicines && medicines.length > 0 ? (
              medicines.map((med, idx) => (
                <div key={idx} className="group pb-2 border-b border-dashed border-slate-200 last:border-none">
                  
                  {/* Medicine Brand, Type & Strength */}
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-black text-slate-400 text-xs w-4">
                        {idx + 1}.
                      </span>
                      <span className="text-xs font-semibold text-slate-500 uppercase">
                        {med.type || 'Tab.'}
                      </span>
                      <h3 className="text-sm font-black text-slate-900">
                        {med.brand}
                      </h3>
                      {med.strength && (
                        <span className="text-xs font-bold text-slate-600">
                          ({med.strength})
                        </span>
                      )}
                    </div>

                    {/* Generic & Company (if available) */}
                    {med.generic && (
                      <span className="text-[10px] text-slate-400 italic">
                        {med.generic}
                      </span>
                    )}
                  </div>

                  {/* Dosage & Duration Instructions */}
                  <div className="ml-5 mt-1 flex flex-wrap items-center gap-x-4 text-xs font-medium text-slate-800">
                    <span className="font-mono font-bold text-nexus-800 bg-nexus-50 px-2 py-0.5 rounded border border-nexus-200">
                      {med.dosage || '১+০+১'}
                    </span>
                    <span className="text-slate-700">
                      — {med.when || 'খাবার পর'}
                    </span>
                    <span className="text-slate-600 font-semibold">
                      ({med.duration || '৭ দিন'})
                    </span>
                  </div>

                  {/* Custom Note/Instruction */}
                  {med.instruction && (
                    <div className="ml-5 mt-0.5 text-[11px] text-amber-800 italic">
                      * {med.instruction}
                    </div>
                  )}

                </div>
              ))
            ) : (
              <div className="py-8 text-center text-slate-400 italic text-xs">
                কোনো ওষুধ যুক্ত করা হয়নি
              </div>
            )}
          </div>

          {/* Advice (উপদেশ) */}
          {advices && advices.length > 0 && (
            <div className="mt-6 pt-4 border-t-2 border-slate-300">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                উপদেশ / Advices:
              </h4>
              <ul className="space-y-1 list-disc list-inside text-xs text-slate-700">
                {advices.map((adv, idx) => (
                  <li key={idx} className="leading-relaxed">{adv}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Custom Notes */}
          {customNotes && (
            <div className="mt-3 p-2 bg-amber-50/60 rounded text-xs text-amber-900">
              <span className="font-bold">বিশেষ নোট: </span>
              <span>{customNotes}</span>
            </div>
          )}

        </div>

      </div>

      {/* 4. FOOTER: FOLLOW-UP, SIGNATURE & QR CODE */}
      <div className={padMode === 'offset' ? 'h-24 print:opacity-0' : 'pt-4 mt-4'}>
        <div className="flex items-end justify-between">
          
          {/* Left: Next Follow-Up Date & Verification */}
          <div className="text-xs text-slate-600 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <span>পরবর্তী সাক্ষাত:</span>
              <span className="text-nexus-800 underline decoration-slate-400">
                {nextFollowUp || '৭ দিন পর / রিপোর্ট সহ'}
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              Nexus SmartRx Cloud System • Digital Verification ID: {patient.id || 'NEX-7821'}
            </p>
          </div>

          {/* Right: Doctor's Signature Area */}
          <div className="text-center min-w-[160px]">
            <div className="h-10 border-b border-slate-400 mb-1 flex items-end justify-center">
              {/* Optional digital signature graphic */}
              <span className="font-serif italic text-slate-400 text-xs">
                {doctor.nameBn || doctor.name}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-800">ডাক্তারের স্বাক্ষর</p>
          </div>

        </div>
      </div>

    </div>
  );
}
