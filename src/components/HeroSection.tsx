import React from 'react';
import { ArrowDown, MessageCircle, Star, Sparkles, Coffee, Calendar, ShieldCheck, Sprout, Award, MapPin } from 'lucide-react';
import { HeroCoffeeCanvas } from './3d/HeroCoffeeCanvas';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOrderWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOrderWhatsApp,
}) => {
  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Headline, Subtext, CTAs, Mini Key Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Top Editorial Kicker */}
            <div className="flex items-center gap-2.5 mb-5 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC] animate-pulse" />
              <span className="text-[11px] font-tech font-bold uppercase tracking-[0.25em] text-[#263238]/80">
                100% Organic · Farm-to-Cup · Eastern Ghats to Mumbai
              </span>
            </div>

            {/* Bold Hero Heading */}
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#263238] leading-[1.06] mb-6 text-balance">
              ARAKU COFFEE — BANDRA
            </h1>

            {/* Editorial Descriptive Subtext */}
            <p className="font-sans-body text-base sm:text-lg text-[#263238]/85 leading-relaxed mb-8 max-w-xl">
              From the biodynamic red soils of the Eastern Ghats to Mumbai’s most iconic coastal neighborhood. Discover our{' '}
              <span className="font-editorial italic font-normal text-[#263238]">100% regenerative organic, single-origin Arabica</span>,
              cultivated by a 3-million-farmer tribal community and poured across minimalist oak and Modbar counters in Bandra West.
            </p>

            {/* Two Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Explore Menu (solid mint #8FB4AC with smooth hover elevation) */}
              <button
                onClick={onExploreMenu}
                className="btn-tactile px-8 py-4 rounded-2xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] font-headline font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer border border-[#8FB4AC]"
              >
                <span>Explore Menu &amp; Retail</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              {/* Order via WhatsApp (charcoal outline) */}
              <button
                onClick={onOrderWhatsApp}
                className="btn-tactile px-8 py-4 rounded-2xl bg-white/40 hover:bg-[#263238] text-[#263238] hover:text-white font-headline font-bold text-sm uppercase tracking-wider transition-all duration-300 border-2 border-[#263238] flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#8FB4AC]" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Mini Key Stats with organic borders and soft ambient shadows */}
            <div className="grid grid-cols-3 gap-3.5 pt-6 border-t border-[#D7CCC8]/80">
              {/* 3M+ Farmers & Trees */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-[0_10px_30px_rgba(38,50,56,0.04)] hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 text-[#263238] mb-1">
                  <Sprout className="w-4 h-4 text-[#8FB4AC]" />
                  <span className="font-headline text-lg font-black text-[#263238]">3M+</span>
                </div>
                <div className="text-xs font-headline font-bold text-[#263238]">Tribal Farmers</div>
                <div className="text-[11px] text-[#263238]/60 font-sans-body">#Arakunomics Model</div>
              </div>

              {/* 100% Organic */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-[0_10px_30px_rgba(38,50,56,0.04)] hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 text-[#263238] mb-1">
                  <Coffee className="w-4 h-4 text-[#8FB4AC]" />
                  <span className="font-headline text-lg font-black text-[#263238]">100%</span>
                </div>
                <div className="text-xs font-headline font-bold text-[#263238]">Single-Origin</div>
                <div className="text-[11px] text-[#263238]/60 font-sans-body">Regenerative Arabica</div>
              </div>

              {/* 88+ SCA Paris Gold */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-[0_10px_30px_rgba(38,50,56,0.04)] hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 text-[#263238] mb-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-headline text-lg font-black text-[#263238]">88+</span>
                </div>
                <div className="text-xs font-headline font-bold text-[#263238]">SCA Cupping Score</div>
                <div className="text-[11px] text-[#263238]/60 font-sans-body">Paris Gold Winner</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Three.js canvas with coffee cup, saucer, latte art, rising steam */}
          <div className="lg:col-span-6 relative">
            <HeroCoffeeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
