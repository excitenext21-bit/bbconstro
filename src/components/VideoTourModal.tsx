import React, { useState } from 'react';
import { X, Play, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAudit: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({
  isOpen,
  onClose,
  onBookAudit
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#041a4a] border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setIsPlaying(false);
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
          aria-label="Close Tour"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Blueprint Showcase Banner */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
          {isPlaying ? (
            <video
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
              poster="/assets/hero-poster.webp"
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
          ) : (
            <>
              <img
                src="/assets/hero-poster.webp"
                alt="360 HVAC Engineering Tour"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a4a] via-black/40 to-transparent" />

              {/* Centered Play Button & Graphic */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 mb-4 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  aria-label="Start Video Tour"
                >
                  <Play className="w-8 h-8 fill-slate-950 ml-1" />
                </button>
                <span className="text-xs uppercase tracking-widest font-mono text-[#f7985f] font-bold bg-slate-900/90 px-3 py-1 rounded-full mb-2">
                  ENGINEERING WALKTHROUGH
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] max-w-lg">
                  Megaproject Climate Deployments: Magarpatta Towers B5 & B6
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2">
                  Virtual tour through 3,40,000 sq. ft. Daikin VRV installations, basement jet fan airflow, and braze-free Lokring piping.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 sm:p-8 bg-[#041a4a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#f7985f] shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">ISO & ISHRAE Certified Engineering Standards</span>
              <span>Available for on-site architectural audits and MEP consulting across Pune.</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onClose();
                onBookAudit();
              }}
              className="px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span className="font-[300]">Schedule On-Site Audit</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
