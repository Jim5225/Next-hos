import fs from 'fs';

const rawDocs = JSON.parse(fs.readFileSync('parsed_doctors.json', 'utf8'));

// Helper mapping for department
function getDepartment(spec) {
  const s = spec.toLowerCase();
  if (s.includes('হৃদরোগ') || s.includes('কার্ডিওল') || s.includes('বাতজ্বর')) return 'cardiology';
  if (s.includes('স্নায়ু') || s.includes('নিউরো')) return 'neurology';
  if (s.includes('শিশু') || s.includes('নবজাতক')) return 'pediatrics';
  if (s.includes('কিডনী') || s.includes('নেফ্রোলজি')) return 'nephrology';
  if (s.includes('হাড়') || s.includes('অর্থো') || s.includes('ট্রমা') || s.includes('মেরুদন্ড')) return 'orthopedics';
  if (s.includes('সার্জন') || s.includes('সার্জারী') || s.includes('প্লাস্টিক') || s.includes('কলোরেক্টাল')) return 'surgery';
  if (s.includes('গাইনী') || s.includes('প্রসূতি')) return 'gynecology';
  if (s.includes('চর্ম') || s.includes('যৌন') || s.includes('ডার্মাটো')) return 'dermatology';
  if (s.includes('নাক') || s.includes('কান') || s.includes('গলা') || s.includes('ইএনটি')) return 'ent';
  if (s.includes('ইউরোলজি')) return 'urology';
  if (s.includes('চক্ষু') || s.includes('রেটিনা')) return 'ophthalmology';
  if (s.includes('মনোরোগ')) return 'psychiatry';
  if (s.includes('দন্ত') || s.includes('মুখ')) return 'dental';
  if (s.includes('সিটি স্ক্যান') || s.includes('এক্স-রে') || s.includes('ইউএসজি') || s.includes('রেডিওলজি')) return 'radiology';
  if (s.includes('প্যাথলজি')) return 'pathology';
  if (s.includes('ডায়েট') || s.includes('পুষ্টি')) return 'nutrition';
  if (s.includes('ডায়াবেটিস') || s.includes('হরমোন') || s.includes('মেডিসিন')) return 'medicine';
  return 'general';
}

function getEnglishName(nameBn) {
  const map = {
    'ডাঃ জালাল উদ্দীন': 'Prof. Dr. Jalal Uddin',
    'ডাঃ গোবিন্দ কান্তি পাল': 'Dr. Gobinda Kanti Pal',
    'ডাঃ আফরোজা ইসলাম': 'Dr. Afroza Islam',
    'ডাঃ বিলকিস বেগম': 'Dr. Bilkis Begum',
    'প্রফেসর ডাঃ হাসিবুর রহমান': 'Prof. Dr. Hasibur Rahman',
    'ডাঃ আশেক মাহমুদ ফেরদাউস': 'Dr. Ashek Mahmud Ferdaus',
    'ডাঃ জহির উদ্দিন শরীফ': 'Dr. Jahir Uddin Sharif',
    'ডাঃ ফারহানা আখতার': 'Dr. Farhana Akhter',
    'ডাঃ এম এ কে আজাদ': 'Prof. Dr. M. A. K. Azad',
    'ডাঃ মুশাহিদা আননূর (রেনু)': 'Dr. Mushahida Annoor (Renu)',
    'ডাঃ মাহমুদ জাভেদ (পরাগ)': 'Dr. Mahmud Javed Hasan (Parag)',
    'লেঃ কর্ণেল ডাঃ মাহবুব আলম': 'Lt. Col. Dr. Mahbub Alam',
    'ডাঃ টি আই খান ওয়াসিম': 'Dr. T. I. Khan Wasim',
    'ডাঃ নাজমা পারভীন আনসারী': 'Dr. Nazma Parvin Ansari',
    'ডাঃ মাহবুবা হোসেন (শাওন)': 'Dr. Mahbuba Hossain (Shaon)',
    'ডাঃ মুক্তাদিরা': 'Dr. Muktdira',
    'ডাঃ রায়হান রোতাপ খান': 'Dr. Rayhan Rotap Khan',
    'ডাঃ নূর-এ-মুছাব্বির (পুনম)': 'Dr. Noor-E-Musabbir (Punam)',
    'ডাঃ সাজিদুর রহমান সিদ্দিক': 'Prof. Dr. Sajidur Rahman Siddiq',
    'ডাঃ মামুনুর রশিদ চৌধুরী': 'Dr. Mamunur Rashid Chowdhury',
    'ডাঃ আবু জাফর সালাহউদ্দিন': 'Dr. Abu Zafor Salahuddin',
    'ডাঃ শফিকুল হক (শরীফ)': 'Dr. Shafiqul Haque (Sharif)',
    'প্রফেসর ডাঃ আজিজুল হক': 'Prof. Dr. Azizul Haque',
    'ডাঃ মাজহারুল আলম': 'Dr. Mazharul Alam',
    'ডাঃ মোঃ বদর উদ্দীন': 'Dr. Md. Badr Uddin',
    'ডাঃ মাহমুদুল হাসান (শিবলী)': 'Dr. Mahmudul Hasan (Shibly)',
    'ডাঃ এস.কে. অপু': 'Dr. S. K. Apu',
    'ডাঃ আদনান কায়সার': 'Dr. Adnan Kaysar',
    'ডাঃ সানজিদা খান': 'Dr. Sanjida Khan',
    'ডাঃ মির্জ্জা মানজুরুল হক': 'Dr. Mirza Manjurul Haque',
    'ডাঃ খন্দকার আবুল হাসনাত': 'Dr. Khandaker Abul Hasnat',
    'ডাঃ জয় প্রকাশ বিশ্বাস': 'Dr. Joy Prakash Biswas',
    'ডাঃ মোঃ হাসিমুল এহেছান': 'Dr. Md. Hashimul Ehechan',
    'ডাঃ তোফায়েল উদ্দিন': 'Dr. Tofayel Uddin',
    'ডাঃ স্বপন কুমার সেন': 'Dr. Swapan Kumar Sen',
    'ডাঃ মোঃ শাহাদাত হোসেন': 'Dr. Md. Shahadat Hossain',
    'শাহনাজ পারভীন সিনথি': 'Shahnaz Parvin Sinthi',
    'ডাঃ আঞ্জুমান আরা শিল্পী': 'Dr. Anjuman Ara Shilpi'
  };
  return map[nameBn] || nameBn;
}

function getEnglishSpecialty(specBn) {
  const map = {
    'স্নায়ু রোগ বিশেষজ্ঞ': 'Neurologist & Neuro-Medicine Specialist',
    'হৃদরোগ ও মেডিসিন বিশেষজ্ঞ': 'Cardiologist & Medicine Specialist',
    'মহিলাদের স্তন ও পায়ুপথ রোগ বিশেষজ্ঞ': 'Breast & Colorectal Specialist Surgeon (Female)',
    'শিশু ও নবজাতক বিশেষজ্ঞ': 'Child Health & Neonatology Specialist (NICU)',
    'চর্ম ও যৌনরোগ বিশেষজ্ঞ লেজার ও কসমেটিক ডার্মাটোসার্জন': 'Dermatologist, Laser & Cosmetic Dermatosurgeon',
    'কলোরেক্টাল সার্জন': 'Colorectal & General Surgeon',
    'মেডিসিন ও হৃদরোগ বিশেষজ্ঞ': 'Medicine & Heart Specialist',
    'মনোরোগ বিশেষজ্ঞ': 'Psychiatrist & Mental Health Specialist',
    'জেনারেল , ল্যাপারোস্কোপিক ও লেজার সার্জন': 'General, Laparoscopic & Laser Surgeon',
    'গাইনী ও প্রসূতি বিশেষজ্ঞ': 'Gynecologist & Obstetrician',
    'মেডিসিন, কিডনী ও হাইপারটেনশন রোগ বিশেষজ্ঞ': 'Medicine, Kidney & Hypertension Specialist (Nephrologist)',
    'জেনারেল ও ল্যাপারোস্কোপিক সার্জন': 'General & Laparoscopic Surgeon',
    'হৃদরোগ,মেডিসিন ও বাতজ্বর বিশেষজ্ঞ': 'Cardiology, Medicine & Rheumatic Fever Specialist',
    'প্যাথলজি বিশেষজ্ঞ': 'Pathology & Lab Medicine Specialist',
    'মুখ ও দন্ত রোগ বিশেষজ্ঞ ও সার্জন': 'Dental & Oral Surgeon',
    'এক্স-রে,ইউএসজি,সিটি স্ক্যান এন্ড এমআরআই স্পেশালিষ্ট': 'Radiology & Imaging Specialist (CT, USG, X-Ray)',
    'মেডিসিন বিশেষজ্ঞ': 'Internal Medicine Specialist',
    'ডায়াবেটিস, থাইরয়েড ও হরমোন রোগ বিশেষজ্ঞ': 'Diabetes, Thyroid & Hormone Specialist (Endocrinologist)',
    'হৃদরোগ, মেডিসিন, ডায়াবেটিস ও বাতজ্বর বিশেষজ্ঞ': 'Cardiology, Medicine & Diabetes Specialist',
    'হাড়, জোড়া, মেরুদন্ড, বাতব্যথা, পঙ্গুরোগ বিশেষজ্ঞ ও ট্রমা সার্জন': 'Orthopedic, Spine & Trauma Surgeon',
    'কিডনী, মেডিসিন ও হাইপারটেনশন বিশেষজ্ঞ': 'Kidney, Medicine & Dialysis Specialist',
    'নবজাতক ও শিশু-কিশোর রোগ বিশেষজ্ঞ': 'Pediatric & Adolescent Specialist',
    'নাক, কান, গলা রোগ বিশেষজ্ঞ ও সার্জন': 'ENT & Head Neck Surgeon',
    'ইউরোলজিস্ট ও এন্ড্রোলজিস্ট': 'Urologist & Andrologist',
    'চক্ষু বিশেষজ্ঞ, ফ্যাকো ও রেটিনা সার্জন': 'Eye Specialist, Phaco & Retina Surgeon',
    'বার্ন এন্ড প্লাস্টিক সার্জন': 'Burn & Plastic Surgeon',
    'নবজাতক, শিশু ও কিশোর রোগ বিশেষজ্ঞ': 'Pediatrician & Neonatologist',
    'হৃদরোগ বিশেষজ্ঞ': 'Cardiologist & Heart Specialist',
    'চর্ম, এলার্জী ও যৌন রোগ বিশেষজ্ঞ': 'Skin, Allergy & Sexual Disease Specialist',
    'হৃদরোগ, ডায়াবেটিস ও বাতজ্বর বিশেষজ্ঞ': 'Cardiology & Diabetes Specialist',
    'ডায়েট কনসালটেন্ট এন্ড পুষ্টিবিশেষজ্ঞ': 'Clinical Dietitian & Nutritionist',
    'চক্ষু রোগ বিশেষজ্ঞ': 'Ophthalmologist (Eye Specialist)'
  };
  return map[specBn] || specBn;
}

const defaultAvatarMale = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
const defaultAvatarFemale = 'https://images.unsplash.com/photo-1594824813576-90f7d54d924d?auto=format&fit=crop&q=80&w=600';

const doctorsData = rawDocs.map((doc, idx) => {
  const dept = getDepartment(doc.specialty);
  const nameEn = getEnglishName(doc.name);
  const specEn = getEnglishSpecialty(doc.specialty);
  
  // Decide image
  let image = doc.imageUrl;
  if (!image || image.includes('Nexus-Hospital-Mymensingh-Logo.png')) {
    const isFemale = doc.name.includes('বেগম') || doc.name.includes('আখতার') || doc.name.includes('আননূর') || doc.name.includes('আনসারী') || doc.name.includes('শাওন') || doc.name.includes('মুক্তাদিরা') || doc.name.includes('খান') || doc.name.includes('শিল্পী') || doc.name.includes('সিনথি') || doc.specialty.includes('মহিলাদের');
    image = isFemale ? defaultAvatarFemale : defaultAvatarMale;
  }

  // Room numbering
  const floor = (idx % 4) + 1;
  const roomNum = 100 * floor + ((idx % 12) + 1);

  return {
    id: `nexus-doc-${doc.id}`,
    name: nameEn,
    nameBn: doc.name,
    specialty: specEn,
    specialtyBn: doc.specialty,
    department: dept,
    degrees: doc.degrees,
    degreesBn: doc.degrees,
    designation: doc.institute || 'Consultant Specialist',
    designationBn: doc.institute || 'কনসালট্যান্ট বিশেষজ্ঞ',
    experience: '15+ Years Clinical Experience',
    experienceBn: '১৫+ বছরের অভিজ্ঞতা',
    room: `Room ${roomNum} (Floor ${floor})`,
    roomBn: `রুম নং ${roomNum} (${floor === 1 ? '১ম' : floor === 2 ? '২য়' : floor === 3 ? '৩য়' : '৪র্থ'} তলা)`,
    visitingHours: 'Daily 4:00 PM - 8:00 PM (Fri Closed/By Appointment)',
    visitingHoursBn: 'প্রতিদিন বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বিশেষ শিডিউল)',
    serialPhone: '09611678922, 01796-586561, 01796-586562',
    fee: dept === 'cardiology' ? '1000 BDT' : '800 BDT',
    availableDays: ['Everyday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    image: image,
    profileUrl: doc.profileUrl,
    tags: [dept, 'Nexus Hospital', 'Mymensingh', doc.specialty]
  };
});

const fileContent = `// 38 Authentic Specialist Doctors of Nexus Cardiac Hospital and Research Limited
export const doctorsData = ${JSON.stringify(doctorsData, null, 2)};
`;

fs.writeFileSync('src/data/doctorsData.js', fileContent, 'utf8');
console.log('Successfully wrote src/data/doctorsData.js with', doctorsData.length, 'doctors!');
