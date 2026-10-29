import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Video, 
  Mic, 
  Image, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  Radio,
  FileAudio
} from 'lucide-react';
import { mediaData } from '../data/mediaData';

export default function MediaGallerySection({ lang, t }) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'audio' | 'photo'
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  // Audio playback state
  const [playingAudioId, setPlayingAudioId] = useState(null);

  useEffect(() => {
    const handleSetTab = (e) => {
      if (e.detail && ['video', 'audio', 'photo'].includes(e.detail)) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener('set-media-tab', handleSetTab);
    return () => window.removeEventListener('set-media-tab', handleSetTab);
  }, []);

  const toggleAudioPlay = (id) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <section id="media" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black tracking-wide uppercase border border-emerald-200 shadow-xs">
            <Radio className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
            <span>{lang === 'bn' ? 'নেক্সাস মিডিয়া হাব' : 'Nexus Media Hub'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            {lang === 'bn' ? 'ভিডিও, অডিও ও ফটোগ্যালারি' : 'Video, Audio & Photo Gallery'}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            {lang === 'bn' 
              ? 'নেক্সাস হাসপাতালের আধুনিক সুযোগ-সুবিধা, বিশেষজ্ঞ ডাক্তারদের স্বাস্থ্যপরামর্শ এবং হাসপাতালের প্রামাণ্যচিত্র।'
              : 'Explore modern facilities, doctor advice podcasts, and authentic documentary highlights of Nexus Hospital.'}
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1 mt-4">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'video'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Video className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'ভিডিও গ্যালারি' : 'Video Gallery'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                {mediaData.videos.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('audio')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'audio'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Mic className="w-4 h-4 text-white" />
              <span>{lang === 'bn' ? 'অডিও গ্যালারি' : 'Audio Gallery'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                {mediaData.audios.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('photo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'photo'
                  ? 'bg-[#0f2942] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Image className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'ফটোগ্যালারি' : 'Photo Gallery'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                {mediaData.photos.length}
              </span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 1. VIDEO GALLERY TAB */}
        {/* ============================================================== */}
        {activeTab === 'video' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaData.videos.map((vid) => (
                <div 
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                      alt={vid.titleBn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-black tracking-wider">
                      {vid.duration}
                    </span>

                    {/* Category */}
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#0f2942]/90 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                      {lang === 'bn' ? vid.categoryBn : vid.categoryEn}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {lang === 'bn' ? vid.titleBn : vid.titleEn}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {lang === 'bn' ? vid.descBn : vid.descEn}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                      <span>{lang === 'bn' ? 'ভিডিও দেখুন' : 'Watch Video'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note box for new video updates */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-3 text-xs text-emerald-900">
              <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                {lang === 'bn'
                  ? '✨ আপনি যখনই হাসপাতালের নতুন ভিডিও বা ইউটিউব লিংক প্রদান করবেন, সাথে সাথে এই গ্যালারিতে আপডেট করে দেওয়া হবে।'
                  : '✨ New official hospital video feeds and YouTube releases can be integrated into this section instantly.'}
              </span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 2. AUDIO GALLERY TAB */}
        {/* ============================================================== */}
        {activeTab === 'audio' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {mediaData.audios.map((aud) => {
                const isPlaying = playingAudioId === aud.id;
                return (
                  <div 
                    key={aud.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* Play/Pause Circle Button */}
                      <button
                        onClick={() => toggleAudioPlay(aud.id)}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md transition-all active:scale-95 ${
                          isPlaying 
                            ? 'bg-emerald-600 text-white animate-pulse' 
                            : 'bg-[#0f2942] text-white hover:bg-emerald-600'
                        }`}
                        title={isPlaying ? "Pause Audio" : "Play Audio"}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 ml-0.5 fill-current" />
                        )}
                      </button>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {lang === 'bn' ? aud.categoryBn : aud.categoryEn}
                          </span>
                          <span className="text-[11px] text-slate-400 font-bold">
                            {aud.duration}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                          {lang === 'bn' ? aud.titleBn : aud.titleEn}
                        </h3>

                        <p className="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{lang === 'bn' ? aud.speakerBn : aud.speakerEn}</span>
                        </p>
                      </div>
                    </div>

                    {/* Audio Waveform Simulator */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-emerald-600' : 'text-slate-400'}`} />
                      <div className="flex-1 flex items-center gap-1 h-6">
                        {[40, 70, 30, 90, 60, 100, 45, 80, 50, 85, 35, 95, 65, 40, 75, 55, 90, 45, 70, 30].map((h, i) => (
                          <span 
                            key={i} 
                            style={{ height: isPlaying ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '20%' }}
                            className={`w-1 rounded-full transition-all duration-300 ${
                              isPlaying ? 'bg-emerald-500' : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-slate-500">
                        {isPlaying ? 'চলছে...' : 'প্রস্তুত'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note box for new audio uploads */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-3 text-xs text-emerald-900">
              <FileAudio className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                {lang === 'bn'
                  ? '🎙️ অডিও গ্যালারি সম্পূর্ণ প্রস্তুত রাখা হয়েছে—আপনার নতুন অডিও/পডকাস্ট ফাইল পেলেই এখানে স্বয়ংক্রিয়ভাবে যুক্ত করে দেওয়া যাবে।'
                  : '🎙️ The audio gallery is ready to host your custom audio files, health podcasts, and voice advice.'}
              </span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 3. PHOTO GALLERY TAB */}
        {/* ============================================================== */}
        {activeTab === 'photo' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaData.photos.map((photo) => (
                <div 
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                    <img 
                      src={photo.imageUrl}
                      alt={photo.titleBn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-[#0f2942]/90 text-emerald-300 text-[10px] font-extrabold border border-emerald-400/30">
                      {photo.categoryBn}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-xs font-bold leading-snug drop-shadow-md">
                        {lang === 'bn' ? photo.titleBn : photo.titleEn}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border-t border-slate-100">
                    <p className="font-extrabold text-xs text-slate-800 line-clamp-1">
                      {lang === 'bn' ? photo.titleBn : photo.titleEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <h3 className="font-extrabold text-sm sm:text-base line-clamp-1">
                {lang === 'bn' ? selectedVideo.titleBn : selectedVideo.titleEn}
              </h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.titleBn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Photo Modal Zoom */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-2" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedPhoto.imageUrl} 
              alt={selectedPhoto.titleBn} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-3 text-white text-center font-bold text-sm">
              {lang === 'bn' ? selectedPhoto.titleBn : selectedPhoto.titleEn}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
