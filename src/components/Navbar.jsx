import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Image as ImageIcon,
  Video as VideoIcon,
  Phone
} from 'lucide-react';

export default function Navbar({ 
  lang, 
  t 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMediaDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectMediaTab = (tab) => {
    window.dispatchEvent(new CustomEvent('set-media-tab', { detail: tab }));
    const el = document.getElementById('media');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMediaDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Title */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-nexus-800 via-nexus-900 to-slate-950 p-2 shadow-sm flex items-center justify-center border border-nexus-600/40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Clinical Cross */}
              <path d="M38 18 h24 v22 h22 v24 h-22 v22 h-24 v-22 h-22 v-24 h22 z" fill="#10b981" />
              {/* Cardiac Heart */}
              <path d="M50 35 C58 24 74 25 80 37 C87 51 68 67 50 82 C32 67 13 51 20 37 C26 25 42 24 50 35 Z" fill="#0284c7" opacity="0.95" />
              <path d="M30 52 L42 52 L46 44 L52 62 L56 48 L60 52 L70 52" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:text-nexus-700 transition-colors">
                NEXUS
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-600">
                Cardiac Hospital
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 line-clamp-1">
              {lang === 'bn' ? 'নেক্সাস কার্ডিয়াক হসপিটাল এন্ড রিসার্চ লিঃ • ময়মনসিংহ' : 'Nexus Cardiac Hospital & Research Ltd., Mymensingh'}
            </span>
          </div>
        </a>

        {/* ONLY THE 4 REQUIRED LINKS (No clutter, No color blocks) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          
          {/* 1. Home */}
          <a
            href="#home"
            className="text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
          >
            {lang === 'bn' ? 'হোম' : 'Home'}
          </a>

          {/* 2. Media (Photo Gallery & Video Gallery dropdown) */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setMediaDropdownOpen(true)}
            onMouseLeave={() => setMediaDropdownOpen(false)}
          >
            <button
              onClick={() => setMediaDropdownOpen(!mediaDropdownOpen)}
              className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors py-2 focus:outline-none"
            >
              <span>{lang === 'bn' ? 'মিডিয়া' : 'Media'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mediaDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
            </button>

            {/* Dropdown Menu */}
            {mediaDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 animate-fadeIn z-50">
                <button
                  onClick={() => handleSelectMediaTab('photo')}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors text-left"
                >
                  <ImageIcon className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ফটোগ্যালারি' : 'Photo Gallery'}</span>
                </button>

                <button
                  onClick={() => handleSelectMediaTab('video')}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors text-left border-t border-slate-100"
                >
                  <VideoIcon className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ভিডিও গ্যালারি' : 'Video Gallery'}</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. Services */}
          <a
            href="#services"
            className="text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
          >
            {lang === 'bn' ? 'সেবাসমূহ' : 'Services'}
          </a>

          {/* 4. Contact Us */}
          <a
            href="#contact"
            className="text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
          >
            {lang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
          </a>

        </nav>

        {/* Right Side: Clean Hotline */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:09611678922"
            className="flex items-center gap-2 text-slate-800 hover:text-emerald-700 transition-colors py-1.5 px-3 rounded-full hover:bg-slate-100"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-black tracking-tight font-mono">
              ০৯৬১১৬৭৮৯২২
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Only the 4 items) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pt-3 pb-6 space-y-1 shadow-xl animate-fadeIn">
          
          {/* 1. Home */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-700 border-b border-slate-50"
          >
            {lang === 'bn' ? 'হোম' : 'Home'}
          </a>

          {/* 2. Media */}
          <div className="border-b border-slate-50 py-1">
            <button
              onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 hover:text-emerald-700"
            >
              <span>{lang === 'bn' ? 'মিডিয়া' : 'Media'}</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileMediaOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileMediaOpen && (
              <div className="pl-4 pb-2 space-y-1.5 pt-1">
                <button
                  onClick={() => handleSelectMediaTab('photo')}
                  className="w-full flex items-center gap-2 py-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 text-left"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ফটোগ্যালারি' : 'Photo Gallery'}</span>
                </button>
                <button
                  onClick={() => handleSelectMediaTab('video')}
                  className="w-full flex items-center gap-2 py-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 text-left"
                >
                  <VideoIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ভিডিও গ্যালারি' : 'Video Gallery'}</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. Services */}
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-700 border-b border-slate-50"
          >
            {lang === 'bn' ? 'সেবাসমূহ' : 'Services'}
          </a>

          {/* 4. Contact Us */}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-700"
          >
            {lang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
          </a>

        </div>
      )}

    </header>
  );
}
