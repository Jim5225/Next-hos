---
name: nexus-hospital
description: >-
  Build world-class hospital and medical clinic web applications following the Nexus Cardiac Hospital design system and architecture. Trigger when the user asks to build a hospital website like Nexus, create a medical portal, doctor serial appointment system, diagnostic test pricing catalog, or patient lab report lookup platform.
---

# Nexus Hospital Web Application — Developer & Design Skill

## Overview
This skill provides the complete design system, UI/UX architecture, component hierarchy, and backend integration patterns established for **Nexus Cardiac Hospital & Research Ltd.** Use this blueprint whenever building or modifying hospital, clinic, diagnostic center, or healthcare web applications.

---

## 🎨 Design System & Color Palette

World-class, trustworthy clinical aesthetic with high contrast and zero visual clutter.

### Primary Colors & Solid Button System
- **Navy Blue (Deep Clinical Authority & Trust):** `#0f2942` (`bg-[#0f2942] hover:bg-[#1a3b5c]`), `#0a2540` (`bg-[#0a2540] hover:bg-[#123860]`)
- **Clinical Emerald Green (Health, Action & Precision):** `#059669` (`bg-emerald-600 hover:bg-emerald-700`), `#047857` (`bg-emerald-700`)
- **Pure Medical White & Clean Slates:** `#ffffff`, `#f8fafc` (`bg-slate-50`), `#f1f5f9` (`bg-slate-100`)
- **Text & Structure:** `#0f172a` (`text-slate-900`), `#334155` (`text-slate-700`), `#64748b` (`text-slate-500`)

### 🚫 Strict Button Design Rules (Mandatory)
- **One Solid Color per Button:** Buttons MUST NEVER have multi-color gradients (no `bg-gradient-to-r`). Every button is strictly **ONE SOLID COLOR** — either **Navy Blue** (`#0f2942`) or **Emerald Green** (`bg-emerald-600`).
- **Button Font Color:** Button text font is strictly **WHITE** (`text-white font-black` or `font-bold`).
- **Other Page Fonts:** Headers, subtitles, cards, and body text remain standard clean slate/dark fonts (`text-slate-900`, `text-slate-700`, `text-slate-600`).
- **Header & Action Button Hierarchy (Always follow this order):**
  1. `[এআই দিয়ে ডাক্তার সিলেক্ট করুন]` (AI Doctor Finder) ➔ **Solid Navy Blue (`bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black`)**
  2. `[টেস্ট প্রাইজ]` (Test Price Catalog) ➔ **Solid Navy Blue (`bg-[#0f2942] hover:bg-[#1a3b5c] text-white font-black`)**
  3. `[ডাক্তার সিরিয়াল দিন]` (Doctor Appointment / Serial) ➔ **Solid Clinical Green (`bg-emerald-600 hover:bg-emerald-700 text-white font-black`)**
  4. `[অনলাইন রিপোর্ট ডাউনলোড]` (Report Download) ➔ **Solid Clinical Green (`bg-emerald-600 hover:bg-emerald-700 text-white font-black`) placed immediately beside Doctor Serial**

---

## 🏗️ Core Architecture & Essential Modules

Every Nexus-style hospital application must contain these 6 foundational modules:

### 1. Smart AI Doctor Finder (লক্ষণ অনুযায়ী ডাক্তার খোঁজা)
- Modal or interactive drawer allowing patients to describe their symptoms in Bengali or English.
- Instant matching algorithm that maps complaints (e.g., বুকে ব্যথা, শ্বাসকষ্ট, পেট ফাঁপা, জয়েন্টে ব্যথা) to the exact medical department (Cardiology, Pulmonology, Gastroenterology, Orthopedics) and suggests available specialist doctors.

### 2. Instant Doctor Serial & Booking (ডাক্তার সিরিয়াল)
- Step-by-step booking modal:
  1. Department selection
  2. Doctor profile & schedule selection
  3. Patient details: Name, Mobile Phone Number, Age, Gender
  4. Instant confirmation with a unique Appointment Serial Token.

### 3. Diagnostic Test Price Search (ল্যাব ও টেস্টের খরচ)
- Live search bar with instant autocomplete.
- Filter chips: All, Blood/Pathology, Radiology/X-Ray, Cardiology (ECG/Echo/ETT), USG, Endoscopy.
- Clear breakdown of: Test Name, Department, Price in BDT, Sample collection instructions, Delivery turnaround time.

### 4. Secure Patient Lab Report Portal (অনলাইন রিপোর্ট ডাউনলোড)
- **Patient Authentication:**
  - **User ID / UID:** Test billing receipt ID (e.g., `NEX-10021`).
  - **Password:** Registered mobile phone number provided during billing (e.g., `01711234567`).
- **Dynamic Status Lifecycle:**
  - `Ready (প্রস্তুত)`: Verified badge, findings table, consultant sign-off, and one-click PDF download & print.
  - `Processing (প্রসেসিং চলছে)`: Animated progress bar (e.g., 80%), consultant review note, estimated completion time, automated SMS notice.
  - `Pending (পেন্ডিং)`: Sample queued notice, estimated delivery date.
- **Non-Destructive Read-Only Architecture:**
  - Web users have ZERO direct access or write permissions to the hospital core database.
  - Queries are dispatched through an encrypted read-only bridge with query caching.

### 5. 24/7 Emergency & Hotline Quick Bar
- Top alert banner and floating quick-action buttons for:
  - 24/7 Emergency Medical Officer
  - Cardiac ICU / CCU Hotline
  - Ambulance Service
  - Pharmacy Desk
- Direct `tel:+880...` trigger on mobile devices.

### 6. Specialists Directory & Detailed Schedule
- Card-based layout with Doctor's photo/avatar, designation, degrees (MBBS, FCPS, MD, FRCP), hospital unit, OPD visiting days, and visiting hours.

---

## 🔒 Hospital Database Integration Patterns (Dagor™ / Hospital ERP)

When integrating with hospital management software (e.g., Dagor™ Health Care Solution, MySQL, or MS SQL Server):

1. **Safety First (Zero-Lock / Read-Only):**
   - Always use `WITH (NOLOCK)` on MS SQL Server or `SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED` on MySQL to prevent table locking during peak hospital hours.
   - Never run `INSERT`, `UPDATE`, or `DELETE` on the hospital's production billing or patient tables.
2. **Local Python Bridge (`scripts/nexus_sync_bridge.py`):**
   - Run a lightweight Python background service on the hospital local network (e.g., `192.168.15.220`).
   - Polls or listens for newly approved lab reports and pushes notification tokens.
3. **Automated Patient SMS Integration:**
   - Integrate local Bangladesh SMS gateways (Greenweb, SSL Wireless, Elitbuzz).
   - Trigger SMS when a diagnostic test status is marked as "Approved / Ready" in the hospital ERP:
     *Template:* `"Nexus Hospital: Dear Patient, your test report (ID: {TOKEN}) is ready. Download now from: https://nexushospitalmymensingh.com/reports"`

---

## 💻 Tech Stack & Deployment Standard
- **Framework:** React + TypeScript (Vite) / Next.js
- **Styling:** Tailwind CSS with Lucide React Icons
- **Deployment:** Vercel Global Edge Network or Hostinger `public_html` static export (`dist/`)
- **DNS / Domain:** Connect official hospital domain via A-Record (`@ -> 76.76.21.21`) and CNAME (`www -> cname.vercel-dns.com`) with automatic lifetime SSL.
