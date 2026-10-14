import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Plus, 
  Trash2, 
  Search, 
  Sparkles, 
  Save, 
  RotateCcw, 
  Clock, 
  Stethoscope, 
  User, 
  HeartPulse, 
  FileText, 
  AlertCircle, 
  Check, 
  X, 
  ChevronDown, 
  Share2, 
  Copy, 
  Crown, 
  History, 
  Settings, 
  Phone, 
  Calendar,
  Layers,
  ArrowRight,
  Zap,
  Download,
  Flame,
  Wind,
  Thermometer,
  HelpCircle
} from 'lucide-react';
import { doctorsData } from '../../data/doctorsData';
import { 
  medicineDatabase, 
  dosagePresets, 
  whenPresets, 
  durationPresets, 
  commonComplaints, 
  clinicalHistoryPresets, 
  commonInvestigations, 
  advicePresets,
  diseaseTemplates
} from '../../data/medicineDatabase';
import PrescriptionPrintView from './PrescriptionPrintView';
import SaaSPricingModal from './SaaSPricingModal';

export default function PrescriptionManager({ isOpen, onClose, initialDoctorId = null, lang = 'bn' }) {
  // Doctor Profile state
  const [selectedDoctorId, setSelectedDoctorId] = useState(() => initialDoctorId || 'nexus-doc-1');
  const [customDoctorProfile, setCustomDoctorProfile] = useState(() => {
    const saved = localStorage.getItem('nexus_custom_doctor');
    return saved ? JSON.parse(saved) : null;
  });
  const [isEditingDoctor, setIsEditingDoctor] = useState(false);

  // Active Tab: 'vitals' | 'complaints' | 'medicines' | 'tests'
  const [activeTab, setActiveTab] = useState('medicines');
  
  // Pad printing mode: 'full' (complete pad with header) | 'offset' (only contents for pre-printed pad)
  const [padMode, setPadMode] = useState('full');

  // Patient Demographic State
  const [patient, setPatient] = useState({
    id: `NX-${Math.floor(1000 + Math.random() * 9000)}`,
    name: 'মো: আব্দুল করিম',
    age: '৫৮',
    gender: 'male',
    phone: '01712345678',
    date: new Date().toISOString().split('T')[0]
  });

  // Vitals State
  const [vitals, setVitals] = useState({
    bp: '135/85',
    pulse: '76',
    weight: '68',
    height: '168',
    spo2: '98',
    temp: '98.4',
    rbs: '7.8'
  });

  // Complaints & History
  const [selectedComplaints, setSelectedComplaints] = useState(['বুকে ব্যথা ও চাপ অনুভব', 'বুক ধড়ফড় করা']);
  const [customComplaint, setCustomComplaint] = useState('');
  
  const [selectedHistory, setSelectedHistory] = useState(['HTN (উচ্চ রক্তচাপ)', 'DM (ডায়াবেটিস মেলাইটাস)']);
  const [customHistory, setCustomHistory] = useState('');
  
  const [diagnosis, setDiagnosis] = useState('Coronary Artery Disease (CAD) / Hypertension');

  // Medicines List
  const [medicines, setMedicines] = useState([
    {
      brand: 'Bizoran 5/20',
      generic: 'Amlodipine 5mg + Olmesartan 20mg',
      type: 'Tablet',
      strength: '5/20mg',
      dosage: '১+০+০',
      when: 'সকালে খাবার পর',
      duration: 'চলবে',
      instruction: 'রক্তচাপ নিয়ন্ত্রণে প্রতিদিন নিয়মিত সেব্য'
    },
    {
      brand: 'Rosuva 10',
      generic: 'Rosuvastatin',
      type: 'Tablet',
      strength: '10mg',
      dosage: '০+০+১',
      when: 'রাতে খাবার পর',
      duration: 'চলবে',
      instruction: 'কোলেস্টেরল নিয়ন্ত্রণে'
    },
    {
      brand: 'Ecosprin 75',
      generic: 'Aspirin',
      type: 'Tablet',
      strength: '75mg',
      dosage: '০+১+০',
      when: 'দুপুরে খাবার পর',
      duration: 'চলবে',
      instruction: 'ভরা পেটে খাবেন'
    },
    {
      brand: 'Seclo 20',
      generic: 'Omeprazole',
      type: 'Capsule',
      strength: '20mg',
      dosage: '১+০+১',
      when: 'খাবার ২০ মি. আগে',
      duration: '১৪ দিন',
      instruction: ''
    }
  ]);

  // Medicine Search & Add State
  const [medSearchQuery, setMedSearchQuery] = useState('');
  const [selectedMedToAdd, setSelectedMedToAdd] = useState(null);
  const [tempMed, setTempMed] = useState({
    brand: '',
    generic: '',
    type: 'Tablet',
    strength: '',
    dosage: '১+০+১',
    when: 'খাবার পর',
    duration: '৭ দিন',
    instruction: ''
  });

  // Investigations & Advices
  const [selectedTests, setSelectedTests] = useState([
    'ECG (12 Leads)',
    '2D Echocardiogram with Color Doppler',
    'Lipid Profile (Fasting)',
    'Serum Creatinine'
  ]);
  const [customTest, setCustomTest] = useState('');

  const [selectedAdvices, setSelectedAdvices] = useState([
    'রান্নায় কম তেল ও পাতে কাঁচা লবণ খাওয়া বন্ধ করবেন।',
    'প্রতিদিন অন্তত ৩০-৪০ মিনিট হালকা বা মাঝারি গতিতে হাঁটবেন।',
    'চর্বিজাতীয় খাবার, গরুর মাংস ও খাসির মাংস পরিহার করবেন।'
  ]);
  const [customAdvice, setCustomAdvice] = useState('');
  const [nextFollowUp, setNextFollowUp] = useState('৭ দিন পর রিপোর্ট সহ');
  const [customNotes, setCustomNotes] = useState('');

  // SaaS Pricing & Licensing Modal
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [activeLicense, setActiveLicense] = useState(() => localStorage.getItem('nexus_rx_license') || null);

  // Saved Prescriptions History
  const [savedPrescriptions, setSavedPrescriptions] = useState(() => {
    const list = localStorage.getItem('nexus_saved_rx_list');
    return list ? JSON.parse(list) : [];
  });
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState(false);

  // ⚡ 1-Click Prescription Disease Templates & Custom Shortcuts
  const [customShortcuts, setCustomShortcuts] = useState(() => {
    const saved = localStorage.getItem('nexus_custom_shortcuts');
    return saved ? JSON.parse(saved) : [];
  });
  const [shortcutToast, setShortcutToast] = useState(null);
  const [pdfGuideOpen, setPdfGuideOpen] = useState(false);
  const [saveShortcutModalOpen, setSaveShortcutModalOpen] = useState(false);
  const [customShortcutName, setCustomShortcutName] = useState('');

  // ⚡ Apply 1-Click Disease Template Shortcut
  const handleApplyTemplate = (tpl) => {
    setSelectedComplaints(tpl.complaints || []);
    setSelectedHistory(tpl.history || []);
    setDiagnosis(tpl.diagnosis || '');
    setMedicines(tpl.medicines || []);
    setSelectedTests(tpl.investigations || []);
    setSelectedAdvices(tpl.advices || []);
    setNextFollowUp(tpl.nextFollowUp || '৭ দিন পর');
    setShortcutToast(`⚡ '${tpl.title || tpl.titleEn}' প্রেসক্রিপশন সম্পূর্ণ লোড হয়েছে!`);
    setTimeout(() => setShortcutToast(null), 4000);
  };

  // ⚡ 1-Click Quick Add Medicine from Top Drugs Bar
  const handleQuickAddMedicine = (brandName) => {
    const found = medicineDatabase.find(m => m.brand.toLowerCase() === brandName.toLowerCase());
    if (found) {
      setMedicines(prev => [...prev, {
        brand: found.brand,
        generic: found.generic,
        type: found.type,
        strength: found.strength,
        dosage: found.defaultDose,
        when: found.defaultWhen,
        duration: found.defaultDuration,
        instruction: ''
      }]);
      setShortcutToast(`+ ${found.brand} প্রেসক্রিপশনে যোগ করা হয়েছে`);
      setTimeout(() => setShortcutToast(null), 2500);
    }
  };

  // ⚡ Save Current Prescription as Doctor's Custom Shortcut
  const handleSaveCustomShortcut = (e) => {
    e.preventDefault();
    if (!customShortcutName.trim()) return;
    const newShortcut = {
      id: `custom-tpl-${Date.now()}`,
      title: customShortcutName.trim(),
      titleEn: customShortcutName.trim(),
      complaints: selectedComplaints,
      history: selectedHistory,
      diagnosis: diagnosis,
      medicines: medicines,
      investigations: selectedTests,
      advices: selectedAdvices,
      nextFollowUp: nextFollowUp
    };
    const updated = [newShortcut, ...customShortcuts];
    setCustomShortcuts(updated);
    localStorage.setItem('nexus_custom_shortcuts', JSON.stringify(updated));
    setSaveShortcutModalOpen(false);
    setCustomShortcutName('');
    setShortcutToast(`✅ '${newShortcut.title}' শর্টকাট সফলভাবে তৈরি হয়েছে!`);
    setTimeout(() => setShortcutToast(null), 4000);
  };

  const handleDeleteCustomShortcut = (id) => {
    const updated = customShortcuts.filter(s => s.id !== id);
    setCustomShortcuts(updated);
    localStorage.setItem('nexus_custom_shortcuts', JSON.stringify(updated));
  };

  // Find active doctor
  const activeDoctor = customDoctorProfile || doctorsData.find(d => d.id === selectedDoctorId) || doctorsData[0];

  // Auto calculate BMI
  const calculateBMI = () => {
    if (!vitals.weight || !vitals.height) return null;
    const hInMeter = parseFloat(vitals.height) / 100;
    const w = parseFloat(vitals.weight);
    if (hInMeter > 0 && w > 0) {
      return (w / (hInMeter * hInMeter)).toFixed(1);
    }
    return null;
  };
  const bmiVal = calculateBMI();

  // Doctor's custom saved medicine database (Auto-learning dictionary)
  const [customMedicineDb, setCustomMedicineDb] = useState(() => {
    const saved = localStorage.getItem('nexus_doctor_custom_medicines');
    return saved ? JSON.parse(saved) : [];
  });

  // Combined full medicine directory: Pre-populated + Doctor's custom added medicines
  const allMedicines = [...customMedicineDb, ...medicineDatabase];

  // Search filtered medicines (Searches brand, generic, strength and company)
  const filteredMedicines = medSearchQuery.trim()
    ? allMedicines.filter(m => 
        m.brand.toLowerCase().includes(medSearchQuery.toLowerCase()) ||
        (m.generic && m.generic.toLowerCase().includes(medSearchQuery.toLowerCase())) ||
        (m.company && m.company.toLowerCase().includes(medSearchQuery.toLowerCase()))
      ).slice(0, 8)
    : [];

  // Helper to save medicine into Doctor's custom database
  const saveToCustomMedicineDb = (newMed) => {
    const exists = allMedicines.some(m => m.brand.toLowerCase() === newMed.brand.toLowerCase());
    if (!exists && newMed.brand.trim()) {
      const customItem = {
        id: `custom-med-${Date.now()}`,
        brand: newMed.brand.trim(),
        generic: newMed.generic?.trim() || '',
        company: 'ডাক্তারের কাস্টম ওষুধ',
        type: newMed.type || 'Tablet',
        strength: newMed.strength?.trim() || '',
        defaultDose: newMed.dosage || '১+০+১',
        defaultWhen: newMed.when || 'খাবার পর',
        defaultDuration: newMed.duration || '৭ দিন',
        isCustom: true
      };
      const updated = [customItem, ...customMedicineDb].slice(0, 300);
      setCustomMedicineDb(updated);
      localStorage.setItem('nexus_doctor_custom_medicines', JSON.stringify(updated));
    }
  };

  const handleSelectMedToAdd = (m) => {
    setTempMed({
      brand: m.brand,
      generic: m.generic || '',
      type: m.type || 'Tablet',
      strength: m.strength || '',
      dosage: m.defaultDose || '১+০+১',
      when: m.defaultWhen || 'খাবার পর',
      duration: m.defaultDuration || '৭ দিন',
      instruction: ''
    });
    setMedSearchQuery(m.brand);
  };

  // Instant 1-Click creation if medicine not found or custom typed
  const handleCreateCustomMedicineFromSearch = (typedQuery) => {
    const cleanName = typedQuery.trim();
    if (!cleanName) return;

    // Detect type (Tab / Cap / Syr / Inj / Drop)
    let detectedType = 'Tablet';
    let cleanBrand = cleanName;
    if (/^tab\.?\s*/i.test(cleanName)) {
      detectedType = 'Tablet';
      cleanBrand = cleanName.replace(/^tab\.?\s*/i, '');
    } else if (/^cap\.?\s*/i.test(cleanName)) {
      detectedType = 'Capsule';
      cleanBrand = cleanName.replace(/^cap\.?\s*/i, '');
    } else if (/^syr\.?\s*/i.test(cleanName)) {
      detectedType = 'Syrup';
      cleanBrand = cleanName.replace(/^syr\.?\s*/i, '');
    } else if (/^inj\.?\s*/i.test(cleanName)) {
      detectedType = 'Injection';
      cleanBrand = cleanName.replace(/^inj\.?\s*/i, '');
    } else if (/inhaler/i.test(cleanName)) {
      detectedType = 'Inhaler';
    }

    // Detect strength (e.g. 500mg, 20mg, 10)
    const strengthMatch = cleanBrand.match(/(\d+\.?\d*\s*(mg|ml|gm|iu|mcg)?)$/i);
    let detectedStrength = '';
    if (strengthMatch) {
      detectedStrength = strengthMatch[0];
    }

    const newMedItem = {
      brand: cleanBrand,
      generic: '',
      type: detectedType,
      strength: detectedStrength,
      dosage: '১+০+১',
      when: 'খাবার পর',
      duration: '৭ দিন',
      instruction: ''
    };

    setMedicines(prev => [...prev, newMedItem]);
    saveToCustomMedicineDb(newMedItem);
    setMedSearchQuery('');
    setShortcutToast(`✨ '${cleanBrand}' নতুন ওষুধ হিসেবে যুক্ত ও ডিরেক্টরিতে সেভ হয়েছে!`);
    setTimeout(() => setShortcutToast(null), 3500);
  };

  const handleAddMedicineToRx = (e) => {
    e?.preventDefault();
    if (!tempMed.brand.trim()) return;

    setMedicines(prev => [...prev, { ...tempMed }]);
    saveToCustomMedicineDb(tempMed);

    // Reset temp
    setTempMed({
      brand: '',
      generic: '',
      type: 'Tablet',
      strength: '',
      dosage: '১+০+১',
      when: 'খাবার পর',
      duration: '৭ দিন',
      instruction: ''
    });
    setMedSearchQuery('');
  };

  const handleRemoveMed = (index) => {
    setMedicines(prev => prev.filter((_, idx) => idx !== index));
  };

  // Toggle helpers
  const toggleComplaint = (text) => {
    setSelectedComplaints(prev => 
      prev.includes(text) ? prev.filter(t => t !== text) : [...prev, text]
    );
  };

  const toggleHistory = (text) => {
    setSelectedHistory(prev => 
      prev.includes(text) ? prev.filter(t => t !== text) : [...prev, text]
    );
  };

  const toggleTest = (text) => {
    setSelectedTests(prev => 
      prev.includes(text) ? prev.filter(t => t !== text) : [...prev, text]
    );
  };

  const toggleAdvice = (text) => {
    setSelectedAdvices(prev => 
      prev.includes(text) ? prev.filter(t => t !== text) : [...prev, text]
    );
  };

  // Save Prescription locally
  const handleSavePrescription = () => {
    const rxItem = {
      id: patient.id || `NX-${Date.now().toString().slice(-4)}`,
      date: patient.date,
      patientName: patient.name,
      patientPhone: patient.phone,
      patientAge: patient.age,
      patientGender: patient.gender,
      diagnosis,
      doctorName: activeDoctor.nameBn || activeDoctor.name,
      savedAt: new Date().toLocaleString('bn-BD'),
      data: {
        patient,
        vitals,
        complaints: selectedComplaints,
        history: selectedHistory,
        diagnosis,
        medicines,
        investigations: selectedTests,
        advices: selectedAdvices,
        nextFollowUp,
        customNotes
      }
    };

    const updated = [rxItem, ...savedPrescriptions.filter(p => p.id !== rxItem.id)].slice(0, 30);
    setSavedPrescriptions(updated);
    localStorage.setItem('nexus_saved_rx_list', JSON.stringify(updated));
    setSaveSuccessNotice(true);
    setTimeout(() => setSaveSuccessNotice(false), 3000);
  };

  const handleLoadPrescription = (savedItem) => {
    const d = savedItem.data;
    if (!d) return;
    setPatient(d.patient);
    setVitals(d.vitals);
    setSelectedComplaints(d.complaints || []);
    setSelectedHistory(d.history || []);
    setDiagnosis(d.diagnosis || '');
    setMedicines(d.medicines || []);
    setSelectedTests(d.investigations || []);
    setSelectedAdvices(d.advices || []);
    setNextFollowUp(d.nextFollowUp || '');
    setCustomNotes(d.customNotes || '');
    setHistoryModalOpen(false);
  };

  const handleReset = () => {
    if (window.confirm('আপনি কি নতুন প্রেসক্রিপশন শুরু করতে চান? বর্তমান এন্ট্রি মুছে যাবে।')) {
      setPatient({
        id: `NX-${Math.floor(1000 + Math.random() * 9000)}`,
        name: '',
        age: '',
        gender: 'male',
        phone: '',
        date: new Date().toISOString().split('T')[0]
      });
      setVitals({ bp: '', pulse: '', weight: '', height: '', spo2: '', temp: '', rbs: '' });
      setSelectedComplaints([]);
      setSelectedHistory([]);
      setDiagnosis('');
      setMedicines([]);
      setSelectedTests([]);
      setSelectedAdvices([]);
      setNextFollowUp('৭ দিন পর');
      setCustomNotes('');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Keyboard shortcut Ctrl+P or Cmd+P
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        handlePrint();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 text-slate-100 flex flex-col font-sans overflow-hidden">
      
      {/* 1. TOP BAR / SAAS HEADER (Hidden on Print) */}
      <header className="no-print bg-slate-950 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 flex-shrink-0">
        
        {/* Brand & Doctor Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-nexus-600 to-emerald-500 flex items-center justify-center text-white shadow-md">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm tracking-tight text-white">SmartRx Pro</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {activeLicense ? 'Licensed Pro' : 'SaaS Preview'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">ডাক্তার প্রেসক্রিপশন ও চেম্বার ম্যানেজমেন্ট সফটওয়্যার</p>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-800 mx-1 hidden md:block"></div>

          {/* Doctor Switcher Dropdown */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs text-slate-400">ডাক্তার:</span>
            <select
              value={selectedDoctorId}
              onChange={(e) => {
                setSelectedDoctorId(e.target.value);
                setCustomDoctorProfile(null);
              }}
              className="bg-slate-900 text-xs text-white rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-nexus-500 max-w-[220px] truncate"
            >
              {doctorsData.map(doc => (
                <option key={doc.id} value={doc.id}>
                  {doc.nameBn || doc.name} ({doc.specialtyBn || doc.specialty})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Center: Pad Mode Toggle */}
        <div className="hidden sm:flex items-center p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setPadMode('full')}
            className={`px-3 py-1 rounded-md font-bold transition-all ${
              padMode === 'full' ? 'bg-nexus-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
            title="কম্পিউটার থেকে সম্পূর্ণ প্যাড ও লেখা একসাথে প্রিন্ট হবে"
          >
            A4 ফুল প্যাড প্রিন্ট
          </button>
          <button
            type="button"
            onClick={() => setPadMode('offset')}
            className={`px-3 py-1 rounded-md font-bold transition-all ${
              padMode === 'offset' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
            title="যদি ডাক্তারের নিজস্ব অফসেট প্যাড থাকে, শুধু ভেতরের তথ্য প্রিন্ট হবে"
          >
            অফসেট প্যাড মোড
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* SaaS Pricing & Subscription Button */}
          <button
            type="button"
            onClick={() => setPricingModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs shadow-md transition-all animate-pulse-slow"
          >
            <Crown className="w-3.5 h-3.5 text-slate-950" />
            <span className="hidden sm:inline">সাবস্ক্রিপশন প্ল্যান</span>
            <span className="sm:hidden">প্ল্যান</span>
          </button>

          {/* History */}
          <button
            type="button"
            onClick={() => setHistoryModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
            title="আগের সংরক্ষিত প্রেসক্রিপশন"
          >
            <History className="w-3.5 h-3.5 text-nexus-400" />
            <span className="hidden md:inline">হিস্ট্রি</span>
          </button>

          {/* Save */}
          <button
            type="button"
            onClick={handleSavePrescription}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
            title="প্রেসক্রিপশন সেভ করুন"
          >
            <Save className="w-3.5 h-3.5" />
            <span className="hidden md:inline">সংরক্ষণ</span>
          </button>

          {/* Print & PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-nexus-600 via-emerald-600 to-teal-600 hover:from-nexus-500 hover:to-teal-500 text-white text-xs font-black shadow-lg shadow-nexus-600/30 transition-all hover:scale-105 active:scale-95 ring-1 ring-white/20"
            title="সরাসরি প্রিন্ট বা PDF ডাউনলোড করুন (Ctrl+P)"
          >
            <Printer className="w-4 h-4" />
            <span>প্রিন্ট / PDF</span>
          </button>

          {/* PDF Save Help Button */}
          <button
            type="button"
            onClick={() => setPdfGuideOpen(true)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="PDF ডাউনলোডের নিয়ম"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900/80 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

        </div>
      </header>

      {/* ⚡ 1-Click Fast-Track Prescription Shortcut Bar */}
      <div className="no-print bg-slate-950 border-b border-nexus-900/60 px-4 py-2 flex items-center justify-between gap-3 overflow-x-auto text-xs flex-shrink-0">
        <div className="flex items-center gap-2 flex-nowrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-black border border-amber-500/30 flex-shrink-0">
            <Zap className="w-3.5 h-3.5 fill-amber-300 animate-pulse" />
            <span>১-ক্লিক শর্টকাট:</span>
          </div>

          {/* Disease Template Pills */}
          {diseaseTemplates.map(tpl => (
            <button
              key={tpl.id}
              type="button"
              onClick={() => handleApplyTemplate(tpl)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-nexus-900 text-slate-200 hover:text-white border border-slate-700 hover:border-nexus-500 transition-all font-semibold shadow-xs flex-shrink-0 active:scale-95"
              title={`${tpl.title} সম্পূর্ণ প্রেসক্রিপশন ১ ক্লিকে লোড করুন`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>{tpl.title}</span>
            </button>
          ))}

          {/* Custom Doctor Shortcuts */}
          {customShortcuts.map(s => (
            <div key={s.id} className="flex items-center rounded-lg bg-purple-950/60 border border-purple-600/50 text-purple-200 text-xs font-semibold overflow-hidden flex-shrink-0">
              <button
                type="button"
                onClick={() => handleApplyTemplate(s)}
                className="px-2.5 py-1 hover:bg-purple-900/80 flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-purple-300" />
                <span>{s.title}</span>
              </button>
              <button
                type="button"
                onClick={() => handleDeleteCustomShortcut(s.id)}
                className="px-1.5 py-1 hover:bg-red-900 text-purple-400 hover:text-white border-l border-purple-700/50"
                title="মুছুন"
              >
                ×
              </button>
            </div>
          ))}

          {/* Button to save current prescription as shortcut */}
          <button
            type="button"
            onClick={() => setSaveShortcutModalOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-600/50 text-xs font-bold transition-all flex-shrink-0 shadow-xs active:scale-95"
            title="বর্তমান প্রেসক্রিপশনকে নতুন শর্টকাট হিসেবে সেভ করুন"
          >
            <Plus className="w-3 h-3" />
            <span>+ নতুন শর্টকাট বানান</span>
          </button>
        </div>
      </div>

      {/* Shortcut Loaded Toast Notification */}
      {shortcutToast && (
        <div className="no-print bg-gradient-to-r from-nexus-700 via-emerald-600 to-teal-700 text-white px-4 py-1.5 text-xs font-bold flex items-center justify-center gap-2 shadow-md animate-fadeIn">
          <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
          <span>{shortcutToast}</span>
        </div>
      )}

      {/* Save Success Alert Notification */}
      {saveSuccessNotice && (
        <div className="no-print bg-emerald-600 text-white px-4 py-1.5 text-xs font-bold flex items-center justify-center gap-2 transition-all">
          <Check className="w-4 h-4" />
          <span>প্রেসক্রিপশনটি সফলভাবে সংরক্ষিত হয়েছে! হিস্ট্রি থেকে যেকোনো সময় দেখতে পারবেন।</span>
        </div>
      )}

      {/* 2. MAIN SPLIT WORKSPACE: DATA ENTRY (LEFT) + LIVE PREVIEW (RIGHT) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANE: CONTROLS & DATA ENTRY (Hidden on Print) */}
        <div className="no-print w-full lg:w-[50%] xl:w-[48%] bg-slate-900 border-r border-slate-800 flex flex-col overflow-y-auto">
          
          {/* Tabs Selector Ribbon */}
          <div className="flex items-center border-b border-slate-800 bg-slate-950/60 p-2 gap-1.5 sticky top-0 z-20">
            <button
              onClick={() => setActiveTab('vitals')}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'vitals' ? 'bg-nexus-600 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>রোগী ও ভাইটালস</span>
            </button>

            <button
              onClick={() => setActiveTab('complaints')}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'complaints' ? 'bg-nexus-600 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>উপসর্গ ও ডায়াগনসিস</span>
            </button>

            <button
              onClick={() => setActiveTab('medicines')}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'medicines' ? 'bg-nexus-600 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="font-serif italic font-black text-sm">℞</span>
              <span>ওষুধ তালিকা ({medicines.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('tests')}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'tests' ? 'bg-nexus-600 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>টেস্ট ও উপদেশ</span>
            </button>
          </div>

          {/* TAB 1: PATIENT & VITALS */}
          {activeTab === 'vitals' && (
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Patient Basic Info */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-xs font-black uppercase text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-nexus-400" />
                    <span>রোগীর ব্যক্তিগত তথ্য</span>
                  </h3>
                  <button 
                    onClick={handleReset}
                    className="text-[11px] text-red-400 hover:text-red-300 font-bold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>রিসেট / নতুন রোগী</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 font-medium block mb-1">রোগীর নাম *</label>
                    <input
                      type="text"
                      value={patient.name}
                      onChange={(e) => setPatient(p => ({ ...p, name: e.target.value }))}
                      placeholder="রোগীর পুরো নাম"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">মোবাইল নম্বর</label>
                    <input
                      type="tel"
                      value={patient.phone}
                      onChange={(e) => setPatient(p => ({ ...p, phone: e.target.value }))}
                      placeholder="017XXXXXXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">বয়স</label>
                      <input
                        type="number"
                        value={patient.age}
                        onChange={(e) => setPatient(p => ({ ...p, age: e.target.value }))}
                        placeholder="বয়স (বছর)"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">লিঙ্গ</label>
                      <select
                        value={patient.gender}
                        onChange={(e) => setPatient(p => ({ ...p, gender: e.target.value }))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                      >
                        <option value="male">পুরুষ (Male)</option>
                        <option value="female">মহিলা (Female)</option>
                        <option value="other">অন্যান্য (Other)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">তারিখ</label>
                    <input
                      type="date"
                      value={patient.date}
                      onChange={(e) => setPatient(p => ({ ...p, date: e.target.value }))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>
                </div>
              </div>

              {/* Vitals Recording (O/E) */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-xs font-black uppercase text-slate-300 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5 text-cardiac-400" />
                    <span>ক্লিনিক্যাল ভাইটালস (On Examination)</span>
                  </h3>
                  {bmiVal && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-nexus-900/60 text-nexus-300 font-bold border border-nexus-700">
                      BMI: {bmiVal} kg/m²
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Blood Pressure (BP)</label>
                    <input
                      type="text"
                      value={vitals.bp}
                      onChange={(e) => setVitals(v => ({ ...v, bp: e.target.value }))}
                      placeholder="e.g. 120/80"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Pulse Rate (bpm)</label>
                    <input
                      type="number"
                      value={vitals.pulse}
                      onChange={(e) => setVitals(v => ({ ...v, pulse: e.target.value }))}
                      placeholder="e.g. 72"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      value={vitals.weight}
                      onChange={(e) => setVitals(v => ({ ...v, weight: e.target.value }))}
                      placeholder="e.g. 65"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Height (cm)</label>
                    <input
                      type="number"
                      value={vitals.height}
                      onChange={(e) => setVitals(v => ({ ...v, height: e.target.value }))}
                      placeholder="e.g. 165"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Oxygen (SpO2 %)</label>
                    <input
                      type="number"
                      value={vitals.spo2}
                      onChange={(e) => setVitals(v => ({ ...v, spo2: e.target.value }))}
                      placeholder="e.g. 98"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Blood Sugar (RBS)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={vitals.rbs}
                      onChange={(e) => setVitals(v => ({ ...v, rbs: e.target.value }))}
                      placeholder="e.g. 7.5"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    />
                  </div>
                </div>
              </div>

              {/* Next Tab CTA */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab('complaints')}
                  className="px-4 py-2 rounded-xl bg-nexus-600 hover:bg-nexus-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <span>পরবর্তী: উপসর্গ ও ডায়াগনসিস</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: COMPLAINTS & DIAGNOSIS */}
          {activeTab === 'complaints' && (
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Chief Complaints (C/C) */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-black uppercase text-slate-300">
                  Chief Complaints (প্রধান উপসর্গসমূহ - ১ ক্লিকে সিলেক্ট করুন)
                </h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {commonComplaints.map((item, idx) => {
                    const isSelected = selectedComplaints.includes(item.bn);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleComplaint(item.bn)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-nexus-600 text-white border-nexus-500 font-bold'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {item.bn}
                      </button>
                    );
                  })}
                </div>

                {/* Add Custom Complaint */}
                <div className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={customComplaint}
                    onChange={(e) => setCustomComplaint(e.target.value)}
                    placeholder="অন্য কোনো উপসর্গ লিখুন..."
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && customComplaint.trim()) {
                        toggleComplaint(customComplaint.trim());
                        setCustomComplaint('');
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customComplaint.trim()) {
                        toggleComplaint(customComplaint.trim());
                        setCustomComplaint('');
                      }
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg"
                  >
                    যুক্ত করুন
                  </button>
                </div>
              </div>

              {/* Past History (P/H) */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-black uppercase text-slate-300">
                  Past Medical History (পূর্ববর্তী রোগ / রিস্ক ফ্যাক্টর)
                </h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {clinicalHistoryPresets.map((item, idx) => {
                    const isSelected = selectedHistory.includes(item.label);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleHistory(item.label)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-500 font-bold'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Provisional / Final Diagnosis */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <label className="text-xs font-black uppercase text-slate-300 block">
                  ডায়াগনসিস / রোগ নির্ণয় (Diagnosis)
                </label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  placeholder="e.g. Acute Coronary Syndrome / Essential Hypertension"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                />
              </div>

              {/* Next Tab CTA */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab('medicines')}
                  className="px-4 py-2 rounded-xl bg-nexus-600 hover:bg-nexus-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <span>পরবর্তী: ওষুধ যুক্ত করুন (Rx)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 3: MEDICINES (Rx ENGINE) */}
          {activeTab === 'medicines' && (
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Search & Add New Medicine */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase text-slate-300 flex items-center gap-1.5">
                    <span className="font-serif italic font-black text-nexus-400 text-sm">℞</span>
                    <span>ওষুধ খুঁজুন ও যোগ করুন (বাংলাদেশ ড্রাগ ডিরেক্টরি)</span>
                  </h3>
                  <span className="text-[11px] text-emerald-400 font-semibold">১০০+ ড্রাগ ডাটাবেজ • যেকোনো নতুন ওষুধ টাইপ করুন</span>
                </div>

                {/* ⚡ Frequent Medicines Quick Adder Bar */}
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>১-ক্লিকে ওষুধ যোগ করুন (টপ ড্রাগস):</span>
                    </span>
                    <span className="text-[10px] text-slate-500">ক্লিক করলেই প্রেসক্রিপশনে বসবে</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Napa Extra', 'Seclo 20', 'Sergel 20', 'Bizoran 5/20', 'Rosuva 10', 'Monas 10', 'Ecosprin 75', 'Torax 10', 'Entacyd Plus', 'Calbo-D', 'Azith 500', 'Filwel Gold'].map((medName, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQuickAddMedicine(medName)}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-nexus-900 text-slate-200 hover:text-white border border-slate-700 hover:border-nexus-500 text-[11px] font-semibold transition-all flex items-center gap-1 active:scale-95 shadow-2xs"
                      >
                        <Plus className="w-3 h-3 text-emerald-400" />
                        <span>{medName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Instant Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={medSearchQuery}
                    onChange={(e) => {
                      setMedSearchQuery(e.target.value);
                      setTempMed(prev => ({ ...prev, brand: e.target.value }));
                    }}
                    placeholder="ব্র্যান্ড, জেনেরিক বা যেকোনো নতুন ওষুধের নাম লিখুন..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-nexus-500"
                  />

                  {/* Dropdown Auto-Complete Suggestions & Instant Custom Creator */}
                  {medSearchQuery.trim().length > 0 && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-30 max-h-60 overflow-y-auto divide-y divide-slate-800">
                      
                      {/* Matching results */}
                      {filteredMedicines.map((m) => (
                        <div
                          key={m.id}
                          onClick={() => handleSelectMedToAdd(m)}
                          className="p-2.5 hover:bg-slate-800 cursor-pointer flex items-center justify-between text-xs transition-colors"
                        >
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white">{m.brand}</span>
                              <span className="text-slate-400 text-[11px]">({m.type} • {m.strength})</span>
                              {m.isCustom && (
                                <span className="text-[9px] bg-purple-900/70 text-purple-200 px-1 py-0.2 rounded border border-purple-500/50">
                                  কাস্টম ওষুধ
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-emerald-400">{m.generic} {m.company ? `• ${m.company}` : ''}</div>
                          </div>
                          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                            {m.defaultDose}
                          </span>
                        </div>
                      ))}

                      {/* Fallback & Custom Medicine 1-Click Creator */}
                      <div
                        onClick={() => handleCreateCustomMedicineFromSearch(medSearchQuery)}
                        className="p-2.5 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-nexus-950 hover:bg-emerald-900/80 cursor-pointer flex items-center justify-between text-xs border-t border-emerald-600/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                          <div>
                            <span className="text-emerald-300 font-bold block text-xs">
                              "{medSearchQuery}" — সরাসরি নতুন ওষুধ হিসেবে প্রেসক্রিপশনে যোগ করুন
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {filteredMedicines.length === 0 ? 'তালিকায় নেই? ক্লিক করলেই যোগ হবে ও সেভ থাকবে' : 'অথবা নতুন কাস্টম ওষুধ হিসেবে এন্ট্রি করুন'}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-black px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1 flex-shrink-0">
                          <Plus className="w-3.5 h-3.5" />
                          <span>যোগ করুন</span>
                        </span>
                      </div>

                    </div>
                  )}
                </div>

                {/* Form to configure dosage & when */}
                <form onSubmit={handleAddMedicineToRx} className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <label className="text-slate-400 text-[11px] block mb-1">ফর্ম (Type)</label>
                      <select
                        value={tempMed.type}
                        onChange={(e) => setTempMed(m => ({ ...m, type: e.target.value }))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-white text-xs"
                      >
                        <option value="Tablet">Tablet (ট্যাবলেট)</option>
                        <option value="Capsule">Capsule (ক্যাপসুল)</option>
                        <option value="Syrup">Syrup (সিরাপ)</option>
                        <option value="Injection">Injection (ইনজেকশন)</option>
                        <option value="Inhaler">Inhaler (ইনহেলার)</option>
                        <option value="Eye Drop">Eye Drop</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 text-[11px] block mb-1">ড্রাগের নাম (Brand) *</label>
                      <input
                        type="text"
                        required
                        value={tempMed.brand}
                        onChange={(e) => setTempMed(m => ({ ...m, brand: e.target.value }))}
                        placeholder="e.g. Napa Extra"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-white text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-slate-400 text-[11px] block mb-1">স্ট্রেন্থ (Strength)</label>
                      <input
                        type="text"
                        value={tempMed.strength}
                        onChange={(e) => setTempMed(m => ({ ...m, strength: e.target.value }))}
                        placeholder="e.g. 500mg"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-white text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-slate-400 text-[11px] block mb-1">জেনেরিক নাম</label>
                      <input
                        type="text"
                        value={tempMed.generic}
                        onChange={(e) => setTempMed(m => ({ ...m, generic: e.target.value }))}
                        placeholder="e.g. Paracetamol"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-white text-xs"
                      />
                    </div>
                  </div>

                  {/* Quick Dosage Buttons */}
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">ডোজ (Dosage):</label>
                    <div className="flex flex-wrap gap-1">
                      {dosagePresets.map((d, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setTempMed(m => ({ ...m, dosage: d }))}
                          className={`text-xs px-2 py-1 rounded font-mono border transition-all ${
                            tempMed.dosage === d 
                              ? 'bg-nexus-600 text-white border-nexus-500 font-bold' 
                              : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick When Buttons */}
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">খাওয়ার নিয়ম:</label>
                    <div className="flex flex-wrap gap-1">
                      {whenPresets.map((w, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setTempMed(m => ({ ...m, when: w }))}
                          className={`text-[11px] px-2 py-0.5 rounded border transition-all ${
                            tempMed.when === w 
                              ? 'bg-emerald-600 text-white border-emerald-500 font-bold' 
                              : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                          }`}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Duration Buttons */}
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">কতদিন খাবেন (Duration):</label>
                    <div className="flex flex-wrap gap-1">
                      {durationPresets.map((dur, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setTempMed(m => ({ ...m, duration: dur }))}
                          className={`text-[11px] px-2 py-0.5 rounded border transition-all ${
                            tempMed.duration === dur 
                              ? 'bg-purple-600 text-white border-purple-500 font-bold' 
                              : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Instruction / Note */}
                  <div>
                    <input
                      type="text"
                      value={tempMed.instruction}
                      onChange={(e) => setTempMed(m => ({ ...m, instruction: e.target.value }))}
                      placeholder="অতিরিক্ত নির্দেশনা (যেমন: বুকে ব্যথা বাড়লে সেব্য)..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  {/* Submit Add Medicine */}
                  <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-nexus-600 to-emerald-600 hover:from-nexus-700 hover:to-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>প্রেসক্রিপশনে ওষুধটি যোগ করুন</span>
                  </button>
                </form>
              </div>

              {/* Current Prescribed Medicines List */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase text-slate-300">
                    বর্তমান নির্ধারিত ওষুধসমূহ ({medicines.length})
                  </h4>
                  {medicines.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setMedicines([])}
                      className="text-[11px] text-red-400 hover:text-red-300 font-bold"
                    >
                      সব মুছুন
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {medicines.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-500 text-xs mt-0.5">{idx + 1}.</span>
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[10px] text-slate-400 uppercase font-semibold">{item.type}</span>
                            <span className="font-bold text-white text-sm">{item.brand}</span>
                            {item.strength && <span className="text-slate-400 text-xs">({item.strength})</span>}
                          </div>
                          <div className="text-[11px] text-emerald-400 mt-0.5">
                            {item.dosage} — {item.when} ({item.duration})
                          </div>
                          {item.instruction && (
                            <div className="text-[10px] text-amber-300 italic">* {item.instruction}</div>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveMed(idx)}
                        className="p-1 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}

                  {medicines.length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-4 italic">
                      এখনো কোনো ওষুধ যুক্ত করা হয়নি। উপরের সার্চ থেকে ওষুধ অ্যাড করুন।
                    </p>
                  )}
                </div>
              </div>

              {/* Next Tab CTA */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab('tests')}
                  className="px-4 py-2 rounded-xl bg-nexus-600 hover:bg-nexus-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <span>পরবর্তী: ল্যাব টেস্ট ও উপদেশ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 4: TESTS & ADVICE */}
          {activeTab === 'tests' && (
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Investigations / Lab Tests */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-black uppercase text-slate-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-nexus-400" />
                  <span>ল্যাব টেস্ট ও ডায়াগনস্টিক ইনভেস্টিগেশন (১ ক্লিকে সিলেক্ট করুন)</span>
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {commonInvestigations.map((test, idx) => {
                    const isSelected = selectedTests.includes(test);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleTest(test)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-nexus-600 text-white border-nexus-500 font-bold'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {test}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Test */}
                <div className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={customTest}
                    onChange={(e) => setCustomTest(e.target.value)}
                    placeholder="অন্য কোনো টেস্টের নাম লিখুন..."
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-nexus-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && customTest.trim()) {
                        toggleTest(customTest.trim());
                        setCustomTest('');
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customTest.trim()) {
                        toggleTest(customTest.trim());
                        setCustomTest('');
                      }
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg"
                  >
                    যুক্ত করুন
                  </button>
                </div>
              </div>

              {/* General Advices */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-black uppercase text-slate-300">
                  উপদেশ ও পরামর্শ (Advices)
                </h3>

                <div className="space-y-1.5">
                  {advicePresets.map((adv, idx) => {
                    const isSelected = selectedAdvices.includes(adv);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleAdvice(adv)}
                        className={`p-2 rounded-lg border text-xs cursor-pointer flex items-start gap-2 transition-all ${
                          isSelected
                            ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span className="leading-snug">{adv}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next Follow Up Date & Notes */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div>
                  <label className="text-xs font-black uppercase text-slate-300 block mb-1">
                    পরবর্তী সাক্ষাত (Follow-up)
                  </label>
                  <div className="flex gap-2">
                    {['৭ দিন পর', '১৫ দিন পর', '১ মাস পর', 'রিপোর্ট সহ দেখা করবেন'].map((f, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNextFollowUp(f)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                          nextFollowUp === f ? 'bg-nexus-600 text-white border-nexus-500' : 'bg-slate-900 text-slate-400 border-slate-700'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={nextFollowUp}
                    onChange={(e) => setNextFollowUp(e.target.value)}
                    placeholder="অথবা কাস্টম তারিখ লিখুন..."
                    className="w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase text-slate-300 block mb-1">
                    বিশেষ ডাক্তারের নোট
                  </label>
                  <textarea
                    rows={2}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="যেমন: ইমার্জেন্সিতে সরাসরি সিসিইউ-তে ভর্তি করাতে হবে..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              {/* Final Print Action Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-nexus-700 to-emerald-700 text-white flex items-center justify-between shadow-xl">
                <div>
                  <h4 className="text-sm font-black">প্রেসক্রিপশন প্রস্তুত!</h4>
                  <p className="text-xs text-emerald-100">প্রিন্ট করতে প্রিন্ট বাটনে চাপ দিন বা Ctrl+P দিন।</p>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-white text-nexus-900 text-xs font-black shadow-lg hover:bg-slate-100 transition-transform active:scale-95 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-nexus-700" />
                  <span>এখনই প্রিন্ট করুন</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* RIGHT PANE: LIVE BMDC STANDARD PRESCRIPTION PAD PREVIEW (Always visible on print) */}
        <div className="flex-1 bg-slate-200/90 overflow-y-auto p-4 sm:p-8 flex justify-center print:p-0 print:m-0 print:bg-white print:overflow-visible">
          <div className="w-full max-w-[210mm] shadow-2xl rounded-xl overflow-hidden print:shadow-none print:rounded-none">
            
            {/* Live Preview Label on screen */}
            <div className="no-print bg-slate-800 text-slate-300 text-[11px] px-4 py-2 flex items-center justify-between border-b border-slate-700 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-bold text-white">লাইভ প্রেসক্রিপশন প্রিভিউ (A4 সাইজ)</span>
                <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                  {padMode === 'full' ? 'ফুল প্যাড প্রিন্ট' : 'অফসেট প্যাড মোড'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md transition-all active:scale-95"
                  title="সরাসরি প্রিন্ট বা PDF ডাউনলোড করুন"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>প্রিন্ট / PDF</span>
                </button>
              </div>
            </div>

            {/* BMDC Standard Component Render */}
            <PrescriptionPrintView 
              doctor={activeDoctor}
              patient={patient}
              vitals={vitals}
              complaints={selectedComplaints}
              history={selectedHistory}
              diagnosis={diagnosis}
              medicines={medicines}
              investigations={selectedTests}
              advices={selectedAdvices}
              nextFollowUp={nextFollowUp}
              customNotes={customNotes}
              padMode={padMode}
            />

          </div>
        </div>

      </div>

      {/* 3. MODAL DIALOGS */}

      {/* SaaS Pricing & Licensing Modal */}
      <SaaSPricingModal 
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
        lang={lang}
      />

      {/* ⚡ Custom Shortcut Creation Modal */}
      {saveShortcutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-2xl max-w-md w-full border border-slate-800 overflow-hidden shadow-2xl p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Zap className="w-5 h-5 fill-emerald-400" />
                <h3 className="font-bold text-sm text-white">কাস্টম শর্টকাট হিসেবে সেভ করুন</h3>
              </div>
              <button 
                onClick={() => setSaveShortcutModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              বর্তমান প্রেসক্রিপশনের সমস্ত ওষুধ, টেস্ট ও উপদেশ আপনার ব্রাউজারে একটি ১-ক্লিক শর্টকাট বাটন হিসেবে সংরক্ষিত থাকবে।
            </p>

            <form onSubmit={handleSaveCustomShortcut} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  শর্টকাটের নাম দিন *
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: ডাঃ করিমের চেস্ট পেইন প্ল্যান / জ্বর টেমপ্লেট"
                  value={customShortcutName}
                  onChange={(e) => setCustomShortcutName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div>• ওষুধ সংখ্যা: <strong className="text-white">{medicines.length} টি</strong></div>
                <div>• ডায়াগনসিস: <strong className="text-white">{diagnosis || 'রেকর্ড করা'}</strong></div>
                <div>• টেস্ট সংখ্যা: <strong className="text-white">{selectedTests.length} টি</strong></div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSaveShortcutModalOpen(false)}
                  className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>সংরক্ষণ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 📄 PDF Save & Print Helper Modal */}
      {pdfGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-2xl max-w-lg w-full border border-slate-800 overflow-hidden shadow-2xl p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-nexus-400">
                <Download className="w-5 h-5" />
                <h3 className="font-bold text-sm text-white">প্রেসক্রিপশন প্রিন্ট ও PDF ডাউনলোডের নিয়ম</h3>
              </div>
              <button 
                onClick={() => setPdfGuideOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-nexus-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                  ১
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">প্রিন্ট ডায়ালগ ওপেন করুন</h4>
                  <p>নিচের <strong>"এখনই প্রিন্ট / PDF খুলুন"</strong> বাটনে ক্লিক করুন অথবা কিবোর্ডে <strong>Ctrl + P</strong> চাপুন।</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                  ২
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">প্রিন্ট বা PDF হিসেবে সেভ করুন</h4>
                  <p>
                    ব্রাউজারের প্রিন্ট উইন্ডোতে <strong>Destination</strong> অপশন থেকে:
                    <br />
                    • কাগজে প্রিন্ট করতে: <strong>আপনার প্রিন্টার</strong> সিলেক্ট করুন।
                    <br />
                    • PDF ডাউনলোড করতে: <strong>Save as PDF</strong> সিলেক্ট করে Save বাটনে ক্লিক করুন!
                  </p>
                </div>
              </div>

              <div className="p-3 bg-nexus-950/60 border border-nexus-700/50 rounded-xl text-[11px] text-nexus-300">
                💡 <strong>টিপ:</strong> হেডার এবং ফুটার বন্ধ রাখতে ব্রাউজারের প্রিন্ট সেটিংস থেকে <em>"Headers and footers"</em> আনচেক করে দিতে পারেন।
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPdfGuideOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                ঠিক আছে
              </button>
              <button
                type="button"
                onClick={() => {
                  setPdfGuideOpen(false);
                  handlePrint();
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-nexus-600 to-emerald-600 hover:from-nexus-500 hover:to-emerald-500 text-white text-xs font-black shadow-lg flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>এখনই প্রিন্ট / PDF খুলুন</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Saved Prescriptions History Modal */}
      {historyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-nexus-400" />
                <h3 className="font-bold text-sm">সংরক্ষিত প্রেসক্রিপশন রেকর্ড ({savedPrescriptions.length})</h3>
              </div>
              <button 
                onClick={() => setHistoryModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2.5">
              {savedPrescriptions.length > 0 ? (
                savedPrescriptions.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-4 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs">{p.patientName}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({p.patientPhone || 'No Phone'})</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">{p.id}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {p.diagnosis || 'Diagnosis recorded'} • {p.savedAt}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLoadPrescription(p)}
                      className="px-3 py-1.5 rounded-lg bg-nexus-600 hover:bg-nexus-700 text-white text-xs font-bold transition-all shadow-xs"
                    >
                      লোড করুন
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-slate-500 italic">
                  কোনো প্রেসক্রিপশন এখনো সেভ করা হয়নি।
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
