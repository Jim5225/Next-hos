// Comprehensive Bangladesh Medicine, Investigation & Clinical Preset Database
// Includes top pharmaceutical brands (Square, Beximco, Incepta, Renata, Opsonin, Healthcare, Eskayef)

export const medicineDatabase = [
  // Gastric / Acid Reflux / PPI
  { id: 'med-1', brand: 'Seclo 20', generic: 'Omeprazole', company: 'Square', type: 'Capsule', strength: '20mg', defaultDose: '1+0+1', defaultWhen: 'খাবার ২০ মি. আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-2', brand: 'Sergel 20', generic: 'Esomeprazole', company: 'Healthcare', type: 'Tablet', strength: '20mg', defaultDose: '1+0+1', defaultWhen: 'খাবার ২০ মি. আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-3', brand: 'Pantonix 20', generic: 'Pantoprazole', company: 'Incepta', type: 'Tablet', strength: '20mg', defaultDose: '1+0+0', defaultWhen: 'খাবার ২০ মি. আগে', defaultDuration: '১ মাস' },
  { id: 'med-4', brand: 'Maxpro 20', generic: 'Esomeprazole', company: 'Renata', type: 'Capsule', strength: '20mg', defaultDose: '1+0+1', defaultWhen: 'খাবার ২০ মি. আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-5', brand: 'Entacyd Plus', generic: 'Magaldrate + Simethicone', company: 'Square', type: 'Suspension', strength: '200ml', defaultDose: '২ চামচ করে দিনে ৩ বার', defaultWhen: 'খাবার ১ ঘণ্টা পর', defaultDuration: '৭ দিন' },

  // Pain / Fever / NSAID
  { id: 'med-6', brand: 'Napa 500', generic: 'Paracetamol', company: 'Beximco', type: 'Tablet', strength: '500mg', defaultDose: '১+১+১', defaultWhen: 'খাবার পর (জ্বর/ব্যথা থাকলে)', defaultDuration: '৩ দিন' },
  { id: 'med-7', brand: 'Napa Extra', generic: 'Paracetamol 500mg + Caffeine 65mg', company: 'Beximco', type: 'Tablet', strength: '565mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৩ দিন' },
  { id: 'med-8', brand: 'Ace Plus', generic: 'Paracetamol + Caffeine', company: 'Square', type: 'Tablet', strength: '565mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৩ দিন' },
  { id: 'med-9', brand: 'Torax 10', generic: 'Ketorolac Tromethamine', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '১+০+১', defaultWhen: 'ভরা পেটে', defaultDuration: '৩ দিন' },
  { id: 'med-10', brand: 'Clofenac 50', generic: 'Diclofenac Sodium', company: 'Square', type: 'Tablet', strength: '50mg', defaultDose: '০+০+১', defaultWhen: 'ভরা পেটে', defaultDuration: '৫ দিন' },

  // Cardiac / Hypertension (BP) / Cholesterol
  { id: 'med-11', brand: 'Bizoran 5/20', generic: 'Amlodipine 5mg + Olmesartan 20mg', company: 'Square', type: 'Tablet', strength: '5/20mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-12', brand: 'Rosuva 10', generic: 'Rosuvastatin', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '০+০+১', defaultWhen: 'রাতে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-13', brand: 'Clopid 75', generic: 'Clopidogrel', company: 'Square', type: 'Tablet', strength: '75mg', defaultDose: '০+১+০', defaultWhen: 'দুপুরে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-14', brand: 'Ecosprin 75', generic: 'Aspirin (Enteric Coated)', company: 'ACME', type: 'Tablet', strength: '75mg', defaultDose: '০+১+০', defaultWhen: 'দুপুরে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-15', brand: 'Nebita 5', generic: 'Nebivolol', company: 'Square', type: 'Tablet', strength: '5mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-16', brand: 'Losartas 50', generic: 'Losartan Potassium', company: 'Beximco', type: 'Tablet', strength: '50mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-17', brand: 'Angilock 50', generic: 'Losartan Potassium', company: 'Square', type: 'Tablet', strength: '50mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-18', brand: 'Cardizem 30', generic: 'Diltiazem HCl', company: 'Square', type: 'Tablet', strength: '30mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '১ মাস' },
  { id: 'med-19', brand: 'Atova 10', generic: 'Atorvastatin', company: 'Beximco', type: 'Tablet', strength: '10mg', defaultDose: '০+০+১', defaultWhen: 'রাতে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-20', brand: 'Nitrocontin 2.6', generic: 'Nitroglycerin Controlled Release', company: 'Square', type: 'Tablet', strength: '2.6mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: 'চলবে' },

  // Respiratory / Asthma / Allergy
  { id: 'med-21', brand: 'Monas 10', generic: 'Montelukast Sodium', company: 'Acme', type: 'Tablet', strength: '10mg', defaultDose: '০+০+১', defaultWhen: 'রাতে ঘুমানোর আগে', defaultDuration: '১ মাস' },
  { id: 'med-22', brand: 'Alatrol 10', generic: 'Cetirizine Dihydrochloride', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '০+০+১', defaultWhen: 'রাতে ঘুমানোর আগে', defaultDuration: '৭ দিন' },
  { id: 'med-23', brand: 'Fexo 120', generic: 'Fexofenadine HCl', company: 'Square', type: 'Tablet', strength: '120mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-24', brand: 'Tofen 1', generic: 'Ketotifen Fumarate', company: 'Beximco', type: 'Tablet', strength: '1mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '১৪ দিন' },
  { id: 'med-25', brand: 'Bexitrol-F 100 Inhaler', generic: 'Fluticasone + Salmeterol', company: 'Beximco', type: 'Inhaler', strength: '100/50mcg', defaultDose: '২ চাপ করে দিনে ২ বার', defaultWhen: 'কুলি করে মুখ ধুয়ে ফেলবেন', defaultDuration: 'চলবে' },

  // Antibiotics
  { id: 'med-26', brand: 'Azith 500', generic: 'Azithromycin', company: 'Square', type: 'Tablet', strength: '500mg', defaultDose: '১+০+০', defaultWhen: 'খাবার ১ ঘণ্টা আগে বা ২ ঘণ্টা পর', defaultDuration: '৫ দিন' },
  { id: 'med-27', brand: 'Cef-3 200', generic: 'Cefixime Trihydrate', company: 'Square', type: 'Capsule', strength: '200mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-28', brand: 'Moxaclav 625', generic: 'Amoxicillin + Clavulanic Acid', company: 'Square', type: 'Tablet', strength: '625mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-29', brand: 'Ciprocin 500', generic: 'Ciprofloxacin', company: 'Square', type: 'Tablet', strength: '500mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-30', brand: 'Zimax 500', generic: 'Azithromycin', company: 'Beximco', type: 'Tablet', strength: '500mg', defaultDose: '১+০+০', defaultWhen: 'খাবার ১ ঘণ্টা আগে', defaultDuration: '৫ দিন' },

  // Diabetes
  { id: 'med-31', brand: 'Metfo 500', generic: 'Metformin HCl', company: 'Beximco', type: 'Tablet', strength: '500mg', defaultDose: '১+০+১', defaultWhen: 'খাবার সাথে বা পর', defaultDuration: 'চলবে' },
  { id: 'med-32', brand: 'Comet 500', generic: 'Metformin HCl', company: 'Square', type: 'Tablet', strength: '500mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-33', brand: 'Glicron 80', generic: 'Gliclazide', company: 'Incepta', type: 'Tablet', strength: '80mg', defaultDose: '১+০+০', defaultWhen: 'সকালের নাস্তার আগে', defaultDuration: 'চলবে' },
  { id: 'med-34', brand: 'Linaglip 5', generic: 'Linagliptin', company: 'Square', type: 'Tablet', strength: '5mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },

  // Vitamins & Supplements / Bone Health
  { id: 'med-35', brand: 'Calbo-D', generic: 'Calcium Carbonate 500mg + Vitamin D3 200IU', company: 'Square', type: 'Tablet', strength: '500mg+200IU', defaultDose: '০+০+১', defaultWhen: 'রাতে খাবার পর', defaultDuration: '১ মাস' },
  { id: 'med-36', brand: 'D-Rise 20000 IU', generic: 'Cholecalciferol (Vitamin D3)', company: 'Square', type: 'Capsule', strength: '20000 IU', defaultDose: 'প্রতি সপ্তাহে ১টি', defaultWhen: 'ভারী খাবারের সাথে', defaultDuration: '৮ সপ্তাহ' },
  { id: 'med-37', brand: 'Filwel Gold', generic: 'Multivitamin & Multimineral', company: 'Square', type: 'Tablet', strength: 'A to Z', defaultDose: '০+১+০', defaultWhen: 'দুপুরে খাবার পর', defaultDuration: '১ মাস' },
  { id: 'med-38', brand: 'Neuro-B', generic: 'Vitamin B1 + B6 + B12', company: 'Square', type: 'Tablet', strength: '100+200+200mcg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '১ মাস' },
  { id: 'med-39', brand: 'Gynaecosid', generic: 'Iron Polymaltose + Folic Acid', company: 'Square', type: 'Capsule', strength: '50mg+0.5mg', defaultDose: '০+০+১', defaultWhen: 'খাবার পর', defaultDuration: '১ মাস' },
  { id: 'med-40', brand: 'Bizoran 5/40', generic: 'Amlodipine 5mg + Olmesartan 40mg', company: 'Square', type: 'Tablet', strength: '5/40mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },

  // Additional Gastric & Digestive Drugs
  { id: 'med-41', brand: 'Finix 20', generic: 'Rabeprazole Sodium', company: 'Opsonin', type: 'Tablet', strength: '20mg', defaultDose: '১+০+১', defaultWhen: 'খাবার ২০ মি. আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-42', brand: 'Deflux 10', generic: 'Domperidone', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '১+১+১', defaultWhen: 'খাবার ১৫ মি. আগে (বমি বমি ভাব/অরুচিতে)', defaultDuration: '৭ দিন' },
  { id: 'med-43', brand: 'Motigut 10', generic: 'Domperidone', company: 'Beximco', type: 'Tablet', strength: '10mg', defaultDose: '১+১+১', defaultWhen: 'খাবার ১৫ মি. আগে', defaultDuration: '৭ দিন' },
  { id: 'med-44', brand: 'Losectil 20', generic: 'Omeprazole', company: 'Eskayef', type: 'Capsule', strength: '20mg', defaultDose: '১+০+১', defaultWhen: 'খাবার ২০ মি. আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-45', brand: 'Colospa 135', generic: 'Mebeverine HCl', company: 'Healthcare', type: 'Tablet', strength: '135mg', defaultDose: '১+০+১', defaultWhen: 'খাবার ২০ মি. আগে (IBS/পেট ব্যথায়)', defaultDuration: '১৪ দিন' },
  { id: 'med-46', brand: 'Rifax 200', generic: 'Rifaximin', company: 'Incepta', type: 'Tablet', strength: '200mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },

  // Additional Pain, Bone, Joint & Muscle Relaxants
  { id: 'med-47', brand: 'Flexi 100', generic: 'Aceclofenac', company: 'Square', type: 'Tablet', strength: '100mg', defaultDose: '১+০+১', defaultWhen: 'ভরা পেটে (ব্যথা থাকলে)', defaultDuration: '৫ দিন' },
  { id: 'med-48', brand: 'Naprosyn 500', generic: 'Naproxen', company: 'Square', type: 'Tablet', strength: '500mg', defaultDose: '১+০+১', defaultWhen: 'ভরা পেটে', defaultDuration: '৫ দিন' },
  { id: 'med-49', brand: 'Coralcal-D', generic: 'Coral Calcium + Vitamin D3', company: 'Radiant', type: 'Tablet', strength: '500mg+200IU', defaultDose: '০+০+১', defaultWhen: 'রাতে খাবার পর', defaultDuration: '১ মাস' },
  { id: 'med-50', brand: 'Anadol 50', generic: 'Tramadol Hydrochloride', company: 'Square', type: 'Capsule', strength: '50mg', defaultDose: '১+০+১', defaultWhen: 'ভরা পেটে (তীব্র ব্যথায়)', defaultDuration: '৩ দিন' },
  { id: 'med-51', brand: 'Myolax 50', generic: 'Tolperisone HCl', company: 'Incepta', type: 'Tablet', strength: '50mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর (পেশির টানে)', defaultDuration: '৭ দিন' },
  { id: 'med-52', brand: 'Flexil 10', generic: 'Baclofen', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-53', brand: 'Arth-A 500', generic: 'Glucosamine Sulfate', company: 'Square', type: 'Tablet', strength: '500mg', defaultDose: '১+১+১', defaultWhen: 'খাবার পর (হাঁটুর ক্ষয়ে)', defaultDuration: '২ মাস' },

  // Additional Cardiovascular & BP Drugs
  { id: 'med-54', brand: 'Osartil 50', generic: 'Losartan Potassium', company: 'Incepta', type: 'Tablet', strength: '50mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-55', brand: 'Amdocal 5', generic: 'Amlodipine Besylate', company: 'Square', type: 'Tablet', strength: '5mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-56', brand: 'Telma 40', generic: 'Telmisartan', company: 'Square', type: 'Tablet', strength: '40mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-57', brand: 'Bisocor 2.5', generic: 'Bisoprolol Fumarate', company: 'Square', type: 'Tablet', strength: '2.5mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-58', brand: 'Cardicor 5', generic: 'Bisoprolol Fumarate', company: 'Beximco', type: 'Tablet', strength: '5mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-59', brand: 'Angimet MR 35', generic: 'Trimetazidine HCl', company: 'Square', type: 'Tablet', strength: '35mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-60', brand: 'Nitromint Sublingual Spray', generic: 'Nitroglycerin', company: 'Egis', type: 'Spray', strength: '0.4mg/dose', defaultDose: '১ চাপ জিহ্বার নিচে', defaultWhen: 'তীব্র বুকে ব্যথা শুরু হলে', defaultDuration: 'প্রয়োজনে' },
  { id: 'med-61', brand: 'Lipicon 10', generic: 'Atorvastatin', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '০+০+১', defaultWhen: 'রাতে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-62', brand: 'Anclog 75', generic: 'Clopidogrel', company: 'Beximco', type: 'Tablet', strength: '75mg', defaultDose: '০+১+০', defaultWhen: 'দুপুরে খাবার পর', defaultDuration: 'চলবে' },

  // Additional Antibiotics
  { id: 'med-63', brand: 'Kilbac 500', generic: 'Cefuroxime Axetil', company: 'Incepta', type: 'Tablet', strength: '500mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-64', brand: 'Cefotax 500', generic: 'Cefuroxime Axetil', company: 'Square', type: 'Tablet', strength: '500mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-65', brand: 'Levoking 500', generic: 'Levofloxacin', company: 'Incepta', type: 'Tablet', strength: '500mg', defaultDose: '১+০+০', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-66', brand: 'Amodis 400', generic: 'Metronidazole', company: 'Square', type: 'Tablet', strength: '400mg', defaultDose: '১+১+১', defaultWhen: 'খাবার পর (আমাশয়/পেট খারাপে)', defaultDuration: '৫ দিন' },
  { id: 'med-67', brand: 'Filmet 400', generic: 'Metronidazole', company: 'Beximco', type: 'Tablet', strength: '400mg', defaultDose: '১+১+১', defaultWhen: 'খাবার পর', defaultDuration: '৫ দিন' },
  { id: 'med-68', brand: 'Fluclox 500', generic: 'Flucloxacillin Sodium', company: 'Square', type: 'Capsule', strength: '500mg', defaultDose: '১+১+১+১', defaultWhen: 'খাবার ৩০ মি. আগে (ফোড়া/ঘা)', defaultDuration: '৭ দিন' },
  { id: 'med-69', brand: 'Doxicap 100', generic: 'Doxycycline', company: 'Square', type: 'Capsule', strength: '100mg', defaultDose: '১+০+১', defaultWhen: 'প্রচুর পানিসহ ভরা পেটে', defaultDuration: '৭ দিন' },

  // Additional Allergy, Cough & Respiratory
  { id: 'med-70', brand: 'Bilatin 20', generic: 'Bilastine', company: 'Square', type: 'Tablet', strength: '20mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খালি পেটে বা খাবারের ১ ঘণ্টা আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-71', brand: 'Bilaxten 20', generic: 'Bilastine', company: 'Radiant', type: 'Tablet', strength: '20mg', defaultDose: '১+০+০', defaultWhen: 'খাবারের ১ ঘণ্টা আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-72', brand: 'Xyzal 5', generic: 'Levocetirizine', company: 'Square', type: 'Tablet', strength: '5mg', defaultDose: '০+০+১', defaultWhen: 'রাতে ঘুমানোর আগে', defaultDuration: '৭ দিন' },
  { id: 'med-73', brand: 'Ventolin Inhaler', generic: 'Salbutamol', company: 'GSK', type: 'Inhaler', strength: '100mcg', defaultDose: '২ চাপ শ্বাসকষ্টের সময়', defaultWhen: 'প্রয়োজনে', defaultDuration: 'চলবে' },
  { id: 'med-74', brand: 'Tusca Syrup', generic: 'Dextromethorphan + Pseudoephedrine', company: 'Square', type: 'Syrup', strength: '100ml', defaultDose: '২ চামচ করে দিনে ৩ বার', defaultWhen: 'খাবার পর (শুকনো কাশিতে)', defaultDuration: '৫ দিন' },
  { id: 'med-75', brand: 'Advascol Syrup', generic: 'Ivy Leaf Extract', company: 'Square', type: 'Syrup', strength: '100ml', defaultDose: '২ চামচ করে দিনে ৩ বার', defaultWhen: 'খাবার পর', defaultDuration: '৭ দিন' },
  { id: 'med-76', brand: 'Antazol 0.1% Nasal Drop', generic: 'Xylometazoline HCl', company: 'Square', type: 'Nasal Drop', strength: '0.1%', defaultDose: '২ ফোঁটা করে দুই নাকে দিনে ৩ বার', defaultWhen: 'নাক বন্ধ থাকলে (সর্বোচ্চ ৫ দিন)', defaultDuration: '৫ দিন' },

  // Additional Diabetes Drugs
  { id: 'med-77', brand: 'Emparol 10', generic: 'Empagliflozin', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-78', brand: 'Jardiance 10', generic: 'Empagliflozin', company: 'Boehringer Ingelheim', type: 'Tablet', strength: '10mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-79', brand: 'Januvia 100', generic: 'Sitagliptin', company: 'MSD', type: 'Tablet', strength: '100mg', defaultDose: '১+০+০', defaultWhen: 'সকালে খাবার পর', defaultDuration: 'চলবে' },
  { id: 'med-80', brand: 'Amaryl 2', generic: 'Glimepiride', company: 'Sanofi', type: 'Tablet', strength: '2mg', defaultDose: '১+০+০', defaultWhen: 'সকালের নাস্তার আগে', defaultDuration: 'চলবে' },
  { id: 'med-81', brand: 'Galvus Met 50/500', generic: 'Vildagliptin 50mg + Metformin 500mg', company: 'Novartis', type: 'Tablet', strength: '50/500mg', defaultDose: '১+০+১', defaultWhen: 'খাবার পর', defaultDuration: 'চলবে' },

  // Neuro, Sleep & Psychiatric
  { id: 'med-82', brand: 'Rivotril 0.5', generic: 'Clonazepam', company: 'Radiant', type: 'Tablet', strength: '0.5mg', defaultDose: '০+০+১/২', defaultWhen: 'রাতে ঘুমানোর আগে (উদ্বেগ/ঘুমে)', defaultDuration: '১৪ দিন' },
  { id: 'med-83', brand: 'Disopan 0.5', generic: 'Clonazepam', company: 'Incepta', type: 'Tablet', strength: '0.5mg', defaultDose: '০+০+১/২', defaultWhen: 'রাতে ঘুমানোর আগে', defaultDuration: '১৪ দিন' },
  { id: 'med-84', brand: 'Prebica 50', generic: 'Pregabalin', company: 'Square', type: 'Capsule', strength: '50mg', defaultDose: '০+০+১', defaultWhen: 'রাতে খাবার পর (স্নায়ু ব্যথায়)', defaultDuration: '১ মাস' },
  { id: 'med-85', brand: 'Sibelium 5', generic: 'Flunarizine', company: 'Janssen', type: 'Tablet', strength: '5mg', defaultDose: '০+০+১', defaultWhen: 'রাতে ঘুমানোর আগে (মাথা ঘোরা/মাইগ্রেন)', defaultDuration: '১ মাস' },
  { id: 'med-86', brand: 'Tryptin 10', generic: 'Amitriptyline', company: 'Square', type: 'Tablet', strength: '10mg', defaultDose: '০+০+১', defaultWhen: 'রাতে ঘুমানোর আগে', defaultDuration: '১ মাস' },

  // Dermatology & Anti-Fungal
  { id: 'med-87', brand: 'Flugal 150', generic: 'Fluconazole', company: 'Square', type: 'Capsule', strength: '150mg', defaultDose: 'প্রতি সপ্তাহে ১টি', defaultWhen: 'খাবার পর (দাউদ/ছত্রাক)', defaultDuration: '৪ সপ্তাহ' },
  { id: 'med-88', brand: 'Tinasil 250', generic: 'Terbinafine', company: 'Square', type: 'Tablet', strength: '250mg', defaultDose: '১+০+০', defaultWhen: 'খাবার পর', defaultDuration: '১৪ দিন' },
  { id: 'med-89', brand: 'Bactrocin Ointment', generic: 'Mupirocin', company: 'Square', type: 'Ointment', strength: '15gm', defaultDose: 'দিনে ২ বার ক্ষতস্থানে লাগাবেন', defaultWhen: 'বাহ্যিক ব্যবহার', defaultDuration: '৭ দিন' },
  { id: 'med-90', brand: 'Dermasol-N Cream', generic: 'Clobetasol + Neomycin + Nystatin', company: 'Square', type: 'Cream', strength: '15gm', defaultDose: 'দিনে ২ বার হালকা করে লাগাবেন', defaultWhen: 'বাহ্যিক ব্যবহার', defaultDuration: '৭ দিন' },

  // Pediatric & Emergency Electrolyte
  { id: 'med-91', brand: 'Babyzinc Syrup', generic: 'Zinc Sulfate Monohydrate', company: 'Square', type: 'Syrup', strength: '100ml', defaultDose: '১ চামচ করে দিনে ১ বার (ডায়রিয়ায়)', defaultWhen: 'খাবার পর', defaultDuration: '১০ দিন' },
  { id: 'med-92', brand: 'SMC ORS Saline', generic: 'Oral Rehydration Salts', company: 'SMC', type: 'Sachet', strength: 'Pack', defaultDose: 'প্রতিবার পাতলা পায়খানার পর আধা গ্লাস', defaultWhen: '৫০০ মিলি বিশুদ্ধ পানিতে গুলে', defaultDuration: 'প্রয়োজনে' }
];

// Quick Dosages Chips
export const dosagePresets = [
  '১+০+১',
  '১+১+১',
  '০+০+১',
  '১+০+০',
  '০+১+০',
  '১+০+০+১',
  '১/২+০+১/২',
  'প্রয়োজনে (SOS)'
];

// Quick When Chips
export const whenPresets = [
  'খাবার ২০ মিনিট আগে',
  'খাবার পর',
  'ভরা পেটে',
  'রাতে ঘুমানোর আগে',
  'সকালে খালি পেটে',
  'খাবারের সাথে'
];

// Quick Duration Chips
export const durationPresets = [
  '৩ দিন',
  '৫ দিন',
  '৭ দিন',
  '১০ দিন',
  '১৪ দিন',
  '১ মাস',
  'চলবে (Continue)'
];

// Common Chief Complaints (C/C)
export const commonComplaints = [
  { en: 'Chest Pain', bn: 'বুকে ব্যথা ও চাপ অনুভব' },
  { en: 'Shortness of Breath', bn: 'শ্বাসকষ্ট বা বুকে দম আটকে আসা' },
  { en: 'Palpitation', bn: 'বুক ধড়ফড় করা' },
  { en: 'High Blood Pressure', bn: 'উচ্চ রক্তচাপজনিত মাথা ভারী' },
  { en: 'Fever & Body Ache', bn: 'জ্বর ও শরীর ব্যথা' },
  { en: 'Dry Cough', bn: 'শুকনো কাশি' },
  { en: 'Gastric & Heartburn', bn: 'বুকের জ্বালাপোড়া ও বদহজম' },
  { en: 'Headache & Dizziness', bn: 'মাথাব্যথা ও মাথা ঘোরা' },
  { en: 'Generalized Weakness', bn: 'অতিরিক্ত শারীরিক দুর্বলতা' },
  { en: 'Abdominal Cramping', bn: 'পেটে তীব্র মোচড় ও ব্যথা' },
  { en: 'Leg Swelling / Edema', bn: 'পা ফোলা বা পানি আসা' }
];

// Common Past & Clinical History (P/H)
export const clinicalHistoryPresets = [
  { label: 'HTN (উচ্চ রক্তচাপ)' },
  { label: 'DM (ডায়াবেটিস মেলাইটাস)' },
  { label: 'IHD (ইসকেমিক হার্ট ডিজিজ)' },
  { label: 'BA / COPD (অ্যাজমা / হাঁপানি)' },
  { label: 'CKD (কিডনি সমস্যা)' },
  { label: 'Hyperlipidemia (উচ্চ কোলেস্টেরল)' },
  { label: 'No Known Drug Allergy (অ্যালার্জি নেই)' },
  { label: 'Smoker (ধূমপায়ী)' },
  { label: 'Ex-Smoker (পূর্বের ধূমপায়ী)' },
  { label: 'Post-PCI / Stenting (রিং পরানো)' },
  { label: 'Previous CABG (বাইপাস সার্জারি)' }
];

// Common Investigations / Lab Tests in Bangladesh
export const commonInvestigations = [
  'ECG (12 Leads)',
  '2D Echocardiogram with Color Doppler',
  'Troponin-I (Quantitative)',
  'Lipid Profile (Fasting)',
  'CBC with ESR',
  'Serum Creatinine',
  'Fasting Blood Sugar (FBS)',
  'Blood Sugar 2 hrs ABF',
  'HbA1c',
  'Serum Electrolytes (Na+, K+, Cl-)',
  'SGPT / ALT',
  'Urine R/M/E',
  'Chest X-Ray (P/A View)',
  'USG of Whole Abdomen',
  'Serum Uric Acid',
  'Thyroid Profile (TSH)',
  'Coronary Angiogram (CAG)',
  'CT Scan of Brain'
];

// Common Doctor Advice Presets
export const advicePresets = [
  'ধূমপান, জর্দা ও তামাক সম্পূর্ণ বর্জন করবেন।',
  'রান্নায় কম তেল ও পাতে কাঁচা লবণ খাওয়া বন্ধ করবেন।',
  'প্রতিদিন অন্তত ৩০-৪০ মিনিট হালকা বা মাঝারি গতিতে হাঁটবেন।',
  'চর্বিজাতীয় খাবার, গরুর মাংস ও খাসির মাংস পরিহার করবেন।',
  'ওজন নিয়ন্ত্রণে রাখুন এবং মানসিক চাপ বা দুশ্চিন্তা মুক্ত থাকুন।',
  'ডায়াবেটিস ও রক্তচাপ নিয়মিত চার্ট করে মেপে রাখবেন।',
  'ভারী কাজ বা অতিরিক্ত পরিশ্রম করা থেকে বিরত থাকবেন।',
  'কোনো ধরনের বুকে ব্যথা বাড়লে দ্রুত ইমার্জেন্সিতে চলে আসবেন।',
  'সকল ওষুধ নিয়মমাফিক সেবন করবেন, নিজে থেকে ওষুধ বন্ধ করবেন না।'
];

// ⚡ 1-Click Complete Disease Prescription Shortcut Templates
export const diseaseTemplates = [
  {
    id: 'tpl-fever',
    title: 'জ্বর ও সর্দি/কাশি',
    titleEn: 'Fever & Flu',
    icon: 'Thermometer',
    color: 'from-amber-500 to-orange-600',
    complaints: ['জ্বর ও শরীর ব্যথা', 'সর্দি ও শুকনো কাশি'],
    history: ['No Known Drug Allergy (অ্যালার্জি নেই)'],
    diagnosis: 'Acute Viral Fever with Upper Respiratory Tract Infection (URI)',
    medicines: [
      {
        brand: 'Napa Extra',
        generic: 'Paracetamol 500mg + Caffeine 65mg',
        type: 'Tablet',
        strength: '565mg',
        dosage: '১+০+১',
        when: 'খাবার পর (জ্বর বা ব্যথায়)',
        duration: '৩ দিন',
        instruction: 'জ্বর ১০১ ডিগ্রির বেশি হলে পানি পট্টি দিন'
      },
      {
        brand: 'Alatrol 10',
        generic: 'Cetirizine Dihydrochloride',
        type: 'Tablet',
        strength: '10mg',
        dosage: '০+০+১',
        when: 'রাতে ঘুমানোর আগে',
        duration: '৭ দিন',
        instruction: 'ঘুম ভাব হতে পারে'
      },
      {
        brand: 'Sergel 20',
        generic: 'Esomeprazole',
        type: 'Tablet',
        strength: '20mg',
        dosage: '১+০+১',
        when: 'খাবার ২০ মি. আগে',
        duration: '৭ দিন',
        instruction: ''
      },
      {
        brand: 'Filwel Gold',
        generic: 'Multivitamin & Multimineral',
        type: 'Tablet',
        strength: 'A to Z',
        dosage: '০+১+০',
        when: 'দুপুরে খাবার পর',
        duration: '১৪ দিন',
        instruction: ''
      }
    ],
    investigations: ['CBC with ESR', 'Urine R/M/E'],
    advices: [
      'প্রচুর পরিমাণে পানি ও তরল খাবার গ্রহণ করবেন।',
      'পর্যাপ্ত বিশ্রাম নিবেন ও কুসুম গরম পানিতে লবণ দিয়ে গার্গল করবেন।',
      '৩ দিনের বেশি জ্বর থাকলে রক্ত পরীক্ষা করিয়ে ডাক্তারের শরণাপন্ন হবেন।'
    ],
    nextFollowUp: '৩ দিন পর (জ্বর না কমলে)'
  },
  {
    id: 'tpl-htn',
    title: 'উচ্চ রক্তচাপ (High BP)',
    titleEn: 'Hypertension',
    icon: 'HeartPulse',
    color: 'from-rose-500 to-red-600',
    complaints: ['উচ্চ রক্তচাপজনিত মাথা ভারী', 'বুক ধড়ফড় করা'],
    history: ['HTN (উচ্চ রক্তচাপ)'],
    diagnosis: 'Essential Hypertension (Stage-II) / High BP',
    medicines: [
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
        instruction: 'কোলেস্টেরল স্বাভাবিক রাখতে'
      },
      {
        brand: 'Ecosprin 75',
        generic: 'Aspirin (Enteric Coated)',
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
    ],
    investigations: [
      'ECG (12 Leads)',
      '2D Echocardiogram with Color Doppler',
      'Lipid Profile (Fasting)',
      'Serum Creatinine'
    ],
    advices: [
      'রান্নায় কম তেল ও পাতে কাঁচা লবণ খাওয়া সম্পূর্ণ বন্ধ করবেন।',
      'প্রতিদিন অন্তত ৩০-৪০ মিনিট মাঝারি গতিতে হাঁটবেন।',
      'রক্তচাপ নিয়মিত মেপে চার্ট করে লিখে রাখবেন।'
    ],
    nextFollowUp: '১৫ দিন পর বিপি চার্ট সহ'
  },
  {
    id: 'tpl-gastric',
    title: 'গ্যাস্ট্রিক ও বুক জ্বালা',
    titleEn: 'Gastritis / PUD',
    icon: 'Flame',
    color: 'from-emerald-500 to-teal-600',
    complaints: ['বুকের জ্বালাপোড়া ও বদহজম', 'পেটে তীব্র মোচড় ও ব্যথা'],
    history: ['No Known Drug Allergy (অ্যালার্জি নেই)'],
    diagnosis: 'Peptic Ulcer Disease (PUD) / Acute Gastritis',
    medicines: [
      {
        brand: 'Sergel 20',
        generic: 'Esomeprazole',
        type: 'Tablet',
        strength: '20mg',
        dosage: '১+০+১',
        when: 'খাবার ২০ মি. আগে',
        duration: '১৪ দিন',
        instruction: 'খালি পেটে সেবন করুন'
      },
      {
        brand: 'Entacyd Plus',
        generic: 'Magaldrate + Simethicone',
        type: 'Suspension',
        strength: '200ml',
        dosage: '২ চামচ করে দিনে ৩ বার',
        when: 'খাবার ১ ঘণ্টা পর',
        duration: '৭ দিন',
        instruction: 'খাওয়ার আগে ভালো করে ঝাঁকিয়ে নিবেন'
      },
      {
        brand: 'Torax 10',
        generic: 'Ketorolac Tromethamine',
        type: 'Tablet',
        strength: '10mg',
        dosage: '১+০+১',
        when: 'ভরা পেটে (তীব্র পেট ব্যথা হলে)',
        duration: '৩ দিন',
        instruction: 'ব্যথা কমে গেলে বন্ধ করবেন'
      }
    ],
    investigations: ['USG of Whole Abdomen', 'Serum Amylase'],
    advices: [
      'সময়মতো খাবার খাবেন এবং খালি পেটে চা/কফি খাওয়া পরিহার করবেন।',
      'অতিরিক্ত তেল-মশলাযুক্ত, ভাজাপোড়া ও বাসি খাবার খাবেন না।',
      'রাতের খাবারের অন্তত ২ ঘণ্টা পর ঘুমাতে যাবেন।'
    ],
    nextFollowUp: '১৪ দিন পর'
  },
  {
    id: 'tpl-cad',
    title: 'বুকে ব্যথা ও হৃদরোগ',
    titleEn: 'Chest Pain / CAD',
    icon: 'Activity',
    color: 'from-red-600 to-rose-700',
    complaints: ['বুকে ব্যথা ও চাপ অনুভব', 'বুক ধড়ফড় করা', 'শ্বাসকষ্ট বা বুকে দম আটকে আসা'],
    history: ['IHD (ইসকেমিক হার্ট ডিজিজ)', 'HTN (উচ্চ রক্তচাপ)', 'Smoker (ধূমপায়ী)'],
    diagnosis: 'Coronary Artery Disease (CAD) / Stable Angina Pectoris',
    medicines: [
      {
        brand: 'Nitrocontin 2.6',
        generic: 'Nitroglycerin Controlled Release',
        type: 'Tablet',
        strength: '2.6mg',
        dosage: '১+০+১',
        when: 'খাবার পর',
        duration: 'চলবে',
        instruction: 'বুকে রক্ত চলাচল স্বাভাবিক রাখতে'
      },
      {
        brand: 'Clopid 75',
        generic: 'Clopidogrel',
        type: 'Tablet',
        strength: '75mg',
        dosage: '০+১+০',
        when: 'দুপুরে খাবার পর',
        duration: 'চলবে',
        instruction: 'রক্ত জমাট বাঁধা প্রতিরোধে'
      },
      {
        brand: 'Ecosprin 75',
        generic: 'Aspirin (Enteric Coated)',
        type: 'Tablet',
        strength: '75mg',
        dosage: '০+১+০',
        when: 'দুপুরে খাবার পর',
        duration: 'চলবে',
        instruction: 'ভরা পেটে খাবেন'
      },
      {
        brand: 'Rosuva 10',
        generic: 'Rosuvastatin',
        type: 'Tablet',
        strength: '10mg',
        dosage: '০+০+১',
        when: 'রাতে খাবার পর',
        duration: 'চলবে',
        instruction: ''
      },
      {
        brand: 'Bizoran 5/20',
        generic: 'Amlodipine 5mg + Olmesartan 20mg',
        type: 'Tablet',
        strength: '5/20mg',
        dosage: '১+০+০',
        when: 'সকালে খাবার পর',
        duration: 'চলবে',
        instruction: ''
      },
      {
        brand: 'Seclo 20',
        generic: 'Omeprazole',
        type: 'Capsule',
        strength: '20mg',
        dosage: '১+০+১',
        when: 'খাবার ২০ মি. আগে',
        duration: 'চলবে',
        instruction: ''
      }
    ],
    investigations: [
      'Coronary Angiogram (CAG)',
      'Troponin-I (Quantitative)',
      'ECG (12 Leads)',
      '2D Echocardiogram with Color Doppler',
      'Lipid Profile (Fasting)'
    ],
    advices: [
      'ধূমপান, জর্দা ও তামাক সম্পূর্ণ বর্জন করবেন।',
      'ভারী ওজন তোলা বা অতিরিক্ত মানসিক চাপ পরিহার করবেন।',
      'হঠাৎ তীব্র বুকে ব্যথা শুরু হলে দেরি না করে দ্রুত হাসপাতালের সিসিইউতে চলে আসবেন।'
    ],
    nextFollowUp: '৭ দিন পর এনজিওগ্রাম/ইকো রিপোর্ট সহ'
  },
  {
    id: 'tpl-dm',
    title: 'ডায়াবেটিস (Type 2 DM)',
    titleEn: 'Diabetes Mellitus',
    icon: 'Activity',
    color: 'from-blue-600 to-indigo-700',
    complaints: ['অতিরিক্ত শারীরিক দুর্বলতা', 'মাথাব্যথা ও মাথা ঘোরা'],
    history: ['DM (ডায়াবেটিস মেলাইটাস)', 'Hyperlipidemia (উচ্চ কোলেস্টেরল)'],
    diagnosis: 'Type-2 Diabetes Mellitus with Dyslipidemia',
    medicines: [
      {
        brand: 'Metfo 500',
        generic: 'Metformin HCl',
        type: 'Tablet',
        strength: '500mg',
        dosage: '১+০+১',
        when: 'খাবার সাথে বা পর',
        duration: 'চলবে',
        instruction: 'নিয়মিত খাবার শেষে সেবন করবেন'
      },
      {
        brand: 'Glicron 80',
        generic: 'Gliclazide',
        type: 'Tablet',
        strength: '80mg',
        dosage: '১+০+০',
        when: 'সকালের নাস্তার আগে',
        duration: 'চলবে',
        instruction: 'নাস্তা বাদ দিলে ওষুধ খাবেন না'
      },
      {
        brand: 'Rosuva 10',
        generic: 'Rosuvastatin',
        type: 'Tablet',
        strength: '10mg',
        dosage: '০+০+১',
        when: 'রাতে খাবার পর',
        duration: 'চলবে',
        instruction: ''
      },
      {
        brand: 'Neuro-B',
        generic: 'Vitamin B1 + B6 + B12',
        type: 'Tablet',
        strength: '100+200+200mcg',
        dosage: '১+০+১',
        when: 'খাবার পর',
        duration: '১ মাস',
        instruction: 'হাত-পায়ের অবশ ভাব কমাতে'
      }
    ],
    investigations: [
      'Fasting Blood Sugar (FBS)',
      'Blood Sugar 2 hrs ABF',
      'HbA1c',
      'Serum Creatinine',
      'Lipid Profile (Fasting)'
    ],
    advices: [
      'চিনি, মিষ্টি, কোমল পানীয় ও মিষ্টিজাতীয় খাবার সম্পূর্ণ বর্জন করবেন।',
      'প্রতিদিন নিয়ম মেনে অন্তত ৪৫ মিনিট হাঁটবেন।',
      'পায়ের যত্ন নিবেন, খালি পায়ে হাঁটা নিষেধ।'
    ],
    nextFollowUp: '১ মাস পর সুগার চার্ট সহ'
  },
  {
    id: 'tpl-asthma',
    title: 'অ্যাজমা ও শ্বাসকষ্ট',
    titleEn: 'Asthma / COPD',
    icon: 'Wind',
    color: 'from-cyan-600 to-blue-700',
    complaints: ['শ্বাসকষ্ট বা বুকে দম আটকে আসা', 'শুকনো কাশি'],
    history: ['BA / COPD (অ্যাজমা / হাঁপানি)'],
    diagnosis: 'Bronchial Asthma (Acute Exacerbation)',
    medicines: [
      {
        brand: 'Bexitrol-F 100 Inhaler',
        generic: 'Fluticasone + Salmeterol',
        type: 'Inhaler',
        strength: '100/50mcg',
        dosage: '২ চাপ করে দিনে ২ বার',
        when: 'কুলি করে মুখ ধুয়ে ফেলবেন',
        duration: 'চলবে',
        instruction: 'ইনহেলার ব্যবহারের নিয়ম মেনে চলুন'
      },
      {
        brand: 'Monas 10',
        generic: 'Montelukast Sodium',
        type: 'Tablet',
        strength: '10mg',
        dosage: '০+০+১',
        when: 'রাতে ঘুমানোর আগে',
        duration: '১ মাস',
        instruction: ''
      },
      {
        brand: 'Fexo 120',
        generic: 'Fexofenadine HCl',
        type: 'Tablet',
        strength: '120mg',
        dosage: '১+০+১',
        when: 'খাবার পর',
        duration: '৭ দিন',
        instruction: ''
      },
      {
        brand: 'Sergel 20',
        generic: 'Esomeprazole',
        type: 'Tablet',
        strength: '20mg',
        dosage: '১+০+১',
        when: 'খাবার ২০ মি. আগে',
        duration: '১৪ দিন',
        instruction: ''
      }
    ],
    investigations: ['Chest X-Ray (P/A View)', 'CBC with ESR'],
    advices: [
      'ধুলাবালি, ঠান্ডা বাতাস ও ফুলের রেণু এড়িয়ে চলুন। বাইরে মাস্ক ব্যবহার করবেন।',
      'গোসল ও পানের জন্য কুসুম গরম পানি ব্যবহার করবেন।',
      'ইনহেলার নেওয়ার পর প্রতিবার পানি দিয়ে কুলি করে মুখ ধুয়ে ফেলবেন।'
    ],
    nextFollowUp: '১৫ দিন পর'
  }
];
