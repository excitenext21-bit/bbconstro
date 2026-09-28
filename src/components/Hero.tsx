import React, { useRef, useState, useEffect } from 'react';
import { LongTailArrowRight } from './LongTailArrow';

interface HeroProps {
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc') => void;
  onExploreServices: () => void;
}

const PlayIcon = ({ className = 'w-6 h-6 sm:w-7 sm:h-7' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

const PauseIcon = ({ className = 'w-6 h-6 sm:w-7 sm:h-7' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreServices
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  // Lazy-load the heavy background video after initial paint and when idle
  // This allows the high-res preloaded WebP poster to render immediately (instant LCP < 1s)
  // and eliminates the 20.5 MB blocking payload from the critical network path
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const startVideo = () => {
      setVideoSrc('/assets/hero-video.mp4');
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(startVideo, { timeout: 2000 });
      return () => (window as any).cancelIdleCallback(handle);
    } else {
      timer = setTimeout(startVideo, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (!videoSrc) {
      setVideoSrc('/assets/hero-video.mp4');
      return;
    }
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section data-no-reveal className="relative w-full bg-[#00153f] pt-2 pb-8 sm:pb-12 overflow-hidden">
      
      {/* Background Transition at Bottom: Same color as StatsBar section #dce3ea appearing right below the hero card and covering bottom rounded corners */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-[#dce3ea] z-0 pointer-events-none" />

      {/* Hero Outer Wrapper with side margins matching screenshot */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        
        {/* The Hero Card Container with Chamfered Top-Right Corner */}
        <div
          className="hero-animate-card relative hero-card-chamfer overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[760px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 bg-slate-900 border border-slate-700/40"
        >
          
          {/* Architectural Luxury Background Video from Pexels */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              preload="none"
              poster="/assets/hero-poster.webp"
              width={1600}
              height={900}
              className="w-full h-full object-cover object-center"
            >
              {videoSrc && <source src={videoSrc} type="video/mp4" />}
            </video>
            {/* Subtle Vignette Gradients to maintain crisp text contrast identical to screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Top Decorative Dot in Chamfer Cut Corner (visible in screenshot top-right) */}
          <div
            className="absolute top-4 right-4 z-20 hidden md:flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#00194d] border border-[#0a296b] shadow-inner" />
          </div>

          {/* Center Main Hero Grid: Left Typography + Right Concentric Play/Pause Button */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6 sm:py-10">
            
            {/* Left Content Column matching exact layout & typography from screenshot */}
            <div className="lg:col-span-8 max-w-2xl">
              <h1
                className="hero-animate-title text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[61px] font-light text-white leading-[1.08] tracking-tight font-['Outfit']"
              >
                Elevate Lifestyle <br />
                Luxury Meets Comfort
              </h1>

              <p
                className="hero-animate-desc mt-6 text-sm sm:text-base lg:text-[17px] text-white/95 font-normal leading-relaxed max-w-xl drop-shadow-sm"
              >
                Bringing together a team with passion, dedication, and resources to help our clients reach their climate and comfort goals. We are with you every step of the way with 24/7 rapid emergency repair and turnkey engineering.
              </p>

              {/* Button: without bg, white 1px border, radius 3px, font-weight 300 */}
              <div
                className="hero-animate-btn mt-8 flex items-center gap-4"
              >
                <button
                  id="hero-explore-btn"
                  onClick={onExploreServices}
                  className="px-7 py-3.5 sm:py-4 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-sm sm:text-base tracking-wide transition-all shadow-md flex items-center gap-2.5 active:scale-95 group cursor-pointer backdrop-blur-xs"
                >
                  <span className="font-[300]">Explore Services</span>
                  <LongTailArrowRight className="w-6 h-3 stroke-[1] group-hover:translate-x-1.5 transition-transform" strokeWidth={1} />
                </button>
              </div>
            </div>

            {/* Right: Concentric Circular Video Play/Pause Button */}
            <div
              className="hero-animate-play lg:col-span-4 flex justify-center lg:justify-center"
            >
              <button
                onClick={togglePlayPause}
                className="group relative flex items-center justify-center cursor-pointer select-none focus:outline-none"
                aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
                title={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {/* Outer Translucent Ring */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/10 backdrop-blur-[2px] border border-white/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Inner Frosted Glass Play/Pause Circle */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                    {isPlaying ? (
                      <PauseIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white group-hover:scale-110 transition-transform" />
                    ) : (
                      <PlayIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-1 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                </div>
              </button>
            </div>

          </div>

          {/* Bottom Area: Faint Watermark on Left + 3 Carousel Indicators on Right */}
          <div
            className="hero-animate-bottom relative z-10 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 pt-4"
          >
            
            {/* Faint Watermark Text across bottom-left deck matching screenshot */}
            <div className="select-none pointer-events-none text-white/[0.07] font-black text-4xl sm:text-6xl lg:text-7xl font-['Outfit'] tracking-widest leading-none">
              B&B CONSTRO
            </div>

            {/* 3 Horizontal Carousel Indicators matching screenshot */}
            <div className="flex items-center gap-3">
              <div className="w-14 sm:w-16 h-0.5 bg-white/40 rounded-full" />
              <div className="w-14 sm:w-16 h-0.5 bg-white/40 rounded-full" />
              <div className="w-14 sm:w-16 h-0.5 bg-[#f7985f] rounded-full shadow-sm" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

